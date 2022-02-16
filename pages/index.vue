<template>
  <div class="container px-4 lg:px-8 py-10">
    <h1 class="text-2xl font-bold mb-10">Welcome</h1>

    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </div>

    <div class="mt-10">
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
      </ColorScheme>
    </div>

  </div>
</template>

<script>
export default {
  //colorMode: 'light',
}
</script>

