<template>
	<div class="LifeGoals">
		<h1>This is an LifeGoals component</h1>

		<div>
			count: {{ $store.state.count }}

            <button @click="bewm()">bewm</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'LifeGoals',
	// props: {
	//   msg: String,
	// },
	mounted() {
		console.log('LifeGoals mounted');
    },
    methods: {
        async bewm() {
            console.log('bewm started');

            await this.$store.dispatch('increment');

            console.log('bewm finished');
        }
    }
});
</script>
