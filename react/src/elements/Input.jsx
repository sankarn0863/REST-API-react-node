import React from 'react';
import '../css-pack/Work.css';

export default class Input extends React.Component {


    constructor(props) {
    super(props);
    this.state = {
      friends: [],
      id: '',
      price: '',
      notes: ''
    };
    this.create = this.create.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  create(e) {
    e.preventDefault();
    console.log(this.state.id);
    console.log(this.state.price);

// Program Logic

    var  priceVal = this.state.price;
     function calculateRewards(priceVal) {      
          if (priceVal >=50 && priceVal < 100) {
              return priceVal-50;
          } else if (priceVal >100){
              return (2*(priceVal-100) + 50);
          }
            return 0;
          }

    console.log(calculateRewards(priceVal));  
    
//3 Months reward
    class Transaction {
      constructor(price) {
          this.price = price;
          this.rewards = calculateRewards(price);
          this.transactionDate = new Date();
      }
  }
  
  class TransactionList {
      constructor() {
          this.list = [];
      }
  
      getLast3MonthsList() {
          var today = new Date();
          const threeOldDate = today.setMonth(today.getMonth() - 3);
          let filteredList = this.list.filter(trans => trans.transactionDate > threeOldDate);
          return filteredList.sort((a,b) => b.transactionDate - a.transactionDate);
      }
  
      getAllTransactions() {
          return this.list.sort((a,b) => b.transactionDate-a.transactionDate);
      }
  
      addTransaction(price) {
          const transaction = new Transaction(price);
          this.list.push(transaction);
      }
  
      getTotalRewards() {
          return this.list.length ? this.list.reduce((acc,key)=>key.rewards+acc, 0) : 0;
      }
  
      rewardPerMonth() {
          let last3MonthRewardsInDesc = [];
          for(let i=0; i<3; i++) {
              let filteredList = this.list.filter(trans => trans.transactionDate.getMonth() == (new Date).getMonth() - i );
              last3MonthRewardsInDesc[i] = filteredList.reduce((acc,key)=>key.rewards+acc,0);
          }
          return last3MonthRewardsInDesc;
      }
  }
    

  // REST API POST METHOD

    fetch("http://localhost:8000/api/company", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        id: this.state.id,
        price: this.state.price,
        rewards: calculateRewards(priceVal)
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      window.location.reload(true);
    })
    .catch(err => {
      console.log(err);
    });
  }
  
  handleChange(changeObject) {
    this.setState(changeObject)
  }
  render() {
    return (
            <div className="column">
              <form>
              <div class="box">
                 Recipt No:

                <label htmlFor="id">
                  <input
                    name="id"
                    id="id"
                    type="text"
                    className="form-control"
                    value={this.state.id}
                    onChange={(e) => this.handleChange({ id: e.target.value })}
                    required
                    />
                </label>
                </div>
                <div class="box">
                Price in USD:
                <label htmlFor="price">
                  <input
                    name="price"
                    id="price"
                    type="text"
                    className="form-control"
                    value={this.state.price}
                    onChange={(e) => this.handleChange({ price: e.target.value })}
                    required
                    />
                </label>
                </div>
                <button className="btn" type='button' onClick={(e) => this.create(e)}>
                  Submit
                </button>
              </form>
            </div>
    );
  }

}











