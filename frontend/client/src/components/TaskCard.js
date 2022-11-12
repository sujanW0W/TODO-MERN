import axios from "axios"
import { useState } from "react"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import Checkbox from "@mui/material/Checkbox"
import { Link } from "react-router-dom"

const TaskCard = ({ task, fetchData, getTaskID }) => {
    const [check, setCheck] = useState(task.completion)

    const handleChange = async () => {
        await axios.patch(`http://localhost:5000/api/v1/tasks/${task._id}`, {
            completion: !check,
        })
        setCheck(!check)
    }

    const handleEdit = () => {
        getTaskID(task._id)
    }

    const deleteTask = async () => {
        try {
            const { data } = await axios.delete(
                `http://localhost:5000/api/v1/tasks/${task._id}`
            )
            console.log(data)
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="cardBox">
            <div className="cardLeft">
                <Checkbox checked={check} onChange={handleChange} />
                <p id="taskName">{task.name}</p>
            </div>
            <div className="taskIcons">
                <Link to="editTask" onClick={handleEdit}>
                    <EditIcon className="deleteIcon" />
                </Link>
                <DeleteIcon className="deleteIcon" onClick={deleteTask} />
            </div>
        </div>
    )
}

export default TaskCard
