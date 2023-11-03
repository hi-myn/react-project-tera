import React from "react";
import logo from "../../images/logo.svg";
import MenuDrawer from "../molecules/MenuDrawer";

export default function Default(props) {
  //props é o objeto que contém todas as props que são passadas na instanciação do componente
  const [ open, setOpen ] = React.useState(false);

  return (
    <div className="wrapper">
      <MenuDrawer open={open} setOpen = {setOpen} />
      <div className="app-header">
        <div className="app-header__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <div className="app-header__menu">
          <i onClick={() => setOpen(true)} className="fa fa-bars"></i>
        </div>
      </div>

      {props.children}

      <div className="app-footer">Módulo React :: Full Stack Development</div>
    </div>
  );
}
