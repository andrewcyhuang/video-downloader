import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Typography } from '@material-ui/core'
import _ from 'lodash'

import { Video } from '../common/types'

class DownloadList extends Component {
    render() {
        return (
            <ul className="download-list">
                {
                    _.map(_.keysIn(this.props), (video: Video) => {
                        return (
                            <div key={video.id}>
                                <Card>
                                    <Typography color="textPrimary" gutterBottom>
                                        {video.title}
                                    </Typography>
                                </Card>
                            </div>
                        )
                    })
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {...state.videos }
}

export default connect(mapStateToProps)(DownloadList);