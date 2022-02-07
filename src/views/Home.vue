<template>
    <div class="container">
        <div class="row">
            <div class="col-12" v-for="(data_card,index) in data_cards_show" :key=index >
                <Card :card="data_card"></Card>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '@/components/Card.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: {
    Card
  },
  data(){    
    return {
        flagLoadingCards:0
    };
  },
  computed:{
    ...mapGetters({
        data_cards_show: 'card/getAllGalleryData'
    })
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    this.getCards()
  },
  methods: {
    getCards(){
        this.$store.dispatch('card/getPhotoGallery')
        .then(() => {
            this.flagLoadingCards=0;
        });
    },
     handleScroll() {
        let scrollHeight = window.scrollY;
        let maxHeight = window.document.body.scrollHeight - window.document.documentElement.clientHeight;
        if (scrollHeight >= maxHeight - 200) {
            if(this.flagLoadingCards===0){
                this.flagLoadingCards=1;
                this.getCards();
            }
        }
     } 
  }
}
</script>