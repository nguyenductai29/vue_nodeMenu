<template>
    <div class='menu'>
        <v-container>
            <Header :screen-name='title' text-center="text-lg-center"></Header>
        </v-container>
        <v-container>
            <v-row class="mb-3" id="main">
                <v-col id="menuList">
                    <v-row>
                        <v-col cols='3' v-for='food of this.foods' :key='food.id'>
                            <FoodInfo
                                :food-name="food.foodName"
                                :food-img="food.foodImage"
                                :price="food.price"
                            >
                            </FoodInfo>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols='4'>
                    <v-row>
                        <v-col id="menuOderList"></v-col>
                    </v-row>
                    <v-row>
                        <v-col id="menuOderPayment"></v-col>
                    </v-row>
                    <v-row>
                        <v-col id="btnOder">
                            <CustomButton
                                title='注文'
                                class='btn-oder'
                                @click='onOder()'
                            >
                            </CustomButton>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import CustomButton from '../components/CustomButton.vue'
import FoodInfo from '../components/FoodInformation.vue'
import Tabulator from 'tabulator-tables'

export default {
    name: 'Menu',
    components: {
        Header,
        CustomButton,
        FoodInfo
    },
    data() {
        return {
            title: 'メニュー一覧',
            foods: [
                {id:1, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:2, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:3, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:4, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:5, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:6, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:7, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:8, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:9, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
                {id:10, foodName: 'Pho', price: 800, foodImage: 'pho.jpg'},
            ]
        }
    },
    mounted() {
    this.$store.dispatch('initState')
    this.$store.dispatch('setAuth', this.$attrs.auth)
  }
}
</script>

<style scoped>
.container {
    max-height: calc(100vh - 130px);
    overflow: hidden;
}

#menuList {
    border: 1px solid black;
    height: calc(100vh - 265px);
    margin-right: 35px;
    overflow-y: auto;
}

#menuOderList {
    border: 1px solid black;
    height: calc(100vh - 470px);
    overflow-y: auto;
}

#menuOderPayment {
    border: 1px solid black;
    height: calc(100vh - 845px);
    margin-bottom: 15px;
}

@media screen and (max-width: 960px) {
    #main {
        margin-left: 8px;
        margin-right: 8px;
    }
}

</style>
