<template>
  <v-app :style="{backgroundColor: 'transparent', minHeight: 'unset'}">
    <v-main  :style="{backgroundColor: 'transparent', minHeight: 'unset'}">
      <slot name="story"></slot>
    </v-main>
  </v-app>
</template>

<script>
</script>
<style lang="scss">
.v-application__wrap {
  min-height: unset;
}
</style>