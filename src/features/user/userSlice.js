const userinitialState = {
  name: "",
};

export default function userReducer(state = userinitialState, action) {
  switch (action.type) {
    case "user/createUser":
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}

export function createUser(username) {
  return { type: "user/createUser", payload: username };
}
