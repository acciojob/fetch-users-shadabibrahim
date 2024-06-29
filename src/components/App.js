import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from "react";
import './../styles/App.css';
import Axios from 'axios';
import DispalyUserData from './Display';
// import { Table } from 'antd';
// import { fetchUser } from "./fetchUser";

const App = () => {


  const [userInfo, setuserInfo] = useState([]);
  const [disp, setDisp] = useState(false);
  const getUser = async () => {
    try {
      const response = await Axios({
        method: 'GET',
        url: 'https://reqres.in/api/users'
      })
      // console.log(response.data.data)
      setuserInfo(response.data.data)

    } catch (error) {
      alert(error.message)
    }

  }
  useEffect(() => {
    getUser()
  }, [])

  const handleClick = () => {
    setDisp(true)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <button className=".btn" onClick={handleClick} >Get User List</button>
      {disp ? <DispalyUserData userInfo={userInfo} /> : <span><h5>No data found to be display.</h5></span>}

    </div>
  )
}

export default App
