import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`;
  const request = new XMLHttpRequest();
  request.open('GET', api);
  request.onload = () => (request.status === 200) ?
    resolves(JSON.parse(request.response).results) :
    rejects(Error(request.statusText));

  request.onerror = err => rejects(err);
  request.send();

});

const Member = ({ email, picture, name, location }) =>
  <div className="member">
    <img src={picture.thumbnail} all="" />
    <h1>{name.first} {name.last}</h1>
    <p>
      <a href={"mailto:" + email}>{email}</a>
    </p>
    <p>{location.city}, {location.state}</p>
  </div>;

class App extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
      loaded: false,
      loading: false
    }
  }

  componentWillMount() {
    this.setState({loading: true});
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(obj => obj.results)
      .then(data => this.setState({
          loaded: true,
          loading: false,
          data
      }))
  }

  render() {
    const { data, loading, loaded} = this.state;
    return (loading) ?
      <div>Loading...</div> :
      <ol className="people-list">
        {data.map((person, i) =>  {
          const {first, last} = person.name;
          return <li key={i}>{first} {last}</li>
        })}
      </ol>


  }
}

export default App;
