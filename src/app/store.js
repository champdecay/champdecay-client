import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import blogReducer from "./blog/blogSlice";

export default configureStore({
    reducer: { blogReducer },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}, applyMiddleware(thunk))