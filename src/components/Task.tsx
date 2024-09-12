import { useEffect, useState } from 'react';
import { MdOutlineDeleteForever } from "react-icons/md";
import { useFilter, useToDos } from '../hooks/hooks';

const Task = () => {
    const { ToDos, setToDos } = useToDos();
    const { filter } = useFilter();

    const [sorted, setSorted] = useState<[string, boolean, string, string][]>(ToDos);
    const [filtered, setFiltered] = useState<[string, boolean, string, string][]>(ToDos);

    useEffect(() => {
        const sortedToDos = ToDos.sort((a: [string, boolean, string, string], b: [string, boolean, string, string]) => {
            return new Date(a[3]).getTime() - new Date(b[3]).getTime()
        }).sort((a: [string, boolean, string, string], b: [string, boolean, string, string]) => {
            return a[1] === b[1] ? 0 : a[1] ? 1 : -1
        })

        setSorted(sortedToDos);
    }, [ToDos])

    useEffect(() => {
        if(filter === "all"){
            setFiltered(sorted);
        }
        else if(filter === "pending"){
            const newToDos = sorted.filter((todo) => todo[1] !== true)
            setFiltered(newToDos as [string, boolean, string, string][])
        }
        else if(filter === "complete"){
            const newToDos = sorted.filter((todo) => todo[1] !== false)
            setFiltered(newToDos as [string, boolean, string, string][])
        }

    }, [filter, sorted])

    const markAsDone = (uuid: string) => {
        const newToDos = ToDos.map((todo) => {
            if (todo[0] === uuid) {
                return [todo[0], !todo[1], todo[2], todo[3]]
            }
            return todo
        })
        localStorage.setItem('toDos', JSON.stringify(newToDos));
        setToDos(newToDos as [string, boolean, string, string][])
    }

    const deleteTask = (uuid: string) => {
        const newToDos = ToDos.filter((todo) => todo[0] !== uuid)
        localStorage.setItem('toDos', JSON.stringify(newToDos));
        setToDos(newToDos as [string, boolean, string, string][])
    }

    const clearCompleted = () => {
        const newToDos = ToDos.filter((todo) => todo[1] !== true)
        localStorage.setItem('toDos', JSON.stringify(newToDos));
        setToDos(newToDos as [string, boolean, string, string][])
    }

    useEffect(() => {
        console.log(ToDos)
    }, [ToDos])

    return (
        <div className='flex flex-col gap-2 justify-center items-center mt-4'>
            {filtered.map((todo, index) => (
                <div key={index}
                    className='flex flex-col md:flex-row justify-between items-center accent-border rounded-lg shade-background  w-full max-w-3xl py-1 p-4 cursor-pointer'
                >
                    <div className='flex flex-row items-center w-full' onClick={() => { markAsDone(todo[0])}}>
                        <input aria-label='done' 
                            type='checkbox' 
                            className='h-4 w-4 m-3' 
                            checked={todo[1]} 
                            readOnly 
                        />
                        <p className={`text-lg shade-background ${todo[1] && 'line-through'}`} >
                            {todo[2]}
                        </p>
                    </div>
                    <div className='flex flex-row gap-2 min-w-fit justify-between md:justify-normal'>
                        <p className={`text-lg ${todo[1] && 'line-through'}`}>
                            {new Date(todo[3]).toLocaleString('en-GB', {
                                hour12: true,
                                hour: 'numeric',
                                minute: 'numeric',
                                year: 'numeric',
                                month: 'numeric',
                                day: 'numeric'
                            })}
                        </p>
                        <button onClick={() => deleteTask(todo[0])} type='button' aria-label='delete'><MdOutlineDeleteForever /></button>
                    </div>
                </div>
            ))}
            <div className='flex flex-row justify-between items-center rounded-lg shade-background mt-4 w-full max-w-3xl p-4 accent-border-thin'>
                {ToDos.length > 0 && <button onClick={() => clearCompleted()} type='button' aria-label='edit'>Clear Completed </button>}
            </div>
            <a className='theme-text mt-20' href='mailto:musfiquerrhman@gmail.com'>musfiquerrhman@gmail.com</a>
        </div>
    )
}

export default Task