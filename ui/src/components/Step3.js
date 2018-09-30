import React from 'react';
import  './SignIn.css';

class Step2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {phone: '', 
            errorMessage: 'Please enter a valid phone number',
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
    this.props.changeFormData(this.state);
}

render() {
    return (
        <div className={'step-container'}>
            <h1>Please Enter Your Phone Number</h1>
            <span><h4 onClick={this.props.goBack} className={'form-back-button'}>Go Back</h4></span>
            <input
                className={'form-step-input'}
                onChange={(e) => this.validate(e, 'phone')}
                value={this.state.firstName}
            />
            <span><h2 onClick={this.nextStep} className={'form-next-button'}>Next</h2></span>
            {this.state.error ? <div className={'error-message'}>{this.state.errorMessage}</div> : ''}
        </div>
        );
    }
}

export default Step2;