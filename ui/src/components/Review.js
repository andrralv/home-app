import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import  './SignIn.css';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
          };
        this.submit = this.submit.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

openModal() {
    this.setState({modalIsOpen: true});
    this.submit();
    }

closeModal() {
    this.setState({modalIsOpen: false});
    }

submit() {
    axios.post('http://localhost:3001/api', this.props.data)
      .then(function (response) {
        console.log('HERE IS THE RESPONSE SENT FROM THE SERVER: ', response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
            <h2 onClick={this.openModal} className={'form-submit-button'}>Submit</h2>
            <Modal
                ariaHideApp={false}
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <h3>You're all Done!</h3>
                <p>If you started the API server, open up your browser console.</p>
                <p>You should be able to see the data that was sent to ther server being printed back to you as a response.</p>
                <p>(Or an error message if you didn't!)</p>

            </Modal>
            </div>
        );
    }
}

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background            : '#282828',
      color                 : 'white',
    }
  };

export default Review;