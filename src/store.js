import { createStore } from "redux"
import commentReducer from "./reducers/comments"

export default createStore(commentReducer)