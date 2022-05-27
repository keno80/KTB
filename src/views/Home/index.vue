<template>
  <button @click="toggleDark()" class="i-carbon-sun dark:i-carbon-moon"/>
</template>

<script setup>
import { toggleDark } from '@/composables'
</script>

<style></style>
