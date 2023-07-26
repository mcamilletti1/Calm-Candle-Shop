import { Candle } from './app/shared/models/Candle';
import { Tag } from './app/shared/models/Tag';
import { Review } from './app/shared/models/Review';

export const candles: Candle[] = [
    {
        id: '1',
        name: 'Autumn Daydream',
        price: 31,
        favorite: false,
        stars: 5,
        imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/tbt/OUPR73CMB5EM7IJNWUBXTKOMXY.jpeg',
        tags: ['autumn', 'fresh and clean'],
        scents: ['clove', 'lavender', 'basalm', 'clary sage', 'persimmon', 'rhubarb', 'lavender', 'geranium', 'eucalyptus woods', 'basalm'],
        reviews: ['0', '1', '2'], 
        description: 'Spend the perfect autumn day strolling tree-lined streets with the scents of clove, lavender, balsam, and eucalyptus woods.'
    },
    {
        id: '2',
        name: 'Evening Riverwalk',
        price: 31,
        favorite: false,
        stars: 4.8,
        imageUrl: 'https://voltavienna.com/wp-content/uploads/2022/11/Volta_Provider-Store_River-Candle_Hikari2-1024x1412.jpg',
        tags: ['autumn', 'woody'],
        scents: ['cardamom', 'black vanilla', 'smoked oud', 'bergamot', 'red cedar', 'birch bark', 'amber', 'suede', 'burnished leather', 'mahogany wood'],
        reviews: ['3', '4', '5'],
        description: 'Feel the cool autumn breeze on a twilight walk along the river, with the scents of cardamom, black vanilla, and smoked oud.'
    },
    {
        id: '3',
        name: 'Pumpkin Maple Creme Caramel',
        price: 31,
        favorite: false,
        stars: 5,
        imageUrl: 'https://acultivatednest.com/wp-content/uploads/2016/09/diy-pumpkin-spice-soy-candle-lit.jpg',
        tags: ['autumn', 'sweet & spicy'],
        scents: ['cinnamon sugar', 'brown butter', 'spiced pumpkin', 'maple glaze', 'glazed icing', 'caramel', 'spiced croissant dough', 'pumpkin', 'vanilla icing', 'maple'],
        reviews: ['6', '7', '8'],
        description: 'Enjoy the fragrance of this creamy, delicious treat, with cinnamon sugar, brown butter, spiced pumpkin, and maple glaze.'
    },
    {
        id: '4',
        name: 'Spicy Sangria',
        price: 31,
        favorite: false,
        stars: 4.8,
        imageUrl: 'https://i.etsystatic.com/31522027/r/il/1da297/4748293705/il_fullxfull.4748293705_3814.jpg',
        tags: ['autumn', 'fruity'],
        scents: ['mulled apple', 'pear', 'cider spices', 'orange', 'peppercorn', 'cinnamon sugar', 'apple brandy', 'vanilla bean', 'cedar'],
        reviews: ['9', '10', '11'],
        description: 'Gather family and friends for a toast to autumn with the fragrance of sangria, scented with notes of mulled apple, fresh pear, and cider spices.'
    },
    {
        id: '5',
        name: 'Sage & Citrus',
        price: 34,
        favorite: false,
        stars: 4.7,
        imageUrl: 'https://post.healthline.com/wp-content/uploads/2020/03/burning-candle-matchbook-732x549-thumbnail-732x549.jpg',
        tags: ['summer', 'citrus'],
        scents: ['sage', 'lemon', 'lime', 'talc', 'lavender', 'geranium', 'patchouli'],
        reviews: ['12', '13', '14'],
        description: 'This blend of earthy sage, luxurious talc, and lemon-lime creates a natural harmony. '
    },
    {
        id: '6',
        name: 'Seaside Woods',
        price: 13.25,
        favorite: false,
        stars: 4.6,
        imageUrl: 'https://poetbotanicals.co.nz/cdn/shop/products/BOHOSTOCKPHOTO-1_d4315984-310e-44d4-8947-ea222e7d34a7_grande.jpg?v=1649241883',
        tags: ['summer', 'woody'],
        scents: ['citrus', 'floral', 'driftwood'],
        reviews: ['15', '16', '17'],
        description: 'Surround yourself in cozy intrigue — driftwood mingles with brilliant citrus and floral notes for the perfect coastal escape.'
    },
    {
        id: '7',
        name: 'Red Apple Wreath',
        price: 12,
        favorite: false,
        stars: 4.6,
        imageUrl: 'https://www.lifenreflection.com/wp-content/uploads/2017/06/INSTA-_apple-candles-11.jpg',
        tags: ['winter', 'fruity'],
        scents: ['cinnamon leaf', 'golden apples', 'clove', 'apple peel', 'cracked walnuts', 'brown sugar', 'vanilla', 'amber', 'melted butter', 'maple syrup'],
        reviews: ['18', '19', '20'],
        description: 'A happy holiday homecoming with the festive aroma of sweet apples, cinnamon, walnuts, and maple. '
    },
    {
        id: '8',
        name: 'Sicilian Lemon',
        price: 13,
        favorite: false,
        stars: 4.8,
        imageUrl: 'https://dartez.in/wp-content/uploads/2021/09/DCE54-3.jpeg',
        tags: ['spring', 'citrus'],
        scents: ['lemon zest', 'tart lemon', 'vanilla', 'sugar'],
        reviews: ['21', '22', '23'],
        description: 'So fresh and full of zest, like a bright day exploring hillside villages with sweet unexpected turns.'
    },
    {
        id: '9',
        name: 'Lemon Lavender',
        price: 34,
        favorite: false,
        stars: 4.8,
        imageUrl: 'https://craftsbyamanda.com/wp-content/uploads/2021/04/DIY-lavender-candles-V1-1100x1650.jpg',
        tags: ['spring', 'citrus'],
        scents: ['tangerine', 'lemon', 'lavender', 'orange', 'vanilla'],
        reviews: ['24', '25', '26'],
        description: 'Clean and inviting...a powdery fresh blend of tangy lemon citrus and sweet lavender flowers. '
    },
    {
        id: '10',
        name: 'Fresh cut roses',
        price: 16,
        favorite: false,
        stars: 4.7,
        imageUrl: 'https://www.thegrowingcandle.com/cdn/shop/products/Adelyn.jpg?v=1686949525',
        tags: ['spring', 'summer', 'floral'],
        scents: ['rose', 'apple', 'citrus', 'geranium', 'musk'],
        reviews: ['27', '28', '29'],
        description: 'An intoxicating English garden of fragrant heirloom roses. '
    }
]

