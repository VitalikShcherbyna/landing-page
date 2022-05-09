<template>
  <KinesisContainer>
    <!-- eslint-disable vue/no-bare-strings-in-template vue/no-template-target-blank -->
    <img
      v-prlx="{'speed': 0.01}"
      width="100%"
      height="100%"
      contain
      alt="image background"
      :src="bgImg"
    >
    <KinesisElement
      type="depth"
      :strength="20"
      style="width: 97%; position: absolute; top: 0; bottom 0;"
    >
      <img
        v-prlx="{'speed': 0.04}"
        width="100%"
        height="100%"
        contain
        alt="image burger"
        :src="img"
      >
    </KinesisElement>

    <KinesisElement
      type="depth"
      :strength="30"
      style="width: 20%; position: absolute; bottom: 0px; left: 40px"
    >
      <img
        v-prlx="{'speed': 0.03}"
        width="100%"
        contain
        alt="image background"
        :src="details"
      >
    </KinesisElement>
  </KinesisContainer>
</template>

<script>
import {KinesisContainer, KinesisElement} from "vue-kinesis"

export default {
  name: "KinesisRotate",
  components: {
    KinesisContainer,
    KinesisElement
  },

  props: {
    bgImg: {
      type: String,
      required: true
    },

    img: {
      type: String,
      required: true
    },

    details: {
      type: String,
      required: true
    }
  }
}
</script>
