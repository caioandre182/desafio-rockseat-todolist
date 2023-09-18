import './global.css';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { BoardTask } from './components/BoardTask';

export function App(){
    return (
        <div>
            <Header />
            <NewTask />
            <BoardTask />
        </div>
    )
}