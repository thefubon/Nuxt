<template>
  <div class="container px-4 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-10">Welcome</h1>

    <Select v-bind="$colorMode.preference">
        <Option v-for="item in darkModeList" :value="item.value" :key="item.value"><img class="inline-block mr-2" :src="item.icon" />{{ item.label }}</Option>
    </Select>
    

    <div class="my-10">
      <h2 class="text-2xl font-bold">Click Color Theme</h2>

      <button class="button is-info is-block" @click="toggleDarkMode()">
        <ColorScheme placeholder="..." tag="span">
          <span v-if="$colorMode.value === 'light'">
            <IconDark /> Dark
          </span>
          <span v-else>
            <IconLight /> Light
          </span>
        </ColorScheme>
      </button>
    </div>

    <AppModal />

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