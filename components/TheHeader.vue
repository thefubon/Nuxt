<template>
  <header class="fixed top-0 z-40 w-full border-b bg-white shadow border-transparent">
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
            <a href="/login">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 inline-block" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
            </a>
          </div>
          <div>
            <a class="inline-block py-2 px-4 bg-indigo-700 text-white rounded-full" href="https://github.com/thefubon/Nuxt-ViewUI" target="_blank">Download</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template> 