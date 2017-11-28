import * as service from '../service/plan-service';
export default {
    namespace: 'plan',
    state: {
        step: 0,
        planInfo: null
    },
    reducers: {
        setPlanInfo(state, { payload }) {
            console.log("payload", payload)
            return {...state, step: payload.step, planInfo: payload.value}
        },
        addPlan(state, { payload }) {
            console.log('addPlan  payload',  payload)
            return {...state, step: payload.step, selectTotal: payload.selectTotal}
        },
        recreate(state, { payload}) {
            return {...state, step: 0, planInfo: null, selectTotal: 0}
        }
    },
    effects: {
        *createPlan({ payload }, {call, put, select}) {
            const plan = yield select(state => state.plan)
            const loginInfo = yield select(state => state.user)

            let info = plan.planInfo;
            let sign_id = loginInfo.user.sign_id;
            console.log(payload, 'sign_id', loginInfo)
            let formPlan = {
                ...info, 
                sign_id,
                tag_ids: payload.tag_ids
            }
            const res = yield call(service.createPlan, {data: JSON.stringify(formPlan)});

            console.log("createPlan res", res)
            if(res && res.length > 0) {
                yield put({
                    type: 'addPlan',
                    payload: {
                        step: 2,
                        selectTotal: payload.selectTotal
                    }
                })
            }
            // yield put({
            //     type: 'campaignsGet',
            //     payload: res
            // })
        }
    },
    subscriptions: {
        setup({ dispatch, history }) { }
    }
}