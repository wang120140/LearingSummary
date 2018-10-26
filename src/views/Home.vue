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
      <div class ="ContentItem">
        <home-compatibility-component></home-compatibility-component>
      </div>
      <div class ="ContentItem">
        <home-jquery-component></home-jquery-component>
      </div>
       <div class ="ContentItem">
        <home-vue-component></home-vue-component>
      </div>
      <div class ="ContentItem">
        <home-http-component></home-http-component>
      </div>
    </div>
    
  </div>
</template>

<script>
import HomeHtmlComponent from "./HomeHTMLCompoent";
import HomeCssComponent from "./HomeCSSComponent";
import HomeJsComponent from "./HomeJSComponent";
import HomeCompatibilityComponent from "./HomeCompatibilityComponent";
import HomeJqueryComponent from "./HomeJqueryComponent";
import HomeVueComponent from "./HomeVueComponent";
import HomeHttpComponent from "./HomeHttpComponent";
export default {
  name: "home",
  components: {
    HomeHtmlComponent,
    HomeCssComponent,
    HomeJsComponent,
    HomeCompatibilityComponent,
    HomeJqueryComponent,
    HomeVueComponent,
    HomeHttpComponent
  }
};
</script>
<style scoped>
.ContentAll {
  display: flex;
  flex-wrap: wrap;
}
.ContentAll .ContentItem {
  width: 22%;
  margin: 10px;
  border: 1px solid red;
  height: 18.75rem;
  overflow: auto;
}
</style>
