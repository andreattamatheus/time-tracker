<template>
    <router-link to="/projects/create" class="button is-primary">Create Project</router-link>
    <div id="tableDesc" class="visually-hidden">This table displays the ID and name of each project.</div>
    <table class="table is-fullwidth" aria-describedby="tableDesc">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="project in projects" :key="project.id">
                <td>{{ project.id }}</td>
                <td>{{ project.name }}</td>
                <td>
                    <router-link :to="`projects/${project.id}/edit`"
                        class="button is-small is-primary mr-1">Edit</router-link>
                    <button @click="deleteProject(project.id)" class="button is-small is-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
  
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from '@/store';

export default defineComponent({
    name: "List",
    setup() {
        const store = useStore();

        const deleteProject = (projectID: string) => {
            store.dispatch('deleteProject', projectID);
        }

        return {
            store,
            projects: computed(() => store.state.project.projects),
            deleteProject
        }
    }
});
</script>
  