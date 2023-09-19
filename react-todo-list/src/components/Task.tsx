import styles from './Task.module.css';
import clipBoard from '../assets/Clipboard.svg';
import { ContentTask } from './ContentTask';
import { ITask } from '../App';

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ tasks, onDelete, onComplete } : Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Tarefas Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>
            {tasksQuantity > 0 ? (
                 <div className={styles.list}>
                 {tasks.map( (task) => (
                     <ContentTask key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
                 ))}
                </div>
            ) : (
                <div className={styles.emptyBoard}>
                    <div className={styles.alignDiv}>
                        <div className={styles.divImg}>
                            <img src={clipBoard} alt="Imagem vazia" />
                        </div>
                        <div className={styles.textEditor}>
                            <p> 
                                <strong>Você ainda não tem tarefas cadastradas</strong>
                            </p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}