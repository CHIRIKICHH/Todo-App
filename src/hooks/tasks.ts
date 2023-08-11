import { useEffect, useState } from "react";
import { ICategory, ITask } from "../models";
import axios, { AxiosError } from "axios";

export function useTasksAndCategories(){
    const [tasks, setTasks] = useState<ITask[]>([])
    const[categories, setCategories] = useState<ICategory[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchTasks() {
        try {
            setError('')
            setLoading(true)
            const headers = {
                "Content-Type": "application/json",
            };
            let url : string = "https://localhost/api/Task";
            const response = await axios.get<ITask[]>(url, { headers })
            console.log(response)
            setTasks(response.data)
           url = "https://localhost/api/Category"
            const response1 = await axios.get<ICategory[]>(url,{headers})
            setCategories(response1.data)
            setLoading(false)
        }
        catch (err: unknown) {
            const error = err as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])
    return { tasks, categories, error, loading };
}