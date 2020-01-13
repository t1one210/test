import { combineReducers } from "redux";
import ImagesReducer from "./reducer-images";

const reducers = combineReducers({
  items: ImagesReducer,
  //images: dload
});

export default reducers;