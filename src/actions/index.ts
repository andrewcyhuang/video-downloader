import { ipcRenderer } from 'electron'
import { ActionTypeDefs } from '../common/types'

export const videoAdd = url => dispatch => {
    ipcRenderer.send(ActionTypeDefs.VIDEO_ADD, url)
    ipcRenderer.on('metadata::complete', (event, videoInfo) => {
        dispatch({
            type: ActionTypeDefs.VIDEO_ADD,
            payload: {
                ...videoInfo
            }
        })
    })
}

export const downloadStart = video => {
    const isDownloading: boolean = true;
    return {
        type: ActionTypeDefs.DOWNLOAD_START,
        payload: {...video, isDownloading}
    }
}

export const downloadProgress = (video, progress) => {
    return {
        type: ActionTypeDefs.DOWNLOAD_PROGRESS,
        payload: {...video, progress, err: ''}
    }
}

export const downloadComplete = video => {
    const isDownloading: boolean = false;
    return {
        type: ActionTypeDefs.DOWNLOAD_COMPLETE,
        payload: {...video, isDownloading}
    }
}