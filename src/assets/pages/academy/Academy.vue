<!--<template>
  <div>
    <div class="mid">
      <div id="left">
        <img src="/src/assets/image/academy.png" alt="" style="width: 70%" />
      </div>
      <div id="right">
        <h1>آکادمی</h1>
        <h5>
          توی این بخش میتونید به مقالات و محتواهای<br/>
          زینومین دسترسی داشته باشید.اینجا براتون کلی<br/>
          آموزش در خصوص بازیافت و محافظت از محیط <br/>زیستمون داریم.
          <br />همچنین اگه علاقه دشته باشین میتونین در این <br />بخش مقالات
          مربوط به خودتون رو هم که در<br/>
          زمینه محیط زیست و بازیافت هستند را با دیگران <br/>به اشتراک بزارید.
        </h5>
        <div class="search">
          <input type="text" placeholder="هرچی که میخوای رو جستجو کن" v-model="keyword"/>
          <button class="btn" @click.prevent="SearchAcademy()">جستجو</button>
        </div> 
      </div>
    </div>
    <academy-header></academy-header>

    <router-view></router-view>

    <br /><br /><br /><br /><br />
  </div>
</template>
<script>
import AcademyHeader from "./Header-academy";
import All from "./all";
import restore from "./restore";

export default {
  components: {
    AcademyHeader: AcademyHeader,
    All: All,
    restore: restore,
  },
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    SearchAcademy() {
      const search = {
        keyword: this.keyword,
      };
      this.$store.dispatch("SearchAcademy");
    },
  },
};
</script>-->
