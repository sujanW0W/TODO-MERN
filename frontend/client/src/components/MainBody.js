import { useEffect, useState } from "react"
import axios from "axios"
import "./styles/mainBody.css"

import InputSection from "./InputSection"
import TaskArea from "./TaskArea"
import jwt from "jwt-decode"

const MainBody = ({ token, setToken }) => {
    const url = "http://localhost:5000/api/v1/tasks"
    const decoded = token && jwt(token)

    const submitted = async (taskName) => {
        try {
            if (token) {
                await axios.post(url, {
                    name: taskName,
                    userID: decoded.userID,
                })
                fetchData()
            } else alert("Login First")
        } catch (error) {
            console.log("Login First")
        }
    }

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState()

    async function fetchData() {
        setLoading(true)
        try {
            if (token) {
                const { data } = await axios.get(`${url}/${decoded.userID}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setLoading(false)
                setTasks(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="mainSection">
            <InputSection submitted={submitted} fetchData={fetchData} />
            <hr />
            <TaskArea loading={loading} tasks={tasks} fetchData={fetchData} />
        </section>
    )
}

export default MainBody
