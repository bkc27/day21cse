import React from 'react'

function TaskForm(props) {
    const { addTask } = props;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            alert("Please Enter Title");
            return;
        }
        addTask({ title, description });
        setTitle("");
        setDescription("");
    };
    return (
        <form
            onSubmit={handleSubmit}
            className='bg-white p-5 rounded-lg  shadow mb-6'
        >
            <h2 className='text-xl font-bold mb-4'>
                Add Task
            </h2>
<input type="text"
placeholder='Enter Title'
value={title}
onChange={(e) => {
setTitle(e.target.value)
}}
className='w-full border p-3 rounded mb-3'
/>
<textarea
placeholder='Enter Description'
value={description}
onChange={(e) => { setDescription(e.target.value) }}
className='w-full border p-3 rounded mb-3'
/>
<button className='bg-blue-600 border p-3 rounded mb-3'>
Add Task
</button>
        </form>
    )
}

export default TaskForm