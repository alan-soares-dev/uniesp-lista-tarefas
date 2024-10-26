import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button';


const Tarefa = ({ tarefa, marcarConcluida, removerTarefa }) => {

    return (
        <li>
            <Checkbox onChange={() => marcarConcluida(tarefa.id)} checked={tarefa.concluida}></Checkbox>
            <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
                {tarefa.titulo}
            </span>
            <Button onClick={() => removerTarefa(tarefa.id)} label="Remover" size="small" severity="danger" />
        </li>

    )
}

export default Tarefa;