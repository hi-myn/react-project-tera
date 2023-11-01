//rfc -> cria uma função base de componentes
import React from "react";
import logo from "../../images/logo.svg";

export default function InicialPage() {
  const [users, setUsers] = React.useState([]);
  const [currentUser, setCurrentUser] =
    React.useState(
      ""
    ); /*etsado para persistir no valor do dropdown escolhido pelo usuário */
  const [isLoading, setIsLoading] = React.useState(true);

  /*useEffect só é execuado após tudo ser renderizado*/
  React.useEffect(() => {
    fetch(
      "https://63cf09718a780ae6e6710dbe.mockapi.io/users"
    ) /*o fetch é assíncrono, funciona como promessa, é usado para não impedir o fluxo de algo que não tenho controle (retorno de alguma api)*/
      .then((response) => response.json()) /*o sucesso é manipulado por ele */
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  const handleUserChange = (e) => setCurrentUser(e.target.value);
  const handleSubmit = (e) => console.log(e);

  return isLoading ? (
    <h1>LOADING...</h1>
  ) : (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select onChange={handleUserChange} className="home__select-users">
        <option value="">Selecione usuário</option>
        {users
          .sort((a, b) =>
            a.fn.localeCompare(b.fn)
          ) /*colocando em ordem alfabética */
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
        {/**cada usuário iterado no array, irá gerar um option*/}
      </select>
      {!!currentUser && (
        <button onClick={handleSubmit} className="button-primary">
          Entrar
        </button>
      )}
    </div>
  );
}
