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

          <div>
            <select
              v-model="$colorMode.preference"
              class="border w-24 h-10 dark:bg-gray-900 dark:text-white dark:border-gray-700"
            >
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div>
            <ColorScheme placeholder="..." tag="span">
              <span :class="$colorMode.preference" v-if="$colorMode.preference === 'system'"><IconSystem class="w-6 h-6" /></span>
              <span :class="$colorMode.preference" v-if="$colorMode.preference === 'light'"><IconLight class="w-6 h-6" /></span>
              <span :class="$colorMode.preference" v-if="$colorMode.preference === 'dark'"><IconDark class="w-6 h-6" /></span>
            </ColorScheme>
          </div>

          <div>
            <a class="inline-block py-2 px-4 bg-indigo-700 text-white rounded-full" href="https://github.com/thefubon/Nuxt-ViewUI" target="_blank">Download</a>
          </div>
        </div>
      </nav>
    </div>

  </header>
</template>

<script>
import IconSystem from '@/assets/icons/system.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  components: {
    IconSystem,
    IconLight,
    IconDark
  },
}
</script>

<style scoped>
  .navbar-active {
    @apply text-indigo-700 dark:text-slate-300;
  }
  .system {
    @apply text-slate-500;
  }
  .light {
    @apply text-yellow-600;
  }
  .dark {
    @apply text-slate-300;
  }
</style>