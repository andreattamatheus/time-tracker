<template>
  <div class="box">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Creation of new task form">
        <input type="text" class="input" placeholder="Which task do you want to start?" v-model="taskDescription" />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Select project</option>
            <option :value="project.id" v-for="project in projects" :key="project.id">
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <TimerComponent @onFinishTask="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import TimerComponent from "./TimerComponent.vue";
import { useStore } from "vuex";

import { key } from "@/store";


export default defineComponent({
  name: "FormComponent",
  emits: ['onAddTaskToList'],
  components: {
    TimerComponent,
  },
  setup() {
    const store = useStore(key);
    return {
      store,
      projects: computed(() => store.state.project.projects)
    }
  },
  data() {
    return {
      taskDescription: '',
      idProject: ''
    }
  },
  mounted() {
    this.store.dispatch('fetchProjects');
  },
  methods: {
    finishTask(timePassed: number): void {
      this.$emit('onAddTaskToList', {
        description: this.taskDescription,
        durationInSeconds: timePassed,
        project: this.projects.find((project) => project.id === this.idProject)
      })
      this.taskDescription = ''
    },
  }
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
