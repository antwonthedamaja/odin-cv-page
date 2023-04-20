import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fname: '',
      lname: '',
      title: '',
      address: '',
      tel: '',
      email: '',
      desc: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  infoSubmit = (e) => {

  }

  render() {
    return (
      <div id="app">
        <div id='generator'>
          <input type='text' name="fname" placeholder='First Name' onChange={this.handleChange}></input>
          <input type='text' name="lname" placeholder='Last Name' onChange={this.handleChange}></input>
          <input type='text' name="title" placeholder='Profession title' onChange={this.handleChange}></input>
          <input type='text' name="address" placeholder='Street Address' onChange={this.handleChange}></input>
          <input type='text' name="tel" placeholder='Phone Number' onChange={this.handleChange}></input>
          <input type='text' name="email" placeholder='Email Address' onChange={this.handleChange}></input>
          <textarea rows="5" id="desc" name="desc" placeholder='Description' onChange={this.handleChange}></textarea>
          <button type='button' onClick={this.infoSubmit}>Update personal details</button>
        </div>
        <div id='cv'></div>
      </div>
    );
  }
}

export default App;