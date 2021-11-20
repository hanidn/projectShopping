<!--<template>
  <div>
    <academy-header></academy-header>
    <div class="container">
      <div id="main-mid">
        <div class="flex-container">
          <div id="item-acd" v-for="restore in Restors.data" :key="restore.Id">
             <img :src="'https://zinomin.ir/'+restore.imagesrc" alt="back" />
            <p><i class="fa fa-clock-o"></i> {{ restore.time }}</p>
            <h5>{{ restore.title }}</h5>
            <div class="p">
              <p>
                {{ restore.summary }}
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
           <a href="" class="active" v-for="n in  Restors.pages" :key="n">{{n}}</a>
              <router-link :to="{name:'products',query:{pages:n}}">{{ n }}</router-link> 
           </li>

           <li>
           <a href="" class="previous">صفحه قبل</a>
           </li>
        </ul>

       <div class="flex-container">
        <div id="item-acd" v-for="restore in Restors" :key="restore.Id">
          <p><i class="fa fa-clock-o"></i> {{ restore.time }}</p>
          <h5>{{ restore.title }}</h5>
          <div class="p">
            <p>
              {{ restore.summary }}
            </p>
          </div>
        </div>
      </div> 
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
    Restors() {
      return this.$store.getters.GetRestors;
    },
  },

  created() {
    return this.$store.dispatch('GetRestorsFromServer');
  },

};
</script>-->

