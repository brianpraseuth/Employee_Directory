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

render () {
  return (
    <>
    <Header />
    <Search />
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
