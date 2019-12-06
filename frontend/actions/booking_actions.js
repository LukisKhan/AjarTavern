import * as APIUtil from '../utils/booking_utils';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings: bookings
});
export const receiveBooking = ( booking ) => ({
  type: RECEIVE_BOOKING,
  booking: booking
});
export const fetchBookings = () => dispatch => (
  APIUtil.fetchBookings()
    .then(res => dispatch(receiveBookings(res)))
);
export const fetchBooking = id => dispatch => (
  APIUtil.fetchBooking(id)
    .then(res => dispatch(receiveBooking(res)))
);
export const createNewBooking = formBooking => dispatch => APIUtil.postBooking(formBooking)
  .then(
    booking => dispatch(receiveBooking(booking)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );