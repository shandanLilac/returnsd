<script setup>

</script>

<template>
  <div class="for-help">
    <div class="container">

      <el-breadcrumb class="bread-nav" separator=">">
        <el-breadcrumb-item class="pri-cate" :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item class="sub-cate">技术咨询</el-breadcrumb-item>
      </el-breadcrumb>

      <el-card class="box-card">
        <div class="intro-info">
          <ul class="theSite">
            <li class="title">
              <h3>网站简介</h3>
            </li>
            <li class="content">
              <p>
                该网站的主要技术栈包括:<b>前端-></b>Vue全家桶+vite+ElementPlus, <b>服务端-></b>nodejs--Express ,
                <b>数据库-></b>MySQL，在阿里云服务器部署上线。网站旨在为<b>本地的</b>前端程序员搭建一个“切磋”、交流的平台，“切磋”旨在精进，交流乃至提高，共同打造本地前端行业发展的技术引擎，服务本地经济社会发展。
              </p>
              <p>
                本网站前后端所有功能均有网站作者1人开发，功能逻辑的主线已基本畅通，部分功能和其他细节、美化等，作者会持续跟进，请广大网友多提宝贵意见，参与本站建设。
              </p>
            </li>
          </ul>
          <ul class="theAuthor">
            <li class="title">
              <h3>作者简介</h3>
              <!-- <p>网站作者是甘肃省张掖市山丹县人，2021年因病致残，一侧肢体功能丧失。在消沉1年后，逐步接受残缺，直面挫折，收拾心情，调整目标，整合现状，决定力所能及地位家乡做点微不足道的事，同时，转移自己注意力，让心情平和。
              </p> -->
              <p>网站作者是甘肃省张掖市山丹县人，2021年因病致残。颓废1年后，为了转移注意力，接触和学习前端编程。
              </p>
            </li>
          </ul>
          <ul class="theSupport">
            <li>
              <div class="support-info">
                <h3 class="title">技术咨询</h3>
                <p>如果您在以下场景遇到问题，欢迎和我们交流讨论</p>
                <div class="support-item">
                  <h4>前端:</h4>
                  <p>网页设计咨询</p>
                  <p>网站开发咨询</p>
                </div>
                <div class="support-item">
                  <h4>服务端:</h4>
                  <p>服务器开发、数据库设计、接口调式、项目部署上线等。</p>
                </div>
                <div class="support-item">
                  <h4>项目维护:</h4>
                  <p>维护类型：HTML+CSS+JS原生项目、Jquery项目、Vue2-3项目、Express服务器、KOA服务器等。</p>
                  <p>维护内容：页面调整、新增功能、需求改造、性能提升、Debug等。</p>
                </div>
              </div>
              <div class="contact">
                <div class="qr-code"></div>
                <span>
                  <p>扫码联系作者</p>
                  <p>技术咨询、意见建议</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.for-help {
  margin-top: 20px;

  .container {

    .bread-nav {

      .pri-cate {
        font-size: 18px;
      }

      .sub-cate {
        font-size: 16px;
      }
    }

    .box-card {
      margin-top: 20px;

      .intro-info {
        ul {
          margin-bottom: 20px;
          width: 100%;
          border: 1px dotted #64ffda;
          border-radius: 5px;

          li {
            background: rgba($color: #999, $alpha: 0.2);
            box-shadow: 2px 2px 4px rgba($color: #000, $alpha: 0.2);

            h3 {
              background: linear-gradient(to right, #1de9b6 0%, #a7ffeb 50%, #64ffda 100%);
              color: #f5f5f5;
              height: 42px;
              line-height: 42px;
              padding-left: 20px;
            }

            p {
              padding: 5px;
              text-indent: 2em;
              font-size: 16px;
            }

            h4 {
              padding: 5px;
              text-indent: 2em;
            }
          }
        }

        .theSupport {
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 20px;

            .contact {
              width: 380px;
              height: 182px;
              // border: 1px solid #e7e7e7;
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              .qr-code {
                width: 180px;
                height: 180px;
                background: url('../../assets/images/code.png') no-repeat center 10px/contain;

              }

              span {
                p {
                  &:first-child {
                    color: #333;
                  }

                  &:nth-child(n+2) {
                    font-size: 12px;
                    color: #666;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>