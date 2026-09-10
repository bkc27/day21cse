import React from 'react'

function TaskList(props) {
    const { tasks, deleteTask, toggleTask, editTask } = props;
    if (tasks.length === 0) {
        return (
            <p className='text-center text-gray-500'>
                No Tasks Found
            </p>
        )
    }
    return (
        <div className='space-y-4'>
            {tasks.map((task) => (
                <div key={task._id}
                    className='bg-white p-5 rounded-lg shadow'>
                    <div className='flex justify-between items-start'>
                        <div>
                            <h3 className={`text-lg font-bold ${task.completed ? "line-through text-gray-400" : ""
                                }`}>
                                {task.title}
                            </h3>
                            <p className='text-gray-600'>
                                {task.description}
                            </p>
                            <p className='mt-2 text-sm'>
                                Status: <span
                                    className={
                                        task.completed ? "text-green-600" : "text-oragne:600"
                                    }>
                                    {task.completed ? "Completed" : "Pending"}
                                </span>
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <button onClick={() => { toggleTask(task) }}
                                className='bg-green-500 text-white px-3 py-1 rounded'>
                                {task.completed ? "Undo" : "Complete"}
                            </button>
                            <button onClick={()=>{editTask(task)}}
                                className='bg-yellow-500 text-white px-3 py-1 rounded'>
                                Edit Task
                            </button>
                            <button onClick={()=>{deleteTask(task._id)}}
                                className='bg-red-500 text-white px-3 py-1 rounded'>
                                Delete
                            </button>
                        </div>

                    </div>

                </div>
            ))}
        </div>
    )
}

export default TaskList