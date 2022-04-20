import imagesReducer from "./reducers/img-reducer";
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {mySaga} from "./sagas";


type RootReducer = typeof imagesReducer;
export type AppState = ReturnType<RootReducer>


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({ reducer: imagesReducer,  middleware: [sagaMiddleware] })

type PropertiesType<T> = T extends { [key: string]: infer u } ? u : never
export type InferActionsTypes<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesType<T>>

sagaMiddleware.run(mySaga)

export default store;