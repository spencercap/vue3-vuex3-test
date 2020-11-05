<template>
	<div class="about">
		<h1>This is an about page</h1>

		<div>
			count: {{ $store.state.count }}
			<button @click="bang()">bang</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'About',
	// props: {
	//   msg: String,
	// },
	mounted() {
		console.log('About mounted');
		console.log('count:', this.$store.state.count);
	},
	methods: {
		bang() {
			this.$store.state.count++;
		}
	}
});
</script>
