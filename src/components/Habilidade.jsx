// Um item da lista de habilidades (reutilizado várias vezes)
function Habilidade({ nome, nivel }) {
  return (
    <li className="habilidade">
      <strong>{nome}</strong>
      <span>{nivel}</span>
    </li>
  )
}

export default Habilidade