import { call, put, takeEvery} from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../services/api'
import { helper } from '../../helper/common'

function* homeProductSaga() {
  try {
    yield put(actions.startGetDataProduct(true))
    const data = yield call(api.getAllDataProducts)
    if (!helper.isEmptyObject(data)) {
      yield put(actions.getDataProductSuccess(data))
    } else {
      yield put(actions.getDataProductNotFound({
        cod: 404,
        message: 'Product not found data'
      }))
    }
  }
  catch(e) {
    yield put(actions.getDataProductFail(e))
  }
  finally {
    yield put(actions.stopGetDataProduct(false))
  }
}

export function* watchHomeProductSaga() {
  yield takeEvery(actions.GET_DATA_PRODUCT, homeProductSaga)
}