<template>
    <div>
        <router-link to="/"> 返回首页</router-link>
        <div>参考链接</div>
        <pre>
            android下html5的视频播放一直是前端兼容的重灾区，各种体验差，被诟病已久。但之前的故宫穿越H5，和吴亦凡入伍H5，利用的视频技术，貌似又给人一种新面貌。

前段时间做某项目，恰好也是一个类似视频全屏的，下面跟大家分享下经历的坑和填坑的办法。

ios端问题其实没什么，基本都在android端，基本每一个带有视频的项目都会遇到的，当然有特殊需求的产生的情况另说了就，问题主要有几个方面：

全屏处理；

自动播放；

播放控制；

隐藏播放控件；

video全屏的处理
这个其实不难，只需在video标签加个webkit-playsinline属性即可，这个属性基本上在基于webkit内核的移动端都是没问题的，此全屏非彼全屏，它是在浏览器视窗内的全屏，并不是占居整个手机的全屏，当然我们做web端需要的就是在document的body内的视窗范围的全屏。

<video id="myvideo" src="test.mp4" webkit-playsinline="true"></video>
在ios下，视频被嵌入后，媒体的元数据加载完成后，会以全屏的形式显示出来，或者加个poster，可以看到画面。但在android下，多数机子是不显示视频画面的，要不就是显示一个黑色的还不是全屏的播放控件，即使及加个poster封面也不济于是。因为poster在android兼容的并不好，不如在视频上层加个div铺张图片，这个比较好的处理方式应该是：视频上加一层div做封面，由于android不允许视频上层有东西，所以首先将视频设为的width：1px，当播放后，上层的封面remove掉，同时width：100%或者你想要的宽度。

video的自动播放
这个的话就不多说了，相信大家跟我一样，试图寻找android下，页面加载完毕就可以自动播放，但现实是残酷的，android下是不允许自动播放的，即使你用了video.play(),也是不行的。必须有用户的主动触发，比如触摸了屏幕，有click或touch事件产生。不知以后android会不会改进，但至少目前来看是不行的。比较的好的办法是，引导用户触发，滑屏或touch的行为，然后调用video.play()播放，给用户一个自动播放的错觉。

video播放的控制
对于video或者audio等媒体元素，有一些方法，常用的有play(),pause();也有一些事件，如'loadstart','canplay','canplaythrough','ended','timeupdate'.....等等。

在移动端有一些坑需要注意，不要轻易使用媒体元素的除'ended','timeupdate'以外event事件，在不同的机子上可能有不同的情况产生，例如：
ios下监听'canplay'和'canplaythrough'（是否已缓冲了足够的数据可以流畅播放）,当加载时是不会触发的，即使preload="auto"也没用，但在pc的chrome调试器下和android下，是会在加载阶段就触发。ios需要播放后才会触发。
总之就是现在的视频标准还不尽完善，有很多坑要注意，要使用前最好自己亲测一遍。

关于控制的问题还想说一点就是android在播放视频时会有个控件初始化的过程，在全屏视频想伪装成非视频时，是我们很不想看到的，我的解决思路是这样：
在我们需要播放时提前初始化它，即需要播放的时间前先设width:1px;然后play()一下，使视频已经播放初始化。然后再需要播放的时候再次play()时就不会产生，控件拉伸的情况了。

“去除”android下的播放控件条
重头戏来了，相信这个这个问题已困扰无数的前端开发人员，再搜寻这个问题的解决方法时，几乎所有的文章都是告诉你android下，播放器的控件是去不了的。其实似乎确实是这样的，但你看了故宫穿越H5，和吴一凡那个H5后，会发现，在android下，也是没有控制条的。最初看到那些H5视频我首先并没有去看他们的内容多么新颖，传播量多么广，我是第一时间测试了android下的兼容问题，发现并没有出现控制条。在我研究半天未果时，在一篇技术帖中看到说：因是腾讯自己的项目，微信是腾讯自己的，他们在浏览器里做了一些配置，对旗下出品的H5有所“优待”，才能确保视频的顺利“乔装”。

上面的说法我并没有真正核实过，但好像是这么回事，非常有幸我做的那个视频项目也是腾讯的，其实是有机会可以向他们证实一下以上说法的，但即使是这样的，也只有腾讯的项目有这样的解决办法，对于广大的开发者来说似乎并太不公平，我试图找到一种解决去除播放控件的解决方案，下面是我花了很多心思找到的一种解决办法，看似很简单也不那么高大尚，但确实解决了问题，跟大家分享：

我这里只看android的情况，ios基本没什么问题，就忽略啦。
测试机android版本：5.1
首先我们将那个H5视频地址嵌入自己的页面，你会发现确实播放器出现了。如下

图片描述

怎么办呢，不是腾讯自己的项目就没办法了嘛？再我搜了N多资料未果后，发现了一个细节，控制条始终是最下方的，可不可以让视频的尺寸放大些，将控制条顶到浏览窗口外面，就看不到了嘛，于是我将视频宽高放大到120%-----控件条神奇的‘消失’了（其实是顶到视窗外面了），惊喜万分啊。

具体思路和实现如下：
html中将video标签外包一层，

    <div class="videobox">
        <video id="mainvideo" webkit-playsinline="true" src="http://7xvl2z.com1.z0.glb.clouddn.com/nigg2.mp4"></video>
    </div>
初始样式表如下：

html,body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  -webkit-user-select: none; 
  user-select: none;
  overflow: hidden;
}

