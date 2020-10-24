import { TextField } from '@material-ui/core'
import React, { Component } from 'react'
import{ connect, RootState } from 'react-redux'
import _ from 'lodash'

import { videoAdd } from '../actions'

interface MapStateToProps {}

interface MapDispatchToProps {
    videoAdd: (url: string) => void
}

type SearchBarProps = MapStateToProps & MapDispatchToProps

class SearchBar extends Component<SearchBarProps> {
    

    handleSubmit(event) {
        event.preventDefault()
        // event.target.value
        this.props.videoAdd(event.target.value)
    }

    render() {
        return (
            <div>
                <form style={{display: "flex"}} onSubmit={this.handleSubmit} noValidate autoComplete="off">
                    <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Paste your video link here"
                        variant="outlined"
                        style={{width: "100%", marginBottom: "5%"}}
                    />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state: RootState) {
    const videos = _.map(state.videos);
    return { videos };
  }

const MapDispatchToProps = { videoAdd }

export default connect<MapStateToProps, MapDispatchToProps, {}>(mapStateToProps, MapDispatchToProps)(SearchBar);