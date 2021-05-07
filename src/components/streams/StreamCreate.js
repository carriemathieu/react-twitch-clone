import React from 'react'
import { Field, reduxForm } from 'redux-from'

class StreamCreate extends React.Component {
    // accepts label as arg, assigns to each input field
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
            </div>
        )
    }

    // formProps -> incl w/ redux-form
    onSubmit(formValues) {
        console.log(formValues)
    }

    // passes label as prop to renderInput function
    render() {
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate)