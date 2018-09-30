import React from 'react';
import  './SignIn.css';

class Step4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: ''}
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
    this.props.changeFormData(this.state);
}

render() {
    return (
        <div className={'step-container'}>
            <h1>Please Enter Your Salary Range</h1>
            <div className={'form-radio-buttons'}>
                <div>
                    <input type="radio" id="contactChoice1"
                    name="contact" value="email"/>
                    <label for="contactChoice1">0 - 1.000</label>
                </div>
                <div>
                    <input type="radio" id="contactChoice2"
                    name="contact" value="phone"/>
                    <label for="contactChoice2">1.000 - 2.000</label>
                </div>
                <div>
                    <input type="radio" id="contactChoice3"
                    name="contact" value="mail"/>
                    <label for="contactChoice3">2.000 - 3.000</label>
                </div>
                <div>
                    <input type="radio" id="contactChoice2"
                    name="contact" value="phone"/>
                    <label for="contactChoice2">3.000 - 4.000</label>
                </div>
            <div>
            <input type="radio" id="contactChoice3"
            name="contact" value="mail"/>
            <label for="contactChoice3">Mehr als 4.000</label>
            </div>
        </div>
            <span><h2 onClick={this.nextStep} className={'form-submit-button'}>Go Back</h2></span>
            <span><h2 onClick={this.nextStep} className={'form-submit-button'}>Submit</h2></span>
        </div>
        );
    }
}

export default Step4;