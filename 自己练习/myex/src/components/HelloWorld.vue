<template>
  <div class="hello">
    <a-range-picker
      :placeholder="['Start month', 'End month']"
      format="YYYY-MM"
      :value="value"
      :mode="mode2"
      @panelChange="handlePanelChange2"
      @change="handleChange"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      mode2: ['month', 'month'],
      value: [],
    }
  },
  methods: {
    handleChange(value) {
        this.value = value;
    },
    handlePanelChange2(value, mode) {
      this.value = value;
      this.mode2 = [
        mode[0] === 'date' ? 'month' : mode[0],
        mode[1] === 'date' ? 'month' : mode[1],
      ];
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
