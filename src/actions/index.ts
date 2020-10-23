
import { ipcRenderer } from 'electron'
import { ActionTypes } from '../common/types'

export const videoAdd = url => dispatch => {
    ipcRenderer.send(ActionTypes.VIDEO_ADD, url)
    ipcRenderer.on('metadata::complete', (event, videoInfo) => {
        dispatch({
            type: ActionTypes.VIDEO_ADD,
            payload: videoInfo
        })
    })
};

export const downloadStart = video => {
    const isDownloading: boolean = true;
    return {
        type: ActionTypes.DOWNLOAD_START,
        payload: {...video, isDownloading}
    }
}

export const downloadProgress = (video, progress) => {
    return {
        type: ActionTypes.DOWNLOAD_PROGRESS,
        payload: {...video, progress, err: ''}
    }
}

export const downloadComplete = video => {
    const isDownloading: boolean = false;
    return {
        type: ActionTypes.DOWNLOAD_COMPLETE,
        payload: {...video, isDownloading}
    }
}