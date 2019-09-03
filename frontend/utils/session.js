export const postUser = (user) => {
  return $.ajax({
    url: '/users',
    method: 'POST',
    data: { user }
  });
};

export const postSession = (user) => {
  return $.ajax({
    url: '/session',
    method: 'POST',
    data: { user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: '/session',
    method: 'DELETE'
  });
};
