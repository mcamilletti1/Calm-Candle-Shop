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
        imageUrl: '../../../../assets/images/candle1.jpeg',
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
        imageUrl: '../../../../assets/images/candle2.jpeg',
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
        imageUrl: '../../../../assets/images/candle3.jpeg',
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
        imageUrl: '../../../../assets/images/candle4.jpg',
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
        imageUrl: '../../../../assets/images/candle5.webp',
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
        imageUrl: '../../../../assets/images/candle6.webp',
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
        imageUrl: '../../../../assets/images/candle7.jpeg',
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
        imageUrl: '../../../../assets/images/candle8.jpeg',
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
        imageUrl: '../../../../assets/images/candle9.jpeg',
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
        imageUrl: '../../../../assets/images/candle10.webp',
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
    },
    {
        id: '8',
        name: 'Ryan Byrne',
        title: 'Amazing fall scent!',
        rating: 5,
        comment: "This is a true Yankee candle! It smells so delicious, has a beautiful color and great throw! This is a new favorite of mine."
    },
    {
        id: '9',
        name: 'Julian Franco',
        title: 'smells AMAZING!',
        rating: 5,
        comment: 'This may be one of my new favorite scents from Yankee candle! The scents is a sweet but spicy delectable long lasting scent that fills the whole house with a warm inviting smell. As per Yankee candle you know your are getting my a high quality candle product.'
    },
    {
        id: '10',
        name: 'Sydnee LaBuda',
        title: 'Nice scent and large candle',
        rating: 5,
        comment: "Big large candle that smells and reminds me of autumn vibes. It smells so good! Perfect for family gatherings and if you want to get that feels like home vibe. I get the apple and spicy notes. Beautiful color and it gives me comfort."
    },
    {
        id: '11',
        name: 'Kara Goldin',
        title: 'Smells amazing',
        rating: 5,
        comment: "The Yankee Candle - Spicy Sangria smells amazing! Love the 3 wick! Makes the smell much more stronger. My son took it to his room after the first night of burning this. Definitely recommend this candle!!"
    },
    {
        id: '12',
        name: 'Caitlyn Woodham',
        title: 'Its a perfect blend of scents',
        rating: 5,
        comment: "This scent is so soothing. Great for an evening of relaxation"
    },
    {
        id: '13',
        name: 'Anna Dunn',
        title: 'Enjoy being a member of Yankee Candle',
        rating: 5,
        comment: "Have always enjoyed Yankee Candles. Especially Sage & Citrus. Also Midsummers Night. Appreciate being a member of the Yankee Candle club. I enjoy all the special discounts as well as the free candle for my birthday. They are very thoughtful. Enjoy receiving your emails. Thank you again for the perks that I receive"
    },
    {
        id: '14',
        name: 'Jaida Urena',
        title: 'Refreshing',
        rating: 5,
        comment: "Love this scent. I usually get the two wick tumblers as I think they pool better. This is one of my favorite candle scents."
    },
    {
        id: '15',
        name: 'Nix Guirre',
        title: 'No way',
        rating: 1,
        comment: "This candle burned quick and the scent was not strong enough for even a small bathroom."
    },
    {
        id: '16',
        name: 'Kelli White',
        title: 'Sweet and stron',
        rating: 4,
        comment: "Pleasant scent, but quite strong and very sweet. I ended up returning it, as I don't like scents that are too strong."
    },
    {
        id: '17',
        name: 'Kiandra Boucher',
        title: 'Earthy, soothing, and cool.',
        rating: 5,
        comment: "Usually you don’t think of seaside and woods together but this fragrance works. Earthy, soothing, and cool."
    },
    {
        id: '18',
        name: 'Jonathan Mehl',
        title: 'Red Apple Wreath candle',
        rating: 5,
        comment: "I love this candle. It smells fantastic. I will definitely buy it again."
    },
    {
        id: '19',
        name: 'Angela Weatherfly',
        title: 'Love',
        rating: 5,
        comment: "Absolutely love this smell and it's amazing fragrance while burning."
    },
    {
        id: '20',
        name: 'Sarah Ganz',
        title: 'Lovely apple and cinnamon',
        rating: 4,
        comment: "This was a blind purchase based on the scent notes. Just on the scent alone I will give it four stars. The apple and cinnamon notes come through strong on cold. I am waiting until December to burn it, and if the throw is strong, it will definitely get a full five stars. I believe this will pair well with other candles/wax melts with similar scent notes."
    },
    {
        id: '21',
        name: 'Jasmine Mangroo',
        title: 'Much more lemony than I expected',
        rating: 5,
        comment: "Smells great. I didn't expect such a lemony aroma, but this candle is very pungent. I love it!"
    },
    {
        id: '22',
        name: 'Liliana Patracuolla',
        title: 'Great scent-poor design-wax got mixed with black soot',
        rating: 2,
        comment: "Great scent-poor design. From the first burn this candle turned from yellow to black. I ended up getting a replacement candle in the tumbler style. I haven’t burned it yet but I’m hoping the straight sides of the tumbler will not allow soot to mix with the yellow wax."
    },
    {
        id: '23',
        name: 'Makayla Bennett',
        title: 'My free birtday candle that I got for myself!!!!!!',
        rating: 5,
        comment: "I’ve been on a lemon kick and this is amazing and I recommend it!"
    },
    {
        id: '24',
        name: 'Brooke Haney',
        title: 'Lovely and Relaxing!',
        rating: 5,
        comment: "I usually only burn florals or clean-type scents for very short periods of time in the Spring before it gets too hot here in Vegas. I love my fruits, but when I want to break up the monotony a bit, I break out my Lemon Lavender, Fluffy Towels, and Soft Blanket for awhile. I thought this one would be too strong and perfumey, but it's not--it's quite pleasant and relaxing. I love the label and the wax color on this one--it fits in well with Spring and Easter decor and adds a lovely fresh scent to your kitchen area as well."
    },
    {
        id: '25',
        name: 'Drew Steuckrath',
        title: 'Cleaning Product!',
        rating: 1,
        comment: "This scent disappointed me since I love lavender and lemon, in general. This smells like a cheap cleaner. Even the Febreze scents are better than this one. Try again, Yankee Candle!"
    },
    {
        id: '26',
        name: 'Drew Hutton',
        title: 'Great Candle!',
        rating: 5,
        comment: "Great candle! The beautiful smell does not effect my wife's allergies!"
    },
    {
        id: '27',
        name: 'Bella Anidjar',
        title: 'Fresh Cut Roses',
        rating: 5,
        comment: "I love this fragrance. This candle smells like a bouquet of roses stems leaves and all with mostly rose. I pair mine with true rose."
    },
    {
        id: '28',
        name: 'Delicious rose scent, but not enough throw',
        title: "J'essence Reynolds",
        rating: 3,
        comment: "This is by far the best rose scent I have come across in a candle, hands down. My career is in the sensory field which means I spend much of my day tasting and smelling, so I know a good scent when I come across one! But this candle has one critical defect that it shares with several other Yankee Candles: poor throw. I am coming across this more and more in Yankee Candles and it really makes me sad, because I think they do a great job with mixing their scents. I am disappointed because this is such a great rose fragrance, but I can't even get it to fill up my average-sized bathroom when I burn a 2-wick tumbler. I kept one tumbler and returned the other, the retail stores are always very good about taking back product if it doesn't meet all expectations, which I appreciate. So 5 stars for scent, 3 stars for overall because if you can't smell it when you burn it...well, then you can't enjoy it as much."
    },
    {
        id: '29',
        name: 'Chasity Douyon',
        title: 'good',
        rating: 5,
        comment: "the rose smell is very good it smells so fresh and fills the room"
    }
]