// import * as service from '../service/plan-service';

import * as routerRedux from 'react-router-redux'

export default {
    namespace: 'peopleTag',
    state: {
        step: 0,
        planInfo: null
    },
    reducers: {
    },
    effects: {
        *gotolist({payload}, { call, put}) {
            yield put(routerRedux.push({
                pathname: '/customerPeople'
            }))
        }
    },
    subscriptions: {
        setup({ dispatch, history }) { }
    }
}