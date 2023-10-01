import { fetchTodos, addTodo, updateTodo, deleteTodo } from '@/api/todos'

const state = {
	tasks: [],
}

const getters = {
	allTasks: state => state.tasks,
}

const actions = {
	async fetchTasks({ commit }) {
		const response = await fetchTodos()
		commit('setTasks', response.data)
	},
	async addTask({ commit }, task) {
		const response = await addTodo(task)
		commit('setTask', response.data)
	},
	async updateTask({ commit }, { id, updatedTodo }) {
		const response = await updateTodo(id, updatedTodo)
		commit('modifyTask', response.data)
	},
	async deleteTask({ commit }, id) {
		await deleteTodo(id)
		commit('removeTask', id)
	},
}

const mutations = {
	setTasks: (state, tasks) => (state.tasks = tasks),
	setTask: (state, task) => state.tasks.push(task),
	modifyTask: (state, updatedTodo) => {
		const index = state.tasks.findIndex(task => task.id === updatedTodo.id)
		if (index !== -1) {
			state.tasks.splice(index, 1, updatedTodo)
		}
	},
	removeTask: (state, id) => {
		const index = state.tasks.findIndex(task => task.id === id)
		if (index !== -1) {
			state.tasks.splice(index, 1)
		}
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
