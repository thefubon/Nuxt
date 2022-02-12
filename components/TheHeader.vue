<template>
  <header class="border-b">
    <nav class="container flex justify-between items-center h-[60px]">
      <div class="">
        <NuxtLink to="/">
          <img class="w-[150px]" src="logo-light.svg" alt="Logo">
        </NuxtLink>
      </div>

      <div class="">
        Update
      </div>

      <div class="flex justify-end items-center space-x-6 text-sm font-semibold">
        <NuxtLink to="/docs">Docs</NuxtLink>
        <NuxtLink to="/components">Components</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </div>
    </nav>
  </header>
</template> 