<template>
  <codemirror
    ref="myCm"
    :value="code"
    :options="cmOptions"
    @ready="onCmReady"
    @focus="onCmFocus"
    @input="onCmCodeChange"
  />
</template>

<script>
import { codemirror } from 'vue-codemirror'

import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/lib/codemirror.css'

// require more codemirror resource...

// component
export default {
  components: {
    codemirror,
  },

  data() {
    return {
      code: `Task1
Task2
  Task3
  Task4
Task5
      `,
      cmOptions: {
        // codemirror options
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      },
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    },
  },
  mounted() {
    console.log('this is current codemirror object', this.codemirror)
    // you can use this.codemirror to do something...
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    },
  },
}
</script>
