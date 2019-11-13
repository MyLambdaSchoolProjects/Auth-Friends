import React from 'react';
import axios from "axios";
import {axiosWithAuth} from './friendsList'

class NewFriend extends React.Component{
    state = {
        newFriend :{
            id: Date.now(),
            name: '',
            age: 0,
            email: ''
        }
    };

    handleChange = e =>{
        this.setState({
            newFriend:{
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    addFriend = e =>{
        e.preventDefault();
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", this.state.newFriend)
            .then(res => {
                console.log("post", res);
                const { data } = res;
                this.setState({...this.state, newFriend: data});
            });
    };


    render(){
        return(
            <div style={{width: '20%',margin: '0 auto'}}>
                <form onSubmit={this.addFriend} style={{display: 'flex', flexDirection: 'column'}}>
                    <input 
                        type='text' 
                        placeholder='Name' 
                        name='name'
                        value={this.state.newFriend.name}
                        onChange={this.handleChange}/>
                        <input 
                        type='number' 
                        placeholder='Age' 
                        name='age'
                        value={this.state.newFriend.age}
                        onChange={this.handleChange}
                        style={{marginTop: '1rem'}}/>
                        <input 
                        type='text' 
                        placeholder='Email' 
                        name='email'
                        value={this.state.newFriend.email}
                        onChange={this.handleChange}
                        style={{marginTop: '1rem'}}/>
                        <button style={{marginTop: '1rem'}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewFriend;