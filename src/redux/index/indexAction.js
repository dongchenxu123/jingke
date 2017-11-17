import axios from 'axios'
import { createAction } from 'redux-actions'
import { GetTopics, GetTopicDetail, GetUserDetail } from '../../help/url'
import { GET_TOPIC_REQUEST, GET_TOPIC_SUCCESS, GET_TOPIC_FAILURE, GET_TOPIC_DETAIL_REQUEST, GET_TOPIC_DETAIL_SUCCESS, GET_TOPIC_DETAIL_FAILURE, USER_DETAIL_REQUEST, USER_DETAIL_SUCCESS, USER_DETAIL_FAILURE, HASNOT_READ_REQUEST, HASNOT_READ_SUCCESS, HASNOT_READ_FAILURE} from '../const'

export const getTopicRequest = createAction(GET_TOPIC_REQUEST, (items) => items)
export const getTopicSuccess = createAction(GET_TOPIC_SUCCESS, (payload) => {
	return payload
})
export const getTopicFailure = createAction(GET_TOPIC_FAILURE, (items) => items)
export function loadTopicItem (query) {
	return (dispatch) => {
		dispatch(getTopicRequest())
		return axios.get(GetTopics, {params: query})
		 .then(function (response) {
		 	return response.data
		 })
		 .then(function (data) {
		 	if (data.msg) {
		 		dispatch(getTopicFailure())
		 		return
		 	} else {
		 		dispatch(getTopicSuccess({data:data}))
		 	}
		 	return data
		 	
		 })
		 
	}
}
export const getDetailRequest = createAction(GET_TOPIC_DETAIL_REQUEST, (items) => items)
export const getDetailSuccess = createAction(GET_TOPIC_DETAIL_SUCCESS, (payload) => {
	return payload
})
export const getDetailFailure = createAction(GET_TOPIC_DETAIL_FAILURE, (items) => items)

export function loadTopicDetailItem (id) {
	return (dispatch) => {
		dispatch(getDetailRequest())
		return axios.get(GetTopicDetail +'/'+id)
		 .then(function (response) {
		 	return response.data
		 })
		 .then(function (data) {
		 	if (data.msg) {
		 		dispatch(getDetailFailure())
		 		return
		 	} else {
		 		dispatch(getDetailSuccess({data:data}))
		 	}
		 	return data
		 	
		 })
		 
	}
}
export const userDetailRequest = createAction(USER_DETAIL_REQUEST, (items) => items)
export const userDetailSuccess = createAction(USER_DETAIL_SUCCESS, (payload) => {
	return payload
})
export const userDetailFailure = createAction(USER_DETAIL_FAILURE, (items) => items)
export function loadUserDetailItem (name) {
	return (dispatch) => {
		dispatch(userDetailRequest())
		return axios.get(GetUserDetail +'/'+name)
		 .then(function (response) {
		 	return response.data
		 })
		 .then(function (data) {
		 	if (data.msg) {
		 		dispatch(userDetailFailure())
		 		return
		 	} else {
		 		dispatch(userDetailSuccess({data:data}))
		 	}
		 	return data
		 	
		 })
		 
	}
}
export const hasnotReadRequest = createAction(HASNOT_READ_REQUEST, (items) => itemss)
export const hasnotReadSuccess = createAction(HASNOT_READ_SUCCESS, (payload) => {
   return payload	
})
export const hasnotReadFailure = createAction(HASNOT_READ_FAILURE, (items) => items)
export function loadMessages (messages) {
	return (dispatch) => {
		dispatch(hasnotReadRequest())
		return axios.get()
	}
}
export const actions = {
	loadTopicItem,
	loadTopicDetailItem,
	loadUserDetailItem
}
