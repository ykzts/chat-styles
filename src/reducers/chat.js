const initialState = {
  avatarSize: 24,
  outlineColor: {
    rgb: {
      a: 1,
      b: 0,
      g: 0,
      r: 0,
    },
  },
  outlineSize: 2,
  showAvatar: true,
  showOutline: true,
  showTimestamp: false,
  timestampColor: {
    rgb: {
      a: 1,
      b: 153,
      g: 153,
      r: 153,
    },
  },
  timestampSize: 16,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
