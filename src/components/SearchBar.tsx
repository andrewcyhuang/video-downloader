import { TextField } from '@material-ui/core'
import React, { Component } from 'react'
import{ connect, RootState } from 'react-redux'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import _ from 'lodash'

import { videoAdd } from '../actions'

interface MapStateToProps {}

interface MapDispatchToProps {
    videoAdd: (url: string) => void
}

type SearchBarProps = MapStateToProps & MapDispatchToProps & InjectedFormProps

class SearchBar extends Component<SearchBarProps> {

    onSubmit(formProps) {
        console.log(formProps)
        this.props.videoAdd(formProps.url)
        this.props.reset()
    }

    renderInput({ input }) {
        return (
            <TextField
                id="outlined-helperText"
                label="Paste your video link here"
                defaultValue=""
                variant="outlined"
                style={{width: "100%", marginBottom: "5%"}}
                { ...input }
            />  
        )
    }

    render() {
        return (
                <form 
                    onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}
                    style={{display: "flex"}} 
                    noValidate autoComplete="off"
                    >
                    <Field name="url" component={this.renderInput}/>
                </form>
        )
    }
}

function mapStateToProps(state: RootState) {
    const videos = _.map(state.videos);
    return { videos };
  }

const MapDispatchToProps = { videoAdd }

const ComponentWithForm = reduxForm({form: 'url'})(SearchBar)

export default connect<MapStateToProps, MapDispatchToProps, {}>
    (mapStateToProps, { videoAdd })(ComponentWithForm);