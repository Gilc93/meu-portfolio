import Habilidade from './Habilidade'

function Habilidades() {
  const lista = [
    { nome: 'HTML', nivel: 'Iniciante' },
    { nome: 'CSS', nivel: 'Iniciante' },
    { nome: 'JavaScript', nivel: 'Estudando' },
    { nome: 'React', nivel: 'Começando' },
    { nome: 'Git e GitHub', nivel: 'Básico' },
    { nome: 'Python', nivel: 'Começando' },

  ]

  return (
    <section className="secao">
      <h2>Habilidades</h2>
      <ul>
        {lista.map((item) => (
          <Habilidade key={item.nome} nome={item.nome} nivel={item.nivel} />
        ))}
      </ul>
    </section>
  )
}

export default Habilidades
