<template>
    <section class="gallery">
        <h2 class="gallery_title">{{ title }}</h2>
        <div class="gallery_cards">
            <Card>
                <div class="card" v-for="drink in listOfDrinks" :key="drink.id">
                    <img class="card_image" :src="drink.image" alt="">
                    <div class="card_content">
                        <div class="card_title">
                            <h3>{{ drink.title }}</h3>
                        </div>
                        <div class="card_description" v-if="!display_div">
                            <p>{{ drink.category }}</p>
                            <p>ingredients</p>
                            <p>{{ drink.instructions }}</p>
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
            listOfDrinks: []
        }
    },
    methods: {
        getDrinks() {
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
                                data.drinks[0].strInstructions
                            )
                        )
                    })
                    .catch((error) => {
                        alert(`Une erreur s'est produite. Veuillez réessayer`);
                    })
            }
        }
    },
    mounted() {
        this.getDrinks()
    }
}
</script>
  
<style lang="scss">
@import '../../assets/sass/main.scss'
</style>