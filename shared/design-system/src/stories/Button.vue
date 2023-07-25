<template>
  <v-btn :class="classes" @click="onClick">
    <v-icon v-if="props.leadingIcon">{{props.leadingIcon}}</v-icon>
    {{label}}
    <v-icon v-if="props.followingIcon">{{props.followingIcon}}</v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /**
   * The label of the button
   */
  label: string,
  /**
   * primary or secondary button
   */
  type?: 'primary' | 'secondary' | 'tertiary',
  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large',
  /**
   * background color of the button
   */
  backgroundColor?: string,
  leadingIcon?: string,
  followingIcon?: string
}>(), { primary: false, size: 'medium' });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();

const classes = computed(() => {
  const baseName = 'btn-';
  const typeName = `btn-${props.primary ? 'primary' : 'secondary'}-`
  return typeName + (props.size === 'small' ? 'sm' : props.size === 'medium' ? 'md' : 'lg');
})

const onClick = () => {
  emit("click", 1)
};

</script>
<style lang="sass" scoped>
</style>