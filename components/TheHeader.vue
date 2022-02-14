<template>
  <header class="fixed top-0 z-40 w-full border-b dark:border-gray-800 bg-white dark:bg-gray-900 shadow border-transparent">
    <div class="container mx-auto flex-1 px-4 lg:px-8">
      <nav class="flex items-center justify-between h-16">
        <div class="">
          <NuxtLink to="/">
            <img class="w-[120px]" src="/fubon.svg" alt="Fubon Documentation">
          </NuxtLink>
        </div>

        <div class="">
          Update
        </div>

        <div class="flex justify-end items-center space-x-10 text-sm font-semibold">
          <div class="space-x-6 hidden md:block">
            <NuxtLink to="/docs">Docs</NuxtLink>
            <NuxtLink to="/components">Components</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </div>
          <div>
            <a class="inline-block py-2 px-4 bg-indigo-700 text-white rounded-full" href="https://thefubon.com" target="_blank">Download</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template> 