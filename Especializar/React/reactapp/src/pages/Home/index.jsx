// Isso é um Hook que permite conectar os recursos de estado e ciclo de vida do React, se adiciona escrevendo {use"Nomedohook"}
import React, { useState, useEffect} from 'react';

import './styles.css';

import { Card } from '../../components/Card';


export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})

  // Função pra adicionar o valor escrito no Card
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      // Pegando o horário atual do pc
      time: new Date().toLocaleTimeString("pt", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    }

    // O prevState mantém o valor anterior e as reticências (...) deixam o valor sem ser um vetor, pois já está dentro de um vetor
    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    // corpo do useEffect, é sempre executado automaticamente assim que os componentes forem renderizados
    fetch('https://api.github.com/users/gabrielpereira12')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
    .catch(error => console.error(error))
    //o array abaixo diz que sempre que a função passada sofrer uma alteração, o useEffect irá ser chamado outra vez, caso esteja vazio, ele só será executado uma vez
  }, [])

  return (
    /* A função só pode devolver UM elemento, por isso se quisermos enviar mais do que um conteúdo, é preciso embrulhar em uma:
      <div>"todos os elementos"</div> 
    ou 
    uma tag vazia: 
      <>"todos os elementos"</> 
    */
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil"/>
        </div>
        
      </header>
      

      <input 
      type='text' 
      placeholder="Digite o nome..."
      onChange={e => setStudentName(e.target.value)}
      />

      <button 
      type='button'
      onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        // Não sei o que é, mas sei que está adicionando os valores da váriavel no card
        students.map(student => (
        <Card
        key={student.time}
        name={student.name}
        time={student.time}
        />
        ))
      }
    </div>
  )
}
