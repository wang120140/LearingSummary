<template>
  <div>
    <!-- //<img src="../../public/bg01.gif" alt=""> -->
    <router-link to="/">后退</router-link>
    <h2>关于flex布局文件</h2>
      <h3>1.关于容器的属性</h3>
          <ul>
            <li>1.1  flex-direction  属性有 row | row-reverse | column | column-reverse;
              <select v-model="flexDirection.flexDirection">
                <option value="row" selected >flex-direction:row</option>
                <option value="row-reverse" > flex-direction: row-reverse</option>
                <option value="column"> flex-direction: column</option>
                <option value="column-reverse"> flex-direction:column-reverse</option>
              </select>
              <div class ="flexDirection flexDiv" :style="flexDirection">
                  <div v-for="(item,index) in sumData " :key="index">这个是第 {{item}}个</div>
              </div>
            </li>
            <li>1.2  flex-wrap 属性值  : nowrap | wrap | wrap-reverse;
              <select v-model="flexWrap.flexWrap">
                <option value="nowrap"> flex-wrap: nowrap</option>
                <option value="wrap"> flex-wrap: wrap</option>
                <option value="wrap-reverse"> flex-wrap: wrap-reverse</option>
              </select>
              <div class ="flexDirection flexDiv"  :style="flexWrap" >
                  <div v-for="(item,index) in sumData " :key="index">这个是第 {{item}}个</div>
              </div>
            </li>
            <li>1.3  flex-flow 属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
                 <div class ="flexDirection flexDiv"  :style="{flexDirection:flexDirection.flexDirection,flexWrap:flexWrap.flexWrap } " >
                    <div v-for="(item,index) in sumData " :key="index">这个是第 {{item}}个</div>
                 </div>
            </li>
            <li>1.4  justify-content  属性值flex-start | flex-end | center | space-between | space-around
                <select  v-model="justifyContent.justifyContent">
                    <option value="flex-start">  flex-start</option>
                    <option value="flex-end"> flex-end</option>
                    <option value="center"> center</option>
                    <option value="space-between"> space-between</option>
                    <option value="space-around"> space-around</option>
                </select>
                  <div class ="flexDirection flexDiv"  :style="justifyContent " >
                    <div v-for="(item,index) in sumData3 " :key="index">这个是第 {{item}}个</div>
                 </div>
            </li>
            <li>1.5  align-items 属性值  flex-start | flex-end | center | baseline | stretch
                <select v-model="alignItems.alignItems">
                  <option value="flex-start"> align-items:flex-start</option>
                  <option value="flex-end">align-items:flex-end</option>
                  <option value="center">align-items:center</option>
                  <option value="baseline">align-items:baseline</option>
                  <option value="stretch">align-items:stretch</option>
                </select>
                <div class="alignI">
                    <div class ="flexDirection flexDiv"  :style="alignItems " >
                      <div v-for="(item,index) in sumData " :key="index">这个是第 {{item}}个</div>
                    </div>
                </div>
            </li>
            <li>1.6  align-content<br>
              flex-start：与交叉轴的起点对齐。<br>
              flex-end：与交叉轴的终点对齐。<br>
              center：与交叉轴的中点对齐。<br>
              space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。<br>
              space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。<br>
              stretch（默认值）：轴线占满整个交叉轴。<br>
            </li>
          </ul>
      <h3>2.关于项目中的属性</h3>
        <ul>
          <li>2.1  flex</li>
          <li>2.2  flex-grow</li>
          <li>2.3  flex-shrink</li>
          <li>2.4  flex-basis</li>
          <li>2.5  order</li>
          <li>2.6  align-self</li>
        </ul>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      sumData: ["一", "二", "三", "四", "五", "六"],
      sumData3: ["一", "二", "三"],
      flexDirection: {
        flexDirection: "row"
      },
      flexWrap: {
        flexWrap: "nowrap"
      },
      justifyContent: {
        justifyContent: "flexStart"
      },
      alignItems: {
        alignItems: "flexStart",
        flexWrap: "wrap",
        width: "auto"
      }
    };
  }
};
</script>

<style scoped>
li {
  list-style: none;
  font-size: 1.25rem;
  font-weight: 600;
}
li div {
  font-size: 1rem;
}
select {
  display: block;
  font-size: 0.9375rem;
}
.flexDirection {
  display: flex;
}
.flexDiv div {
  width: 30%;
  height: 2.25rem;
  border: 1px solid blue;
}
.flexDiv div:nth-child(1) {
  background-color: #e82d17;
}
.flexDiv div:nth-child(2) {
  background-color: #1be42f;
}
.flexDiv div:nth-child(3) {
  background-color: #cee11e;
}
.flexDiv div:nth-child(4) {
  background-color: #b8bde0;
}
.flexDiv div:nth-child(5) {
  background-color: #e11eb6;
}
.flexDiv div:nth-child(6) {
  background-color: #504e3d;
}
.alignI {
  height: 80px;
  width: 100%;
  border: 1px solid red;
}
</style>