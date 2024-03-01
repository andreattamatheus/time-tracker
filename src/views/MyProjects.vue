<template>
    <section class="projects">
        <h1 class="title">Projects</h1>
        <form @submit.prevent="saveProject">
            <div class="field">
                <label for="projectName" class="label"> Project name</label>
                <input type="text" class="input" v-model="projectName" id="projectName" />
            </div>
            <div class="field">
                <button class="button" type="submit">Save</button>
            </div>
        </form>
        <div id="tableDesc" class="visually-hidden">This table displays the ID and name of each project.</div>
        <table class="table is-fullwidth" aria-describedby="tableDesc">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
  
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from '@/store';

export default defineComponent({
    name: "MyProjects",
    setup() {
        const store = useStore();
        return {
            store,
            projects: computed(() => store.state.projects)
        }
    },
    data() {
        return {
            projectName: ""
        };
    },
    methods: {
        saveProject() {
            this.store.commit('addProject', this.projectName)
            this.projectName = "";
        },
    },
});
</script>
  
<style scoped>
.projects {
    padding: 1.25rem;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
</style>
