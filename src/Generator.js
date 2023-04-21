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
      role: '',
      jobCount: 0,
      school: '',
      attended: '',
      field: '',
      schoolCount: 0
    };

  }

  handleChange = (e) => {
    const clone = structuredClone(this.state);
    clone[e.target.name] = e.target.value;
    this.setState(clone);
    console.log(this.state);
  }

  infoSubmit = (e) => {

  }

  renderJobFields = () => {
    const array = [];
    for (let i = 0; i <= this.state.jobCount; i++) {
      const element = <div className="field">{"Job " + (i+1)}
      <input type='text' name={"job" + (i+1)} placeholder='Job title' onChange={this.handleChange}></input>
      <input type='text' name={"company" + (i+1)} placeholder='Company' onChange={this.handleChange}></input>
      <input type='text' name={"date" + (i+1)} placeholder='Date' onChange={this.handleChange}></input>
      <textarea rows="3" name={"job" + (i+1)} placeholder='Role description' onChange={this.handleChange}></textarea>
    </div>;
      array.push(element);
    }
    return array
  }

  addJob = (e) => {
    const clone = structuredClone(this.state);
    clone.jobCount += 1;
    this.setState(clone);
  }

  renderSchoolFields = () => {
    const array = [];
    for (let i = 0; i <= this.state.schoolCount; i++) {
      const element = <div className="field">{"School " + (i+1)}
        <input type='text' name="school" placeholder='Education' onChange={this.handleChange}></input>
        <input type='text' name="attended" placeholder='Years attended' onChange={this.handleChange}></input>
        <input type='text' name="field" placeholder='Primary field' onChange={this.handleChange}></input>
    </div>;
      array.push(element);
    }
    return array
  }

  addSchool = () => {
    const clone = structuredClone(this.state);
    clone.schoolCount += 1;
    this.setState(clone);
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
        <button type='button' onClick={this.infoSubmit}>Update details</button>
        {this.renderJobFields()}
        <button type='button' onClick={this.addJob}>Add More Experience?</button>
        {this.renderSchoolFields()}
        <button type='button' onClick={this.addSchool}>Add More Education?</button>
      </div>
    );
  }
}

export default Generator;