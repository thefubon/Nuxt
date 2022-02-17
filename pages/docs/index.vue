<template>
  <main class="container px-4 lg:px-8">

    <div class="flex flex-wrap relative">

      <aside class="w-full lg:w-1/5 lg:block fixed lg:relative inset-0 mt-16 lg:mt-0 z-30 bg-white lg:bg-transparent hidden">
        <div class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)">
          <DocsSubMenu/>
        </div>
      </aside>


      <div class="flex flex-wrap-reverse w-full lg:w-4/5">
        <div class="w-full py-4 lg:pt-8 lg:pb-4 lg:w-3/4 lg:border-l lg:border-r">
          <article class="lg:px-8">
            <h1 class="flex items-center justify-between">{{ page.title }}</h1>
            <NuxtContent class="prose prose-slate dark:prose-dark" :document="page" />
          </article>
        </div>

        <div class="w-full lg:w-1/4 block relative">
          <div class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)">
            <nav class="py-4 lg:py-8 lg:pl-8 lg:pr-2">
              <p class="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">На этой страницы</p>
              <scrollactive class="space-y-2 text-sm" active-class="scrollactive" :modifyUrl="true" :offset="90" :duration="800" bezier-easing-value=".5,0,.35,1" tag="ul">
                <li v-for="link of page.toc" :key="link.id">
                  <a
                    class="scrollactive-item hover:pl-1 duration-300"
                    :class="{ 'toc-2': link.depth === 2, 'toc-2': link.depth === 3 }"
                    :href="`#${link.id}`
                  ">{{ link.text }}</a>
                </li>
              </scrollactive>
            </nav>
          </div>
        </div>
      </div>
    
    </div>
        
  </main>
</template>

<script>
export default {
  layout: "docs",

  async asyncData ({ $content }) {
    const page = await $content('docs/index').fetch()

    return {
      page
    }
  },

  head () {
    const title = this.page.title
    const description = this.page.description

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: `Nuxt - ${title}` },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: `Nuxt - ${title}` },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  }

}
</script>