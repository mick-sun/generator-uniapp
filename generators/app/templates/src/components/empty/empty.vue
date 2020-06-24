<template>
  <view>
    <template v-if="show">
      <view class="empty">
        <image class="empty-image" src="@/static/empty.svg"></image>
        <view class="text">{{ text }}</view>
      </view>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </view>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style scoped lang="scss">
  .empty {
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-image {
      width: 192px;
      height: 105px;
      margin-bottom: 30px;
    }

    .text {
      text-align: center;
      color: #bfbfbf;
    }
  }
</style>
