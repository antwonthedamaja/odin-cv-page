import React, {Component} from 'react';

class Generator extends Component {
  constructor() {
    super();

    this.state = {
      fname: '',
      lname: '',
      title: '',
      address: '',
      tel: '',
      email: '',
      desc: '',
      job: '',
      company: '',
      date: '',
      jobArray: [],
      school: '',
      attended: '',
      field: '',
      secSchool: '',
      secAttended: '',
      secField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  infoSubmit = (e) => {

  }

  jobSubmit = (e) => {

  }

  schoolSubmit = (e) => {

  }

  removeJob = (e) => {

  }

  render() {
    return (
      <div id='generator'>
        <input type='text' name="fname" placeholder='First Name' onChange={this.handleChange}></input>
        <input type='text' name="lname" placeholder='Last Name' onChange={this.handleChange}></input>
        <input type='text' name="title" placeholder='Profession title' onChange={this.handleChange}></input>
        <input type='text' name="address" placeholder='Street Address' onChange={this.handleChange}></input>
        <input type='text' name="tel" placeholder='Phone Number' onChange={this.handleChange}></input>
        <input type='text' name="email" placeholder='Email Address' onChange={this.handleChange}></input>
        <textarea rows="3" name="desc" placeholder='Description' onChange={this.handleChange}></textarea>
        <button type='button' onClick={this.infoSubmit}>Update personal details</button>
        <input type='text' name="job" placeholder='Job title' onChange={this.handleChange}></input>
        <input type='text' name="company" placeholder='Company' onChange={this.handleChange}></input>
        <input type='text' name="date" placeholder='Date' onChange={this.handleChange}></input>
        <textarea rows="3" name="role" placeholder='Role description' onChange={this.handleChange}></textarea>
        <button type='button' id="job" onClick={this.jobSubmit}>Add Job</button>
        <button type='button' id="remove-job" onClick={this.removeJob}>Remove Last Added Job</button>
        <input type='text' name="school" placeholder='Education' onChange={this.handleChange}></input>
        <input type='text' name="attended" placeholder='Years attended' onChange={this.handleChange}></input>
        <input type='text' name="field" placeholder='Primary field' onChange={this.handleChange}></input>
        <input type='text' name="secSchool" placeholder='Secondary Education' onChange={this.handleChange}></input>
        <input type='text' name="secAttended" placeholder='Years attended' onChange={this.handleChange}></input>
        <input type='text' name="secField" placeholder='Primary field' onChange={this.handleChange}></input>
        <button type='button' onClick={this.schoolSubmit}>Add School(s)</button>
      </div>
    );
  }
}

export default Generator;