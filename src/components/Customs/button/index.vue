<template>
  <v-btn
    class="btn"
    :class="(type, { icon: isIcon })"
    :color="color"
    :loading="loading"
    :block="fullWidth"
    :disabled="disabled"
    :outlined="isOutlined"
    :depressed="isDepressed"
    :x-small="size === 'xs'"
    :small="size === 'small'"
    :x-large="size === 'large'"
    @click="$emit('click')"
  >
    <v-icon v-if="isIcon" :color="iconColor">{{ icon }}</v-icon>
    <template v-else>
      <v-icon v-if="icon && isIconLeft" left>
        {{ icon }}
      </v-icon>
      <slot />
      <v-icon v-if="icon && !isIconLeft" right>
        {{ icon }}
      </v-icon>
    </template>
  </v-btn>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    isIcon: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    isIconLeft: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
    },
    iconColor: {
      type: String,
      default: "primary",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "medium",
    },
    borderWidth: {
      type: String,
      default: "0px",
    },
    isOutlined: {
      type: Boolean,
      default: false,
    },
    isDepressed: {
      type: Boolean,
      default: false,
    },
    isText: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 36px !important;
  height: 36px !important;
  min-width: 0 !important;
}
</style>
