import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { VideoInfo } from './VideoInfo'

import { Video, VideoList } from '../common/types'
import { Paper, List } from '@material-ui/core'

interface MapStateToProps { videos: VideoList }

class DownloadList extends Component<MapStateToProps> {
    render() {
        return (
            <Paper style={{backgroundColor: '#85cdcb'}}>
                <ul className="download-list">
                    <List>
                        {
                            _.map(this.props.videos, (video: Video) => {
                                console.log(`inside map: ${JSON.stringify(video)}`)
                                console.log(`before return: ${video.id}`)
                                return (
                                    <div key={video.id}>
                                        <VideoInfo videoInfo={video}/>
                                    </div>
                                )
                            })
                        }
                    </List>
                </ul>
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    const { videos } = state.videos
    return { videos };
  }

export default connect(mapStateToProps)(DownloadList);