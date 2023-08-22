import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  order:Order = new Order();

  paymentHandler:any = null

  ngOnInit() {
    this.invokeStripe()
  }
  makePayment(amount:number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
      locale: 'auto',
      token: function(stripeToken: any) {
        console.log(stripeToken)
      }
    })


    paymentHandler.open({
      name: 'Calm Candle Shop',
      description: 'Payment for items in cart',
      amount: amount * 100
    })
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script')
      script.id = 'stripe-script'
      script.type = 'text/javascript'
      window.document.head.appendChild(script)
      script.src = 'https://checkout.stripe.com/checkout.js'
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
          }
        })
      }
    }
  }
  constructor(orderService: OrderService, router: Router) {

    orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) => {
        this.order = order;
      },
      error: () => {
        router.navigateByUrl('/checkout');
      }
    })
   }

}


