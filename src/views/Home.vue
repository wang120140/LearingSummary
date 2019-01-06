<template>
  <div class="home">
    <h2>王彦辉知识总结。。。。。。</h2>
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
      <div class ="ContentItem">
        <home-webpack-component></home-webpack-component>
      </div>
      <div class ="ContentItem">
        <home-git-component></home-git-component>
      </div>
      <div class ="ContentItem">
        <home-projection-component></home-projection-component>
      </div>
    </div>
    <hr>
      好的网址
      <div class = "GoodInternet">
        <a href="http://www.ruanyifeng.com">阮一峰博客网址</a>
        <a href="http://tool.oschina.net/">在线测试工具</a>
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
import HomeWebpackComponent from "./HomeWebpackComponent";
import HomeGitComponent from "./HomeGitCopmonent";
import HomeProjectionComponent from "./HomeProjectionComponent";
export default {
  name: "home",
  components: {
    HomeHtmlComponent,
    HomeCssComponent,
    HomeJsComponent,
    HomeCompatibilityComponent,
    HomeJqueryComponent,
    HomeVueComponent,
    HomeHttpComponent,
    HomeWebpackComponent,
    HomeGitComponent,
    HomeProjectionComponent
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
h2 {
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
}
.GoodInternet a {
  display: inline;
  width: 3.125rem;
  height: 3.125rem;
  text-align: center;
  line-height: 3.125rem;
  margin: 0.625rem;
}
</style>
