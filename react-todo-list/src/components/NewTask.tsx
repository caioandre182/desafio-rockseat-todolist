import style from './NewTask.module.css';

import addButton from '../assets/addButton.svg';

export function NewTask(){
    return (
        <div className={style.div}>
            <input className={style.input} type="text" placeholder='Adicione uma nova tarefa'/>
            <button className={style.button} type='button'>
                Criar <img src={addButton} alt="Botão de adicionar" />
            </button>
        </div>
    )
}