import { call, put, all, takeEvery, takeLatest } from 'redux-saga/effects'
import {getImages} from "../../services/Api";
import {actions} from "../reducers/img-reducer";
import {AxiosResponse} from "axios";
import {Images} from "../../services/api-types";

export function* fetchImg(): any {
    try {
        yield put(actions.setLoading(true));
        // setTimeout(()=>{},500)
        const images: AxiosResponse<Array<Images>> = yield call(getImages)
        yield put(actions.setLoading(false));
        yield put(actions.setImg(images.data));
    } catch (e) {
        yield put(actions.setImg([]));
    }
}

function* watchFetchImg() {
    yield takeEvery('FETCH_IMAGES', fetchImg)
}

export function* mySaga(){
    yield all([
        watchFetchImg(),
    ])
}