import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getShowList } from "../../api/showApi";
import { fetchedShowAction, SHOW_FETCH } from "../action/show";
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

export function* rootSaga() {
  yield takeLatest(SHOW_FETCH, showSaga);
}
