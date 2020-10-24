import { Action } from 'redux'
import { videoAdd, downloadStart, downloadProgress, downloadComplete } from '../actions'

// Action Types
export enum ActionTypeDefs {
    VIDEO_ADD = 'add_video',
    DOWNLOAD_START = 'download_start',
    DOWNLOAD_PROGRESS = 'download_progress',
    DOWNLOAD_COMPLETE = 'download_complete'
}

interface VideoAddAction
    extends Action<ActionTypeDefs.VIDEO_ADD> {
        type: ActionTypeDefs.VIDEO_ADD,
        payload: Video
}

interface DownloadStartAction
    extends Action<ActionTypeDefs.DOWNLOAD_START> {
        type: ActionTypeDefs.DOWNLOAD_START,
}

interface DownloadProgressAction
    extends Action<ActionTypeDefs.DOWNLOAD_PROGRESS> {
        type: ActionTypeDefs.DOWNLOAD_PROGRESS,
}

interface DownloadCompleteAction
    extends Action<ActionTypeDefs.DOWNLOAD_COMPLETE> {
        type: ActionTypeDefs.DOWNLOAD_COMPLETE,
}

export type ActionType = 
    | VideoAddAction
    | DownloadStartAction
    | DownloadProgressAction
    | DownloadCompleteAction

export interface Video {
    id: string,
    title: string,
    url: string,
    thumbnail: any,
    description: string,
    _filename: string,
    format_id: string
}

export interface VideoList {
    readonly [id: string]: Video
}

export interface ApplicationState {
    readonly videos?: VideoList
}

