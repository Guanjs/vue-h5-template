<template>
  <nut-card
    v-for="(item, index) in list"
    :key="index"
    :img-url="item.imgUrl"
    :title="item.title"
    :price="item.price"
    :vip-price="item.vipPrice"
    :shop-name="item.shopName"
    :shopDesc="item.shopDesc"
    :delivery="item.delivery"
    @click="(_e) => toDetails(index)"
  />
</template>

<script lang="ts" name="ListPage">
  import { getPageListV2 } from './data';
  import { useRouter } from 'vue-router';

  export default {
    setup() {
      // 使用 ref 创建一个响应式的数据
      const list = ref();
      const router = useRouter();
      const toDetails = (index) => {
        router.push({ path: '/details', query: { id: index } });
      };

      // 使用 onMounted 钩子在组件挂载后执行操作
      onMounted(async () => {
        try {
          let response = ref();
          response.value = await getPageListV2(0, 10);
          list.value = response.value.data.data;
        } catch (error) {
          console.error('Error fetching data:', error);
          // 在这里处理错误，比如显示错误消息
        }
      });

      // 返回给模板的响应式数据
      return {
        list,
        toDetails,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .nut-card {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
  }
</style>
