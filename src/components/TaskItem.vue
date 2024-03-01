<template>
    <BoxComponent>
        <div class="columns">
            <div class="column is-4">{{ task.description || 'Task without description' }}</div>
            <div class="column is-4">{{ task.project.name || 'Task without project' }}</div>
            <div class="column">
                <StopWatch :timePassedInSeconds="task.durationInSeconds" />
            </div>
        </div>
    </BoxComponent>
</template>


<script lang="ts">
import { PropType, defineComponent } from "vue";
import BoxComponent from "./BoxComponent.vue";
import StopWatch from "./StopWatch.vue";
import TaskInterface from "../interfaces/TaskInterface";

export default defineComponent({
    name: 'TaskItem',
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
});

</script>