<template>
	<li>
		<span
			:class="{ 'is-completed': todo.completed }"
			v-if="!isEditing"
			@click="startEditing"
			>{{ todo.title }}</span
		>
		<div v-else>
			<input type="text" v-model="editedTitle" placeholder="Edit title" />
			<button @click="confirmEdit">Confirm</button>
			<button @click="cancelEdit">Cancel</button>
		</div>
		<div class="actionBtns">
			<button @click="toggleComplete" class="compleate">
				{{ todo.isCompleted ? 'Mark Incomplete' : 'Mark Complete' }}
			</button>
			<button @click="editTodo" class="edit">Edit</button>
			<button @click="deleteTodo" class="delete">Delete</button>
		</div>
	</li>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		props: ['todo'],
		data() {
			return {
				isEditing: false,
				editedTitle: '',
			}
		},
		methods: {
			...mapActions({
				updateTask: 'todos/updateTask',
				deleteTask: 'todos/deleteTask',
				// Other actions
			}),
			startEditing() {
				this.isEditing = true
				this.editedTitle = this.todo.title
			},
			confirmEdit() {
				const updatedTodo = { ...this.todo, title: this.editedTitle }
				this.updateTask({ id: this.todo.id, updatedTodo })
				this.isEditing = false
			},
			cancelEdit() {
				this.isEditing = false
			},
			toggleComplete() {
				const updatedTodo = {
					...this.todo,
					completed: !this.todo.completed,
				}
				this.updateTask({ id: this.todo.id, updatedTodo })
			},

			deleteTodo() {
				this.deleteTask(this.todo.id)
			},
			editTodo() {
				this.startEditing()
			},
		},
	}
</script>

<style>
	/* Add your CSS styling here */
	li {
		list-style: none;
		margin: 10px 0;
		padding: 10px;
		border: 1px solid #ccc;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	input {
		margin-right: 10px;
	}

	.actionBtns {
		width: 40%;
		display: flex;
		justify-content: space-between;
	}

	button {
		padding: 8px 20px;
		border: none;
		border-radius: 12px;
		background-color: #35495e;
		color: white;
		font-size: 12px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	button:hover {
		background-color: #3700b3;
	}

	.compleate {
		background-color: #41b883;
	}

	.edit {
		background-color: #35495e;
	}

	.delete {
		background-color: #cf1414;
	}

	.is-completed {
		text-decoration: line-through;
		color: #41b883;
	}
</style>
