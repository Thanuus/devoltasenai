import { useEffect, useState } from "react";


const API = "http://localhost:8080/alunos"

export default function CadastroAlunos(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [alunos, setAlunos] = useState([]);

    const [idEdicao, setIdEdicao] = useState(null);

    async function adicionar(aluno) {
        const resposta = await fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(aluno)
        })

        if (!resposta.ok) {
            alert ('Não foi possivel cadastrar o aluno.')
            return
        }

        const novoAluno = await resposta.json()
        setAlunos(anteriores => [...anteriores, novoAluno])
        limpar()
    }

    async function salvar(evento) {
        evento.preventDefault()
        
        const aluno = {
            nome: nome.trim(),
            email: email.trim(),
        }

        if(idEdicao === null){
            await adicionar(aluno)
        } else {
            const resposta = await fetch(`${API}/${idEdicao}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(aluno)
            })

            if (!resposta.ok) {
                alert ('Não foi possivel atualizar o aluno.')
                return
            }

            const alunoAtualizado = await resposta.json()

            setAlunos(anteriores =>
                anteriores.map(aluno =>
                    aluno.id === idEdicao ? alunoAtualizado : aluno
                )
            )

            limpar()

        }
    }

    async function listar() {
        const resposta = await fetch(API)

        if(resposta.ok){
            setAlunos(await resposta.json())
        }
    }

    async function remover(id) {
        const resposta = await fetch(`${API}/${id}`, {
            method: 'DELETE'
        })

        if(!resposta.ok) {
            alert ('Não foi possível remover o livro.')
            return
        }

        setAlunos(anteriores => anteriores.filter(aluno => aluno.id !== id))

        if (idEdicao === id) {
            limpar()
        }
    }

    useEffect(() => {
        listar()
    }, [])

    function editar(aluno) {
        setIdEdicao(aluno.id);
        setNome(aluno.nome);
        setEmail(aluno.email);
    }

    function limpar() {
        setNome("");
        setEmail("");
        setIdEdicao(null);
    }

    return (
        <div className="page-wrapper">
            <section className="container">
                <header className="header">
                    <h1>Cadastro de Alunos</h1>
                    <p>Gerencie seus alunos</p>
                </header>

                <div className="form-group">
                    <input
                        type="text"
                        className="input-field"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Nome do aluno"
                    />
                    <input
                        type="email"
                        className="input-field"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
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
                    {alunos.length === 0 ? (
                        <div className="empty-state">
                            <p>Nenhum aluno cadastrado.</p>
                        </div>
                    ) : (
                        <ul className="student-list">
                            {alunos.map(aluno => (
                                <li key={aluno.id} className={`student-card ${idEdicao === aluno.id ? 'editing' : ''}`}>
                                    <div className="student-info">
                                        <h3 className="student-name">{aluno.nome}</h3>
                                        <p>{aluno.email}</p>
                                    </div>

                                    <div className="student-actions">
                                        <button onClick={() => editar(aluno)} className="btn btn-edit">
                                            Alterar
                                        </button>
                                        <button onClick={() => remover(aluno.id)} className="btn btn-danger">
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
    )
}