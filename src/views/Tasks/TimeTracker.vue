<template>
    <section class="projects">
        <h1 class="title">Time Tracker</h1>
        <FormComponent @onAddTaskToList="addTaskToList" />
        <div class="list">
            <TaskItem @editTask="editTask" v-for="(task, index) in tasks" :task="task" :key="index" />
            <BoxComponent v-if="emptyList">
                No tasks to show
            </BoxComponent>
        </div>
        <Modal v-if="taskSelected" @saveTask="saveTask" @closeModal="closeModal" :taskSelected="taskSelected"
            :openModal="openModal">
            <template v-slot:header>
                <p class="modal-card-title">Edit task</p>
            </template>
            <template v-slot:section>
                <div class="field">
                    <label for="description" class="label">Description</label>
                </div>
            </template>
        </Modal>
    </section>
</template>
  
<script lang="ts">

import { computed, defineComponent } from 'vue';
import FormComponent from './FormComponent.vue'
import TaskItem from './TaskItem.vue'
import TaskInterface from '../../interfaces/TaskInterface'
import BoxComponent from '../../components/BoxComponent.vue'
import Modal from '@/components/Modal.vue';
import { useStore } from '@/store';

export default defineComponent({
    name: 'TimeTracker',
    components: {
        FormComponent,
        TaskItem,
        BoxComponent,
        Modal
    },
    setup() {
        const store = useStore();
        return {
            store,
            tasks: computed(() => store.state.task.tasks)
        }
    },
    data() {
        return {
            openModal: false,
            taskSelected: {} as TaskInterface
        }
    },
    methods: {
        addTaskToList(task: TaskInterface) {
            this.store.dispatch('addTask', task)
        },
        editTask(task: TaskInterface) {
            this.taskSelected = task
            this.openModal = true
        },
        saveTask(task: TaskInterface) {
            this.store.dispatch('updateTask', task).then(() => {
                this.closeModal()
            })
        },
        closeModal() {
            this.openModal = false
        }
    },
    computed: {
        emptyList(): boolean {
            return false

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