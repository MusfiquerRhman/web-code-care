import { useEffect, useState } from 'react';

const Task = () => {
    const [toDos, setToDos] = useState<[boolean, string, string][]>(
        JSON.parse(localStorage.getItem('toDos') || '[]')
    )

    const [sorted, setSorted] = useState<[boolean, string, string][]>(toDos)

    useEffect(() => {
        const sortedToDos = toDos.sort((a: [boolean, string, string], b: [boolean, string, string]) => {
            return new Date(a[2]).getTime() - new Date(b[2]).getTime()
        }).sort((a: [boolean, string, string], b: [boolean, string, string]) => {
            return a[0] === b[0] ? 0 : a[0] ? 1 : -1
        })

        setSorted(sortedToDos)
    }, [toDos])

    const markAsDone = (index: number) => {
        const newToDos = toDos.map((todo, i) => {
            if (i === index) {
                return [!todo[0], todo[1], todo[2]]
            }
            return todo
        })
        localStorage.setItem('toDos', JSON.stringify(newToDos));
        setToDos(newToDos as [boolean, string, string][])
    }

    useEffect(() => {
        console.log(toDos)
    }, [toDos])

    return (
        <div className='flex flex-col gap-2 justify-center items-center mt-4'>
            {sorted.map((todo, index) => (
                <div key={index} 
                    className='flex flex-row justify-between items-center accent-border rounded-lg bg-white w-full max-w-3xl p-3'
                    onClick={() => {markAsDone(index)}}
                >
                    <div className='flex flex-row items-center'>
                        <input aria-label='done' type='checkbox' name='theme' id='light' className='h-4 w-4 m-3' checked={todo[0]} readOnly/>
                        <p className={`text-lg ${todo[0] && 'line-through'}`}>{todo[1]}</p>
                    </div>
                    <p className={`text-lg ${todo[0] && 'line-through'}`}>
                        {new Date(todo[2]).toLocaleString('en-GB', {
                            hour12: true,
                            hour: 'numeric',
                            minute: 'numeric',
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric'
                        })}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Task