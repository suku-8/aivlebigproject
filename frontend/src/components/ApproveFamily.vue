<template>

    <v-card outlined>
        <v-card-title>
            ApproveFamily
        </v-card-title>

        <v-card-text>
            <String label="MemorialId" v-model="value.memorialId" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="approveFamily"
            >
                ApproveFamily
            </v-btn>
            
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>

export default {
    name: 'ApproveFamilyCommand',
    components:{
    },
    props: {},
    data: () => ({
        editMode: true,
        value: {},
    }),
    created() {
        this.value.memorialId = '';
    },
    watch: {
    },
    methods: {
        approveFamily() {
            this.$emit('approveFamily', this.value);
        },
        close() {
            this.$emit('closeDialog');
        },
        change() {
            this.$emit("update:modelValue", this.value);
        },
    }
}
</script>

