<template>
    <div>

    </div>
</template>

<script>
import Tabulator from 'tabulator-tables'

export default {
    name: 'MenuOderList',
    data() {
        const actionTemplate = `<div id='actions'>${this.$iconTemplate.delete}</div>`
        return {
            tabulator: null,
            baseColumn: [
                { title: '品名', field: 'item_name' },
                { title: 'サイズ', field: 'size', width: 200 },
                { title: '個数', field: 'csvName', width: 200 },
                { title: '金額', field: 'price', hozAlign: 'center', width: '120' }
            ],
            actionColumn: [
                { title: '', field: 'actions', formatter: () => actionTemplate, resizable: false, headerSort: false, width: '50' }
            ],
        }
    },
}
</script>
