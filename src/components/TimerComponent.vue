<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <StopWatch :timePassedInSeconds="timePassedInSeconds" />
        <button class="button" @click="startTask" :disabled="isStopWatchRunning">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finishTask" :disabled="!isStopWatchRunning">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import StopWatch from "./StopWatch.vue";

export default defineComponent({
    name: "TimerComponent",
    emits: ['onFinishTask'],
    components: {
        StopWatch
    },
    data() {
        return {
            timePassedInSeconds: 0,
            isStopWatchRunning: false,
            stopWatch: 0
        }
    },
    methods: {
        startTask() {
            this.isStopWatchRunning = true
            this.stopWatch = setInterval(() => {
                this.timePassedInSeconds += 1
            }, 1000)

        },
        finishTask() {
            this.isStopWatchRunning = false
            clearInterval(this.stopWatch)
            this.$emit('onFinishTask', this.timePassedInSeconds)
            this.timePassedInSeconds = 0
        }
    }
})

</script>