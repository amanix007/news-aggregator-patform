/*========== Flight =========*/
export const GET_FLIGHT_DESTINATIONS = 'v1/flight/search/airport?name=';
export const GET_FLIGHT_SEARCH_RESULT = 'v1/flight/search';
export const GET_FLIGHT_DETAILS = 'v1/flight/details';
export const GET_ADVANCE_SEARCH_RESULT = 'v1/flight/advance-search';
export const POST_FLIGHT_FILTERS = 'v1/flight/search/filter';
export const GET_AIRPORT_LIST = 'v1/flight/search/airport?name=';
export const GET_FLIGHT_AIRPORTS = 'v1/flight/search/airport?name=';
export const GET_FLIGHT_SERVICES = 'v1/flight/ssr-codes';
export const GET_FLIGHT_ADDONS = 'v1/flight/addons/service-v2';
export const GET_FLIGHT_EXTRA_LUGGAGE = '/v1/flight/luggage';
export const GET_FLIGHT_ADDONS_DETAILS = 'v1/flight/addons/service-details';
export const GET_FLIGHT_SEAT_SEARCH = 'v1/flight/seat/search?bookingCode=';
export const GET_FLIGHT_SEAT_HISTORY = 'v1/flight/seat/booking/history?bookingCode=';
export const POST_FLIGHT_SEAT_BOOK = 'v1/flight/seat/booking/book';
export const GET_FLIGHT_SEAT_CANCEL = 'v1/flight/seat/booking/cancel';
export const GET_FLIGHT_SEAT_RETRY_PAYMENT = 'v1/flight/seat/booking/payment-link';
export const GET_FLIGHT_SEAT_RESEND_VOUCHER = 'v1/flight/seat/booking/resend-voucher';

/*========== Hotel =========*/
export const GET_HOTEL_DESTINATIONS = 'v1/hotel/search/property?keyword=';

/*========== Holiday =========*/
export const GET_HOLIDAY_DESTINATIONS = 'v1/package/city/search?keyword=';

/*========== Visa =========*/
export const GET_VISA_DESTINATION = 'v1/visa/country/search?keyword=';
export const GET_VISA_DESTINATIONS = 'v1/visa/country/search?keyword=';

/*========== Mobile Recharge =========*/
export const GET_MOBILE_RECHARGE_OPERATORS = 'v1/lifestyle/top-up/operators';
export const GET_MOBILE_RECHARGE_COUPON_LIST = 'v1/lifestyle/top-up/promotional-coupons';
export const GET_MOBILE_RECHARGE_HISTORY = 'v1/lifestyle/top-up/booking/history';
export const POST_MOBILE_RECHARGE = 'v1/lifestyle/top-up/recharge';
export const GET_MOBILE_NUMBER_SUGGESTION = 'v1/lifestyle/top-up/recent-recharged-recipients';

/*========== Homepage =========*/
// export const GET_POPULAR_DESTINATIONS = 'v1/package/city/popular-destination?offset=0&limit=9';
export const GET_POPULAR_DESTINATIONS = 'v1/hotel/populer-destination';
export const GET_PLACES_IN_BANGLADESH = 'v1/hotel/populer-destination?countryCode=BD';
export const GET_TOUR_PACKAGES = 'v1/package/city/popular-destination?offset=0&limit=9';
export const GET_BEST_HOTELS = 'v1/hotel/populer-properties';
export const GET_TOP_AIRLINES = 'v1/flight/top-airlines';
export const GET_POPULAR_ROUTES = 'v1/flight/cheapest-flight-v2';

/*========== Generic =========*/
export const GET_COUNTRIES = 'v1/country';
export const POST_UPLOAD_FILE = 'v1/upload-file';
export const GET_PAYMENT_GATEWAY = 'v1/payment/gateway';
export const UNSUBSCRIBE_EMAIL = 'v1/unsubscribe';
