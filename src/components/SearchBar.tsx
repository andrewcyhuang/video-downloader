import { TextField } from '@material-ui/core'
import React, { Component } from 'react'

class SearchBar extends Component {

    render() {
        return (
            <div>
                <form style={{display: "flex"}} noValidate autoComplete="off">
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

export default SearchBar;