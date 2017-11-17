import { handleActions } from 'redux-actions'
const initsetitems = {
	topicdata: {
		data: []
	},
	topicdetail: {
		data: []
	},
	userdetail: {
		data:[]
	},
	isFetching: false
}
export default handleActions({
	 ['GET_TOPIC_REQUEST']: (state, { payload }) => {
	 	return Object.assign({}, state, {topicdata: Object.assign({}, state.topicdata)})
	 },
	 ['GET_TOPIC_SUCCESS']: (state, { payload }) => {
	 	return Object.assign(
	 		{}, 
	 		state, 
	 		{topicdata:Object.assign(
			 			{},
			 			state.topicdata,
			 			payload.data			 			
			 			)
			}
	 	)
	 },
	 ['GET_TOPIC_DETAIL_FAILURE']: (state, { payload }) => {
	 	return state
	 },
	 ['GET_TOPIC_DETAIL_REQUEST']: (state, { payload }) => {
	 	return Object.assign({}, state, {topicdetail: Object.assign({}, state.topicdetail)})
	 },
	 ['GET_TOPIC_DETAIL_SUCCESS']: (state, { payload }) => {
	 	return Object.assign(
	 		{}, 
	 		state, 
	 		{topicdetail:Object.assign(
			 			{},
			 			state.topicdetail,
			 			payload.data			 			
			 			)
			}
	 	)
	 },
	 ['USER_DETAIL_FAILURE']: (state, { payload }) => {
	 	return state
	 },
	 ['USER_DETAIL_REQUEST']: (state, { payload }) => {
	 	return Object.assign({}, state, {userdetail: Object.assign({}, state.userdetail)})
	 },
	 ['USER_DETAIL_SUCCESS']: (state, { payload }) => {
	 	return Object.assign(
	 		{}, 
	 		state, 
	 		{userdetail:Object.assign(
			 			{},
			 			state.userdetail,
			 			payload.data			 			
			 			)
			}
	 	)
	 },
	 ['GET_TOPIC_FAILURE']: (state, { payload }) => {
	 	return state
	 }
 }, initsetitems)
