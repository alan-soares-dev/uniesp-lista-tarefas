import React, { useState } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function FormularioTarefa({ adicionarTarefa }) {
    const [titulo, setTitulo] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (titulo.trim()) {
            adicionarTarefa(titulo);
            setTitulo('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputText placeholder="Nova Tarefa" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            <Button>Adicionar</Button>
        </form>
    );
}


export default FormularioTarefa;