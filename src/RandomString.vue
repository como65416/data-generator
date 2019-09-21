<template>
  <div style="height:100%;">
    <h3>Random String Generator</h3>

    <el-form label-width="140px">
      <el-form-item label="String Length">
        <el-input v-model="stringLength"></el-input>
      </el-form-item>
      <el-form-item label="String Amount">
        <el-input v-model="stringAmount"></el-input>
      </el-form-item>
      <el-form-item label="Character">
        <el-checkbox-group v-model="optionList">
          <el-checkbox label="A-Z (Uppercase)"></el-checkbox>
          <el-checkbox label="a-z (Lowercase)"></el-checkbox>
          <el-checkbox label="0-9 (number)"></el-checkbox>
          <el-checkbox label="special character (+, /, =)"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button @click="generator">Generate</el-button>
      </el-form-item>
    </el-form>
    <el-input type="textarea" v-model="output" rows="10"></el-input>
  </div>
</template>

<style scoped>
  .el-input {
    width: 180px;
  }
</style>

<script>
export default {
  data () {
    return {
      stringLength: 32,
      stringAmount: 5,
      optionList: ['A-Z (Uppercase)', 'a-z (Lowercase)', '0-9 (number)'],
      output: ''
    };
  },
  mounted() {
  },
  methods: {
    generator: function () {
      this.output = '';
      for (let i = 0; i < this.stringAmount; i++) {
        this.output += this.createRamdomString(this.stringLength) + "\n";
      }
    },
    createRamdomString: function(length) {
       var characters = '';
       if (this.optionList.includes('A-Z (Uppercase)')) {
         characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       }
       if (this.optionList.includes('a-z (Lowercase)')) {
         characters += 'abcdefghijklmnopqrstuvwxyz';
       }
       if (this.optionList.includes('0-9 (number)')) {
         characters += '0123456789';
       }
       if (this.optionList.includes('special character (+, /, =)')) {
         characters += '+/=';
       }

       var charactersLength = characters.length;
       var text  = '';
       for (var i = 0; i < length; i++) {
          text += characters.charAt(Math.floor(Math.random() * charactersLength));
       }

       return text;
    }
  }
}
</script>