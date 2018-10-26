<template>
  <div class="home">
    <!-- <FlexSummary msg="Welcome to Your Vue.js App"/> -->
    <div class="ContentAll">
      <div class="ContentItem">
         <h3>HTML部分</h3>
         <hr>
        </div>
      <div class="ContentItem"> 
        <h3>css部分</h3>
        <hr>
        <div>
          <router-link  to="/FlexSummary"> Flex</router-link>
        </div>
      </div>
      <div class="ContentItem">
        <h3>JS部分</h3> 
        <hr>
      </div>
    </div>
    
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
<style scoped>
.ContentAll {
  display: flex;
}
.ContentAll .ContentItem {
  width: 20%;
  margin: 10px;
  border: 1px solid red;
  height: 18.75rem;
  overflow: auto;
}
</style>
