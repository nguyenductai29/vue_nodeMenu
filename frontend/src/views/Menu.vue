<template>
    <div class='menu'>
        <v-container>
            <Header :screen-name='title' text-center="text-lg-center"></Header>
        </v-container>
        <v-container>
            <v-row class="mb-3" id="main">
                <v-col id="menuList">
                    <v-row>
                        <v-col cols='3' v-for='food of this.foods' :key='food.id' :id='"food_item_" + food.id'>
                            <FoodInfo
                                :food-name="food.foodName"
                                :food-img="food.foodImage"
                                :price="food.price"
                                @click="onSelect(food)"
                            >
                            </FoodInfo>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols='4'>
                    <v-form ref='save_form'>
                        <v-row style="margin-bottom: 0px;">
                            <v-col id="menuOderList">
                                <div id="orderListTable" ref="table">
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col id="menuOderPayment">
                                <v-row>
                                    <v-col cols='6' style="white-space: nowrap;"><p><span><b>消費税（10％）：</b></span></p></v-col>
                                    <v-col cols='6' class="text-lg-right"><p><span>{{ this.taxPrice }} ￥</span></p></v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols='6' style="white-space: nowrap;"><p><span><b>総合計：</b></span></p></v-col>
                                    <v-col cols='6' class="text-lg-right"><p><span>{{ this.itemPrice }} ￥</span></p></v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-form>
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
import {TabulatorFull as Tabulator} from 'tabulator-tables'
import 'tabulator-tables/dist/css/tabulator.min.css'
import 'tabulator-tables/dist/css/tabulator_semanticui.min.css'

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
            isDisabled: false,
            foods: [
                {id:1, foodName: 'フォー', size: null, count: 1, price: 800, foodImage: 'pho.jpg'},
                {id:2, foodName: 'ピリ辛ブンーボーフェ', size: null, count: 1, price: 800, foodImage: 'bunbohue.jpg'},
                {id:3, foodName: '厚揚げブンと特性ソース付け', size: null, count: 1, price: 800, foodImage: 'bundau.jpg'},
                {id:4, foodName: 'ベトナム風うどん', size: null, count: 1, price: 800, foodImage: 'chaocanh.jpg'},
                {id:5, foodName: 'ベトナム風ピリ辛うなぎスープ', size: null, count: 1, price: 1800, foodImage: 'supluon.jpg'},
                {id:6, foodName: 'ピザ', size: null, count: 1, price: 1200, foodImage: 'pizza.jpg'},
                {id:7, foodName: 'サンドイッチ', size: null, count: 1, price: 210, foodImage: 'sandwich.jpg'},
                {id:8, foodName: '引張うどん', size: null, count: 1, price: 500, foodImage: 'udon.jpg'},
                {id:9, foodName: '柔らかライスペーパーの肉巻き', size: null, count: 1, price: 500, foodImage: 'banhcuon.jpg'},
                {id:10, foodName: '柔らかライスペーパーセット', size: null, count: 1, price: 300, foodImage: 'banhmuot.jpg'},
                {id:11, foodName: '特別なバンミー', size: null, count: 1, price: 1000, foodImage: 'banhmidacbiet.jpg'},
                {id:12, foodName: 'ハム入りバンミー', size: null, count: 1, price: 600, foodImage: 'banhmido.jpg'},
                {id:13, foodName: '焼肉バンミー', size: null, count: 1, price: 650, foodImage: 'banhmithitquay.jpg'},
                {id:14, foodName: 'レバーミックスバンミー', size: null, count: 1, price: 500, foodImage: 'banhmybate.jpg'},
                {id:15, foodName: '焼肉バンミー（特性ピリ辛ソース入り）', size: null, count: 1, price: 700, foodImage: 'banhmysotcay.jpg'},
                {id:16, foodName: '特性ミックスバンミー', size: null, count: 1, price: 850, foodImage: 'banhmythamcam.jpg'},
                {id:17, foodName: 'ドーナツセット', size: null, count: 1, price: 700, foodImage: 'donatset.jpg'},
                {id:18, foodName: '焼き餃子（20個入り）', size: null, count: 1, price: 500, foodImage: 'gyoza.jpg'},
                {id:19, foodName: 'ハンバーガーセット', size: null, count: 1, price: 1300, foodImage: 'humbagerset.jpg'},
                {id:20, foodName: 'ミートソースパスター', size: null, count: 1, price: 600, foodImage: 'mitososu.jpg'},
                {id:21, foodName: 'コーンのおこわセット', size: null, count: 1, price: 550, foodImage: 'xoibap.jpg'},
                {id:22, foodName: '緑豆おこわセット', size: null, count: 1, price: 550, foodImage: 'xoidauxanh.jpg'},
                {id:23, foodName: 'ピーナッツおこわセット', size: null, count: 1, price: 550, foodImage: 'xoilac.jpg'},
            ],
            invalidSelect: [
                { text: '特盛', value: 0 },
                { text: '大盛', value: 1 },
                { text: '中盛', value: 2 },
                { text: '並盛', value: 3 },
            ],
            invalidCountSelect: [
                { text: '1', value: 1 },
                { text: '2', value: 2 },
                { text: '3', value: 3 },
                { text: '4', value: 4 },
                { text: '5', value: 5 },
            ],
            tabulator: null,
            oder_items: [],
            duplicate: false,
            itemPrice: null,
            taxPrice: null,
            tax: 0,
            total: 0,
            actionColumn: [
                { title: '', field: 'actions', formatter: (cell) => `<div id='actions'>${this.$iconTemplate.delete}</div>`, resizable: false, headerSort: false, width: '50' }
            ],
            options: {
                movableRows: true,
                height: 497,
                layout: 'fitColumns',
                rowFormatter: (row) => row.getData()
            }
        }
    },
    watch: {
        oder_items: {
            handler: function (newData) {
                if (!newData) return
                this.tabulator.replaceData(newData)
            },
            deep: true
        }
    },
    mounted() {
        try {
            this.$store.dispatch('setAuth', this.$attrs.auth)
            this.$store.dispatch('initState')
            const invalidParams = this.invalidSelect.reduce((pre, cur) => Object.assign(pre, { [cur.text]: cur.text }), {})
            const invalidCountParams = this.invalidCountSelect.reduce((pre, cur) => Object.assign(pre, { [cur.text]: cur.text }), {})
            const baseColumn = [
                { rowHandle: true, formatter:'handle', frozen: true, width: 30 },
                { title: '品名', field: 'foodName', width: 230, },
                { title: 'サイズ', field: 'size', width: 90, editor:"select", editorParams: { values: invalidParams } },
                { title: '個数', field: 'count', width: 80, editor:"select", editorParams: { values: invalidCountParams } },
                { title: '金額', field: 'price', width: 100}
            ]
            this.options.columns = baseColumn.concat(this.actionColumn)
            this.options.data = this.oder_items
            this.tabulator = new Tabulator(this.$refs.table, this.options);
            this.cellClick(this.tabulator)
            this.dataChanged(this.tabulator)
        } catch (err) {
            console.log(err)
        }
    },
    methods: {
        dataChanged(table) {
            table.on("dataChanged", (data) => {
                data.reduce((val) => {
                    console.log(val)
                })
                // this.oder_items = data
            }, this);
            this.calculationPayment(this.oder_items)
        },
        cellClick(table) {
            table.on('cellClick', (e, cell) => {
                const methodsName = e.target.getAttribute('call-methods')
                const row = cell.getRow()
                const rowData = row.getData()
                switch (methodsName) {
                    case 'onDelete':
                        this.onDelete(row);
                        break
                }
            }, this)
        },
        onSelect(food) {
            const isExisted = this.oder_items.some(item => item.id === food.id)
            if (!isExisted) {
                this.oder_items.push(food)
                this.calculationPayment(this.oder_items)
            }
        },
        onDelete(row) {
            const index = row.getIndex()
            row.delete(index)
            const rowDatas = this.tabulator.getData();
            this.calculationPayment(rowDatas)
            if (rowDatas.length === 0) {
                this.tax = 0
                this.total = 0
                this.taxPrice = null
                this.itemPrice = null
            }
        },
        calculationPayment(rowDatas) {
            this.total = rowDatas.reduce((sumPrice, value) => sumPrice + parseInt(value.price), 0)
            this.taxPrice = this.total * 0.1
            this.itemPrice = this.total + this.taxPrice
        }
    },
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
    padding: 0px;
    overflow-y: auto;
}

#menuOderPayment {
    border: 1px solid black;
    height: 115px;
    margin-bottom: 15px;
}

#orderListTable {
    margin: 0px;
    border: none;
}

@media screen and (max-width: 960px) {
    #main {
        margin-left: 8px;
        margin-right: 8px;
    }
}

</style>
