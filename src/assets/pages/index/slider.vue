 
  <template>
  <div class="cotainer">
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" class="img"/>
      </div>
    </transition-group>
    <a class="prev" @click.prevent="prev" href="#">قبل</a>
    <a class="next" @click.prevent="next" href="#">بعد</a>
  </div>
</div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
         "/src/assets/image/RAM.png",
         "/src/assets/image/mouse.png",
         "/src/assets/image/GRAPHIC.png",
         "/src/assets/image/gaming.png",
        
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval( 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>-->


