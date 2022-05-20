//useState serve para ficar de olho em uma váriavel e inserir/atualizar o html sempre que a váriavel sofrer uma mudança
import React, { useState } from 'react';

import './styles.css';

import { Card } from '../../components/Card';

// para usar class em react, devemos usar className="" ao invés de class=""

export function Home() {
  // aqui passamos o nome da váriavel (studentName), e o nome da função que vai atualizar o estado (setStudentName)
  const [studentName, setStudentName] = useState()

  return (
    /* A função só pode devolver UM elemento, por isso se quisermos enviar mais do que um conteúdo, é preciso embrulhar em uma:
      <div>"todos os elementos"</div> 
    ou 
    uma tag vazia: 
      <>"todos os elementos"</> 
    */
    <div className='container'>
      
      <h1
      // usando as chaves {}, somos capazes de inserir o que está dentro da váriavel no html
      >
        Lista de Presença {studentName}
      </h1>
      <input 
      type='text' 
      placeholder="Digite o nome..."
      // esse evento vê toda vez que o input sofre uma mudança e chama a função do estado (setStudentName), que atualiza a informação para o que foi escrito no input (e.target.value), agora o useState irá ver a atualização e colocar no site, sem isso o site não iria escrever no <h1> o que foi atualizado
      onChange={e => setStudentName(e.target.value)}
      />
      <button type='button'>Adicionar</button>

      <Card name="Rodrigo" time="10:55:25"/>
      <Card name="João" time="11:00:10"/>
      <Card name="Maria" time="13:53:41"/>
    </div>
  )
}
