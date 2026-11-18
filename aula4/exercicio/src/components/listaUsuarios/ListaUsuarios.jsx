import { useEffect, useState,} from 'react'


export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [git, setGit] = useState({});

  async function buscarUsuarios(){
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const dados = await resposta.json();

    
    setUsuarios(dados);
    console.log(dados);
  }

  async function meuUsuario() {
    const github = await fetch("https://api.github.com/users/thanuus");
    const dadosGitHub = await github.json();

    setGit(dadosGitHub);
    console.log(dadosGitHub);
  }

  useEffect(() => {
      buscarUsuarios()
  }, []);

  useEffect(() =>{
    meuUsuario()
  }, [])

  return (
    <>
      <div style={{padding: "20px"}}>
        <h2>Lista de usuarios (API)</h2>
        <ul>
          {usuarios.map(usuarios => (
            <li key={usuarios.id}>{usuarios.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Meus dados do Github</h2>
        <p>{git.name}</p>
        <img src={git.avatar_url}/>
      </div>
    </>
  )
}
 
