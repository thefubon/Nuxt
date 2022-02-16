<template>
  <div class="container px-4 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-10">Welcome</h1>

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


    <!-- Button trigger modal -->
<button type="button" class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        Modal body text goes here.
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button" class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
        <button type="button" class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1">Save changes</button>
      </div>
    </div>
  </div>
</div>

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
          icon: require('/assets/img/display.svg')
        },
        {
          value: 'light',
          label: 'Light',
          icon: require('/assets/img/brightness-high.svg')
        },
        {
          value: 'dark',
          label: 'Dark',
          icon: require('/assets/img/moon-stars.svg')
        },
        {
          value: 'sepia',
          label: 'Sepia',
          icon: require('/assets/img/moon-stars.svg')
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