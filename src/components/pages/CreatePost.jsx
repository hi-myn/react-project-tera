import React from "react";
import Default from "../templates/Default";

export default function CreatePost() {
  return (
    <Default>
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
    </Default>
  );
}
