<script setup lang="ts">

</script>

<template>
  <div class="container" auto-skeleton>
    <div>Hello World!</div>
    <ul>
      <li v-for="item of 100" style="height: 100px" :key="item">
        <div>{{ item }}</div>
      </li>
    </ul>
  </div>
</template>