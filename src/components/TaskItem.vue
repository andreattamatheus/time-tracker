<template>
    <BoxComponent>
        <div class="columns">
            <div class="column is-7">{{ task.description || 'Tarefa sem descrição' }}</div>
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