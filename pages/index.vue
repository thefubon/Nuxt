<template>
  <div class="flex justify-center items-center p-10">
    <Button class="bg-blue-700 hover:bg-blue-500 border-0 text-white hover:text-white w-auto h-auto px-10 py-4 text-lg focus:ring-0" @click="modal1 = true">
      Display dialog box
      <Icon type="md-cart" size="20" />
    </Button>
    <Modal
        v-model="modal1"
        :closable="true"
        :cancel-text="'Закрыть'"
        :footer-hide="false"
        :styles="{/*background: '#ffcc00', padding: '30px'*/}"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel"
        class-name="vertical-center-modal">
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
        methods: {
            ok () {
                this.$Message.info('Нажал ok');
            },
            cancel () {
                this.$Message.info('Нажал отмену');
            }
        }
    }
</script>

<style>
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ivu-modal{
    top: 0;
  }
  .ivu-btn-text {
    @apply focus:ring-0;
  }
  .ivu-btn-primary {
    @apply bg-blue-700 hover:bg-blue-500 border-0 text-white hover:text-white focus:ring-0;
  }
</style>