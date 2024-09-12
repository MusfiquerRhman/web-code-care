import React from 'react';

interface CheckboxProps {
    hasCheckBox: boolean;
    todoRef?: React.RefObject<HTMLInputElement>;
    dateRef?: React.RefObject<HTMLInputElement>;
    handleEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({hasCheckBox, todoRef, dateRef, handleEnterPress}: CheckboxProps) => {
    return (
        <div onKeyDown={handleEnterPress} 
            className='flex flex-row justify-center items-center accent-border rounded-lg shade-background  w-full'
        >
            {hasCheckBox && <input aria-label='done' type='checkbox' name='theme' id='light' className='h-4 w-4 m-3'/>}
            <input type='text' 
                placeholder='Add a new task' 
                className='w-full shade-background  flex-1 py-2 px-4 rounded-r-lg border-2 border-gray-200 placeholder:text-xl'
                ref={todoRef}
            />
            <input type="datetime-local" 
                name="date" 
                className='inline-block relative shade-background ' 
                aria-label='pick a date' 
                defaultValue={new Date().toISOString().slice(0, 16)}
                ref={dateRef}
            />
        </div>
    )
}

export default Input