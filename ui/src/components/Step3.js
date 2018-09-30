import React from 'react';
import  './SignIn.css';
import regex from '../utils/regex';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {phone: '', 
            errorMessage: 'Please enter a valid 10 digit phone number',
            error: false}
        this.bindState = this.bindState.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

bindState(event, type) {
    if (true) {
        this.setState({[type]: event})
    }
}

nextStep(event) {
    event.preventDefault();
    if (regex.phone.test(this.state.phone)) {
        this.props.changeFormData(this.state, {progress: 25});
    } else {
        this.setState({error: true})
    }
}

render() {
    return (
        <div className={'step-container'}>
            <h1>Please Enter Your Phone Number</h1>
            <span><h4 onClick={this.props.goBack} className={'form-back-button'}>Go Back</h4></span>
            <span className={'form-phone-input'}>
            <PhoneInput
                // className={'form-step-input'}
                country="US"
                value={this.state.phone}
                onChange={(e) => this.bindState(e, 'phone')}
            />
            </span>
            <span><h2 onClick={this.nextStep} className={'form-next-button'}>Next</h2></span>
            {this.state.error ? <div className={'error-message'}>{this.state.errorMessage}</div> : ''}
        </div>
        );
    }
}

export default Step2;