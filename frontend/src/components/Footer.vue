<template>
  <v-row id="footer" class="blue-grey darken-3">
    <v-spacer></v-spacer>
    <slot></slot>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer {
  height: 52px;
  position: absolute;
  width: 100%;
  margin: 0;
  bottom: 0;
}
</style>
