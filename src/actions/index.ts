import { ipcRenderer } from 'electron'
import { ActionTypeDefs, Video } from '../common/types'

export const videoAdd = url => dispatch => {
    ipcRenderer.send('video::added', url)
    ipcRenderer.on('metadata::complete', (event, videoInfo) => {
        const { id, fulltitle, webpage_url, thumbnail, _duration_hms } = videoInfo
        dispatch({
            type: ActionTypeDefs.VIDEO_ADD,
            payload: {
                id,
                fulltitle,
                webpage_url,
                thumbnail,
                _duration_hms
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