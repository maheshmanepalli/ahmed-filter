import React, { useState, useEffect } from 'react';
import data from './data.json';

const Display = ({ selectedAge, selectedReligion,selectedCaste,selectedHeight,selectedOccupation,selectedIncome ,selectedStatus }) => {
  const [api, setApi] = useState([]);

const subscriptionValue=true
const [premium,setPremium]=useState(null)


  useEffect(() => {
    if(subscriptionValue==false){
      setPremium({filter:"blur(4px)"})
    
    }
  
  
    let filteredProfiles = data.profiles;
      // status filter
    if(selectedStatus&&selectedStatus!==""){
      console.log(selectedStatus,"selected status")
      filteredProfiles=filteredProfiles.filter(profile=>profile.status===selectedStatus)
      console.log(filteredProfiles)
      // return filteredProfiles
    }
        // religion filter

    if (selectedReligion && selectedReligion !== '') {
      filteredProfiles = filteredProfiles.filter(profile => profile.Religion === selectedReligion);
    }

    // age filter
    if (selectedAge && selectedAge !== '') {
      filteredProfiles = filteredProfiles.filter(profile => {
        const age = parseInt(profile.age);

        if (selectedAge === '30') {
          return age >= 30;
        } else {
          const [minAgeStr, maxAgeStr] = selectedAge.split('-');
          const minAge = Number(minAgeStr);
          const maxAge = Number(maxAgeStr);
          return age >= minAge && age <= maxAge;
        }
      });
    }
    // caste filter
    if(selectedCaste&&selectedCaste!==""){
        filteredProfiles=filteredProfiles.filter(profile=>profile.Caste===selectedCaste)
    }
    // occupation filter
    if(selectedOccupation&&selectedOccupation!==""){
        filteredProfiles=filteredProfiles.filter(profile=>profile.Occupation===selectedOccupation)
    }
    // height filter
    if (selectedHeight && selectedHeight !== '') {
        filteredProfiles = filteredProfiles.filter(profile => {
          const height = profile.Height.split("'").map(part => parseInt(part)); // Split height into feet and inches, converting them to numbers
          const minHeight = height[0] * 12 + height[1]; // Convert feet to inches and add inches
          let selectedMinHeight, selectedMaxHeight;
  
          switch (selectedHeight) {
            case "5'0-5'5":
              selectedMinHeight = 5 * 12 + 0;
              selectedMaxHeight = 5 * 12 + 5;
              break;
            case "5'5-5'10":
              selectedMinHeight = 5 * 12 + 5;
              selectedMaxHeight = 5 * 12 + 10;
              break;
            case "5'10-6'0":
              selectedMinHeight = 5 * 12 + 10;
              selectedMaxHeight = 6 * 12;
              break;
            case "6'0+":
              selectedMinHeight = 6 * 12;
              selectedMaxHeight = Infinity;
              
              break;
            default:
              selectedMinHeight = 0;
              selectedMaxHeight = Infinity;
              break;
          }
  
          return minHeight >= selectedMinHeight && minHeight <= selectedMaxHeight;
        });
      }
// income filter
if (selectedIncome && selectedIncome !== '') {
  filteredProfiles = filteredProfiles.filter(profile => {
    const income = parseInt(profile['Annual Income']);
    let selectedMinIncome, selectedMaxIncome;

    switch (selectedIncome) {
      case "0-50000":
        selectedMinIncome = 0;
        selectedMaxIncome = 50000;
        break;
      case "50000-100000":
        selectedMinIncome = 50000;
        selectedMaxIncome = 100000;
        break;
      case "100000-150000":
        selectedMinIncome = 100000;
        selectedMaxIncome = 150000;
        break;
      case "150000":
        selectedMinIncome = 150000;
        selectedMaxIncome = Infinity;
        break;
      default:
        selectedMinIncome = 0;
        selectedMaxIncome = Infinity;
        break;
    }

    return income >= selectedMinIncome && income <= selectedMaxIncome;
  });
  // status filter
 

}
    setApi(filteredProfiles);
  }, [selectedAge, selectedReligion,selectedCaste,selectedHeight,selectedOccupation,selectedIncome,subscriptionValue,selectedStatus]);

  return (
    <div className=''>
      <div className='row d-flex justify-content-around flex-wrap'>
        {api.map(val => (
          <div key={val.Profile} className='col-6 card-6  rounded'>
            <div><img src={val.photos} className='rounded' alt="" /></div>
            <div className='inner-1' style={premium}>
            <h3>{val.FirstName} {val.SecondName}</h3>
            <p>{val.age}yrs | {val.Height}</p>
            <p>{val.Religion} |{val.Caste}</p>
            <p className='flow'>{val['Highest Education']}| {val.Occupation}</p>
            <text style={{marginBottom:'-100px'}}>view profile</text>
            </div>
            <div className='d-flex flex-column row-gap-5'>
              <span className='d-flex'>Premium <svg width="15" height="15" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0262 15.2607L12.3795 8.69702C12.3018 8.55595 12.1724 8.45051 12.0185 8.40286C11.8646 8.35521 11.6982 8.36906 11.5544 8.44149L8.22102 10.1082C8.14544 10.1458 8.07827 10.1983 8.02358 10.2626C7.9689 10.3269 7.92784 10.4017 7.90288 10.4823C7.87793 10.563 7.8696 10.6478 7.8784 10.7318C7.88721 10.8158 7.91296 10.8971 7.9541 10.9708L11.6602 17.6423C11.7503 17.8048 11.8823 17.9402 12.0425 18.0345C12.2026 18.1288 12.385 18.1786 12.5708 18.1786C12.6026 18.1786 12.6351 18.177 12.6668 18.1742C12.8682 18.1555 13.0598 18.0786 13.2183 17.953C13.3768 17.8274 13.4954 17.6584 13.5596 17.4666L13.8957 16.4578L14.786 16.7549C14.9851 16.8214 15.1997 16.8262 15.4016 16.7686C15.6035 16.711 15.7833 16.5937 15.9174 16.4322C16.0515 16.2706 16.1336 16.0723 16.153 15.8633C16.1725 15.6542 16.1282 15.4442 16.0262 15.2607Z" fill="#004225"/>
<path d="M9.09848 10.4827C9.07345 10.4021 9.03235 10.3274 8.97767 10.263C8.92298 10.1987 8.85584 10.1461 8.78028 10.1084L5.44695 8.44172C5.3031 8.36911 5.13668 8.35517 4.98275 8.40283C4.82882 8.4505 4.6994 8.55605 4.62176 8.69725L0.975091 15.2606C0.873031 15.4441 0.828804 15.6541 0.848209 15.8632C0.867614 16.0723 0.949745 16.2706 1.08383 16.4322C1.21792 16.5938 1.39771 16.7111 1.59962 16.7687C1.80153 16.8263 2.01614 16.8216 2.21532 16.7551L3.10562 16.4581L3.44172 17.4668C3.5059 17.6586 3.62446 17.8276 3.78297 17.9532C3.94148 18.0789 4.13309 18.1557 4.33448 18.1744C4.36622 18.1772 4.39877 18.1789 4.43051 18.1789C4.61619 18.1789 4.7985 18.1292 4.95849 18.035C5.11848 17.9407 5.25033 17.8054 5.34034 17.643L9.04721 10.971C9.08833 10.8973 9.11407 10.8161 9.12289 10.7321C9.1317 10.6482 9.1234 10.5634 9.09848 10.4827Z" fill="#004225"/>
<path d="M15.0201 6.30164L13.9003 5.18225C13.881 5.16291 13.8657 5.13994 13.8554 5.11465C13.845 5.08936 13.8398 5.06227 13.84 5.03496V3.4521C13.8396 3.06547 13.6858 2.69482 13.4124 2.42143C13.139 2.14804 12.7683 1.99424 12.3817 1.99377H10.7989C10.7715 1.99387 10.7444 1.98852 10.7191 1.97804C10.6938 1.96756 10.6708 1.95215 10.6516 1.93272L9.53177 0.813355C9.25817 0.540162 8.88733 0.386719 8.50069 0.386719C8.11405 0.386719 7.74321 0.540162 7.46961 0.813355L6.34986 1.93272C6.33057 1.95215 6.30762 1.96755 6.28233 1.97803C6.25705 1.9885 6.22993 1.99385 6.20256 1.99375H4.61967C4.23304 1.99422 3.86238 2.14802 3.58899 2.42141C3.3156 2.6948 3.1618 3.06546 3.16133 3.45209V5.03496C3.16156 5.06227 3.15636 5.08936 3.14602 5.11465C3.13568 5.13994 3.12042 5.16291 3.10112 5.18225L1.98132 6.30164C1.70813 6.57524 1.55469 6.94608 1.55469 7.33272C1.55469 7.71936 1.70813 8.0902 1.98132 8.3638L3.10112 9.4832C3.12042 9.50253 3.13568 9.52551 3.14602 9.55079C3.15636 9.57608 3.16156 9.60317 3.16133 9.63049V11.2133C3.1618 11.6 3.3156 11.9706 3.58899 12.244C3.86238 12.5174 4.23304 12.6712 4.61967 12.6717H6.20252C6.2299 12.6716 6.25702 12.6769 6.28232 12.6874C6.30761 12.6979 6.33057 12.7133 6.34986 12.7327L7.46965 13.8521C7.74331 14.1252 8.11413 14.2785 8.50073 14.2785C8.88733 14.2785 9.25815 14.1252 9.53182 13.8521L10.6516 12.7327C10.6708 12.7133 10.6938 12.6979 10.7191 12.6874C10.7444 12.6769 10.7715 12.6716 10.7989 12.6717H12.3817C12.7683 12.6712 13.139 12.5174 13.4124 12.244C13.6858 11.9706 13.8396 11.6 13.84 11.2134V9.63049C13.8398 9.60317 13.845 9.57608 13.8554 9.55079C13.8657 9.52551 13.881 9.50253 13.9003 9.4832L15.0201 8.3638C15.2933 8.0902 15.4467 7.71936 15.4467 7.33272C15.4467 6.94608 15.2933 6.57524 15.0201 6.30164Z" fill="#FFB000"/>
<path d="M8.22797 3.76552L7.56648 5.30897C7.54315 5.36343 7.50434 5.40984 7.45488 5.44246C7.40541 5.47508 7.34747 5.49246 7.28822 5.49246H5.97468C5.91194 5.49245 5.85074 5.51193 5.79956 5.54821C5.74837 5.58449 5.70972 5.63578 5.68895 5.69498C5.66818 5.75418 5.66631 5.81838 5.68361 5.87868C5.70091 5.93899 5.73652 5.99244 5.78551 6.03163L6.93218 6.94897C6.97931 6.98668 7.01409 7.03762 7.03206 7.09525C7.05002 7.15287 7.05036 7.21455 7.03301 7.27237L6.50744 9.02431C6.48913 9.08536 6.49056 9.15063 6.51152 9.21082C6.53247 9.27101 6.57189 9.32305 6.62416 9.35953C6.67642 9.396 6.73886 9.41506 6.80259 9.41397C6.86631 9.41288 6.92807 9.39172 6.97906 9.35348L8.32457 8.3444C8.37698 8.30508 8.44072 8.28383 8.50623 8.28383C8.57175 8.28383 8.63549 8.30508 8.6879 8.3444L10.0334 9.35349C10.0843 9.39172 10.1461 9.41289 10.2098 9.41398C10.2735 9.41506 10.336 9.39601 10.3883 9.35953C10.4405 9.32306 10.4799 9.27102 10.5009 9.21083C10.5219 9.15064 10.5233 9.08537 10.505 9.02432L9.9794 7.27238C9.96206 7.21456 9.96239 7.15288 9.98035 7.09526C9.99832 7.03763 10.0331 6.98669 10.0802 6.94898L11.2269 6.03164C11.2759 5.99245 11.3115 5.939 11.3288 5.87869C11.3461 5.81839 11.3442 5.75419 11.3235 5.69499C11.3027 5.63579 11.264 5.5845 11.2129 5.54822C11.1617 5.51194 11.1005 5.49246 11.0377 5.49247H9.72425C9.665 5.49247 9.60705 5.47509 9.55759 5.44247C9.50813 5.40985 9.46932 5.36344 9.44598 5.30898L8.7845 3.76553C8.76116 3.71107 8.72236 3.66465 8.6729 3.63204C8.62343 3.59942 8.56549 3.58203 8.50624 3.58203C8.44699 3.58203 8.38904 3.59942 8.33958 3.63203C8.29011 3.66465 8.25131 3.71106 8.22797 3.76552Z" fill="white"/>
</svg></span>
<div className='d-flex flex-column row-gap-1'>
<button className='rounded'>Intrested</button>
<button className='rounded'>Favorite</button>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
