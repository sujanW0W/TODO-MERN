import { useState } from "react"

const InputSection = ({ submitted }) => {
    const [taskName, setTaskName] = useState("")

    const handleTaskInput = (e) => {
        setTaskName(e.target.value)
    }

    return (
        <section className="inputArea">
            <input
                type="text"
                className="inputText"
                placeholder="Enter Task"
                name="inputTask"
                value={taskName}
                onChange={handleTaskInput}
            />
            <button className="submit" onClick={() => submitted(taskName)}>
                Submit
            </button>
        </section>
    )
}

export default InputSection
