import {
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
import { getShowDetail, getShowList } from "../../api/showApi";
import {
  fetchedShowAction,
  fetchedShowsAction,
  FETCH_SHOW,
  SHOW_FETCH,
} from "../action/show";
import createSagaMiddleware from "redux-saga";
import { AnyAction } from "redux";

export const sagaMiddleware = createSagaMiddleware();

function* showSaga(action: AnyAction): Generator<any, any, any> {
  yield delay(500);
  if (!action.payload) {
    return;
  }
  const data = yield call(getShowList, action.payload);
  yield put(fetchedShowAction(action.payload, data));
}

function* showSagaDetail(action: AnyAction): Generator<any, any, any> {
  const id: number = action.payload;
  const data = yield call(getShowDetail, id);
  yield put(fetchedShowsAction(data));
}

export function* rootSaga() {
  yield takeLatest(SHOW_FETCH, showSaga);
  yield takeEvery(FETCH_SHOW, showSagaDetail);
}
