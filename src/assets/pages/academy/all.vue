<!--<template>
  <div>
<academy-header></academy-header>
    <div class="container">
      <div id="main-mid">
        <div class="flex-container">
          <div id="item-acd" v-for="item in All.data" :key="item.Id">
                 <img :src="'https://zinomin.ir/'+item.imagesrc" alt="back" />
            <p><i class="fa fa-clock-o"></i> {{ item.time }}</p>
            <h5>{{ item.title }}</h5>
            <div class="p">
              <p>
                {{ item.summary }}
              </p>
            </div>
          </div>
        </div>
      </div>
 <ul class="pagination">
          <li>
               <a href="" class="next">صفحه بعد</a>
           </li>
          <li>
           <a href="" class="active" v-for="n in  All.pages" :key="n">{{n}}</a>
             <router-link :to="{name:'products',query:{pages:n}}">{{ n }}</router-link> 
           </li>

           <li>
           <a href="" class="previous">صفحه قبل</a>
           </li>
        </ul>


    </div>
  </div>
</template>
<script>
  import AcademyHeader from "./Header-academy";

export default {
components:{
   AcademyHeader: AcademyHeader
   },
  computed: {
    All() {
      return this.$store.getters.GetAll;
    },
  },
  created() {
    this.$store.dispatch("GetAllFromServer");
  },
};
</script>


