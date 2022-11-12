import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./styles/editTask.css"

const EditTask = ({ taskID }) => {
    const navigate = useNavigate()
    const [task, setTask] = useState()
    const [name, setName] = useState("")

    const getTask = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:5000/api/v1/tasks/edit/${taskID}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            setTask(data)
            setName(data.name)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTask()
    }, [])

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const submitEdit = async () => {
        await axios.patch(`http://localhost:5000/api/v1/tasks/${taskID}`, {
            name,
        })
        navigate("/")
    }
    console.log(name)
    return (
        <div className="editContainer">
            <div className="editSection">
                <h1>Edit Task</h1>
                <input
                    type="text"
                    className="inputText"
                    placeholder="Enter Task"
                    name="edit"
                    value={name}
                    onChange={handleChange}
                />
                <button className="submit" onClick={submitEdit}>
                    Edit
                </button>
            </div>
        </div>
    )
}

export default EditTask
