import axios from 'axios'
import {useState} from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

const TaskCard = ({task, fetchData}) => {

    const [check,setCheck] = useState(task.completion);

    const handleChange = async () => {
        const {data} = await axios.patch(`http://localhost:5000/api/v1/tasks/${task._id}`, {completion: !check})
        setCheck(!check)
        console.log(data);
    }

    const deleteTask = async () => {
        const {data} = await axios.delete(`http://localhost:5000/api/v1/tasks/${task._id}`)
        console.log(data)
        fetchData();
    }

    return(
        <div className="cardBox">
            <div className='cardLeft'>
                <Checkbox checked={check} onChange={handleChange} />
                <p id="taskName">{task.name}</p>
            </div>
            <div>
                <DeleteIcon id="deleteIcon" onClick={deleteTask}/>
            </div>
        </div>
    )
}

export default TaskCard