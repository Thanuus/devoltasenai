import { useEffect, useState } from 'react';

import './CadastroEmprestimo.css';

const API = 'http://localhost:8080'

export default function CadastroEmprestimo() {
    const [alunos, setAlunos] = useState([])
    const [livros, setLivros] = useState([])
    const [emprestimos, setEmprestimos] = useState ([])
    const [alunoId, setAlunoId] = useState ([])
    const [livroId, setLivroId] = useState ([])
    const [dataPrevistaDevolucao, setDataPrevistaDevolucao] = useState("")

    async function listarAlunos() {
        const resposta = await fetch(`${API}/alunos`)

        if (resposta.ok) {
            setAlunos(await resposta.json()) 
        }
        
    }

    async function listarLivros() {
        const resposta = await fetch(`${API}/livros`)

        if (resposta.ok) {
            setLivros(await resposta.json())
        }
        
    }

    async function listarEmprestimos() {
        const resposta = await fetch(`${API}/emprestimos`)

        if (resposta.ok) {
            setEmprestimos(await resposta.json())
        }
        
    }

    useEffect(() => {
        listarAlunos()
        listarLivros()
        listarEmprestimos()
    }, [])

    async function cadastrar(evento) {
        evento.preventDefault()

        const emprestimo = {
            alunoId: Number(alunoId),
            livroId: Number(livroId),
            dataPrevistaDevolucao
        }

        const resposta = await fetch(`${API}/emprestimos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(emprestimo)
        })

        if (!resposta.ok) {
            alert('Não foi possível cadastrar o empréstimo.')
            return
        }

        const novoEmprestimo = await resposta.json()
        setEmprestimos(anteriores => [...anteriores, novoEmprestimo])
        limpar()
    }

    function limpar() {
        setAlunoId("")
        setLivroId("")
        setDataPrevistaDevolucao("")
    }

    return (
        <div className="estoque-container">
            <section className="estoque-card">
                <header className="estoque-header">
                    <h1>Cadastro de Empréstimo</h1>
                </header>

                <form className="estoque-formulario" onSubmit={cadastrar}>
                    <div className="campo">
                        <label htmlFor="alunoEmprestimo">Aluno</label>
                        <select
                            id="alunoEmprestimo"
                            value={alunoId}
                            onChange={e => setAlunoId(e.target.value)}
                            required
                        >
                            <option value="">Selecione um aluno</option>

                            {alunos.map(aluno => (
                                <option key={aluno.id} value={aluno.id}>
                                    {aluno.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="campo">
                        <label htmlFor="livroEmprestimo">Livro</label>
                        <select
                            id="livroEmprestimo"
                            value={livroId}
                            onChange={e => setLivroId(e.target.value)}
                            required
                        >
                            <option value="">Selecione um livro</option>

                            {livros.map(livro => (
                                <option key={livro.id} value={livro.id}>
                                    {livro.titulo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="campo">
                        <label htmlFor="dataPrevistaDevolucao">
                            Data prevista de devolução
                        </label>
                        <input
                            id="dataPrevistaDevolucao"
                            type="date"
                            value={dataPrevistaDevolucao}
                            onChange={e => setDataPrevistaDevolucao(e.target.value)}
                            required
                        />
                    </div>

                    <div className="formulario-acoes">
                        <button type="submit" className="btn btn-adicionar">
                            Cadastrar empréstimo
                        </button>
                    </div>
                </form>

                <div className="estoque-listagem">
                    <div className="listagem-header">
                        <h2>Empréstimos cadastrados</h2>
                        <span className="contador">
                            {emprestimos.length} empréstimos
                        </span>
                    </div>

                    {emprestimos.length === 0 ? (
                        <p className="lista-vazia">Nenhum empréstimo cadastrado.</p>
                    ) : (
                        <ul className="lista-produtos">
                            {emprestimos.map(emprestimo => (
                                <li className="produto" key={emprestimo.id}>
                                    <div className="produto-info">
                                        <strong>{emprestimo.livro?.titulo}</strong>
                                        <span>Aluno: {emprestimo.aluno?.nome}</span>
                                        <span>
                                            Devolução prevista: {emprestimo.dataPrevistaDevolucao}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </div>
    )
}