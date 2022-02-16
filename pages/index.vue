<template>
  <div class="container px-4 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-10">Welcome</h1>

    <Select v-model="$colorMode.preference">
        <Option v-for="item in darkModeList" :value="item.value" :key="item.value"><img class="inline-block mr-2" :src="item.icon" />{{ item.label }}</Option>
    </Select>

  </div>
</template>

<script>
export default {
  //colorMode: 'light',

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
      ],

      colors: ['system', 'light', 'dark', 'sepia'],

    }
  }

}
</script>

