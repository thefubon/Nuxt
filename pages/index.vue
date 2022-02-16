<template>
  <div class="container px-4 lg:px-8 py-10">
    <button class="" @click="toggleDarkMode()">
      <ColorScheme placeholder="..." tag="span">
        <span v-if="$colorMode.value === 'light'">
          <IconDark class="w-6 h-6" />
        </span>
        <span v-else>
          <IconLight class="w-6 h-6" />
        </span>
      </ColorScheme>
    </button>
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  //colorMode: 'light',
  components: {
    IconLight,
    IconDark,
  },

  methods: {
    toggleDarkMode() {
      if (this.$colorMode.preference !== 'dark') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    }
  }

}
</script>

<style>
.dropdown:focus-within .dropdown-menu {
  opacity:1;
  transform: translate(0) scale(1);
  visibility: visible;
  z-index: 500;
}
</style>