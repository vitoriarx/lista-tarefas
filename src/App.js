import React, {useState, useRef} from "react";
import Icone from "./imagem/icone.png";

import {Container, H1, Label, Input, Button, Image} from './styles';

const tarefas = [

];

function App() {
  
  const [tarefa, setUsers] = useState([]);
  const titulo = useRef()
  const sobre = useRef()

  function addNovaTarefa(){
    setUsers([... tarefas, {id: Math.random(), name:titulo.current.value, age:sobre.current.value}])
  }

 
  return (
    <Container>
      <Image src={Icone}/>

      <H1>Lista de Tarefas</H1>

      <Label></Label>
      <Input ref={titulo} type='text' placeholder="Título"></Input>

      <Label> </Label>
      <Input ref={sobre} type='text' placeholder="Sobre"></Input>

      <Button>Cadastrar Tarefa</Button>

      
    </Container>
  );
}

export default App;
