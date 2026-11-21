function Header(props) {
  return (
    <header className="header">
      <img className="foto" src={props.foto} alt="Foto de perfil" />
      <div>
        <h1>{props.nome}</h1>
        <p>{props.descricao}</p>
      </div>
    </header>
  )
}

export default Header
