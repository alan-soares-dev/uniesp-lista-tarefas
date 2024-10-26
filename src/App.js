import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useState } from 'react';
import FormularioTarefa from './components/FormularioTarefa';
import ListarTarefas from './components/ListaTarefas';

function App() {

  const [tarefas, setTarefas] = useState([]);


  const adicionarTarefa = (titulo) => {
    const novaTarefa = {
      id: Date.now(),
      titulo: titulo,
      concluida: false
    };
    setTarefas([...tarefas, novaTarefa]);
  };


  const marcarConcluida = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };


  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };


  const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <FormularioTarefa adicionarTarefa={adicionarTarefa} />
      <ListarTarefas tarefas={tarefas} marcarConcluida={marcarConcluida} removerTarefa={removerTarefa} />
      <p>Tarefas Pendentes: {tarefasPendentes}</p>
      <p>Tarefas Concluídas: {tarefasConcluidas}</p>
    </div>
  );

}

export default App;
