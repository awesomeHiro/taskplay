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
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
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
