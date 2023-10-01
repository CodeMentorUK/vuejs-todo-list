<template>
	<div>
		<h1>Your Todos</h1>
		<AddTodo />
		<ul>
			<TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
		</ul>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex' // Import mapGetters
	import TodoItem from './TodoItem.vue'
	import AddTodo from './AddTodo.vue'

	export default {
		components: {
			TodoItem,
			AddTodo,
		},
		computed: {
			...mapGetters({
				todos: 'todos/allTasks', // Map the todos getter from your store
			}),
		},
		methods: {
			...mapActions({
				fetchTasks: 'todos/fetchTasks',
			}),
		},
		mounted() {
			this.fetchTasks() // Fetch the tasks when the component is mounted
		},
	}
</script>

<style></style>
