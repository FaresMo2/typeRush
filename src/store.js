import { combineReducers, createStore } from "redux";
import gameReducer from "./features/startGame/gameSlice";
import userReducer from "./features/user/userSlice";

const rootReducer = combineReducers({
  game: gameReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
