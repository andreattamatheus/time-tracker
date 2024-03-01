<template>
    <form @submit.prevent="saveProject">
        <div class="field">
            <label for="projectName" class="label"> Project name</label>
            <input type="text" class="input" v-model="projectName" id="projectName" />
        </div>
        <div class="field">
            <button class="button" type="submit">Save</button>
        </div>
    </form>
</template>
  
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from '@/store';

export default defineComponent({
    name: "Form",
    setup() {
        const store = useStore();
        return {
            store,
            projects: computed(() => store.state.projects)
        }
    },
    props: {
        id: {
            type: String,
            required: false,
            default: ""
        }
    },
    data() {
        return {
            projectName: ""
        };
    },
    mounted() {
        if (this.id) {
            const project = this.projects.find(project => project.id === this.id)
            if (project) {
                this.projectName = project.name
            }
        }
    },

    methods: {
        saveProject() {
            if (this.id) {
                this.store.dispatch('updateProject', { id: this.id, name: this.projectName })
            } else {
                this.store.dispatch("addProject", this.projectName);
            }
            this.projectName = "";
            this.$router.push('/projects')
        },

    },
});
</script>
  