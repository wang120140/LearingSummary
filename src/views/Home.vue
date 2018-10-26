<template>
  <div class="home">
    <!-- <FlexSummary msg="Welcome to Your Vue.js App"/> -->
    <div class="ContentAll">
      <div class="ContentItem">
          <home-html-component></home-html-component>
      </div>
      <div class="ContentItem"> 
          <home-css-component></home-css-component>
      </div>
      <div class="ContentItem">
          <home-js-component></home-js-component>
      </div>
    </div>
    
  </div>
</template>

<script>
import HomeHtmlComponent from "./HomeHTMLCompoent";
import HomeCssComponent from "./HomeCSSComponent";
import HomeJsComponent from "./HomeJSComponent";
export default {
  name: "home",
  components: {
    HomeHtmlComponent,
    HomeCssComponent,
    HomeJsComponent
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
