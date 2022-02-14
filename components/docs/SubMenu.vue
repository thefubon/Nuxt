<template>
  <ul class="p-4 lg:py-8 lg:pl-0 lg:pr-8 space-y-4">
    <li>
      <p class="mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">Начало</p>
      <ul>
        <li class="text-gray-700">
          <NuxtLink class="px-2 rounded font-medium py-1 flex items-center justify-between hover:text-indigo-700" active-class="nuxt-link-active" to="/docs" exact>Вступление</NuxtLink>
        </li>
        <li class="text-gray-700">
          <NuxtLink class="px-2 rounded font-medium py-1 flex items-center justify-between hover:text-indigo-700" active-class="nuxt-link-active" to="/docs/install">Установка</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
  .nuxt-link-active {
    @apply bg-indigo-700 text-white;
  }
</style>