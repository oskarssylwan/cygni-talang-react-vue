<template>
  <div>
    <p>en massa Square-komponeneter här...</p> <Square/>
  </div>
</template>

<script>
import Square from '@/components/Square.vue';

export default {
  name: 'Board',
  components: {
    Square,
  },
};
</script>
