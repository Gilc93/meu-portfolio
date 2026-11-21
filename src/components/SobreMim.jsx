import { useState } from 'react'

function SobreMim() {
  const [aba, setAba] = useState('interesses')

  return (
    <section className="secao">
      <h2>Sobre mim</h2>

      <div className="abas">
        <button
          className={aba === 'interesses' ? 'ativa' : ''}
          onClick={() => setAba('interesses')}
        >
          Interesses
        </button>
        <button
          className={aba === 'objetivos' ? 'ativa' : ''}
          onClick={() => setAba('objetivos')}
        >
          Objetivos
        </button>
      </div>

      {aba === 'interesses' && (
        <p>Gosto de tecnologia e de aprender como as coisas funcionam por trás de um site ou sistema, Estou estudando programação e gosto de praticar criando projetos, mesmo os pequenos e simples somente para testar sem nenhum ganho financeiro.</p>
      )}
      {aba === 'objetivos' && (
        <p>Quero trabalhar com desenvolvimento web, por enquanto estou focado em aprender bem o básico e matar as minhas curiosidades, como HTML, CSS, JavaScript e React, para conseguir entrar na área.</p>
      )}
    </section>
  )
}

export default SobreMim
