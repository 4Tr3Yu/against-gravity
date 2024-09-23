<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="conatiner mx-auto">

      <nav class="flex justify-center gap-x-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/backdoor">About</RouterLink>
      </nav>
    </div>
  </header>

  <main class="container min-h-svh mx-auto">
    <RouterView />
  </main>
</template>
