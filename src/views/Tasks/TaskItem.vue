<template>
    <BoxComponent>
        <div class="columns">
            <div class="column is-4">{{ task.description || 'Task without description' }}</div>
            <div class="column is-4">{{ task.project.name || 'Task without project' }}</div>
            <div class="column">
                <StopWatch :timePassedInSeconds="task.durationInSeconds" />
            </div>
            <div class="column">
                <button class="button is-danger mr-1" @click="deleteTask(task.id)">
                    <span class="icon">
                        <i class="fas fa-trash"></i>
                    </span>
                </button>
                <button class="button is-info" @click="editTask(task)">
                    <span class="icon">
                        <i class="fas fa-edit"></i>
                    </span>
                </button>
            </div>
        </div>
    </BoxComponent>
</template>


<script lang="ts">
import { PropType, defineComponent } from "vue";
import BoxComponent from "../../components/BoxComponent.vue";
import StopWatch from "./StopWatch.vue";
import TaskInterface from "../../interfaces/TaskInterface";

export default defineComponent({
    name: 'TaskItem',
    emits: ['editTask'],
    components: {
        BoxComponent,
        StopWatch
    },
    props: {
        task: {
            type: Object as PropType<TaskInterface>,
            required: true
        }
    },
    methods: {
        deleteTask(id: string) {
            console.log('delete task', id)
        },
        editTask(task: TaskInterface) {
            this.$emit('editTask', task)
        }
    }
});

</script>