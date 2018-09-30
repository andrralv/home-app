import React from 'react';
import  './SignIn.css';
import regex from '../utils/regex';

class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',
            errorMessage: 'Please enter a valid email address', 
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
    if (regex.email.test(this.state.email)) {
        this.props.changeFormData(this.state, {progress: 25});
    } else {
        this.setState({error: true})
    }
}

render() {
    return (
        <div className={'step-container'}>
            <h1>Please Enter Your Email Address</h1>
            <span><h4 onClick={this.props.goBack} className={'form-back-button'}>Go Back</h4></span>
            <input
                className={'form-step-input'}
                onChange={(e) => this.bindState(e, 'email')}
                value={this.state.email}
            />
            <span><h2 onClick={this.nextStep} className={'form-next-button'}>Next</h2></span>
            {this.state.error ? <div className={'error-message'}>{this.state.errorMessage}</div> : ''}
        </div>
        );
    }
}

export default Step2;