<template>
    <div>
        <Number
            label="CustomerId"
            v-model="value.customerId"
            :editMode="editMode"
        />
        <String
            label="Name"
            v-model="value.name"
            :editMode="editMode"
        />
        <Number
            label="Age"
            v-model="value.age"
            :editMode="editMode"
        />
        <String
            label="Phone"
            v-model="value.phone"
            :editMode="editMode"
        />
        <String
            label="Job"
            v-model="value.job"
            :editMode="editMode"
        />
        <String
            label="Address"
            v-model="value.address"
            :editMode="editMode"
        />
        <String
            label="Gender"
            v-model="value.gender"
            :editMode="editMode"
        />
        <Date
            label="BirthOfDate"
            v-model="value.birthOfDate"
            :editMode="editMode"
        />
        <Boolean
            label="HasChildren"
            v-model="value.hasChildren"
            :editMode="editMode"
        />
        <Boolean
            label="IsMarried"
            v-model="value.isMarried"
            :editMode="editMode"
        />
        <String
            label="Rrn"
            v-model="value.rrn"
            :editMode="editMode"
        />
        <v-row class="ma-0 pa-0">
            <v-spacer></v-spacer>
            <v-btn width="64px" color="primary" @click="save">
                저장
            </v-btn>
        </v-row>
    </div>
</template>


<script>
import BaseEntity from './base-ui/BaseEntity.vue'

export default {
    name: 'CustomerProfile',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "customerProfiles",
        value: {
        }
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>
