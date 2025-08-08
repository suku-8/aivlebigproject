<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { VDataTable } from 'vuetify/labs/VDataTable'

export default {
    name: 'CustomerReadModelView',
    components: {
        VDataTable,
    },
    props: {
        value: Object,
        editMode: Boolean,
        isNew: Boolean
    },
    setup() {
        const headers = ref([
            // 필드 디스크립터를 기반으로 헤더 설정
            { title: "customerId", key: "customerId" },
            { title: "customerName", key: "customerName" },
            { title: "customerRrn", key: "customerRrn" },
            { title: "customerAge", key: "customerAge" },
            { title: "customerBirthOfDate", key: "customerBirthOfDate" },
            { title: "customerGender", key: "customerGender" },
            { title: "customerAddress", key: "customerAddress" },
            { title: "customerPhone", key: "customerPhone" },
            { title: "customerJob", key: "customerJob" },
            { title: "customerHasChildren", key: "customerHasChildren" },
            { title: "customerIsMarried", key: "customerIsMarried" },
        ]);

        const items = ref([]);

        onMounted(async () => {
            try {
                const response = await axios.get('/customerReadModels');
                const data = response.data._embedded.customerReadModels;
                data.forEach(obj => {
                    obj.id = obj._links.self.href.split("/").pop();
                });
                items.value = data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        });

        return {
            headers,
            items
        };
    }
}
</script>
