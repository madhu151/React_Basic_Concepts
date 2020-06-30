
import React, { Component } from 'react';
import './App.css';
import Form from './FormValidations/Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  render() {
    return (
      <div>
       
      </div>);
  }
}

export default App;

//hooks..................
// import React, { Component, useState, useEffect } from 'react';
// import './App.css';


// function App() {

//   const [buttonText, setButtonText] = useState('do smthng');
//   useEffect(() => {
//     setButtonText('comp did mount')
//   }, [])
//   function updateButtonText() {
//     setButtonText("Loading...")
//     window.setTimeout(
//       () => setButtonText("Do set time out"),
//       2000
//     );
//   }

//   return (
//     <div className="App">
//       <button onClick={updateButtonText}>{buttonText}</button>

//     </div>
//   );
// }


// export default App;


//REFS Concept
// import React, { Component } from 'react';
// import ParentComponent from './REFS/parentComponent';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }
//   handleClick() {

//   }
//   render() {
//     return (
//       <>
//         <ParentComponent></ParentComponent>
//       </>
//     );
//   }
// }

// export default App;




// Error Handling.......................
// import React, { Component } from 'react';
// import './App.css';
// import ErrorBoundary from './ErrorBoundaryConcept/errorBoundary';
// import UserInfo from './ErrorBoundaryConcept/userInfo';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <ErrorBoundary>
//           <UserInfo name="mastan"></UserInfo>
//         </ErrorBoundary>
//         <ErrorBoundary>
//           <UserInfo name="manvy"></UserInfo>
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

// export default App;
