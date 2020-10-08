import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'

//this is different domain
window.closeSecondFrame = () => {
  alert("closing Iframe")
  document.getElementsByTagName("iframe")[1].remove()

}

//this is same domain
const closeFirstFrame = () => {
  window.parent.document.getElementById("firstFrame").innerHTML=""
}



const TestComp = () => {
  return <div style={{color:"white"}}><h1>this is of the same domain</h1><button onClick={closeFirstFrame}><h2>CLose Me</h2></button></div>
}

const HomeComp = () => {
  return <header className="App-header">
    <div id="firstFrame">  <iframe style={{ width: 700, height: 500 }} src="http://localhost:3000/test" /></div>
    <div id="secondFrame">  <iframe style={{ width: 700, height: 500 }} src="http://localhost:3001" /></div>
  </header>

}
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/test" ><TestComp /></Route>

          <Route exact path="/" ><HomeComp /></Route>        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
