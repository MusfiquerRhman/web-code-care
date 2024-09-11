import { useFilter } from '../hooks/hooks';

const Tabs = () => {
    const { filter, setFilter } = useFilter();

    return (
        <div className='w-full flex mt-4 items-center justify-center'>
            <div className='flex flex-row max-w-3xl w-full rounded-lg overflow-hidden accent-border-thin'>
                <button onClick={() => setFilter('all')} 
                    type='button' 
                    className={`w-full bg-white text-black text-xl p-2 ${filter === "all" && 'accent-background'}`}
                >
                    All
                </button>
                <button onClick={() => setFilter('coming')} 
                    type='button' 
                    className={`w-full bg-white text-black text-xl p-2 ${filter === "coming" && 'accent-background'}`}
                >
                    Coming
                </button>
                <button onClick={() => setFilter('pending')} 
                    type='button' 
                    className={`w-full bg-white text-black text-xl p-2 ${filter === "pending" && 'accent-background'}`}
                >
                    Pending
                </button>
                <button onClick={() => setFilter('complete')} 
                    type='button' 
                    className={`w-full bg-white text-black text-xl p-2 ${filter === "complete" && 'accent-background'}`}
                >
                    Completed
                </button>
            </div>
        </div>
    )
}

export default Tabs