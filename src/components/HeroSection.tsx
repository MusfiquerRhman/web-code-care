import React, { useRef } from 'react';
import { FaRegMoon, FaRegSun } from "react-icons/fa6";
import notebook from '../assets/notebook.jpg';
import { useAccent, useTheme } from '../hooks/hooks';
import Input from './Input';

const HeroSection = () => {
    const { theme, setTheme } = useTheme();
    const { setAccent } = useAccent();

    const changeTheme = () => {
        setTheme((theme) => theme === "dark" ? "light" : "dark");
    }

    const changeAccent = (accent: string) => {
        setAccent(accent)
    }

    const todoRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);

    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key);
        if (e.key === 'Enter') {
            console.log(todoRef.current?.value, dateRef.current?.value);

            const localToDos = JSON.parse(localStorage.getItem('toDos') || '[]');
            if(localToDos.length === 0) {
                const newTodo = [[false, todoRef.current!.value, dateRef.current!.value]]
                localStorage.setItem('toDos', JSON.stringify(newTodo));
            }
            else {
                const newTodo = [...localToDos, [false, todoRef.current!.value, dateRef.current!.value]]
                localStorage.setItem('toDos', JSON.stringify(newTodo));
            }

            todoRef.current!.value = '';
            dateRef.current!.value = new Date().toISOString().slice(0, 16);
            window.location.reload();
        }
    }

    return (
        <section className='h-60 md:h-96 rounded-md overflow-hidden'>
            <div className='img-gradient h-60 md:h-96 flex items-center justify-center bg-black flex-col gap-2 p-3 md:gap-10'>
                <img src={notebook} alt="notebook" className='fixed object-cover h-60 md:h-96 w-full z-0 opacity-25 blur-sm px-2'/>
                <div className='w-full max-w-3xl p-2 rounded-md flex flex-col md:flex-row justify-between items-center z-40 gap-3'>
                    <h1 className='text-6xl font-bold text-white tracking-wider accent'>TO-DO</h1>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <button type='button' className='text-4xl cursor-pointer' onClick={changeTheme} aria-label='theme'>
                            {theme === "dark" ? <FaRegMoon className='text-white'/> : <FaRegSun className='text-white'/>}
                        </button>
                        <div className='flex flex-row justify-center items-center gap-1'>
                            <button onClick={() => changeAccent("teal")} className='bg-teal-700 rounded-full w-6 h-6' aria-label='teal'/>
                            <button onClick={() => changeAccent("red")} className='bg-rose-700 rounded-full w-6 h-6' aria-label='red'/>
                            <button onClick={() => changeAccent("pink")} className='bg-pink-700 rounded-full w-6 h-6' aria-label='pink'/>
                            <button onClick={() => changeAccent("purple")} className='bg-purple-700 rounded-full w-6 h-6' aria-label='purple'/>
                            <button onClick={() => changeAccent("blue")} className='bg-blue-700 rounded-full w-6 h-6' aria-label='blue'/>
                        </div>
                    </div>
                </div>
                <div className='z-40 w-full max-w-3xl bg-black rounded-lg'>
                    <Input hasCheckBox={false} todoRef={todoRef} dateRef={dateRef} handleEnterPress={handleEnterPress}/>
                </div>
            </div>

        </section>
    )
}

export default React.memo(HeroSection);