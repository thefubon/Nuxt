<template>
  <header class="fixed top-0 z-40 w-full border-b dark:text-slate-400 bg-white shadow border-transparent backdrop-blur transition-colors duration-500 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] dark:bg-[#002E3B]">
    <div class="container mx-auto flex-1 px-4 lg:px-8">
      <nav class="flex items-center justify-between h-16">
        <div>
          <NuxtLink :to="localePath('/')">
            <img class="w-[120px] hidden dark:block" src="/colored-white-text.svg" alt="Fubon Documentation">
            <img class="w-[120px] dark:hidden" src="/colored-text.svg" alt="Fubon Documentation">
          </NuxtLink>
        </div>

        <div class="flex justify-end items-center space-x-6 text-sm font-semibold">
          <div class="hidden md:flex items-center space-x-6">
            <NuxtLink active-class="navbar-active" v-for="item in navbarLink" :to="item.link" :key="item.id">{{ item.label }}</NuxtLink>
            <a class="active-login" href="/login">Login</a>
          </div>

          <AppDarkMode />

          <AppLangSwitcher />

          <div>
            <a class="inline-block py-2 px-4 bg-[#00DC82] hover:bg-[#4DE7A8] text-gray-800 rounded" href="https://landing-starterkit.thefubon.dev/" target="_blank">Download</a>
          </div>
        </div>
      </nav>
    </div>

  </header>
</template>

<script>
export default {
data () {
  return {
    navbarLink: [
      {
        id: '1',
        label: 'Docs',
        link: '/docs'
      },
    ]
  }
},
}
</script>

<style scoped>
  .navbar-active {
    @apply text-[#00DC82];
  }
</style>