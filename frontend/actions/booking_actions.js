import * as APIUtil from '../utils/booking_utils';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';


export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings: bookings
});
export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking: booking
});
export const removeBooking = (id) => ({
  type: REMOVE_BOOKING,
  id: id
});
export const deleteBooking = (id) => dispatch => (
  APIUtil.deleteBooking(id)
    .then(id => dispatch(removeBooking(id)))
);
export const fetchBookings = () => dispatch => (
  APIUtil.fetchBookings()
    .then((res) => dispatch(receiveBookings(res)))
);
export const fetchBooking = id => dispatch => (
  APIUtil.fetchBooking(id)
    .then(res => dispatch(receiveBooking(res)))
);
export const createNewBooking = formBooking => dispatch => APIUtil.postBooking(formBooking)
  .then(res => dispatch(receiveBooking(res)));
