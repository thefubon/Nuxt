<template>
  <div class="container px-4 lg:px-8 py-10">
    <h1 class="text-2xl font-semibold mb-4">{{ $t('index.title') }}</h1>

    <div class="space-y-4">
      <p>Nuxt JS v2</p>
      <p>Tailwind CSS v3</p>
      <p>Tailwind Elements (500+ UI components)</p>
      <p>Многоязычность - @nuxtjs/i18n</p>
      <p>Редактирование контента - @nuxt/content / @tailwindcss/typography</p>
      <p>Страницы с паролем - Password Protect</p>
      <p>Адаптивные изображение - @nuxt/image</p>
      <p>Dark Mode - @nuxtjs/color-mode / tailwindcss-dark-mode</p>
      <p>Автоматическая создание иконок для соц.сетей - @nuxtjs/pwa</p>
      <p>Адатация .svg изображений - @nuxtjs/svg</p>
      <p>Форма регистрации c API - @nuxtjs/firebase / @tailwindcss/forms</p>
      <p>Anime.js - nuxt-animejs</p>
    </div>

    <div v-if="availableLocales.length" class="inline-flex">
      <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">{{ locale.name }}</NuxtLink>
    </div>
    
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales // this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      // <NuxtLink v-for="locale in availableLocales" v-if="$i18n.locale !== locale.code" :to="switchLocalePath(locale.code)" >{{ locale.name }}</NuxtLink>
    }
  },
}
</script>
