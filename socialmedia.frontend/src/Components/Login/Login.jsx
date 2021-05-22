import React from 'react';
import './LoginStyle.css' ;

function Login () {
  
     return(
         
           <div>
                 <section>
                       <div class="row">
                  <div className="col-lg-6">

                  </div>

                  <div className="colorfondo col-lg-6">
                        <label className="letterPublicSan" >Usuario : </label> <br/>
                        <input name="txtUsuario"></input>  <br/>
                        <label className="letterPublicSan" >Contraseña: </label> <br/>
                        <input type="password" name="txPassword"></input> <br/>
                        <button>Guardar</button>
                  </div>
                  </div>
                </section>
           </div>
      )
     

}
export default Login;