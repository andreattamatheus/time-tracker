<template>
    <div class="modal" :class="openModal ? ' is-active' : ''">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <slot name="header" />
                <button class="delete" aria-label="close"></button>
            </header>
            <form>
                <section class="modal-card-body">
                    <slot name="section" />
                    <input type="text" class="input" v-model="taskDescription" id="description" />

                </section>
                <footer class="modal-card-foot">
                    <button @click="saveTask" class="button is-success">Save changes</button>
                    <button @click="closeModal" class="button">Cancel</button>
                </footer>
            </form>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from '@/store';

export default defineComponent({
    name: "Modal",
    emits: ['saveTask', 'closeModal'],
    setup() {
        const store = useStore();
        return {
            store
        }
    },
    props: {
        openModal: {
            type: Boolean,
            required: true
        },
        taskSelected: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            taskDescription: this.taskSelected.description
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        },
        saveTask() {
            const task = {
                ...this.taskSelected,
                description: this.taskDescription
            }
            this.$emit('saveTask', task)
            this.$emit('closeModal')
        },

    },
    watch: {
        taskSelected(): string {
            return this.taskDescription = this.taskSelected.description
        }
    }
});
</script>