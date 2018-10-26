<template>
  <div class="home">
    <!-- <FlexSummary msg="Welcome to Your Vue.js App"/> -->
    <router-link  to="/FlexSummary"> Flex</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import FlexSummary from "@/components/FlexSummary.vue";

export default {
  name: "home",
  components: {
    FlexSummary
  }
};
</script>
