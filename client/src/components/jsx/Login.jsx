import React,{ useState } from "react";
import FacebookLogin from 'react-facebook-login'
import {getLocalUser,setLocalUser,componentClicked } from "../../actions/login";
import { createAccount } from '../../actions/accounts';
import FacebookAPIKey from '../../api/FacebookAPIKey';
import "../../index.css";

const apiKey = FacebookAPIKey();



function Login() 
{
  const [currentLoginData, setLoginDataState] = useState(getLocalUser());
  

  const responseFacebook = async (response) => 
  {
    const userData = await response;
    setLoginDataState(userData);
    setLocalUser(userData);
    //console.log('test');
    createAccount(response);
    window.location.reload();
  };

  const LoginButton = ({responseFacebook}) => (
  
    <FacebookLogin
      appId={apiKey}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      icon="fa-facebook"/>
    )


  return (

    <h1>
    {currentLoginData ? (<img id="loginImage" src={currentLoginData.picture.data.url} height={currentLoginData.picture.height} width={currentLoginData.picture.width} alt="avatar"/>) : (<LoginButton responseFacebook = {responseFacebook}/>)}             

</h1>
  );

}

export default Login;


