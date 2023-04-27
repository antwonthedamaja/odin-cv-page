import React, {useState} from 'react';
import Cover from './component/Cover';
import './style/generator.css';

const Generator = () => {
  const [state, setState] = useState({
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
  });

  function handleChange(e) {
    const clone = structuredClone(state);
    clone[e.target.name] = e.target.value;
    setState(clone);
  }

  function addJob() {
    const clone = structuredClone(state);
    clone.jobCount += 1;
    clone['job' + clone.jobCount] = '';
    clone['company' + clone.jobCount] = '';
    clone['date' + clone.jobCount] = '';
    clone['role' + clone.jobCount] = '';
    setState(clone);
  }

  function addSchool() {
    const clone = structuredClone(state);
    clone.schoolCount += 1;
    clone['school' + clone.schoolCount] = '';
    clone['attended' + clone.schoolCount] = '';
    clone['field' + clone.schoolCount] = '';
    setState(clone);
  }
  
  function renderJobFields() {
    const array = [];
    for (let i = 1; i <= state.jobCount; i++) {
      const element = <div className="field">{'Job ' + i}
      <input type='text' name={'job' + i} placeholder='Job title' onChange={handleChange}></input>
      <input type='text' name={'company' + i} placeholder='Company' onChange={handleChange}></input>
      <input type='text' name={'date' + i} placeholder='Date' onChange={handleChange}></input>
      <textarea rows="3" name={'role' + i} placeholder='Role description' onChange={handleChange}></textarea>
    </div>;
      array.push(element);
    }
    return array
  }
  
  function renderSchoolFields() {
    const array = [];
    for (let i = 1; i <= state.schoolCount; i++) {
      const element = <div className="field">{'School ' + i}
        <input type='text' name={'school' + i} placeholder='School' onChange={handleChange}></input>
        <input type='text' name={'attended' + i} placeholder='Years attended' onChange={handleChange}></input>
        <input type='text' name={'field' + i} placeholder='Primary field' onChange={handleChange}></input>
    </div>;
      array.push(element);
    }
    return array;
  }

  return (
    <div id="app">
      <div id='generator'>Personal Info
        <input type='text' name="fname" placeholder='First Name' onChange={handleChange}></input>
        <input type='text' name="lname" placeholder='Last Name' onChange={handleChange}></input>
        <input type='text' name="title" placeholder='Profession title' onChange={handleChange}></input>
        <input type='text' name="address" placeholder='Street Address' onChange={handleChange}></input>
        <input type='text' name="tel" placeholder='Phone Number' onChange={handleChange}></input>
        <input type='text' name="email" placeholder='Email Address' onChange={handleChange}></input>
        <textarea rows="3" id="desc" name="desc" placeholder='Description' onChange={handleChange}></textarea>
        {renderJobFields()}
        <button type='button' onClick={addJob}>Add Additional Experience</button>
        {renderSchoolFields()}
        <button type='button' onClick={addSchool}>Add Additional Education</button>
        <div className="spacing">&nbsp;</div>
      </div>
      <Cover props={state} />
    </div>
  );
}

export default Generator;