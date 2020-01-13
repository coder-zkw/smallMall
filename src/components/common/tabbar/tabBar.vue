<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script>
export default {
 
}
</script>
<style scoped>
  #tab-bar{
    height: 49px;
    display: flex;
    background-color: #eee;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .15);
  }
</style>