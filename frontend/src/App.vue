<template>
  <v-app id="app">
    <div id="nav" class="mb-3 font-weight-bold">
      <div id="back" v-if="dispHeaderIcon"><v-icon dark @click="back">mdi-arrow-left</v-icon></div>
      <div id="title" class="blue-grey darken-3 white--text">Restaurant system{{ this.subTitle }}</div>
      <div id="home" v-if="dispHeaderIcon"><v-icon dark @click="home">mdi-home</v-icon></div>
    </div>
    <router-view/>
  </v-app>
</template>

<script>
String.prototype.bytes = function () {
  var length = 0
  for (var i = 0; i < this.length; i++) {
    var c = this.charCodeAt(i)
    const isOneByte = (c >= 0x0 && c < 0x81) || (c === 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)
    length += isOneByte ? 1 : 2
  }
  return length
}

export default {
  name: "App",
  computed: {
    dispHeaderIcon() {
      const menuPath = [this.$path.MENU, this.$path.MASTER_MENU]
      return !menuPath.includes(this.$route.path)
    },
    subTitle() {
      const subTitle = this.$store.state.title
      return subTitle ? ` - ${subTitle}`: ''
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    home () {
      this.$router.replace(this.$store.getters.menuPath)
    }
  }
}
</script>

<style>
html {
  overflow: auto !important
}

#nav #title {
  text-align: center;
  padding: 15px;
}

#nav #back {
  top: 15px;
  left: 30px;
  position: absolute;
}

#nav #home {
  top: 15px;
  right: 30px;
  position: absolute;
}

.theme--dark.v-icon:after {
  opacity: .24;
}

.v-text-field .v-label {
    max-width: 100%;
}

.v-text-field .v-label--active {
    max-width: 133%;
}

/* tabulator */
.tabulator-cell {
  height: 40px !important;
  line-height: 40px !important;
  padding: 0px 8px !important;
}
.tabulator-cell.tabulator-editing {
  padding: 0px !important;
}
.tabulator-row.tabulator-selected {
  background-color: #E3F2FD !important;
}
.tabulator-cell[tabulator-field='actions'] .v-btn {
  opacity: .5 !important;
  margin: 2.5px !important;
}
.tabulator-cell[tabulator-field='actions'] .v-icon {
  font-size: 24px !important;
  margin: 5px !important;
}
</style>
