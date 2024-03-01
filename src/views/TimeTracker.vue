<template>
    <section class="projects">
        <h1 class="title">Time Tracker</h1>
        <FormComponent @onAddTaskToList="addTaskToList" />
        <div class="list">
            <TaskItem v-for="(task, index) in tasks" :task="task" :key="index" />
            <BoxComponent v-if="emptyList">
                No tasks to show
            </BoxComponent>
        </div>
    </section>
</template>
  
<script lang="ts">

import { defineComponent } from 'vue';
import FormComponent from '../components/FormComponent.vue'
import TaskItem from '../components/TaskItem.vue'
import TaskInterface from '../interfaces/TaskInterface'
import BoxComponent from '../components/BoxComponent.vue'

export default defineComponent({
    name: 'TimeTracker',
    components: {
        FormComponent,
        TaskItem,
        BoxComponent
    },
    data() {
        return {
            tasks: [] as TaskInterface[]
        }
    },
    methods: {
        addTaskToList(task: TaskInterface) {
            this.tasks.push(task)
        }
    },
    computed: {
        emptyList(): boolean {
            return this.tasks.length === 0

        }
    }
});
</script>
  
<style>
.projects {
    padding: 1.25rem;
}


.list {
    padding: 1.25rem;
}

main {
    --bg-primario: #fff;
    --texto-primario: #000;
}

main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
}

.conteudo {
    background-color: var(--bg-primario);
}
</style>