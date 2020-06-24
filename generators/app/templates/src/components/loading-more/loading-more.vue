<template>
  <view class="list-loading" v-if="show">
    <view id="loading" v-if="!text">
      <view class="item"></view>
      <view class="item"></view>
      <view class="item"></view>
      <view class="item"></view>
      <view class="item"></view>
    </view>
    <view class="show-text" v-else>
      {{ text }}
    </view>
  </view>
</template>
<script>
export default {
  name: 'LoadingMore',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>
<style scoped lang="scss">
  .list-loading {
    padding: 30px 20px;
    text-align: center;

    .show-text {
      font-size: 28px;
      color: #dedede;
    }
  }

  .item {
    display: inline-block;
    width: 6px;
    height: 13px;
    background: $primary;
    margin: 0 4px;
    animation: item linear 1s infinite;
    -webkit-animation: item linear 1s infinite;
  }

  .item:nth-child(1) {
    animation-delay: 0s;
  }

  .item:nth-child(2) {
    animation-delay: 0.15s;
  }

  .item:nth-child(3) {
    animation-delay: 0.3s;
  }

  .item:nth-child(4) {
    animation-delay: 0.45s;
  }

  .item:nth-child(5) {
    animation-delay: 0.6s;
  }

  @keyframes item {
    0%,
    60%,
    100% {
      transform: scale(1);
    }
    30% {
      transform: scaleY(3);
    }
  }

  @-webkit-keyframes item {
    0%,
    60%,
    100% {
      transform: scale(1);
    }
    30% {
      transform: scaleY(3);
    }
  }
</style>
