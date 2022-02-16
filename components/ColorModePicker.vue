<template>
  <div>
    <ul>
      <li v-for="color of colors" :key="color" @click="$colorMode.preference = color">
        <component :is="`icon-${color}`" @click="$colorMode.preference = color" :class="getClasses(color)" />
      </li>
    </ul>

    <ColorScheme placeholder="..." tag="span">
      Color mode: <b>{{ $colorMode.preference }}</b>
      <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
    </ColorScheme>
    
  </div>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'
import IconSystem from '@/assets/icons/system.svg?inline'
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  components: {
    ColorModePicker,
    IconSystem,
    IconLight,
    IconDark
  },

  data () {
    return {
      colors: ['system', 'light', 'dark']
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }

}
</script>

<style scoped>

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 5px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}

.feather {
  @apply w-10 h-10 cursor-pointer p-2 rounded duration-300;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}
</style>