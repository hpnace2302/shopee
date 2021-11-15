import { call, put, takeEvery} from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../services/api'
// import { helper} from '../../helper/common'

function* detailSaga({id}) {
  try {
    yield put(actions.startGetDataProductById(true))
    const data = yield call(api.getDataProductById, id)
    if (data !== undefined) {
      yield put(actions.getDataProductByIdSuccess(data))
    } else {
      yield put(actions.getDataProductByIdNotFound({
        cod: 404,
        mess: `Not found data by ${id}`,
      }))
    }
  }
  catch(e) {
    yield put(actions.getDataProductByIdFail(e))
  }
  finally {
    yield put(actions.startGetDataProductById(false))
  }
}

export function* watchDetailSaga() {
  yield takeEvery(actions.GET_PRODUCT_BY_ID, detailSaga)
}