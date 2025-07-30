<template>
    <div>
        <Number
            label="VideoId"
            v-model="value.videoId"
            :editMode="editMode"
        />
        <String
            label="MemorialId"
            v-model="value.memorialId"
            :editMode="editMode"
        />
        <String
            label="VideoTitle"
            v-model="value.videoTitle"
            :editMode="editMode"
        />
        <String
            label="VideoUrl"
            v-model="value.videoUrl"
            :editMode="editMode"
        />
        <String
            label="Keywords"
            v-model="value.keywords"
            :editMode="editMode"
        />
        <String
            label="Status"
            v-model="value.status"
            :editMode="editMode"
        />
        <Date
            label="CreatedAt"
            v-model="value.createdAt"
            :editMode="editMode"
        />
        <Date
            label="CompletedAt"
            v-model="value.completedAt"
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
    name: 'Video',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "videos",
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
