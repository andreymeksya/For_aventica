import React from 'react';


class Auth extends React.Component {
  render() {
      const _this = this;
      function authFunc(){
          let inputValue = document.getElementById("inpName").value
          if(inputValue.replace(/\s/g, "").length > 2 && inputValue.length < 20 ){
            _this.props.updateName(inputValue)
          }else{
            document.getElementById("authCorrect").innerHTML = "Некорректные данные";
          }
      }

      
    return (
      <div>
        <div className="divBlock">Введите имя для аутентификации</div>
        <div className="divBlockAuth">
          <div>
            <input id="inpName"/>
            <button className="divBlockBtn" onClick={authFunc}>Войти</button>
            <div id="authCorrect"></div>
          </div>       
        </div>
      </div>
    );
  }
}

export default Auth;