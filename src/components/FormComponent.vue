<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Creation of new task form">
        <input type="text" class="input" placeholder="Which task do you want to start?" v-model="taskDescription" />
      </div>
      <div class="column">
        <TimerComponent @onFinishTask="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimerComponent from "./TimerComponent.vue";

export default defineComponent({
  name: "FormComponent",
  emits: ['onAddTaskToList'],
  components: {
    TimerComponent,
  },
  data() {
    return {
      taskDescription: '',
    }
  },

  methods: {
    finishTask(timePassed: number): void {
      this.$emit('onAddTaskToList', {
        description: this.taskDescription,
        durationInSeconds: timePassed
      })
      this.taskDescription = ''
    }
  }
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>