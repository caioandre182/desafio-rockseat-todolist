import styles from './Header.module.css';

import { FormEvent, useState, ChangeEvent} from 'react';

import logoToDo from '../assets/Logo.svg';
import addButton from '../assets/addButton.svg'

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header( { onAddTask} : Props){
    const [title, setTitle] = useState('');

    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={logoToDo} alt="Logo Todo-List" />
            
            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    required
                    placeholder='Adicione uma nova tarefa'
                    onChange={onChangeTitle}
                    value={title}
                />

                <button>
                        Criar <img src={addButton} alt="Botão de adicionar tarefa" />
                </button>
            </form>
        </header>
    )
}