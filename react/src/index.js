import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Work from './components/Work'



const Routing = () => {
  return(
    <Router>
     <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Work" component={Work} />
      </Switch>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);