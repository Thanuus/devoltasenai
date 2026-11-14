import { useState } from 'react';
import './CadastroLivros.css'; // Importando a estilização

export default function CadastroLivros() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [anoPublicacao, setAnoPublicacao] = useState("");
  const [livros, setLivro] = useState([]);
  const [idEdicao, setIdEdicao] = useState(null);

  function remover(id) {
    setLivro(anteriores => anteriores.filter(livro => livro.id !== id));
  }

  function editar(livro) {
    setIdEdicao(livro.id);
    setTitulo(livro.titulo);
    setAutor(livro.autor);
    setAnoPublicacao(livro.anoPublicacao);
  }

  function limpar() {
    setTitulo("");
    setAutor("");
    setAnoPublicacao("");
    setIdEdicao(null);
  }

  function salvar() {
    const dataNumerica = Number(anoPublicacao);
    if (
      titulo.trim() === "" ||
      autor.trim() === "" ||
      anoPublicacao === "" ||
      !Number.isInteger(dataNumerica) ||
      Number(dataNumerica) <= 0
    ) {
      alert("Por favor, preencha todos os campos corretamente!");
      return;
    }

    if (idEdicao === null) {
      const novoLivro = {
        id: crypto.randomUUID(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        anoPublicacao: dataNumerica
      };
      setLivro(anteriores => [...anteriores, novoLivro]);
    } else {
      setLivro(anteriores =>
        anteriores.map(livro =>
          livro.id === idEdicao
            ? { ...livro, titulo: titulo.trim(), autor: autor.trim(), anoPublicacao: dataNumerica }
            : livro
        )
      );
    }
    limpar();
  }

  return (
    <div className="page-wrapper">
      <section className="container">
        <header className="header">
          <h1>📚 Cadastro de Livros</h1>
          <p>Gerencie sua biblioteca pessoal de forma simples</p>
        </header>

        <div className="form-group">
          <input
            type="text"
            className="input-field"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            placeholder="Título do livro"
          />
          <input
            type="text"
            className="input-field"
            value={autor}
            onChange={e => setAutor(e.target.value)}
            placeholder="Autor do livro"
          />
          <input
            type="number"
            className="input-field input-year"
            value={anoPublicacao}
            onChange={e => setAnoPublicacao(e.target.value)}
            placeholder="Ano"
          />

          <div className="form-actions">
            <button onClick={salvar} className="btn btn-primary">
              {idEdicao === null ? "Adicionar" : "Salvar"}
            </button>
            {idEdicao !== null && (
              <button onClick={limpar} className="btn btn-secondary">
                Cancelar
              </button>
            )}
          </div>
        </div>

        <div className="list-container">
          {livros.length === 0 ? (
            <div className="empty-state">
              <p>Nenhum livro cadastrado ainda.</p>
            </div>
          ) : (
            <ul className="book-list">
              {livros.map(livro => (
                <li key={livro.id} className={`book-card ${idEdicao === livro.id ? 'editing' : ''}`}>
                  <div className="book-info">
                    <h3 className="book-title">{livro.titulo}</h3>
                    <span className="book-meta">
                      Por <strong>{livro.autor}</strong> • Publicado em {livro.anoPublicacao}
                    </span>
                  </div>
                  
                  <div className="book-actions">
                    <button onClick={() => editar(livro)} className="btn btn-edit">
                      Alterar
                    </button>
                    <button onClick={() => remover(livro.id)} className="btn btn-danger">
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
