<template>
    <section class="gallery">
        <div class="container">
            <div class="card">
                <img class="card_image" v-bind:src="drink.image" alt="">
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
            <div class="card">
                <img class="card_image" src="../../assets/question.png" alt="">
                <div class="card_content">
                    <div class="card_title">
                        <h3>Title</h3>
                    </div>
                    <div class="card_description" v-if="!display_div">
                        <p>Category</p>
                        <p>Ingredients</p>
                        <p>Instructions</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <img class="card_image" src="../../assets/question.png" alt="">
                <div class="card_content">
                    <div class="card_title">
                        <h3>Title</h3>
                    </div>
                    <div class="card_description" v-if="!display_div">
                        <p>Category</p>
                        <p>Ingredients</p>
                        <p>Instructions</p>
                    </div>
                </div>
            </div> 
        </div>                    
    </section>
</template>
  
<script>
import Drink from '../../models/Drink';

let drink = new Drink()

const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        drink = new Drink(
          data.drinks[0].idDrink, 
          data.drinks[0].strDrinkThumb, 
          data.drinks[0].strDrink,
          data.drinks[0].strCategory,
          data.drinks[0].strInstructions
        )       
        console.log(drink)
      })
      .catch((error) => {
        alert(`Une erreur s'est produite. Veuillez réessayer`);
      })

</script>

<script setup>
//import { ref } from 'vue'
//import Card from './Card.vue';

const props = defineProps({
  msg: String
})

</script>
  
<style lang="scss">
@import '../../assets/sass/main.scss'
</style>