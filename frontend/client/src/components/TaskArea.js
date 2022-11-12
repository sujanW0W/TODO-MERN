import TaskCard from "./TaskCard"

const TaskArea = ({ loading, tasks, fetchData, getTaskID }) => {
    const token = localStorage.getItem("token")
    const taskArray =
        tasks.length === 0
            ? "No Tasks"
            : tasks.map((task) => {
                  return (
                      <TaskCard
                          key={task._id}
                          task={task}
                          fetchData={fetchData}
                          getTaskID={getTaskID}
                      />
                  )
              })

    return (
        <section className="tasksArea">
            <h2>Tasks</h2>
            <div className="taskStack">
                {token ? (loading ? "Loading..." : taskArray) : "Login First "}
            </div>
        </section>
    )
}

export default TaskArea
