import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import Button from './Button.js'
import { 
    Switch, 
    BrowserRouter as Router, 
    Route 
 } from 'react-router-dom';

import './App.css';

const Home = () => (
  <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Tryst
         </p>
         <body className="body">
            Dating without the hassle
            <Link to='/about'>Go to about</Link>
         </body>
      </header></div>
)
const About = () => (<div><h1>About</h1><Link to = '/'> Go home </Link></div>)
export class App extends React.Component{

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}




// function App() {
//   return (
    // <div className="App">
    //   <header className="header">
    //     <img src={logo} className="logo" alt="logo" />
    //     <p>
    //       Tryst
    //      </p>
    //      <body className="body">
    //         Dating without the hassle
    //      </body>
    //   </header>

//       {/* <button onClick={(e) => this.handleClick(e)}>
//         Login
//       </button>
//       <button onClick={signup}>
//         Sign up 
//       </button> */}
//     </div>
//   );
// }

export default App;
