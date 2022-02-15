<template>
  <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
    <NuxtLink to="/docs" @click.native="value1 = false">Docs</NuxtLink>
    <NuxtLink to="/components" @click="value1 = false">Components</NuxtLink>
    <NuxtLink to="/blog" @click="value1 = false">Blog</NuxtLink>
    <a href="/login">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 inline-block" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
        <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
      </svg>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: false
      }
    }
  }
</script>