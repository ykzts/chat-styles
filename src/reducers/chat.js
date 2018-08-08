const initialState = {
  authorNameSize: 18,
  authorNameColor: {
    rgb: {
      a: 1,
      b: 255,
      g: 255,
      r: 255,
    },
  },
  avatarSize: 20,
  memberAuthorNameColor: {
    rgb: {
      a: 1,
      b: 22,
      g: 117,
      r: 16,
    },
  },
  moderatorAuthorNameColor: {
    rgb: {
      a: 1,
      b: 241,
      g: 132,
      r: 94,
    },
  },
  outlineColor: {
    rgb: {
      a: 1,
      b: 0,
      g: 0,
      r: 0,
    },
  },
  outlineSize: 2,
  ownerAuthorNameColor: {
    rgb: {
      a: 1,
      b: 0,
      g: 214,
      r: 255,
    },
  },
  showAuthorName: true,
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
