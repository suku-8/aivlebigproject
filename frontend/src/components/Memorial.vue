<template>
    <div>
        <String
            label="MemorialId"
            v-model="value.memorialId"
            :editMode="editMode"
        />
        <Number
            label="CustomerId"
            v-model="value.customerId"
            :editMode="editMode"
        />
        <String
            label="ImageUrl"
            v-model="value.imageUrl"
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
        <Date
            label="BirthOfDate"
            v-model="value.birthOfDate"
            :editMode="editMode"
        />
        <Date
            label="DeceasedDate"
            v-model="value.deceasedDate"
            :editMode="editMode"
        />
        <String
            label="Gender"
            v-model="value.gender"
            :editMode="editMode"
        />
        <v-divider class="border-opacity-50 my-divider my-2"></v-divider>
        <div variant="outlined" class="my-2">
            <Number
                label="FamilyList"
                v-model="familyListInput"
                :editMode="editMode"
                @keydown.enter="addFamilyListList"
            />
            <v-card v-if="value.familyList.length > 0" variant="outlined" class="pa-4 mt-2">
                <v-card-sub-title>
                    FamilyList List
                </v-card-sub-title>
                <li v-for="(name, index) in value.familyList" :key="index">
                    {{ name }}
                </li>
            </v-card>
            <v-row class="ma-0 pa-0 mt-2">
                <v-spacer></v-spacer>
                <v-btn @click="addFamilyListList">
                    FamilyList 추가
                </v-btn>
            </v-row>
            
            <LongDetailGrid
                label="FamilyList"
                offline
                v-model="value.familyList"
                :editMode="editMode"
                @change="change"
            />
        </div>
        <v-divider class="border-opacity-50 my-divider my-2"></v-divider>
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
    name: 'Memorial',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "memorials",
        familyListInput: null,
        value: {
            familyList: [],
        }
    }),
    created(){
    },
    computed:{
    },
    methods: {
        addFamilyListList() {
            if (this.familyListInput !== null && this.familyListInput !== '') {
                this.value.familyList.push(this.familyListInput);
                this.familyListInput = null; // null로 초기화
            }
        },
    },
}
</script>
