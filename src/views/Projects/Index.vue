<template>
    <section class="projects">
        <h1 class="title">Projects</h1>
        <router-view></router-view>
    </section>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Index",
});
</script>
  
<style>
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
