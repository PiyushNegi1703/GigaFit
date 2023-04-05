import { useEffect, useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";
const Googleauth = () => {

  const [loading,setLoading] = useState(false)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();
  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signindiv"), {
      theme: "dark",
      width: "280px",
      height: "100px",
      size: "large",
    });
  });

  async function handleCredentialResponse(response) {
    console.log(response.credential)
    setLoading(true)
    
    const fetchdata = await fetch(`${process.env.REACT_APP_API}/user/googleauth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: response.credential,
      }),
    });
    const jsondata = await fetchdata.json();
    // console.log(jsondata);
    console.log(jsondata)
    sessionStorage.setItem('user', JSON.stringify(jsondata))

    // Update the Auth Context
    dispatch({type: 'LOGIN', payload: jsondata})
    setLoading(false)
    // console.log(state)
    navigate("/home");
  }

  return (
    <>
      <h4>{loading===true?"Signing you in...":""}</h4>
      <div id="signindiv"></div>
    </>
  );
};

export default Googleauth;