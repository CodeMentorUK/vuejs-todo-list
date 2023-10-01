// src/api/todos.js
import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
	return axios.get(baseUrl)
}

export const addTodo = todo => {
	return axios.post(baseUrl, todo)
}

export const updateTodo = async (id, updatedTodo) => {
	return await axios.put(`${baseUrl}/${id}`, updatedTodo)
}

export const deleteTodo = async id => {
	return await axios.delete(`${baseUrl}/${id}`)
}
