import React from 'react';
import Box from '@material-ui/core/Box';
import './LoginStyle.css' ;

function Login () {
  
     return(
           <div>
                 <label className="letterPublicSan" >Usuario : </label> 
                 <input name="txtUsuario"></input> 
                 <label className="letterPublicSan" >Contraseña: </label>
                <input type="password" name="txPassword"></input>
           </div>
      )
     

}
export default Login;