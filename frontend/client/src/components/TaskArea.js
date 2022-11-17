import TaskCard from "./TaskCard"
import { useState } from "react"

const TaskArea = ({ loading, tasks, fetchData, getTaskID }) => {
    const [displayText, setDisplayText] = useState("Loading...")

    const noTasks = () => {
        setTimeout(() => {
            console.log("hello")
            setDisplayText("Great! No tasks!")
        }, 2000)
    }

    const hasTasks = () => {
        const taskStack = tasks.map((task) => {
            return (
                <TaskCard
                    key={task._id}
                    task={task}
                    fetchData={fetchData}
                    getTaskID={getTaskID}
                />
            )
        })
        return taskStack
    }

    const token = localStorage.getItem("token")
    const taskArray = tasks.length === 0 ? noTasks() : hasTasks()

    return (
        <section className="tasksArea">
            <h2 id="taskHeader">Tasks</h2>
            <div className="taskStack">
                {token ? (loading ? displayText : taskArray) : "Please Login! "}
            </div>
        </section>
    )
}

export default TaskArea
