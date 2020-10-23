import React, { Component } from 'react';

import chunk from 'lodash/chunk';

class DownloadList extends Component {

    renderList() {
        return (
            <div>
                List of Downloads
            </div>
        )
    }

    render() {
        return (
            <ul className="download-list">
                {this.renderList()}
            </ul>
        )
    }
}

export default DownloadList;