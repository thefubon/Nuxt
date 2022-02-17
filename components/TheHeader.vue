<template>
  <header class="fixed top-0 z-40 w-full border-b dark:text-slate-400 bg-white shadow border-transparent backdrop-blur transition-colors duration-500 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-slate-900">
    <div class="container mx-auto flex-1 px-4 lg:px-8">
      <nav class="flex items-center justify-between h-16">
        <div>
          <NuxtLink to="/">
            <img class="w-[120px] hidden dark:block" src="/fubon-w.svg" alt="Fubon Documentation">
            <img class="w-[120px] dark:hidden" src="/fubon-b.svg" alt="Fubon Documentation">
          </NuxtLink>
        </div>

        <div class="flex justify-end items-center space-x-6 text-sm font-semibold">
          <div class="hidden md:flex items-center space-x-6">
            <NuxtLink active-class="navbar-active" to="/docs">Docs</NuxtLink>
            <a class="active-login" href="/login">Login</a>
          </div>

          <AppDropdown />

          <div>
            <a class="inline-block py-2 px-4 bg-indigo-700 text-white rounded-full" href="https://github.com/thefubon/Nuxt-ViewUI" target="_blank">Download</a>
          </div>
        </div>
      </nav>
    </div>

  </header>
</template>

<style scoped>
  .navbar-active {
    @apply text-indigo-700 dark:text-slate-300;
  }
</style>