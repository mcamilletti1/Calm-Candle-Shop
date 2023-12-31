import { environment } from 'src/environments/environment'

export const BASE_URL = environment.production? '' : 'https://calm-candle-shop.onrender.com';

export const CANDLES_URL = BASE_URL + '/api/candles';
export const REVIEWS_URL = BASE_URL + '/api/reviews'
export const CANDLES_TAGS_URL = CANDLES_URL + '/tags';
export const CANDLES_BY_SEARCH_URL = CANDLES_URL + '/search/';
export const CANDLES_BY_TAG_URL = CANDLES_URL + '/tag/';
export const CANDLE_BY_ID_URL = CANDLES_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';

