import {useEffect, useState} from 'react';
import axios from 'axios'
import './styles/mainBody.css'

import InputSection from './InputSection'
import TaskArea from './TaskArea'

const MainBody = () => {

    const url = "http://localhost:5000/api/v1/tasks";

    const submitted = async (taskName) =>{
        try {
            await axios.post(url, {name: taskName})
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState();

    async function fetchData(){
        setLoading(true)
        try{
            const {data} = await axios.get(url)
            setLoading(false);
            setTasks(data)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect( () => {       
        fetchData();
    }, [])

    return(
        <section className="mainSection">
            <InputSection submitted = {submitted} fetchData={fetchData}/>
            <hr />
            <TaskArea loading={loading} tasks={tasks} fetchData={fetchData}/>
            
        </section>
    )
}

export default MainBody