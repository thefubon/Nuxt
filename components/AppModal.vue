<template>
    <div>
        <Button class="bg-blue-600 hover:bg-blue-500 text-white rounded py-3 px-6" @click="modal1 = true">Display dialog box</Button>
        <Modal
            v-model="modal1"
            title="Common Modal dialog box title">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
    }
</script>