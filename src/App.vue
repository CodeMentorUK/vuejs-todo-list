<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<TodoList />
		<!-- Include the TodoList component here -->
	</div>
</template>

<script>
	import TodoList from './components/TodoList.vue' // Import the TodoList component

	export default {
		name: 'App',
		components: {
			TodoList, // Register the TodoList component
		},
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		max-width: 80%;
		margin: 0 auto;
	}
</style>
