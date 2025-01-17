<template>
  <view>
    hello~
  </view>
</template>

<script setup lang="ts">
import { apiUserGet } from '@/api/user';


apiUserGet().then(res => {
  console.log('dssss', res)
})


</script>

<style>

</style>
