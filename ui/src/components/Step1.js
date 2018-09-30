import React from 'react';
import  './SignIn.css';

class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', 
        lastName: ''}
        this.validate = this.validate.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

validate(event, type) {
    if (true) {
        this.setState({[type]: event.target.value})
    }
}

nextStep(event) {
    event.preventDefault();
    this.props.changeFormData(this.state, {progress: 25});
}

render() {
    return (
        <div className={'step-container'}>
            <h1>Please Enter Your Name</h1>
            <input
                className={'form-step-input step-1'}
                onChange={(e) => this.validate(e, 'firstName')}
                value={this.state.firstName}
            />
            <input
                className={'form-step-input step-1'}
                onChange={(e) => this.validate(e, 'lastName')}
                value={this.state.lastName}
            />
            <span><h2 onClick={this.nextStep} className={'form-next-button'}>Next</h2></span>
        </div>
        );
    }
}

export default Step1;