import {
    ActionTypeDefs,
    ApplicationState,
    ActionType
} from '../common/types'

export default (state: ApplicationState = {}, action: ActionType) => {
    switch(action.type) {
        case ActionTypeDefs.VIDEO_ADD:
            const currId: string = action.payload.id;
            return {
                videos: {...state.videos, currId: action.payload }
            }
        default:
            return state
    }
}

