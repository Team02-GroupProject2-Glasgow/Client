<template>
  <div>
    <h2><i class="fas fa-trophy"></i> Tebak Kata Game <i class="fas fa-trophy"></i></h2>
    <h6>Please enter your name :</h6>
    <div class="mb-3">
      <input v-model="name" @keyup="$emit('update', name)" type="text" class="form-control" id="name" required>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style>

</style>
