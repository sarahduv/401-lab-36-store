let initialState = { foo: 'bar' };

export default (state = initialState, action) => {
  // eslint-disable-next-line no-unused-vars
  let { type, payload } = action;

  switch (type) {
  case 'CHANGE':
    return { foo: Math.random() };

  default:
    return state;
  }
};
