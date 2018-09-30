import React from 'react';
import Modal from 'react-modal';
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
    }

    closeModal() {
    this.setState({modalIsOpen: false});
    }

submit(event) {
    alert('jajaj conoce')
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
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                You're all Done!
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