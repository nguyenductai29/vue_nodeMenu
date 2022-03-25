<template>
    <v-container>
        <v-row id="header">
            <v-col :class='textCenter'>
                <h2>{{ this.headerName }}</h2>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            headerName: ""
        }
    },
    props: {
        screenName: String,
        textCenter: String
    },
    mounted() {
        this.headerName = this.screenName
    },
}
</script>
