import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import CurrentBank from './bankOfisplaysCurrentBank';
import UpdateBank from './updateBank';

export default class BankInfoDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChanging: false,
            newCurrentBank: {}
        };

        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
        this.setState({ isChanging: this.state.isChanging ? false : true });
    }

    render() {
      return (
        <div className='bank-info'>
        <ButtonGroup>
            <Button onClick={this.handleClick}>Редактировать</Button>
            <Button 
                onClick={() => {
                    localStorage.removeItem(this.props.currentBank.name);
                    window.location.reload();
                }}
            >
                Удалить
            </Button>
        </ButtonGroup>
        {
            this.state.isChanging ? 
            <UpdateBank currentBank={this.props.currentBank} />: 
            <CurrentBank currentBank={this.props.currentBank} />
        }
        </div>
      );
    }
}