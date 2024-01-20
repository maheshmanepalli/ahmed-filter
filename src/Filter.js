import React, { useState, useEffect } from "react";
import Display from "./Display";
import data from './data.json';
import './styles/filterstyles.css'
// import chevron from './icons/chevron-down.svg'
const Filter = () => {
  const [age, setAge] = useState("");
  const [religion, setReligion] = useState('');
  const [caste,setCaste]=useState('')
  const [height, setHeight] = useState('');
  const [Occupation,setOccupation]=useState('')
  const[income,setIncome]=useState('')
  const[show,hide]=useState(false)
  const[status,setStatus]=useState('')
    useEffect(() => {
    console.log(age);
    console.log(religion);
  }, [age, religion,religion]);
  // nav small
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const navItems = ['All', 'Favorite', 'intrests'];

  return (
    <div className="d-flex container" >
      
      {/* filters */}
  <div className="left-filter rounded position-fixed ">

 <h5 className="filterhead rounded-top">Advance Search</h5>
   <div className="inner">
   <span>Basic Details</span>
        {/* age filter */}
        <div className="">
        <select 
        // style={{height:'20px'}}
          defaultValue={""}
          className="form-select filter "
          aria-label="Default select example"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        >
          <option value="">select age</option>
          <option value="18-21">18-21</option>
          <option value="21-24">21-24</option>
          <option value="24-27">24-27</option>
          <option value="27-30">27-30</option>
          <option value="30">30+</option>
        </select>
      </div>
           {/* height filter */}
           <div>
        <select
          defaultValue={""}
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        >
          <option value="">Select Height</option>
          <option value="5'0-5'5">5'0"-5'5"</option>
          <option value="5'5-5'10">5'5"-5'10"</option>
          <option value="5'10-6'0">5'10"-6'0"</option>
          <option value="6'0+">6'0"+</option>
        </select>
      </div>
      {/* religion filter */}
      <span>Caste & Religion Details</span>
      <div>
        <select
          defaultValue={""}
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setReligion(e.target.value);
          }}
        >
          <option value="">Select religion</option>
          {[...new Set(data.profiles.map(val => val.Religion))].map(rel => (
            <option key={rel} value={rel}>{rel}</option>
          ))}
        </select>
      </div>
      {/* cast filter */}
      <div>
        <select
          defaultValue={""}
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setCaste(e.target.value);
          }}
        >
          <option value="">Select Caste</option>
          {[...new Set(data.profiles.map(val => val.Caste))].map(rel => (
            <option key={rel} value={rel}>{rel}</option>
          ))}
        </select>
      </div>
     
 
      {
        show?(
          <>
           {/* occupation filter */}
     
      <div>
        <select
          defaultValue={""}
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setOccupation(e.target.value);
          }}
        >
          <option value="">Select Occupation</option>
          {[...new Set(data.profiles.map(val => val.Occupation))].map(rel => (
            <option key={rel} value={rel}>{rel}</option>
          ))}
        </select>
      </div>
      {/* status filter */}
      <div>
      <select
          defaultValue={""}
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option value="">Select Status</option>
          {[...new Set(data.profiles.map(val => val.status))].map(rel => (
            <option key={rel} value={rel}>{rel}</option>
          ))}
        </select>
      </div>
  
      {/* income filter */}
      <div className="">
      <select
          defaultValue={""}
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setIncome(e.target.value);
          }}
        >
          <option value="">Select Income</option>
          <option value="0-50000">>50000$</option>
          <option value="50000-100000">50,000-100,000$</option>
          <option value="100000-150000">100000-150000$</option>
          <option value="150000">>150000$</option>
        </select>
      </div>
          </>
        ):(null)
      }
<button className="rounded" onClick={() => hide(!show)}>
  {show ? (
    <span>
      view less <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8536 6.85355C12.6583 7.04882 12.3417 7.04882 12.1464 6.85355L6.5 1.20711L0.853554 6.85355C0.658291 7.04882 0.341709 7.04882 0.146446 6.85355C-0.0488157 6.65829 -0.0488157 6.34171 0.146446 6.14645L6.14645 0.146447C6.34171 -0.0488157 6.65829 -0.0488157 6.85355 0.146447L12.8536 6.14645C13.0488 6.34171 13.0488 6.65829 12.8536 6.85355Z" fill="white"/>
</svg>
    </span>
  ) : (
   
    <span>view more <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.64645 5.14645C1.84171 4.95118 2.15829 4.95118 2.35355 5.14645L8 10.7929L13.6464 5.14645C13.8417 4.95118 14.1583 4.95118 14.3536 5.14645C14.5488 5.34171 14.5488 5.65829 14.3536 5.85355L8.35355 11.8536C8.15829 12.0488 7.84171 12.0488 7.64645 11.8536L1.64645 5.85355C1.45118 5.65829 1.45118 5.34171 1.64645 5.14645Z" fill="white"/>
    </svg></span>
  )}
</button>
 </div>
   </div>
      <div className="" >
        {/* left nav  */}
      
          <div className="mt-4 display-component ">
          <div>
        <nav className="navbar rounded">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`nav-item ${selectedItem === index ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            <a href="#" className="nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
        </div>
          <div className="mt-5">
          <Display selectedAge={age} selectedReligion={religion} selectedCaste={caste} selectedHeight={height} selectedOccupation={Occupation} selectedIncome={income} selectedStatus={status}/>

          </div>
          </div>
      </div>
    </div>
  );
};

export default Filter;
