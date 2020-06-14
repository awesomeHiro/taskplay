<template>
  <div>
    <codemirror
      ref="cmEditor"
      :value="code"
      :options="cmOptions"
      @ready="onCmReady"
      @focus="onCmFocus"
      @input="onCmCodeChange"
    />
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/darcula.css'

export default {
  components: {
    codemirror,
  },
  data() {
    return {
      code: 'const a = 10',
      cmOptions: {
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'darcula',
        lineNumbers: true,
        line: true,
        // more CodeMirror options...
      },
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    },
  },
  mounted() {
    console.log('the current CodeMirror instance object:', this.codemirror)
    // you can use this.codemirror to do something...
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focused!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    },
  },
}
</script>
