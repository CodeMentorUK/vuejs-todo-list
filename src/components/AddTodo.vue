<template>
	<div>
		<input
			type="text"
			v-model="newTodo"
			@keyup.enter="addTodo"
			placeholder="Add new todo action"
		/>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				newTodo: '',
			}
		},
		methods: {
			...mapActions({
				addTodoAction: 'todos/addTask',
			}),
			addTodo() {
				this.addTodoAction({ title: this.newTodo })
				this.newTodo = ''
			},
		},
	}
</script>

<style>
	input {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 16px;
		margin-bottom: 10px;
	}
</style>
