<template>
  <div>
    <header>
      <h1>
        <img src="../assets/hourglass.gif" width="250px" alt="">
      </h1>
      <aside class="menu">
        <p class="menu-label">
          Menu
        </p>
        <ul class="menu-list">
          <li>
            <router-link to="/">
              <i class="fas fa-house"></i>
              Go to Home</router-link>
          </li>
          <li>
            <router-link to="/time-tracker">
              <i class="fas fa-tasks"></i>
              Go to Time Tracker</router-link>
          </li>
          <li>
            <router-link to="/projects">
              <i class="fas fa-project-diagram"></i>
              Go to MyProjects</router-link>
          </li>
        </ul>
      </aside>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar'
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;

  & h1 {
    text-align: center;

  }

  & .menu-list li a {
    color: white;
  }

  & .menu-list li a:hover {
    color: black;
  }

  & .menu-list li a i {
    padding-right: 10px;
  }
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
