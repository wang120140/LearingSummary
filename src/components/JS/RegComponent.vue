<template>
    <div>
        <router-link to="/"> 后退到首页</router-link>
        <h2>正则表达式</h2>
        <pre>
            <a href="http://regexper.com">正则表达式 在线测试工具 </a>
            正则表达式有两种形式： 第一种就是字面量形式   reg = /\bis/g;
                                 第二种就是构造函数    let reg = new RegExp ('\bis','g');
            其中修饰符： 有三种 global ignore  multiple ( g i m );
            量词:       *  表示随意几个      0~
                        ?  表示0个或者一个   0~1
                        +  表示至少一个      1~
                        
                        {n} 表示个           n
                        {n,m} 表示           n~m
                        {n,}                 n~
                在使用量词的时候默认使用贪婪模式   {n,m}  a{3,5} 默认尽量匹配五个
                                  非贪婪模式     {n,m}？ a {3,5}? 表示匹配3个
            <hr>
            边界字符     ^                   以什么开始
                        $                   以什么结束
                        \b                  单词边界
                        \B                  非单词边界
            

            一类字符     []                   [A-D]表示[ABCD]
            一组         ()                   (Brance){3}  表示Brance出现三次    Brance{3}  表示n 出现3次
            或           |                    A|B         表示A或者B 
        </pre>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
pre {
  font-size: 20px;
}
</style>