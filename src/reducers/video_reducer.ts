import {
    ActionTypes,
    VideoActionType
} from '../common/types'

export default (state = [], action: VideoActionType) => {
    switch(action.type) {
        case ActionTypes.VIDEO_ADD:
            return [ ...state, { ...action.payload }]
        default:
            return state
    }
}

