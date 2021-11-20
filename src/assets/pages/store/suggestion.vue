<!--<template>

  <div>
    <store-header></store-header>
    <div class="container">
      <div id="main-mid">
        <div class="flex-container">
            <div id="item-acd" v-for="items in  Suggestion.data" :key="items.Id">
                   <img :src="'https://zinomin.ir/'+items.imagesrc" alt="back" />
            <p><i class="fa fa-clock-o"></i> {{ items.time }}</p>
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
           <a href="" class="active" v-for="n in Suggestion.pages" :key="n">{{n}}</a>
              <router-link :to="{name:'products',query:{pages:n}}">{{ n }}</router-link>
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
import StoreHeader from "./store-header";

export default {
  components: {
    StoreHeader: StoreHeader,
  },
  computed: {
    Suggestion() {
      return this.$store.getters.GetSuggestion;
    },
    // ImageAddress() {
    //   return this.$store.getters.GetImageAddress;
    // },
  },
  // watch: {
  //   $route() {
  //     this.$store.dispatch("GetSuggestionFromServer", {
  //       pages: this.$route.query.pages
  //     });
  //   },
  created() {
    if (this.Suggestion.length == 0) {
      this.$store.dispatch("GetSuggestionFromServer")
  }
  }
};
</script>
