import { createStore } from "redux";
import rootreducer from "./reducers";

const Store=createStore(rootreducer);

export default Store;