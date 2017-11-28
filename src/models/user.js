import  * as service from '../service/userService';
export default {
  namespace: 'user',
  state:{
    user: {
        sms_balance: null,
         company_license: null,
         sms_sign: null
    },
    shop: null
  },
  reducers:{
    userGet(state, {payload}) {
        // console.log('payload ---->', payload)
      return {...state, user: payload.user, shop: payload.shop}
    }
  },
  effects: {
    *getUser({ payload }, { call, put }){
      const user = yield call(service.getUser);
      // const wechatStatus = yield call()
      yield put({type:'userGet', payload: user})
    }
  },
  subscriptions:{
    setup({ dispatch, history }) {}
  }
}