<template>
  <div class="container flex h-[calc(100vh-60px)] border divide-x">
    <aside class="shrink-0 w-2/12 overflow-y-auto">
      Sidebar
      <div class="h-[3000px]"></div>
    </aside>

    <main class="flex-1 overflow-y-auto">
      Content
    </main>
  </div>
</template>

<script>
export default {
  layout: "docs",
}
</script>