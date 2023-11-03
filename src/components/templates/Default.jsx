import React from "react";
import logo from "../../images/logo.svg";

export default function Default(props) {
  //props é o objeto que contém todas as props que são passadas na instanciação do componente
  return (
    <div class="wrapper">
      <div class="app-header">
        <div class="app-header__logo">
          <img src={logo} class="responsive" alt="" />
        </div>
        <div class="app-header__menu">
          <i class="fa fa-bars"></i>
        </div>
      </div>

      {props.children}

      <div class="app-footer">Módulo React :: Full Stack Development</div>
    </div>
  );
}
