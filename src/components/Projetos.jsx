import Projeto from './Projeto'

function Projetos() {
  const projetos = [
    {
      id: 1,
      titulo: 'Este portfólio',
      resumo: 'Meu primeiro projeto em React com Vite.',
      detalhes: 'Feito com React e Vite, usando componentes, props e useState. Usei o useState nas abas do Sobre mim e no botão de detalhes dos projetos.',
    },
    {
      id: 2,
      titulo: 'Site de uma cervejaria (Butikin NuuFITA)',
      resumo: 'Site simples de uma cervejaria, feito na faculdade, com fotos e navegação entre páginas.',
      detalhes: 'Projeto feito no 4º semestre de ADS. O site apresenta a cervejaria de forma simples, com poucas informações, fotos e links que levam para outras páginas. Usei HTML e CSS. Com ele pratiquei a criação de várias páginas ligadas entre si e a organização do conteúdo.',
    },
    {
      id: 3,
      titulo: 'Barbearia Kardek (App de agendamento)',
      resumo: 'Aplicativo mobile para barbearia, onde o cliente agenda sozinho e o barbeiro gerencia tudo em um painel.',
      detalhes: 'Feito com React Native (Expo) e TypeScript no app, e Node.js com Express e SQLite na API e no banco de dados. O cliente escolhe o serviço, a data e um horário livre, e pode consultar e cancelar o agendamento pelo telefone. O barbeiro tem um painel com senha para ver a agenda, marcar atendimentos como concluído, faltou ou cancelado, e acompanhar o faturamento. Os lembretes são feitos pelo WhatsApp, com a mensagem já escrita. Hoje o projeto funciona em rede local, e a próxima etapa é colocar o servidor online.',
    },
  ]

  return (
    <section className="secao">
      <h2>Projetos</h2>
      {projetos.map((p) => (
        <Projeto key={p.id} titulo={p.titulo} resumo={p.resumo} detalhes={p.detalhes} />
      ))}
    </section>
  )
}

export default Projetos