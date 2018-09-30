import React from 'react';
import  './SignIn.css';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

submit(event) {
    event.preventDefault();
    this.props.changeFormData(this.state);
}

render() {
    return (
        <div className={'step-container'}>
            <h1>Review Your Information:</h1>
            <div className={'review-data'}>
                <h4>{`Name: ${this.props.data.firstName} ${this.props.data.lastName}`}</h4>
                <h4>{`Email Address: ${this.props.data.email}`}</h4>
                <h4>{`Phone Number: ${this.props.data.phone}`}</h4>
                <h4>{`Salary Range: ${this.props.data.salary}`}</h4>
            </div>
            <h2 onClick={this.submit} className={'form-submit-button'}>Submit</h2>
        </div>
        );
    }
}

export default Review;