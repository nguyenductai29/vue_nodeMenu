<template>
    <v-card elevation="1" class="foodItem" @click="callback($event)" :disabled="disabled">
        <v-toolbar style="height: 35px;" class='blue-grey lighten-1 white--text font-weight-bold' dense flat>
            <span id="title">{{ this.foodTitle }}</span>
            <v-spacer></v-spacer>
            <span id='price'>{{ this.foodPrice }}￥</span>
        </v-toolbar>
        <v-img :src="'http://localhost:3000/public/image/' + this.foodImage" height=150 width=260></v-img>
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
            foodPrice: null,
            isDisabled: "",
            clicked: false
        }
    },
    props: {
        foodName: String,
        foodImg: String,
        price: Number,
        disabled: Boolean
    },
    mounted() {
        this.foodTitle = this.foodName
        this.foodImage = this.foodImg
        this.foodPrice = this.price
    },
    methods: {
        callback: function(e) {
            this.clicked = true
            setTimeout(() => this.clicked = false, 500)
            this.$emit('click', e)
        }
  }
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

.foodItem:hover {
    opacity: 0.5;
    cursor: pointer;
}
</style>
