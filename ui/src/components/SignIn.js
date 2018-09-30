import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Line } from 'rc-progress';
import logo from '../home-logo.png'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Review from './Review';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
                this.state = {
                progress: 0,
            }
        this.changeFormData = this.changeFormData.bind(this);
        this.goBack = this.goBack.bind(this);
        this.submit = this.submit.bind(this);
        
    }

changeFormData(form) {
    this.setState({...form, progress: this.state.progress + 25})
}

goBack() {
    this.setState({ progress: this.state.progress - 25 })
}

submit(e) {
    e.preventDefault();
}

renderForm(param, bind) {
    switch(param) {
        case 0:
            return <Step1 changeFormData={bind} goBack={this.goBack}/>;
        case 25:
            return <Step2 changeFormData={bind} goBack={this.goBack}/>;
        case 50:
            return <Step3 changeFormData={bind} goBack={this.goBack}/>;
        case 75:
            return <Step4 changeFormData={bind} goBack={this.goBack}/>;
        case 100:
            return <Review changeFormData={bind} goBack={this.goBack} data={this.state}/>;
        default:
            return "You've Already Registered!";
        }
  }

render() {
    return (
        <React.Fragment>
            <form>
                <Line percent={this.state.progress} 
                    strokeWidth="1" 
                    strokeColor="#3b7fed" 
                    className={'progress-bar'}
                    strokeLinecap={'square'}/>
                    <img src={logo} className={'home-logo'} alt={'home logo'}
                />
                {this.renderForm(this.state.progress, this.changeFormData)}
            </form>
        </React.Fragment>
        )
    }

}

export default SignIn;