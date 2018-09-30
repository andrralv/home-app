import React from 'react';
import  './SignIn.css';
import regex from '../utils/regex'

class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', 
        lastName: '', 
        errorMessage: 'Please enter a valid name',
        error: false}
        this.bindState = this.bindState.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

bindState(event, type) {
    if (true) {
        this.setState({[type]: event.target.value})
    }
}

nextStep(event) {
    event.preventDefault();
    if ((regex.name.test(this.state.firstName)) && (regex.name.test(this.state.lastName))) {
        this.props.changeFormData(this.state, {progress: 25});
    } else {
        this.setState({error: true})
    }
}

render() {
    return (
        <div className={'step-container'}>
            <h1>Please Enter Your Name</h1>
            <input
                className={'form-step-input step-1'}
                onChange={(e) => this.bindState(e, 'firstName')}
                value={this.state.firstName}
            />
            <input
                className={'form-step-input step-1'}
                onChange={(e) => this.bindState(e, 'lastName')}
                value={this.state.lastName}
            />
            <span><h2 onClick={this.nextStep} className={'form-next-button'}>Next</h2></span>
            {this.state.error ? <div className={'error-message'}>{this.state.errorMessage}</div> : ''}
        </div>
        );
    }
}

export default Step1;