.videobox {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

video {width: 1px;display: blcok;}

/*
注：html，body里的overflow：hidden，非常重要，不能省。
因为微信android的播放器是脱离DOM结构的，也不会响应click、touch等事件。
如果视频尺寸大了，会产生滚动条，必须在html和body加overflow：hidden，
在videobox加没用的。
*/
当视频要播放时改变video的宽度（高度会等比缩放，即使自定义高度也是没用的，会被忽略）

  var video = document.querySelector('#mainvideo');
  var videobox = document.querySelector('.videobox');

  //播放时改变外层包裹的宽度，使video宽度增加，
  //相应高度也增加了,播放器控件被挤下去，配合overflow：hidden
  //控件看不见也触摸不到了
  var setVideoStyle = function (){
    videobox.style.width = '120%';
    videobox.style.left = '-10%';
    video.style.width = '100%';
  }
当然上面这样写参杂了一些需求逻辑，也可以直接样式表就width:120%,或者更大；这个根据自己的需要来，但基本思路就是将播放器控件顶出视窗之外，达到一种‘去除’、‘消失’的效果。连‘小窗’字样也被顶出去了，用过android或测试过的同学都知道点了小窗后会怎样....（原版的即使去掉了播放器，但小窗字样还在，不能算完全的隐藏播放控件吧）

相应产生的一些问题的解决办法：

1，视频被放大了，画面会被截掉一部分怎么办？

这个可以在视频输出的时候两边和下边留一些留白，即留白可以没用画面黑色底，但又属于视频尺寸的一部分，放视频放大后，将主体画面置满视窗，被挤到外面都是留白的即可。

2，视频播放完毕后会中间自动出现播放控件按钮

如果确实不想在播放完是出现一个按钮，哪怕只有零点几秒，就把视频remove掉，可以使用timeupdate监听视频播放，用video.duration-video.currentTime的差值判断是否快要结束了，在结束前零点几秒提前remove掉。

3，要是不是全屏视频怎么搞？

可以，思路是一样的，将视频控件顶出外层的包裹层，利用overflow：hidden。只是全屏的外层包裹是body而已。

哦了，终于可以搞一个全屏视频伪装的东西了。

2017-03-21补
随着时间的变迁，设备和技术的更新，本着不坑害同胞的心，负责任更新下还是有必要的
咱们还是从上面的4个要点来说ios和android吧

全屏处理；

自动播放；

播放控制；

隐藏播放控件；

补充--全屏处理
ios加playsinline属性，之前只带webkit前缀的在ios10以后，会吊起系统自带播放器，两个属性都加上基本ios端都可以保证内敛到浏览器webview里面了。如果仍有个别版本的ios会吊起播放器，还可以引用一个库iphone-inline-video（具体用法很简单看它github，这里不介绍了，只需加js一句话，css加点），
github地址是https://github.com/bfred-it/i...，加上playsinline webkit-playsinline这两个属性和这个库基本可以保证ios端没有问题了（不过亲测，只加这两个属性不引入库好像也是ok的，至今没有在ios端微信没有出现问题，如果你要兼容uc或者qq的浏览器建议带上这个库），
最后介绍个新的x5-video-player-type="h5"属性，腾讯x5内核系的android微信和手Q内置浏览器用的浏览器webview的内核，使用这个属性在微信中视频会有不同的表现，会呈现全屏状态，貌似播放控件剥去了，至少加了这个属性后视频上层可以有其他dom元素出现了（非腾讯白名单机制的一种处理措施），

<video id="mainvideo" src="test.mp4" playsinline webkit-playsinline></video>
补充--自动播放
android始终不能自动播放，不多说。值得一提的是经测现在ios10后版本的safari和微信都不让视频自动播放了（顺带音频也不能自动播放了），但微信提供了一个事件WeixinJSBridgeReady，在微信嵌入webview全局的这个事件触发后，视频仍可以自动播放，这个应该是现在在ios端微信的视频自动播放的比较靠谱的方式，其他如手q或者其他浏览器，建议就引导用户出发触屏的行为操作出发比较好。

//也可以在这个事件触发后播放一次然后暂停（这样以后视频会处于加载状态，为后面的流畅播放做准备）
document.addEventListener("WeixinJSBridgeReady", function (){ 
    video.play();
    video.pause();
}, false)
补充--播放控制
关于控制，这里仅补充一点吧，就是当第一次播放视频的时候ios端，如果网络慢，视频从开始播到能展现画面会有短暂的黑屏（处理视频源数据的时间），为了避免这个黑屏，可以在视频上加个div浮层（可以一个假的视频第一帧），然后用timeupdate方法监听，视屏播放及有画面的时候再移除浮层

video.addEventListener('timeupdate',function (){
    //当视频的currentTime大于0.1时表示黑屏时间已过，已有视频画面，可以移除浮层（.pagestart的div元素）
    if ( !video.isPlayed && this.currentTime>0.1 ){
        $('.pagestart').fadeOut(500);
        video.isPlayed = !0;
    }
})
补充--隐藏播放控件
据说腾讯的android团队的x5内核团队放开了视频播放的限制，视频不一定调用它们那个备受诟病的视频播放器了，x5-video-player-type="h5"属性这个属性好像就有点那个意思，虽然体验还是有点...（导航栏也会清理）但至少播放器控件没有了，上层可以浮div或者其他元素了，这个还是值得一提。
还有一点值得说的是，带播放器控件的隐藏，

<div class="videobox" ontouchmove="return false;">
    <video id="mainvideo" src="test.mp4" x5-video-player-type="h5" playsinline webkit-playsinline></video>
</div>
比如这个videobox在android下隐藏，只用display：none貌似还是不行的，但加个z-index:-1，设置成-1就可以达到隐藏播放器控件的目的了。这个经测可用且好用，可以一试。

好了就先补充能想到要说的这么多吧，希望对大家有帮助
        </pre>
        <a href="https://segmentfault.com/a/1190000006857675">2016-09-09 发布
html5--移动端视频video的android兼容，去除播放控件、全屏等</a>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>