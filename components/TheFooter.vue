<template>
  <footer class="relative w-full border-t z-20">
    <div class="h-full w-full container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
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
  </footer>
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