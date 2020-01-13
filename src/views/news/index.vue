<template>
  <div class='container'>
    <!--中间大盒子-->
    <div class="center">
      <!--头部-->
      <div class="header">
        <!--头部第一行-->
        <div class="header-one">
          <img src="../../assets/CD_logo.jpg" alt="" class="left">
          <div class="right">
            <span>English</span>
            <b>|</b>
            <span>中文</span>
            <b>|</b>
            <span>移动新媒体</span>
          </div>
        </div>
        <!--头部第二行-->
        <div class="header-two">
          <div class="left">
            <img src="../../assets/header2_logo1.jpg" alt="">
            <img src="../../assets/header2_logo2.jpg" alt="">
          </div>
          <div class="header-search">
            <input type="text">
            <img src="../../assets/header2_search_bt.jpg" alt="">
          </div>
          <div class="right">
            <img src="../../assets/xi_yyxx.png">
          </div>
        </div>
        <!--头部第三行-->
        <el-menu class="el-menu-demo" mode="horizontal" text-color="black" >
             <el-menu-item>首页</el-menu-item>
             <el-menu-item>双语</el-menu-item>
             <el-menu-item>热词</el-menu-item>
             <el-menu-item>口语</el-menu-item>
             <el-menu-item>译词</el-menu-item>
             <el-menu-item>图片</el-menu-item>
             <el-menu-item>视频</el-menu-item>
             <el-menu-item>听力</el-menu-item>
             <el-menu-item>BBC英语</el-menu-item>
             <el-menu-item>专栏</el-menu-item>
             <el-menu-item>文件</el-menu-item>
             <el-menu-item>考试</el-menu-item>
             <el-submenu>
               <template slot="title">精选栏目</template>
               <el-menu-item >名著选读</el-menu-item>
               <el-menu-item >商务职场</el-menu-item>
               <el-menu-item >分类词汇</el-menu-item>
               <el-menu-item >英国文化</el-menu-item>
             </el-submenu>
        </el-menu>
       <div class="line"></div>
      </div>
      <!--图片展示-->
      <div class="show">
        <div class="show-big left">
          <img src="https://img2.chinadaily.com.cn/images/202001/10/5e17cdc3a310cf3e97b043c8.jpeg_w773" alt="">
          <div class="gray">
            <div class="gray-dis">
              <p>双语新闻</p>
              <p>哈里梅根宣布将退出王室职务 谋求经济独立</p>
            </div>
          </div>
        </div>
         <div class="show-small right">
           <div class="show-two">
              <img src="https://img2.chinadaily.com.cn/images/202001/09/5e16836ca310cf3e97aff3d2.jpeg" alt="">
              <div class="small">
               <div class="small-dis">
                <p>双语新闻</p>
                <p>哈里梅根宣布将退出王室职务 谋求经济独立</p>
              </div>
             </div>
          </div>
        </div>
         <div class="show-small right">
           <div class="show-two">
              <img src="https://img2.chinadaily.com.cn/images/202001/09/5e16836ca310cf3e97aff3d2.jpeg" alt="">
              <div class="small">
               <div class="small-dis">
                <p>双语新闻</p>
                <p>哈里梅根宣布将退出王室职务 谋求经济独立</p>
              </div>
             </div>
          </div>
        </div>
      </div>
      <!--主体展示-->
      <div class="main">
        <!--主体左侧展示-->
        <div class="left">
          <el-container>
            <el-aside >
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e1849ffa310cf3e97b073d4.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>译词课堂</p>
                <p>一课译词：随大流</p>
                <p>“随大溜”，比喻“跟着多数人说话或行事”，可以翻译为“follow the general trend，swim with the tide”。</p>
              </div>
            </el-main>
          </el-container>

          <el-container>
            <el-aside>
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e18094da310cf3e97b06311.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>译词课堂</p>
                <p>一课译词：随大流</p>
                <p>“随大溜”，比喻“跟着多数人说话或行事”，可以翻译为“follow the general trend，swim with the tide”。</p>
              </div>
            </el-main>
          </el-container>

          <el-container>
            <el-aside>
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e180193a310cf3e97b06284.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>译词课堂</p>
                <p>一课译词：随大流</p>
                <p>“随大溜”，比喻“跟着多数人说话或行事”，可以翻译为“follow the general trend，swim with the tide”。</p>
              </div>
            </el-main>
          </el-container>
          <!--BBC英语部分-->
          <div class="bbcEng">
            <p>BBC英语</p>
            <div class="bbc-big-img">
              <div class="bbc">
               <div class="bbc-img">
                <img src="https://img2.chinadaily.com.cn/images/202001/10/5e180c63a310cf3e97b063ce.jpeg" alt="">
                <div class="bbc-blue">
                  <p>小测验——易混搭配 "used to、 be used to"和"get used to"</p>
                </div>
              </div>
            </div>
            <div class="bbc nodes">
               <div class="bbc-img">
                <img src="https://img2.chinadaily.com.cn/images/202001/09/5e1678d2a310cf3e97afeaec.jpeg" alt="">
                <div class="bbc-blue">
                  <p>小测验——易混搭配 "used to、 be used to"和"get used to"</p>
                </div>
              </div>
            </div>
            <div class="bbc">
               <div class="bbc-img">
                <img src="https://img2.chinadaily.com.cn/images/202001/09/5e16e1a8a310cf3e97b02853.jpeg" alt="">
                <div class="bbc-blue">
                  <p>小测验——易混搭配 "used to、 be used to"和"get used to"</p>
                </div>
              </div>
            </div>
         </div>
          </div>
          <!--精彩推荐-->
          <div class="jctj">
            <p>精彩推荐</p>
             <el-container>
            <el-aside >
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e17cdc3a310cf3e97b043c2.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>双语新闻</p>
                <p>奢侈品牌迎鼠年 这些春节系列你最爱那个？</p>
                <p>鼠年春节即将来临，为了迎合中国市场，各大品牌纷纷推出春节系列</p>
              </div>
            </el-main>
          </el-container>

           <el-container>
            <el-aside >
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e17ca85a310cf3e97b042ef.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>每日一词</p>
                <p>每日一词|党的先进性和纯洁性 the Party's advanced nature and purity</p>
                <p>坚决清除一切弱化党的先进性、损害党的纯洁性的因素</p>
              </div>
            </el-main>
          </el-container>
          </div>
        </div>
        <!--主体右侧展示-->
        <div class="right main-right">
          <!--右侧上-->
          <div class="youshang">
              <p>订阅和关注</p>
              <div class="dyhgz">
                <div class="left">
                  <div class="dingyue">
                    <img src="https://language.chinadaily.com.cn/img/2018/sy.png" alt="" class="left">
                    <p>订阅手机报</p>
                  </div>
                  <div class="dingyue">
                    <img src="https://language.chinadaily.com.cn/img/2018/wb.png" alt="" class="left">
                    <p>关注微博</p>
                  </div>
                </div>
                <div class="right">
                  <div class="ewm">
                   <img src="https://language.chinadaily.com.cn/img/2018/syxcx_img.jpg" alt="">
                   <p>双语小程序</p>
                 </div>
                </div>
              </div>

          </div>
          <!--右侧下-->
          <div class="youxia">
            <span>人气排行</span>
            <p>习近平2020年新年贺词：只争朝夕，不负昭和（双语全文）</p>
            <p>习近平2020年新年贺词：只争朝夕，不负昭和（双语全文）</p>
            <p>习近平2020年新年贺词：只争朝夕，不负昭和（双语全文）</p>
            <p>习近平2020年新年贺词：只争朝夕，不负昭和（双语全文）</p>
            <p>习近平2020年新年贺词：只争朝夕，不负昭和（双语全文）</p>
            <p>习近平2020年新年贺词：只争朝夕，不负昭和（双语全文）</p>
            <p>习近平2020年新年贺词：只争朝夕，不负昭和（双语全文）</p>
            <p>习近平2020年新年贺词：只争朝夕，不负昭和（双语全文）</p>
            <p>习近平2020年新年贺词：只争朝夕，不负昭和（双语全文）</p>
            <p>习近平2020年新年贺词：只争朝夕，不负昭和（双语全文）</p>
          </div>
        </div>
      </div>

      <!--视频精选-->
        <div class="video">
          <div class="v-one">
            <span>视频精选</span>
            <span class="right">＞</span>
            <span class="right">＜</span>
          </div>
          <div class="v-two">
            <div class="v-small left">
              <div class="vv-two left">
                <img src="https://img2.chinadaily.com.cn/images/201912/27/5e057f0ba310cf3e97ade6c3.jpeg" alt="">
                <div class="two-small">
                  <div class="v-dis">
                    <p>哈里梅根宣布将退出王室职务 谋求经济独立</p>
                  </div>
                 <div class="bofang">
                   <img src="https://language.chinadaily.com.cn/img/2018/video_tb.jpg" alt="">
                 </div>
                </div>
            </div>
          </div>
          <div class="v-small left nodes">
           <div class="vv-two left">
              <img src="https://img2.chinadaily.com.cn/images/201912/27/5e057f0ba310cf3e97ade6c3.jpeg" alt="">
              <div class="two-small">
               <div class="v-dis">
                <p>哈里梅根宣布将退出王室职务 谋求经济独立</p>
              </div>
              <div class="bofang">
                <img src="https://language.chinadaily.com.cn/img/2018/video_tb.jpg" alt="">
              </div>
             </div>
          </div>
          </div>
          <div class="v-small left">
           <div class="vv-two left">
              <img src="https://img2.chinadaily.com.cn/images/201912/27/5e057f0ba310cf3e97ade6c3.jpeg" alt="">
              <div class="two-small">
               <div class="v-dis">
                <p>哈里梅根宣布将退出王室职务 谋求经济独立</p>
              </div>
              <div class="bofang">
                <img src="https://language.chinadaily.com.cn/img/2018/video_tb.jpg" alt="">
              </div>
             </div>
          </div>
          </div>
     <!--下部分-->
         <div class="down left">
          <el-container>
            <el-aside >
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e1849ffa310cf3e97b073d4.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>译词课堂</p>
                <p>一课译词：随大流</p>
                <p>“随大溜”，比喻“跟着多数人说话或行事”，可以翻译为“follow the general trend，swim with the tide”。</p>
              </div>
            </el-main>
          </el-container>

          <el-container>
            <el-aside>
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e18094da310cf3e97b06311.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>译词课堂</p>
                <p>一课译词：随大流</p>
                <p>“随大溜”，比喻“跟着多数人说话或行事”，可以翻译为“follow the general trend，swim with the tide”。</p>
              </div>
            </el-main>
          </el-container>

          <el-container>
            <el-aside>
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e180193a310cf3e97b06284.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>译词课堂</p>
                <p>一课译词：随大流</p>
                <p>“随大溜”，比喻“跟着多数人说话或行事”，可以翻译为“follow the general trend，swim with the tide”。</p>
              </div>
            </el-main>
          </el-container>

          <el-container>
            <el-aside >
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e1849ffa310cf3e97b073d4.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>译词课堂</p>
                <p>一课译词：随大流</p>
                <p>“随大溜”，比喻“跟着多数人说话或行事”，可以翻译为“follow the general trend，swim with the tide”。</p>
              </div>
            </el-main>
          </el-container>

          <el-container>
            <el-aside>
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e18094da310cf3e97b06311.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>译词课堂</p>
                <p>一课译词：随大流</p>
                <p>“随大溜”，比喻“跟着多数人说话或行事”，可以翻译为“follow the general trend，swim with the tide”。</p>
              </div>
            </el-main>
          </el-container>

          <el-container>
            <el-aside>
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e180193a310cf3e97b06284.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>译词课堂</p>
                <p>一课译词：随大流</p>
                <p>“随大溜”，比喻“跟着多数人说话或行事”，可以翻译为“follow the general trend，swim with the tide”。</p>
              </div>
            </el-main>
          </el-container>

           <el-container>
            <el-aside>
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e180193a310cf3e97b06284.jpeg" alt="">
            </el-aside>
            <el-main>
              <div class="class-one">
                <p>译词课堂</p>
                <p>一课译词：随大流</p>
                <p>“随大溜”，比喻“跟着多数人说话或行事”，可以翻译为“follow the general trend，swim with the tide”。</p>
              </div>
            </el-main>
          </el-container>
          <!--点击查看更多-->
          <div class="morelook">
              <p>＋点击查看更多</p>
          </div>
          </div>
        </div>
              <!--新闻图片-->
       <div class="long-news right">
         <div class="picture">
           <p>图片新闻</p>
           <div class="picture-small right">
           <div class="picture-two">
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e17c9b9a310cf3e97b042a6.jpeg" alt="">
              <div class="picture-write">
                <p>你见过颜值这么高的派? 我不信</p>
             </div>
          </div>
           <div class="picture-small right">
           <div class="picture-two">
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e17c9b9a310cf3e97b042a6.jpeg" alt="">
              <div class="picture-write">
                <p>你见过颜值这么高的派? 我不信</p>
             </div>
          </div>
        </div>
         <div class="picture-small right">
           <div class="picture-two">
              <img src="https://img2.chinadaily.com.cn/images/202001/10/5e17c9b9a310cf3e97b042a6.jpeg" alt="">
              <div class="picture-write">
                <p>你见过颜值这么高的派? 我不信</p>
             </div>
          </div>
        </div>
        </div>
         </div>
         <img src="https://adpic.chinadaily.com.cn/chinadaily/2019/07/0_24.jpg" alt="" class="guangao">
          <!--精彩专题-->
          <div class="wonderful">
            <p>精彩专题</p>
            <div class="jingcai">
              <img src="https://img2.chinadaily.com.cn/images/201912/23/5e001190a310cf3e97ad0c38.jpeg" alt="">
              <p>2019年终盘点</p>
            </div>
            <div class="jingcai">
              <img src="https://img2.chinadaily.com.cn/images/201909/23/5d8839f1a310cf3e979d7c02.jpeg" alt="">
              <p>2019年终盘点</p>
            </div>
            <div class="jingcai">
              <img src="https://img2.chinadaily.com.cn/images/201912/23/5e001190a310cf3e97ad0c38.jpeg" alt="">
              <p>2019年终盘点</p>
            </div>
            <div class="jingcai">
              <img src="https://img2.chinadaily.com.cn/images/201909/23/5d8839f1a310cf3e979d7c02.jpeg" alt="">
              <p>2019年终盘点</p>
            </div>
            <div class="jingcai">
              <img src="https://img2.chinadaily.com.cn/images/201912/23/5e001190a310cf3e97ad0c38.jpeg" alt="">
              <p>2019年终盘点</p>
            </div>
          </div>
           <!--精彩结束-->
       </div>
      </div>
    </div>
    <!--底部开始-->
    <div class="footer">
      <!--合作-->
      <div class="foot-one">
        <p>合作伙伴</p>
        <div class="one-img">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb1.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb2.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb3.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb4.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb5.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb6.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb1.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb2.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb3.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb4.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb5.jpg" alt="">
          <img src="https://language.chinadaily.com.cn/img/2018/footer_hzhb6.jpg" alt="">
        </div>
        <div class="friend">
          <p>友情链接</p>
          <div>
            <span>中国翻译协会</span>
            <span>|</span>
             <span>沪江英语</span>
            <span>|</span>
             <span>尚有网</span>
            <span>|</span>
             <span>无忧雅思网</span>
            <span>|</span>
             <span>腾信教育</span>
            <span>|</span>
             <span>普特听力</span>
            <span>|</span>
             <span>可可英语</span>
            <span>|</span>
            <span>爱洋葱</span>
          </div>
        </div>
      </div>
      <!--介绍-->
      <div class="foot-two">
        <span>关于我们</span>
        <span>|</span>
        <span>联系方式</span>
        <span>|</span>
        <span>招聘信息</span>
      </div>
       <!--最后-->
     <div class="foot-three">
       <div class="img-last left">
         <img src="https://language.chinadaily.com.cn/img/2018/footer3_left_logo.jpg" alt="" class="left">
       </div>
       <div class="text left">
         <p>Copyright by chinadaily.com.cn. All rights reserved. None of this material may be used for any commercial or public use. Reproduction in whole or in part without permission is prohibited. </p>
         <p>版权声明：本网站所刊登的中国日报网英语点津内容，版权属中国日报网所有，未经协议授权，禁止下载使用。 欢迎愿意与本网站合作的单位或个人与我们联系。</p>
       </div>
       <div class="phone left">
         <p>电话：8610-84883645</p>
         <p>传真：8610-84883500</p>
         <p>Emil:languagetips@chinadily.com.cn</p>
       </div>
     </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang='less'>

</style>
