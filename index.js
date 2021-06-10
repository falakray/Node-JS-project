import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

// const element=(
//   <div className= "testClass">
//       <h1 className= "h1">Welcome to Choose your Plan.</h1>
//       <p>Please select the following Plans:</p>

//       <p>• Standard Plan 1</p>
//       <p>• Premium Plan 1</p>

//       <br></br>

//       <button>Proceed.</button>
//       <br></br>
//   </div>
// );

ReactDOM.render(<App/>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
