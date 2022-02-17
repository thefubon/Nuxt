<template>
  <div>

    <div class="flex justify-center">
      <div>
        <div class="dropdown relative">
          <button
            class="
              dropdown-toggle
              py-2
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded-full
              transition
              duration-150
              ease-in-out
              flex
              items-center
              whitespace-nowrap
            "
            type="button"
            id="dropdownMenuButton1tx"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
         
              <ColorScheme placeholder="..." tag="span">
                <span :class="$colorMode.preference" v-if="$colorMode.preference === 'system'"><IconSystem class="w-6 h-6" /></span>
                <span :class="$colorMode.preference" v-if="$colorMode.preference === 'light'"><IconLight class="w-6 h-6" /></span>
                <span :class="$colorMode.preference" v-if="$colorMode.preference === 'dark'"><IconDark class="w-6 h-6" /></span>
              </ColorScheme>
  

            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              class="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </button>
          <ul
            class="
              dropdown-menu
              min-w-max
              absolute
              hidden
              bg-white
              text-base
              z-50
              float-left
              py-2
              list-none
              text-left
              rounded-lg
              shadow-lg
              mt-1
              m-0
              bg-clip-padding
              border-none
            "
            aria-labelledby="dropdownMenuButton1tx"
          >
 
            <li class="p-4">
              <ColorModePicker />
            </li>
            
          </ul>
        </div>
      </div>
    </div>

  </div>
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