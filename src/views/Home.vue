<script>
import translation from '@/translations/translation'
import globalData from '@/main'

export default {
  name: 'home',

  computed: {
    translation () {
      return translation.home[globalData.language]
    }
  },

  data () {
    return {
      links: [
        {
          title: 'Piano Solo Recital: A Night of Spanish Music',
          date: 'November 11, 2018',
          link: 'https://mp.weixin.qq.com/s/tAEMXO6vjO0pW3aTJDf2Vw',
          photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542025192/article_111118.png',
          id: 1
        },
        {
          title: 'Concord Music Group Schedule (November Term)',
          date: 'November 08, 2018',
          link: 'https://mp.weixin.qq.com/s/lND74dEWY8A51A2ccqrpig',
          photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542026420/article_110818.png',
          id: 2
        },
        {
          title: 'Piano Teachers Workshop | 钢琴教师工作坊',
          date: 'November 06, 2018',
          link: 'https://mp.weixin.qq.com/s/TuYBO9JRilsVY0gD6UcDJA',
          photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542026420/article_110618.png',
          id: 3
        },
        {
          title: 'Little Symphony | 音乐赏析工作坊',
          date: 'November 02, 2018',
          link: 'https://mp.weixin.qq.com/s/R3zgQLnUuwTkenoWZixCtg',
          photo: 'https://res.cloudinary.com/dbbfpai4q/image/upload/v1542026430/article_110218.png',
          id: 4
        }

      ]
    }
  }
};

</script>

<template>
  <div class="home__wrapper" v-on:scroll.passive="pagePosition">
    <div class="home__banner"></div>
    <div class="home__banner-bar">
      <div class="home__banner-bar-title">{{translation.bannerBarTitle}}</div>
      <div class="home__banner-bar-text">{{translation.bannerBarText}}</div>
      <router-link to="/programs" class="home__banner-bar-btn">{{translation.bannerBarBtn}}</router-link>
    </div>
    <div class="home__WAW-container">
      <div class="home__WAW-container-left">
        <div class="home__WAW-container-left-subtitle">{{translation.WAWsubtitle}}</div>
        <div class="home__WAW-container-left-title">{{translation.WAWtitle}}</div>
        <div class="home__WAW-container-left-content">{{translation.WAWcontent}}</div>
        <router-link to="/apply" class="home__WAW-container-left-signup">{{translation.WAWsignup}}</router-link>
      </div>
      <div class="home__WAW-container-right">
        <img src="../assets/images/instruments.jpeg" alt="" class="home__WAW-container-right-instruments">
      </div>
    </div>
    <div class="home__FOB-container">
      <div class="home__FOB-title">{{translation.FOBtitle}}</div>
      <div class="home__FOB-card-container">
        <div v-for="post in links" :key="post.id" class="home__FOB-card">
          <a :href="post.link"><img :src="post.photo" :href="post.link" class="home__FOB-card-photo"></a>
          <div class="home__FOB-card-title">{{ post.title }}</div>
          <div class="home__FOB-card-date">{{ post.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles.scss';

.home__wrapper {
  background-image: url('../assets/images/funkylines.png');
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home__banner {
  background-image: url('../assets/images/home-banner.jpeg');
  background-size: cover;
  background-position: center;
  height: calc(100vh - 100px);
  width: 100%;
}

.home__banner-bar {
  width: 100vw;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: $concord-orange;
  color: white
}

.home__banner-bar-title {
  font-size: 25px;
  font-weight: bold;
}

.home__banner-bar-btn {
  width: 120px;
  font-size: 18px;
  padding: 10px 0;
  border: 2px solid white;
  border-radius: 50px;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: white;
    color: $concord-orange;
    text-decoration: none;
  }
}

@media screen and (min-width: 751px) {
  .home__WAW-container {
    width: 80vw;
    height: 500px;
    background-color: $light-gray;
    margin-top: 50px;
    display: flex;
  }

  .home__WAW-container-left {
    height: 100%;
    width: 50%;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home__WAW-container-right {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}

@media screen and (max-width: 750px) {
  .home__WAW-container {
    width: 80vw;
    background-color: $light-gray;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }

  .home__WAW-container-left {
    height: 100%;
    padding: 20px;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home__WAW-container-right {
    height: 100%;
    padding: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

}

.home__WAW-container-left-subtitle {
  color: $concord-orange;
  font-size: 15px;
  margin-bottom: 5px;
}

.home__WAW-container-left-title {
  font-size: 25px;
  margin-bottom: 5px;
}

.home__WAW-container-left-content {
  font-size: 15px;
  color: gray;
  margin-bottom: 10px;
}

.home__WAW-container-left-signup {
  padding: 10px 20px;
  color: $concord-orange;
  border: 1px solid $concord-orange;
  border-radius: 50px;
  width: 100px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    text-decoration: none;
    color: white;
    background: $concord-orange;
  }
}

.left-signup-hover {
  color: white;
  background: $concord-orange;
  text-decoration: none;
}

.home__WAW-container-right-instruments {
  height: 90%;
  width: 90%;
}

@media screen and (min-width: 750px) {

  .home__banner-bar-text {
    width: 50%;
    text-align: left;
  }
}

@media screen and (max-width: 749px) {
  .home__banner-bar-text {
    display: none;
  }
}

.home__FOB-container {
  width: 100vw;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home__FOB-card-container {
  text-align: left;
  display: flex;
  overflow: auto;
  width: 100vw;
}

.home__FOB-card {
  margin: 0 20px;
  width: 300px;
}

.home__FOB-title {
  color: $concord-orange;
  font-size: 20px;
  margin-bottom: 20px;
}

.home__FOB-card-photo {
  height: 225px;
  width: 300px;
  object-fit: cover;
  box-shadow: 2px 2px 10px grey;
  margin-bottom: 10px;
}

.home__FOB-card-photo:hover {
  box-shadow: 5px 5px 20px grey;
}

.home__FOB-card-title {
  font-size: 20px;
  font-weight: bold;
}

.home__FOB-card-date {
  font-size: 15px;
  color: $concord-orange;
}

</style>
