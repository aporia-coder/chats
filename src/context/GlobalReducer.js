/*
state [
  {
    topic: [
      {msg, from}, {msg}
    ]
  },
]

*/

export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [action.payload.topic]: [],
      };
    default:
      return state;
  }
};
