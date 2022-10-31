import TaskCard from './TaskCard'

const TaskArea = ({loading, tasks, fetchData}) => {

    const taskArray = tasks.map( task => {
        return <TaskCard key = {task._id} task = {task} fetchData={fetchData}/>
    })

    return(
        <section className="tasksArea">
                <h2>Tasks</h2>
                <div className='taskStack'>
                    {
                        loading ? "Loading..." : taskArray
                    }
                </div>
        </section>
    )
}

export default TaskArea