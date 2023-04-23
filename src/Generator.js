import React, {Component} from 'react';
import Cover from './component/cover'
import './style/generator.css';

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
      job1: '',
      company1: '',
      date1: '',
      role1: '',
      jobCount: 1,
      school1: '',
      attended1: '',
      field1: '',
      schoolCount: 1
    };

    this.cvProps = {};
  }

  handleChange = (e) => {
    const clone = structuredClone(this.state);
    clone[e.target.name] = e.target.value;
    this.setState(clone);
    console.log(this.state);
  }

  infoSubmit = () => {
    this.cvProps = structuredClone(this.state);
    this.forceUpdate();
  }

  renderJobFields = () => {
    const array = [];
    for (let i = 1; i <= this.state.jobCount; i++) {
      const element = <div className="field">{"Job "+i}
      <input type='text' name={"job"+i} placeholder='Job title' onChange={this.handleChange}></input>
      <input type='text' name={"company"+i} placeholder='Company' onChange={this.handleChange}></input>
      <input type='text' name={"date"+i} placeholder='Date' onChange={this.handleChange}></input>
      <textarea rows="3" name={"role"+i} placeholder='Role description' onChange={this.handleChange}></textarea>
    </div>;
      array.push(element);
    }
    return array
  }

  addJob = () => {
    const clone = structuredClone(this.state);
    clone.jobCount += 1;
    clone['job' + clone.jobCount] = '';
    clone['company' + clone.jobCount]= '';
    clone['date' + clone.jobCount] = '';
    clone['role' + clone.jobCount]= '';
    this.setState(clone);
  }

  renderSchoolFields = () => {
    const array = [];
    for (let i = 1; i <= this.state.schoolCount; i++) {
      const element = <div className="field">{"School "+i}
        <input type='text' name={"school"+i} placeholder='Education' onChange={this.handleChange}></input>
        <input type='text' name={"attended"+i} placeholder='Years attended' onChange={this.handleChange}></input>
        <input type='text' name={"field"+i} placeholder='Primary field' onChange={this.handleChange}></input>
    </div>;
      array.push(element);
    }
    return array;
  }

  addSchool = () => {
    const clone = structuredClone(this.state);
    clone.schoolCount += 1;
    clone['school' + clone.schoolCount];
    clone['attended' + clone.schoolCount];
    clone['field' + clone.schoolCount];
    this.setState(clone);
  }

  render() {

    return (
      <div id="app">
        <div id='generator'>Personal Info
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
          <div className="spacing">&nbsp;</div>
        </div>
      <Cover cvProps={this.cvProps} />
      </div>
    );
  }
}

export default Generator;