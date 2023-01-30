import React, {useState, useRef} from "react";
import Icone from "./imagem/icone.png";
import Lixeira from "./imagem/trash.svg"

import {Container, H1, Input, Button, Image, ContainerItens, Tarefa } from './styles';

function App () {
  const [tarefas, setTarefas] = useState([]);
  const inputTitulo = useRef()
  const inputSobre = useRef()

function addNovaTarefa () {
  setTarefas([...tarefas, {id: Math.random(), titulo: inputTitulo.current.value, sobre: inputSobre.current.value}])
}

function deleteTarefa (tarefaId) {
  const novaTarefa = tarefas.filter( tarefa => tarefa.id !== tarefaId);

  setTarefas(novaTarefa)
}



 return (
    <Container>
      
        <ContainerItens>
        <Image src={Icone}/>
          <H1>Lista de Tarefas</H1>

          
          <Input ref={inputTitulo} type='text' placeholder="Título"></Input>

          <Input ref={inputSobre} type='text' id='placeholder-text' placeholder="Sobre"></Input>

          <Button onClick={addNovaTarefa}>Cadastrar Tarefa</Button>

          <ul>
            {tarefas.map((tarefas) => (
              <Tarefa key={tarefas.id}>
                <p>{tarefas.titulo}</p>  <p>{tarefas.sobre}</p>
                <button onClick={() => deleteTarefa(tarefas.id)}><img src={Lixeira} alt="lata de lixo" /> </button>
              </Tarefa >
            ))}
          </ul>
          
        </ContainerItens>
        
    </Container>
  );
 }
export default App;
