<template>
    <main class="columns is-gapless is-multiline">
        <div class="column is-one-quarter">
            <SideBar />
        </div>
        <div class="column is-three-quarter">
            <router-view></router-view>
        </div>
    </main>
</template>
  
<script lang="ts">

import { defineComponent } from 'vue';
import SideBar from '../components/SideBar.vue'
import { useStore } from '@/store';

export default defineComponent({
    name: 'TimeTracker',
    components: {
        SideBar,
    },
    setup() {
        const store = useStore();
        return {
            store
        }
    },
    mounted() {
        this.store.dispatch('fetchTasks')
        this.store.dispatch('fetchProjects');
    },

});
</script>
  
<style>
.lista {
    padding: 1.25rem;
}

main {
    --bg-primario: #fff;
    --texto-primario: #000;
}
</style>