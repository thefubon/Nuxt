# 👍 NuxtJS 2 / Tailwind CSS / Firebase
> Nuxt app template project with my customisation.

## Собираем идеальный стартовый Landing Page.

Nuxt JS v2<br>
Tailwind CSS v3<br>
Tailwind Elements (500+ UI components)<br>
Многоязычность - @nuxtjs/i18n<br>
Редактирование контента - @nuxt/content / @tailwindcss/typography<br>
Страницы с паролем - Password Protect<br>
Адаптивные изображение - @nuxt/image<br>
Dark Mode - @nuxtjs/color-mode / tailwindcss-dark-mode<br>
Автоматическая создание иконок для соц.сетей - @nuxtjs/pwa<br>
Адатация .svg изображений - @nuxtjs/svg<br>
Форма регистрации c API - @nuxtjs/firebase / @tailwindcss/forms<br>
Anime.js - nuxt-animejs [Example](https://github.com/ivodolenc/nuxt-animejs)

### Save Code
```bash
<div class="fullDate">{{ date | formatDate1 }}</div>
<div class="fullDate">{{ formatDate2(date) }}</div>

<script>
export default {
  data: () => ({
    date: new Date(),
  }),
  filters: {
    formatDate1: d => d.toLocaleString(['ru-RU'], {month: 'short', day: '2-digit', year: 'numeric'}),
  },
  methods: {
    formatDate2: d => d.toLocaleString('ru-RU').replace(',', '').slice(0, -3),
  },
}
</script>
```

```bash
class="h-[calc(100vh-61px)]"
```

```bash
@click.native="value1 = false"
```

```bash
this.$i18n.locale,
```

```bash
<Select v-bind="$colorMode.preference">
  <Option v-for="item in darkModeList" :value="item.value" :key="item.value"><img class="inline-block mr-2" :src="item.icon" />{{ item.label }}</Option>
</Select>

data () {
  return {
    darkModeList: [
      {
        value: 'system',
        label: 'System',
        icon: require('/assets/icons/system.svg')
      },
      {
        value: 'light',
        label: 'Light',
        icon: require('/assets/icons/light.svg')
      },
      {
        value: 'dark',
        label: 'Dark',
        icon: require('/assets/icons/dark.svg')
      }
    ]
  }
},
```

```js
// Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - RonnieCodes",
    title: "RonnieCodes",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I'm a guy that is fond of creating full stack web apps.I'm currently based in the Netherlands. I create modern and functional web apps."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Web Development, Full Stack, Ronnie, RonnieCodes, Web Developer, Node.js, Vue.js, Nuxt.js, Node.js Developer"
      },

      {
        hid: "og:url",
        property: "og:url",
        content: "https://ronniecodes.com"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "I'm a guy that is fond of creating full stack web apps.I'm currently based in the Netherlands. I create modern and functional web apps."
      },

      { name: "twitter:site", content: "@TheCodingNuke" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://ronniecodes.com"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "I'm a guy that is fond of creating full stack web apps.I'm currently based in the Netherlands. I create modern and functional web apps."
      },

      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-config", content: "/favicons/browserconfig.xml" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png"
      },
      { rel: "icon", type: "image/png", href: "/favicons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", href: "/favicons/favicon-16x16.png" },
      {
        rel: "mask-icon",
        href: "/favicons/safari-pinned-tab.svg",
        color: "#6366f1"
      },
      { rel: "shortcut icon", href: "/favicons/favicon.ico" },

      // Font Family
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
      }
    ]
  },
  ```

## What is included in the project
[Nuxt 2](https://nuxtjs.org/)<br>
[Tailwind CSS](https://tailwindcss.com/)<br>
[Tailwind Elements](https://tailwind-elements.com/quick-start/)<br>
[Firebase](https://firebase.google.com/)

## Additional Plugins to consider
[View UI](https://www.iviewui.com/)<br>
[Vant - Mobile UI Components](https://vant-contrib.gitee.io/vant/#/en-US/)<br>
[VueMotion - components in animation](https://motion.vueuse.org/)

## Examples of code and components
[Nuxt, HTML, CSS - Components](https://heartcode.fuxing.dev/)

## Nuxt Firebase Tutorial
[Firebase Form Tutorial](https://youtu.be/btQWHig29pA)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate

# build for production and launch server
$ npm run start
```

## Meta

```bash
<meta property="og:title" content="Title">
<meta property="og:type" content="website">
<meta property="og:url" content="thefubon.com">
<meta property="og:image" content="https://image.jpg">
<meta property="og:site_name" content="Site Name">
<meta property="og:description" content="Description">
<meta property="og:video" content="https://video.mp4">
<meta property="og:audio" content="https://audio.mp3">
<meta property="og:determiner" content="determiner">
<meta property="og:locale" content="locale">
```

## UTM

```bash
# Utm Url
?utm_source=website_com&utm_medium=news&utm_term=name_conference&utm_content=article&utm_campaign=moscow
```

## JavaScript UTM

```bash
  // парсим гет-параметры
  var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
      function(p,e){
        var a = e.split('=');
        p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
      },
      {}
  );
  if (params.utm_source) {
    $('#form-input-utm_source').val(params.utm_source);
  }
  if (params.utm_medium) {
    $('#form-input-utm_medium').val(params.utm_medium);
  }
  if (params.utm_term) {
    $('#form-input-utm_term').val(params.utm_term);
  }
  if (params.utm_content) {
    $('#form-input-utm_content').val(params.utm_content);
  }
  if (params.utm_campaign) {
    $('#form-input-utm_campaign').val(params.utm_campaign);
  }
```
