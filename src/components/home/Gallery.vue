<template>
    <section class="gallery">
        <h2 class="gallery_title">{{ title }}</h2>
        <div class="gallery_cards">
            <Card>
                <div class="card" v-for="drink in listOfDrinks" :key="drink.id">
                    <img class="card_image" :src="drink.image" alt="">
                    <div class="card_title">
                        <h3>{{ drink.title }}</h3>
                        <p><strong>{{ drink.category }}</strong></p>
                    </div>
                    <div class="card_content">
                        <div class="instructions">
                            <p>{{ drink.instructions }}</p>
                        </div>
                        <div class="ingredients">
                            <p><strong>Ingredients:</strong></p>
                            <ul>
                                <li>{{ drink.ingredient1 }}</li>
                                <li>{{ drink.ingredient2 }}</li>
                                <li>{{ drink.ingredient3 }}</li>
                                <li>{{ drink.ingredient4 }}</li>
                                <li>{{ drink.ingredient5 }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        <ReloadButton text="I'm still thirsty" />
    </section>
</template>
  
<script>
import Card from '../home/Card.vue';
import Drink from '../../models/Drink';
import ReloadButton from '../home/ReloadButton.vue';

export default {
    components: {
        Card,
        ReloadButton
    },
    props: {
        title: String
    },
    data() {
        return {
            listOfDrinks: [],
        }
    },
    methods: {
        getRandomCocktail() {
            for (let i = 0; i < 3; i++) {
                fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
                    .then(response => response.json())
                    .then(data => {
                        this.listOfDrinks.push(
                            new Drink(
                                data.drinks[0].idDrink,
                                data.drinks[0].strDrinkThumb,
                                data.drinks[0].strDrink,
                                data.drinks[0].strCategory,
                                data.drinks[0].strIngredient1,
                                data.drinks[0].strIngredient2,
                                data.drinks[0].strIngredient3,
                                data.drinks[0].strIngredient4,
                                data.drinks[0].strIngredient5,
                                data.drinks[0].strInstructions
                            )
                        )
                    })
                    .catch((error) => {
                        alert(`Une erreur s'est produite. Veuillez réessayer`);
                    })
            }
        },
    },
    mounted() {
        this.getRandomCocktail()
    }
}
</script>
  
<style lang="scss">
@import '../../assets/sass/main.scss'
</style>