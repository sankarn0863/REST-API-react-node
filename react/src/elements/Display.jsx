import React from 'react';
import '../css-pack/Work.css';

export default class Display extends React.Component {
  state = {
  todos: []
}

// API GET METHOD

componentDidMount() {
  fetch('http://localhost:8000/api/company') //Connection to Backend
  .then(res => res.json())
  .then((data) => {
    this.setState({ todos: data })
    console.log(this.state.todos)
  })
  .catch(console.log)
}
    render(){
        return(
            <header>

                 <div className="result-display">
                    
                 <div class="container">
      <div class="portlet box blue">
        <div class="portlet-title">
        </div>
              <div class="venu">
        <div class="portlet-body">
          <div class="mycss">
            <table class="table">
              <thead>
                <tr>
                  <td><b> Receipt No</b></td>
                  <td><b> Price</b></td>
                  <td><b> Rewards</b></td>
                </tr>
              </thead>
              {this.state.todos.map((todo) => (
                <tr>
                  <td> {todo.id}</td>
                  <td> {todo.price}</td>
                  <td> {todo.rewards}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
 </div>
  </header>
        )
    }
}
