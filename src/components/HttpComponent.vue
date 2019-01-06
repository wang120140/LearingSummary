<template>
    <div>
        <router-link to="/"> 返回首页</router-link>
        <div>参考链接</div>
        <pre>
           1.网络七层模型及对应协议，http属于哪一层？
           2.三次握手过程讲解一下？
           3.TCP和UDP的区别是什么？
           4.HTTP常见状态码有哪些代表什么含义？
           5.GET和POST区别？
           6.HTTP常见头部字段有哪些？accept的值举几个列子？
           7.HTTP2.0的优点有哪些？头部压缩技术怎么实现的？2.0的长连接和HTTP1.1的长连接有什么区别？
           8.HTTPS的对称加密和非对称加密讲一下？
        <h3>1.网络七层模型对应的协议</h3>
            物理层：通过媒介传输比特,确定机械及电气规范（比特Bit）；RJ45、CLOCK、IEEE802.3 （中继器，集线器，网关）
            数据链路层：将比特组装成帧和点到点的传递（帧Frame）；PPP、FR、HDLC、VLAN、MAC （网桥，交换机）
            网络层：负责数据包从源到宿的传递和网际互连（包Packet）；IP、ICMP、ARP、RARP、OSPF、IPX、RIP、IGRP、 （路由器）
            传输层：提供端到端的可靠报文传递和错误恢复（段Segment）；TCP、UDP、SPX
            会话层：建立、管理和终止会话（会话协议数据单元SPDU）；NFS、SQL、NETBIOS、RPC
            表示层：对数据进行翻译、加密和压缩（表示协议数据单元PPDU）；JPEG、MPEG、ASII
            应用层：允许访问OSI环境的手段（应用协议数据单元APDU）；FTP、DNS、Telnet、SMTP、HTTP、WWW、NFS
            <img src="../../public/img/http01.jpg" alt="">
            <h4>
                数据封装
            </h4>
            当应用程序用TCP传送数据时，数据被送入协议栈中，然后逐个通过每一层直到被当作一串比特流送入网络。
            其中每一层对收到的数据都要增加一些首部信息（有时还要增加尾部信息），该过程下图所示。
            TCP传给IP的数据单元称作 TCP报文段或简称为TCP段。IP传给网络接口层的数据单元称作 IP数据报(IP datagram)。
            通过以太网传输的比特流称作帧(Frame)
            <img src="../../public/img/http02.jpg" alt="">
        <h3>2.三次握手四次挥手</h3>
            <h4>
                三次挥手
            </h4>
            1. 第一次握手:客户机的TCP首先向服务器的TCP发送一个连接请求报文段。这个特殊的报文段中不含应用层数据,其首部中的SYN标志位被置为1。
               另外,客户机会随机选择一个起始序号seq=x(连接请求报文不携带数据,但要消耗掉一个序号)。
            2. 第二次握手:服务器的TCP收到连接请求报文段后,如同意建立连接,就向客户机发回确认,并在OS内核中为该TCP连接分配TCP缓存和变量。
               在确认报文段中,SYN和ACK位都被置为1,确认号字段的值为x+1(表示希望收到的下一个字节的序号为x+1),并且服务器随机产生起始序号
               seq=y(确认报文不携带数据,但也要消耗掉一个序号)。
            3. 第三次握手:当客户机收到确认报文段后,还要向服务器给出确认,并且也要在client端的OS内核中给该连接分配缓存和变量。
               这个报文段的ACK标志位被置1,序号字段为x+1,确认号字段为y+1。 
            需要注意的是:服务器端的资源是在完成第二次握手时分配的,而客户端的资源是在完成第三次握手时分配的。这就使得服务器易于受到SYN洪泛攻击。  
         为什么需要采用三次握手?   
                主要是为了防止两次握手情况下已失效的连接请求报文段突然又传送到服务端,而产生的错误。    
            客户A向服务器B发出TCP连接请求,第一个连接请求报文在网络的某个节点长时间滞留,A超时后认为报文丢失,于是再重传一次连接请求,B收到后建立连接。
            数据传输完毕后双方断开连接。而此时,前一个滞留在网络中的连接请求到达了服务端B,而B认为A又发来连接请求,若采用的是“两次握手”,
            则这种情况下B认为传输连接已经建立,并一直等待A传输数据,而A此时并无连接请求,因此不予理睬,这样就造成了B的资源白白浪费了;
            但此时若是使用“三次握手”,则B向A返回确认报文段,由于是一个失效的请求,因此A不予理睬,建立连接失败。
         第三次握手的作用:防止已失效的连接请求报文段突然又传送到了服务器。
            <img src="../../public/img/http03.jpg" alt="">
            <h4>
                四次挥手
            </h4>
            1. 第一次断开:客户机打算关闭连接,就向其TCP发送一个连接释放报文段,并停止发送数据,主动关闭TCP连接,该报文段的FIN标志位被置1,seq=u,
                它等于前面已传送过的数据的最后一个字节的序号加1(FIN报文段即使不携带数据,也要消耗掉一个序号)。
            2. 第二次断开:服务器收到连接释放报文段后即发出确认,确认号是ack=u+1,而这个报文段自己的序号是v,等于它前面已传送过的数据的最后一个字节的序号加1。
                 此时,从客户机到服务器这个方向的连接就释放了,TCP连接处于半关闭状态。但服务器若发送数据,客户机仍要接收,即从服务器到客户机这个方向的连接并未关闭。
            3. 第三次断开:若服务器已经没有要向客户机发送的数据,就通知TCP释放连接,此时其发出FIN=1的连接释放报文段,序号为w(注意: 此时确认号字段值仍为u+1,
                 因为这段时间里, 客户端并未发送任何数据到服务器)。
            4. 第四次断开:客户机收到连接释放报文段后,必须发出确认。在确认报文段中,ACK字段被置为1,确认号ack=w+1,序号seq=u+1。
                此时TCP连接还没有释放掉,必须经过时间等待计时器设置的时间2MSL后,A才进入到连接关闭状态。
            <img src="../../public/img/http04.jpg">
            <h3>TCP和UDP</h3>
            TCP：
            TCP是一种面向连接的(一对一),提供可靠交付的和全双工通信的,基于字节流的端到端传输层通信协议。
            面向连接: TCP在传输数据之前必须先建立连接,数据传输结束后要释放连接。
            一对一: 每一条TCP连接只能有2个端点,故TCP不提供广播或多播服务。
            可靠交付: TCP提供可靠交付,通过TCP连接传输的数据,无差错、不丢失、不重复、并且按序到达。
            基于字节流: TCP是面向字节流的。虽然应用进程和TCP的交互是一次一个数据块(大小不等),但TCP把应用程序交下来的数据仅仅看成是一连串的无结构的字节流, 而并不知道所传输的字节流的含义。
            UDP：
            UDP是一种无连接的,尽最大努力交付的和全双工通信的,基于报文段的端到端传输层通信协议。
            无连接: UDP在发送数据之前不需要建立连接
            尽最大努力交付: UDP不保证可靠交付,主机不需要维持复杂的连接状态
            面向报文: UDP是面向报文的。UDP对应用层交下来的报文,既不合并,也不拆分,而是保留这些报文的的边界,即应用层交给UDP多长的报文,UDP就照样发送,即一次发送一个报文。在接收端,UDP一次交付一个完整的报文, 因此应用程序需要选择合适的报文大小。 
            其他:
            UDP没有拥塞控制,网络出现的拥塞不会使源主机的发送速率降低。 
            UDP支持一对一、一对多、多对一和多对多的交互通信。 
            UDP的首部开销小,只有8个字节,比TCP的20个字节的首部要短
        <h3>HTTP协议</h3>
            <img src="../../public/img/http05png.png" alt="">
        <h3>常用的请求头字段的含义</h3>
            Accept 设置接受的内容类型
                Accept: text/plain
            Accept-Charset 设置接受的字符编码
                Accept-Charset: utf-8
            Accept-Encoding 设置接受的编码格式
                Accept-Encoding: gzip, deflate
            Accept-Datetime 设置接受的版本时间
                Accept-Datetime: Thu, 31 May 2007 20:35:00 GMT
            Accept-Language 设置接受的语言
                Accept-Language: en-US
            Authorization 设置HTTP身份验证的凭证
                Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
            Cache-Control 设置请求响应链上所有的缓存机制必须遵守的指令
                Cache-Control: no-cache
            Connection 设置当前连接和hop-by-hop协议请求字段列表的控制选项
                Connection: keep-alive
                Connection: Upgrade
            Content-Length 设置请求体的字节长度
                Content-Length: 348
            Content-MD5 设置基于MD5算法对请求体内容进行Base64二进制编码
                Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==
            Content-Type 设置请求体的MIME类型（适用POST和PUT请求）
                Content-Type: application/x-www-form-urlencoded
            Cookie 设置服务器使用Set-Cookie发送的http cookie
                Cookie: $Version=1; Skin=new;
            Date 设置消息发送的日期和时间
                Date: Tue, 15 Nov 1994 08:12:31 GMT
            Expect 标识客户端需要的特殊浏览器行为
                Expect: 100-continue
            Forwarded 披露客户端通过http代理连接web服务的源信息
                Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43
            From 设置发送请求的用户的email地址
                From: user@example.com
            Host 设置服务器域名和TCP端口号，如果使用的是服务请求标准端口号，端口号可以省略
                Host: en.wikipedia.org:8080
            If-Match 设置客户端的ETag,当时客户端ETag和服务器生成的ETag一致才执行，适用于更新自从上次更新之后没有改变的资源
                If-Match: "737060cd8c284d8af7ad3082f209582d
            If-Modified-Since 设置更新时间，从更新时间到服务端接受请求这段时间内如果资源没有改变，允许服务端返回304 Not Modified
                If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT
            If-None-Match 设置客户端ETag，如果和服务端接受请求生成的ETage相同，允许服务端返回304 Not Modified
                If-None-Match: "737060cd8c284d8af7ad3082f209582d"
            If-Range 设置客户端ETag，如果和服务端接受请求生成的ETage相同，返回缺失的实体部分；否则返回整个新的实体
                If-Range: "737060cd8c284d8af7ad3082f209582d"
            If-Unmodified-Since 设置更新时间，只有从更新时间到服务端接受请求这段时间内实体没有改变，服务端才会发送响应
                If-Unmodified-Since: Sat, 29 Oct 1994 19:43:31 GMT
            Max-Forwards 限制代理或网关转发消息的次数
                Max-Forwards: 10
            Origin 标识跨域资源请求（请求服务端设置Access-Control-Allow-Origin响应字段
                Origin: http://www.example-social-network.com
            Pragma 设置特殊实现字段，可能会对请求响应链有多种影响
                Pragma: no-cache
            Proxy-Authorization 为连接代理授权认证信息
                Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
            User-Agent 用户代理的字符串值
                User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/21.0
            Via 通知服务器代理请求
                Via: 1.0 fred, 1.1 example.com (Apache/1.1)
            <h4>
                常用非标准请求头字段
            </h4>
            <hr>
            X-Requested-With 标识Ajax请求，大部分js框架发送请求时都会设置它为XMLHttpRequest
                X-Requested-With: XMLHttpRequest


            </pre>
            <a href="https://www.jianshu.com/p/6e86903d74f7">参考链接</a>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>