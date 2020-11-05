<template>
	<div class="about">
		<h1>This is an about page</h1>

		<div>
			count: {{ $store.state.count }}
			<button @click="bang()">bang</button>
		</div>

		<life-goals />
	</div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
	name: 'About',
	components: {
		LifeGoals: defineAsyncComponent(() => import('./LifeGoals.vue'))
	},
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
