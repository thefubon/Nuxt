<template>
  <div class="flex justify-center items-center p-10">
    <button class="flex items-center space-x-1 rounded bg-blue-700 hover:bg-blue-500 border-0 text-white hover:text-white font-medium w-auto h-auto px-10 py-4 text-lg focus:ring-0" @click="modal1 = true">
      <span>Display dialog box</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    </button>
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