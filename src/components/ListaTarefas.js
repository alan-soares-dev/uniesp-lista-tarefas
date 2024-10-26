import Tarefa from "./Tarefa";

function ListarTarefas({ tarefas, marcarConcluida, removerTarefa }) {
    return (
        <ul>
            {tarefas.map((tarefa) => (
                <Tarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                    marcarConcluida={marcarConcluida}
                    removerTarefa={removerTarefa}
                />
            ))}
        </ul>
    );
}

export default ListarTarefas;