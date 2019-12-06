export const fetchBookings = data => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings/',
    data
  })
);

export const fetchBooking = id => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings/' + id
  })
);