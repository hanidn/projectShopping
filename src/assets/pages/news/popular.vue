<template>
<div>
<news-Header></news-Header>
         <div class="container">
            <div id="main-mid">
                <div class="flex-container">
                    <div id="item-acd"  v-for="items in Popular.data" :key="items.Id">
                              <img :src="'https://zinomin.ir/'+items.imagesrc" alt="back" />
                        <p><i class="fa fa-clock-o"></i> {{ items.time }}
                        </p>
                        <h5>{{ items.title }}</h5>
                        <div class="p">
                            <p>
                                {{ items.summary }}
                            </p>
                        </div>
                    </div>
                </div>
 <ul class="pagination">
          <li>
               <a href="" class="next">صفحه بعد</a>
           </li>
          <li>
           <a href="" class="active" v-for="n in Popular.pages" :key="n">{{n}}</a>
             <!-- <router-link :to="{name:'products',query:{pages:n}}">{{ n }}</router-link> -->
           </li>

           <li>
           <a href="" class="previous">صفحه قبل</a>
           </li>
        </ul>

            </div>
        </div>
        </div>
</template>
<script>
import NewsHeader from "./news-header";
export default {
components:{
NewsHeader:NewsHeader,
},
computed: {
     Popular() {
      return this.$store.getters.GetPopular;
    },
  },
  created() {
    this.$store.dispatch("GetPopularFromServer");
  },
}
</script>

