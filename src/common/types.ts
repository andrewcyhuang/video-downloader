// Action Types
export enum ActionTypes {
    VIDEO_ADD = 'add_video',
    DOWNLOAD_START = 'download_start',
    DOWNLOAD_PROGRESS = 'download_progress',
    DOWNLOAD_COMPLETE = 'download_complete'
}

export interface VideoActionType {
    type: string,
    payload: any
}

export interface Video {
    id: string,
    title: string,
    url: string,
    thumbnail: any,
    description: string,
    _filename: string,
    format_id: string
}

export interface VideoState {
    readonly videos: Video[]
}

export interface ApplicationState {
    videos: VideoState,
    currQuery: string
}