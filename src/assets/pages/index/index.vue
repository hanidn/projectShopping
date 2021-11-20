<template>
<div class="container">
<div><Slider /></div>
   <div class="flex-container">
                    <div id="item-acb">
                      <router-link to="/singleProuduct">
                        <img src="/src/assets/image/mouse.png" alt="back"></router-link>
                        <h5>
                          <p>&nbsp;&nbsp;1000000t</p>
                        قیمت 
                          </h5>
                        <div class="p">
                            <p>
                                خلاصه نکاتی که باید  به خواننده گفته شود
                            </p>
                        </div>
                          <a href="#" class="main">افزودن به سبد خرید</a>
                    </div>
                    

                    <div id="item-acb">
                        <router-link to="/singleProuduct">
                        <img src="/src/assets/image/gaming.png" alt="back"></router-link>
                       
                          <h5>
                          <p>&nbsp;&nbsp;1000000t</p>
                        قیمت 
                          </h5>
                        <div class="p">
                            <p>
                                خلاصه نکاتی که باید  به خواننده گفته شود
                            </p>
                        </div>
                      <a href="#" class="main">افزودن به سبد خرید</a>
                    </div>
  
                    <div id="item-acb">
                      <router-link to="/singleProuduct">
                        <img src="/src/assets/image/RAM.png" alt="back"> </router-link>
                        <h5>
                          <p>&nbsp;&nbsp;1000000t</p>
                        قیمت 
                          </h5>
                        <div class="p">
                            <p>
                                خلاصه نکاتی که باید  به خواننده گفته شود
                            </p>
                        </div>
                           <a href="#" class="main">افزودن به سبد خرید</a>
                    </div>
                 
                </div>

</div>

</template>
<script>

export default {
  components: { slider },
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
      SearchAll(){
          const search={
              keyword:this.keyword
          };
          this.$store.dispatch("SearchAll");
      }
  },
  }

</script>
<script>
import Slider from "./slider.vue";
import slider from './slider.vue';
export default {
  name: "app",
  components: {
    Slider
  }
}
</script>





