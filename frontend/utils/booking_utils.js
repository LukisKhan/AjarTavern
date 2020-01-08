export const fetchBookings = data => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings/',
    data
  })
);

export const fetchBooking = (id) => (
  $.ajax({
    method: 'GET',
    url: 'api/bookings/' + id
  })
);

export const postBooking = (booking) => {
  return $.ajax({
    url: '/api/bookings',
    method: 'POST',
    data: { booking }
  });
};

export const deleteBooking = (id) => {
  return $.ajax({
    url: '/api/bookings/' + id,
    method: 'DELETE',
    data: { id }
  });
};