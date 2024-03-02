<template>
    <router-link to="/projects/create" class="button is-primary">Create Project</router-link>
    <div id="tableDesc" class="visually-hidden">This table displays the ID and name of each project.</div>
    <div class="field">
        <p class="control has-icons-left mt-2">
            <input class="input" type="filter" v-model="filter" placeholder="Search your project">
            <span class="icon is-small is-left">
                <i class="fas fa-search"></i>
            </span>
        </p>
    </div>
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
import { computed, defineComponent, ref } from "vue";
import { useStore } from '@/store';

export default defineComponent({
    name: "List",
    setup() {
        const store = useStore();
        const filter = ref('');
        const deleteProject = (projectID: string) => {
            store.dispatch('deleteProject', projectID);
        }
        const projects = computed(() => store.state.project.projects.filter(
            project => !filter.value || project.name.includes(filter.value)
        ))
        return {
            store,
            filter,
            projects,
            deleteProject
        }
    }
});
</script>
  