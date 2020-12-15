import React, { Component } from 'react';
import './App.css';
import EmTable from './components/EmTable';
import EmCell from './components/EmCell';
import Header from './components/Header';
import Search from './components/Search';
import friends from "./friends.json";

class App extends Component {

state = {
  friends
};


sortFriends = () => {
  const sorted = this.state.friends.sort((a, b) => a.name.localeCompare(b.name));
  this.setState({friends: sorted})
}


render () {
  return (
    <>
    <Header />
    <Search 
      handleSort = {
        this.sortFriends
      }
    />
    <EmTable />
    {friends.map(friend => (
      <EmCell
            id={friend.id}
            image={friend.image}
            name={friend.name}
            email={friend.email}
            phone={friend.phone}
            dob={friend.dob}
     />
    ))}
    </>
  )}}

export default App;
