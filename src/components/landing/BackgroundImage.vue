<template>
  <div
    :style="`
      height: ${heightData}px;
      background-image: url(${
      isPhone
        ? imgMobile
        : imgDesktop});
      background-size: cover;
      min-height: 750px;
      `"
    alt="background"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "BackgroundImage",
  props: {
    isPhone: {
      type: Boolean,
      required: true
    },

    heightData: {
      type: Number,
      required: true
    },

    imgMobile: {
      type: String,
      required: true
    },

    imgDesktop: {
      type: String,
      required: true
    }
  }
}
</script>

