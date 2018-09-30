// import * as React from 'react';
// import SignIn from './step1';
// import Formsy from 'formsy-react';

// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);
//                 this.state = {
//                 progress: 0,
//             }
//     }

//     form = () => {
//         switch(this.state.progress) {
//             case 0:
//                 return(<Step1 />);
//             case 25:
//                 return(<span>In Progress...</span>);
//             default:
//                 return(<span>You've already registered!</span>);
//             }
//     }

// componentWillMount() {
// }

// render() {
//     return (
//         <Formsy 
//             onValidSubmit={this.submit} 
//             onValid={this.enableButton} 
//             onInvalid={this.disableButton}>
//             {this.form}
//             <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
//         </Formsy>
//         )
//     }
// }

// export default SignIn;

// // {switch(this.state.progress) {
// //     case 0:
// //         return(<Step1 />);
// //     case 25:
// //         return(<span>In Progress...</span>);
// //     default:
// //         return(<span>You've already registered!</span>);
// //     }
// // }