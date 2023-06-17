<template>
    <section class="gallery">
      <div class="gallery_items">
            <div class="card" v-for="drink in listOfDrinks" :key="drink.id">
                <img class="card_image" :src="drink.image" alt="">
                <div class="card_content">
                    <div class="card_title">
                        <h3>{{ drink.title }}</h3>
                    </div>
                    <div class="card_description" v-if="!display_div">
                        <p>{{drink.category}}</p>
                        <p>Ingredients</p>
                        <p>{{drink.instructions}}</p>
                    </div>
                </div>
            </div>
        </div>
        <ReloadButton :msg="reloadMessage" />
    </section>
</template>
  
<script>
import Drink from '../../models/Drink';
export default {
  data() {
    return {
        listOfDrinks: []
    }
  },
  methods: {
    getDrinks() {
      for(let i=0; i < 3; i++) {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            this.listOfDrinks.push(
                new Drink(
                    data.drinks[0].idDrink, 
                    data.drinks[0].strDrinkThumb, 
                    data.drinks[0].strDrink,
                    data.drinks[0].strCategory,
                    data.drinks[0].strInstructions
                )
            )         
        })       
      }
    }
  },
  mounted() {
    this.getDrinks()
  }
}
</script>

<script setup>
import ReloadButton from '../home/ReloadButton.vue';
import { ref } from 'vue'

const reloadMessage = ref("I'm still thirsty<")

</script>
  
<style lang="scss">
@import '../../assets/sass/main.scss'
</style>