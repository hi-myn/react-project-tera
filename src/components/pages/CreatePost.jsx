import React from "react";
import logo from "../../images/logo.svg";


export default function CreatePost() {
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

      <div class="create-post">
        <h1>Criar</h1>

        <form class="create-post__form">
          <div class="create-post__form-name">
            <label htmlFor="name">Título</label>
            <input type="text" id="name" name="title" />
          </div>
          <div class="create-post__form-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea name="content" id="content"></textarea>
          </div>
          <button class="button-primary">Salvar</button>
        </form>
      </div>

      <div class="app-footer">Módulo React :: Full Stack Development</div>
    </div>
  );
}
