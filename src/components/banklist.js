import React, { Component } from 'react';

export default class BankList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankList: null,
            nameOfBanks: [],
        }
        this.handleChangeName = this.handleChangeName.bind(this);
    }

  
    componentWillMount() {

        const list = [];
        let listIndex = 0;
        
        for (let bank in localStorage) {

            if (localStorage.hasOwnProperty(bank)) {

                const name = JSON.parse(localStorage[bank]).name;
                const bik = JSON.parse(localStorage[bank]).bik;
                
                list.push(<li key={listIndex++}>{name}</li>);
                
                this.state.nameOfBanks.push(name);
 
            }
        }
        this.setState({ bankList: list });
    }


    handleChangeName(e) {

        let newListIndex = 0;
        const updatedList = [];

        this.state.nameOfBanks.forEach(name => {
            const targetMatch = name.match(e.target.value);
            if (targetMatch) {
                const newItem = JSON.parse(localStorage.getItem(targetMatch.input));
                console.log(newItem);
                updatedList.push(<li key={newListIndex++}>{newItem.name}</li>);
            } 
        });

        this.setState({ bankList: updatedList });
    }

  
    componentDidMount() {

        const allBanks = document.querySelectorAll('li');

        allBanks.forEach(bank => {
            bank.addEventListener('click', this.props.onClick);
        });
    }


    componentDidUpdate() {

        const allBanks = document.querySelectorAll('li');

        allBanks.forEach(bank => {
          bank.addEventListener('click', this.props.onClick);
        });
    }
  
   
    render() {
        return (
            <div>
                <br/>
                <input type='text' id='search-bank' onChange={this.handleChangeName}></input>
                <label for='search-bank'>Поиск по имени</label><br/>
                <ul>{this.state.bankList}</ul>
            </div>
        );
    }
}