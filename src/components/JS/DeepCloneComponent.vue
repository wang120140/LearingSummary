<template>
    <div>
        <router-link to="/"> 后退到首页</router-link>
        <h2>深拷贝和浅拷贝</h2>
        <hr>
        <pre>首先接受什么是浅拷贝和什么深拷贝
            在介绍这个概念之前先js中值得类型有原始值类型和引用类型；以前原始值类型有6种（ES6添加Symbol）现在有7中
            (undefined,null,Boolean,String,Number,Object,Symbol)
            浅拷贝是：对引用类型的地址进行进行拷贝 父值改变 子值也跟着改变
            深拷贝： 对引用类型的地址进行复制拷贝  父值改变 子值不改变
            <hr>
            ShallowClone(Source){
                let Objective = {};
                for (let item in Source){
                    if(Objective.hasOwnProperty(item)){
                        Objective[item] = Source[item];
                    }
                }
                return Objective;
            },
            DeepClone(Source){
                let Objective = {};
                for( let item in Source){
                    if(Source.hasOwnProperty(item)){
                        if(typeof Source[item] ==="object"){
                            target[item] = DeepClone(Source[item])
                        } else{
                            target[item] = Source[item];
                        }
                    }
                }
                return Objective;
            }
            <hr>
                然而这个函数有几个缺点是
                    1.参数判断有问题 
                        没有对参数做检验
                        判断是否是对象的逻辑不够严谨
                        没有考虑到数组
                    2.这个方法用到了递归 
                        递归的缺点是很容易爆栈
            <hr>
                还有一种方法深拷贝就是
                    function cloneJSON($source){
                        return JSON.parse(JSON.stringify($source));
                    }
                这个方法同样引用了递归方法 这个方法同样有致命的缺点就是爆栈
            <hr>
            LoopClone(x){
                //先进行深度遍历
                const  root ={};
                const  loopList = [{
                    parent:root,
                    key:undefined,
                    data:x,
                }]
                //初始化复制目标 key为underfined 则拷贝到父元素，否则拷贝到子元素
                while(loopList.length){
                    const node = loopList.pop();
                    const parent = node.parent;
                    const key = node.key;
                    const data = node.data;
                    let res = parent;
                    if(typeof key !=="undefined"){
                        res = parent[key] = {}
                    }
                    //开始循环
                    for(let k in data){
                        if(data.hasOwnProperty(k)){
                            if(typeof data[k] ==="object"){
                                loopList.push({
                                    parent : res,
                                    key:k,
                                    data:data[k]
                                })
                            }else{
                                res[k] =data[k]
                            }
                        }
                    }
                }
                return root;
            }
        }
            <div>  
                
            </div>
        </pre>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ShallowCloneValue:"",
                DeepCloneValue:"",
            }
        },
        methods:{
            ShallowClone(Source){
                let Objective = {};
                for (let item in Source){
                    if(Objective.hasOwnProperty(item)){
                        Objective[item] = Source[item];
                    }
                }
                return Objective;
            },
            DeepClone(Source){
                let Objective = {};
                for( let item in Source){
                    if(Source.hasOwnProperty(item)){
                        if(typeof Source[item] ==="object"){
                            Objectivet[item] = DeepClone(Source[item])
                        } else{
                            Objective[item] = Source[item];
                        }
                    }
                }
                return Objective;
            },
            LoopClone(x){
                //先进行深度遍历
                const  root ={};
                const  loopList = [{
                    parent:root,
                    key:undefined,
                    data:x,
                }]
                //初始化复制目标 key为underfined 则拷贝到父元素，否则拷贝到子元素
                while(loopList.length){
                    const node = loopList.pop();
                    const parent = node.parent;
                    const key = node.key;
                    const data = node.data;
                    let res = parent;
                    if(typeof key !=="undefined"){
                        res = parent[key] = {}
                    }
                    //开始循环
                    for(let k in data){
                        if(data.hasOwnProperty(k)){
                            if(typeof data[k] ==="object"){
                                loopList.push({
                                    parent : res,
                                    key:k,
                                    data:data[k]
                                })
                            }else{
                                res[k] =data[k]
                            }
                        }
                    }
                }
                return root;
            }
        }
    }
</script>

<style scoped>

</style>