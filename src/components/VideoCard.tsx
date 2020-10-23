import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class VideoCard extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                VideoCard
            </div>
        )
    }

}

export default connect(null, actions)(VideoCard);