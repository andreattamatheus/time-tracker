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
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { key } from '@/store';
import { useRouter } from "vue-router";

export default defineComponent({
    name: "Form",
    props: {
        id: {
            type: String,
            required: false,
            default: ""
        }
    },
    setup(props) {
        const store = useStore(key);
        const router = useRouter()
        const projectName = ref('')

        if (props.id) {
            const project = store.state.project.projects.find(project => project.id === props.id)
            if (project) {
                projectName.value = project?.name || ''
            }
        }

        const saveProject = () => {
            if (props.id) {
                store.dispatch('updateProject', { id: props.id, name: projectName.value })
            } else {
                store.dispatch("addProject", projectName.value);
            }
            projectName.value = "";
            router.push('/projects')
        }

        return {
            store,
            projects: computed(() => store.state.project.projects),
            projectName,
            saveProject
        }
    },

});
</script>
  