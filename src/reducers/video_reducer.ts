import {
    ActionTypeDefs,
    ApplicationState,
    ActionType
} from '../common/types'

export default (state: ApplicationState = {}, action: ActionType) => {
    switch(action.type) {
        case ActionTypeDefs.VIDEO_ADD:
            const currId: string = action.payload.id
            console.log(`VIDEO_ADD REDUCER TRIGGERED: ${currId}`)
            console.log(state)
            const newState: ApplicationState = {
                ...state,
                videos: {
                    ...state.videos, 
                    [currId]: action.payload }
            }
            console.log(newState)
            return newState
        default:
            return state
    }
}

