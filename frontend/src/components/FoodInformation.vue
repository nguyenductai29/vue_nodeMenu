<template>
    <v-card elevation="1">
        <v-toolbar style="height: 35px;" class='blue-grey lighten-1 white--text font-weight-bold' dense flat>
            <span id="title">{{ this.foodTitle }}</span>
            <v-spacer></v-spacer>
            <span id='price'>{{ this.foodPrice }}￥</span>
        </v-toolbar>
        <v-img :src="'http://localhost:3000/public/image/' + this.foodImage" height="130" width="165"></v-img>
        <!-- <v-card-text class='py-4 my-2'>
            <slot></slot>
        </v-card-text> -->
    </v-card>
</template>

<script>
export default {
    name: 'FoodInformation',
    data() {
        return {
            foodTitle: "",
            foodImage: "",
            foodPrice: null
        }
    },
    props: {
        foodName: String,
        foodImg: String,
        price: Number
    },
    mounted() {
        this.foodTitle = this.foodName
        this.foodImage = this.foodImg
        this.foodPrice = this.price
    },
}
</script>

<style scoped>
#title {
    height: 35px !important;
}

#price {
    height: 35px !important;
    text-align: right;
}
</style>
