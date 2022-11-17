import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./styles/editTask.css"
import Header from "./Header"

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

    const [token, setToken] = useState(localStorage.getItem("token"))

    useEffect(() => {
        getTask()
    }, [])

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const submitEdit = async () => {
        await axios.patch(
            `http://localhost:5000/api/v1/tasks/${taskID}`,
            {
                name,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        )
        navigate("/")
    }

    return (
        <>
            <Header token={token} setToken={setToken} />
            <div className="editContainer">
                <div className="editSection">
                    <h2 id="taskHeader">Edit Task</h2>
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
        </>
    )
}

export default EditTask
