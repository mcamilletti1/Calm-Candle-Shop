import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

declare var paypal: any;

@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements AfterViewInit {
  @Input()
  order!: Order;

  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngAfterViewInit(): void {
    this.loadPayPalScript().then(() => {
      paypal
        .Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: this.order.totalPrice,
                  },
                },
              ],
            });
          },

          onApprove: async (data: any, actions: any) => {
            const payment = await actions.order.capture();
            this.order.paymentId = payment.id;
            this.orderService.pay(this.order).subscribe({
              next: (orderId) => {
                this.cartService.clearCart();
                this.router.navigateByUrl('/track/' + orderId);
                this.toastrService.success('Payment Saved Successfully', 'Success');
              },
              error: (error) => {
                this.toastrService.error('Payment Save Failed', 'Error');
              },
            });
          },

          onError: (err: any) => {
            this.toastrService.error('Payment Failed', 'Error');
            console.log(err);
          },
        })
        .render(this.paypalElement.nativeElement);
    });
  }

  private loadPayPalScript(): Promise<void> {
    return new Promise((resolve) => {
      const scriptElement = document.createElement('script');
      scriptElement.src =
        'https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID';
      scriptElement.onload = (event: Event) => resolve;
      document.body.appendChild(scriptElement);
    });
  }
}