export const tags: Tag[] = [
   {name: 'spring', count: 3 },
   {name: 'summer', count: 3},
   {name: 'autumn', count: 4},
   {name: 'winter', count: 1},
   {name: 'fruity', count: 2},
   {name: 'floral', count: 1},
   {name: 'fresh and clean', count: 1},
   {name: 'sweet & spicy', count: 1},
   {name: 'citrus', count: 3},
   {name: 'woody', count: 1}
]

export const reviews: Review[] = [
    {
        id: '0',
        name: 'Mimi Marquez',
        title: 'Wonderful',
        rating: 5,
        comment: 'Omg!!!! Love this candle very much and will try more of this brand. The cinnamon and leafy smell is so pleasant and warm. Without burning it and opening up the lid you can smell and while you light it and it burns, you can smell it from across the room and it lasts a long time.'
    },
    {
        id: '1',
        name: 'Mike Alexander',
        title: 'Amazing',
        rating: 5,
        comment: "This candle doesn't need to be lit to have the fragrance permeate the area it's in. While I've had several that were like this it's not overpowering as some of them are. I love this one down in my office and cannot wait for fall when it feels more appropriate to use this scent."
    },
    {
        id: '2',
        name: 'Vannah Bloom',
        title: 'Smells like the holidays',
        rating: 5,
        comment: "This honestly smells like the holidays and it’s one of my favorite candles. I love how big it is and probably how long lasting it’s gonna be. Even though it’s summertime I definitely like when my house smells good, and it gives off the holiday vibes."
    },
    {
        id: '3',
        name: 'Mimi Marquez',
        title: 'Great',
        rating: 5,
        comment: "Really enjoyed this candle very much and will try more of this brand. It has water and fresh smell which left me very calm and relaxed. Without burning it and opening up the lid you can smell it and while light and it burns, you can smell it from across the room and it lasts a long time."
    },
    {
        id: '4',
        name: 'Nafisa Mahmood',
        title: 'Great candle!',
        rating: 4,
        comment: "I must admit, I was expecting a different scent with the name. The name made me think it would be more fall/leaves scented but upon smelling it unlit I was hit with almost a strong vanilla smell. I'm not a fan of food smelling candles so I was turned off, but I decided to see how it was when I burned it. I'm glad I did because it smells so much better when it's burning. I also love the larger size of these as I burn candles a lot and the less I have to change them out the better!"
    },
    {
        id: '5',
        name: 'Chrissy Taylor',
        title: 'Beautiful',
        rating: 5,
        comment: "I absolutely adore the way this candle smells. I’m the morning befure I do anything I’ll lite this candle. It gives off such a zen vibe. I love how amazing it also smells when you blow it out. Leaves the house smelling fresh for hours"
    },
    {
        id: '6',
        name: 'Liz Martins',
        title: 'Wonderful',
        rating: 5,
        comment: "So pleased with this product Yankee candles does it again wonderful smell last a long time works great looks beautiful love it so much will be buying more of thses so affordable I love my Yankee candles"
    },
    {
        id: '7',
        name: 'Ashutosh Singh',
        title: 'cozy and comforting',
        rating: 5,
        comment: "A delectable blend of pumpkin, creamy notes, and rich caramelized maple; this scent brings the cozy and comforting essence of fall into my home. The fragrance is not overpowering, but rather it creates a warm and comforting ambiance that evokes the essence of the fall season. The quality of Yankee Candle is evident in every aspect of this candle."
    }
]
