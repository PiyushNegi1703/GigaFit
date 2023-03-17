import { useEffect, useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";
const Googleauth = () => {

  const [loading,setLoading] = useState(false)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate();
  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id:"1078013588858-6bn9a11aogvv9t561i1c6ufvt1oqddrs.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signindiv"), {
      theme: "outline",
      size: "xx-large",
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
    localStorage.setItem('user', JSON.stringify(jsondata))

            // Update the Auth Context
    dispatch({type: 'LOGIN', payload: jsondata})
    setLoading(false)
    // console.log(state)
    navigate("/home");
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
    > <h4>{loading===true?"Signing you in...":""}</h4>
      <div id="signindiv"></div>
    </div>
  );
};

export default Googleauth;