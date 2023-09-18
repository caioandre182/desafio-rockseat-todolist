import styles from './BoardTask.module.css';

import clipBoard from '../assets/Clipboard.svg';

export function BoardTask() {
    return (
        <div>
            <div className={styles.div}>
                <div className={styles.headerTask}>
                    <p className={styles.taskCreated}>Tarefas Criadas</p>
                    <span>0</span> 
                </div>
                <div className={styles.headerCompleted}>
                    <p className={styles.taskCompleted}>Concluídas</p>
                    <span>0 de 5</span> 
                </div>
            </div>
            <div className={styles.emptyBoard}>
                <div className={styles.alignDiv}>
                    <div className={styles.divImg}>
                        <img src={clipBoard} alt="Imagem vazia" />
                    </div>
                    <div className={styles.textDiv}>
                        <p> 
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                        </p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}