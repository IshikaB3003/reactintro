import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name='Ishika';
  // const loading=true;
  // if(loading){
  //   return <h1>Loading!</h1>
  // }
  const isLoggedIn=true;
  return (
     <div> 
       {/* if we don't want to encapsulate we can use fragments.  */}
       {/* <React.Fragment>  */}
    <h1>This will throw an error because we can only return one div. We need to wrap this, encapsulate this by creating a div around this and app div</h1>
    <div className="App">
      {/* components need to start w capital letter "app" for eg won't work */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {/* Hello World! */}
          {/* Hey {isLoggedIn ? name : 'World'} */}
          {!isLoggedIn && <p>'WORLD'</p>}
          {isLoggedIn && <p>{name}</p>}

          {/* true && (some exp), here the exp will be returned*/}
          {/* For false && some exp, false will be returned */}

          {/* Hie {new Date().toDateString()} */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </div>
    /* </React.Fragment> */
  );
}

export default App;
