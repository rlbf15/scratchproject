import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';


// const ConfirmEmployer = () => {
//   // const [ employerID, setEmployerID ] = useState('');
//   // const [ password, setPassword ] = useState('');

//   // const handleClick = (e) => {

//   // }
//   return (
//       <div id= 'confirmEmployer'>
//           <h3>Please enter your Employer ID:</h3>
//       <input type='text' placeholder='Employer ID' />
//       <Link to='/graph'>
//         <button 
//           // onClick={handleClick} 
//           id="confirmSubmit">SUMBIT
//         </button>
//       </Link>
//       </div>
//   )
// }

// export default ConfirmEmployer


const ConfirmEmployer = (props) => {
  const [ employerID, setEmployerID ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ redirect, setRedirect ] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log('clicked');
    e.preventDefault();
    // const response = await fetch ('http://localhost3000/graph',
    // {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({employerID, password})
    // })

    // const parsedData = await response.json();
    // parsedData.message === 'verified' ? setRedirect(true) : null

    // useEffect(()=> {
    //   if (redirect) {
    //     navigate('/')
    //   }
    // }, 
    // [redirect])
    <Link to='/graph'></Link>
  };

  return (
    <div id= 'confirmEmployer'>
      <h3>Please enter your Employer ID:</h3>
      <form className='employerLogin' onSubmit={handleSubmit}>
        <input
          placeholder='Enter your Employer ID'
          value={employerID}
          onChange={(e) => setEmployerID(e.target.value)}
          type="text" 
        />
        <input
          type='password'
          placeholder='enter your password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button id="confirmSubmit">
          Login
        </button>
      </form>
    </div>
  )
}

export default ConfirmEmployer;