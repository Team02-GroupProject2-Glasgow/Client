<template>
  <div class="mt-3">
    <button type="button" class="btn btn-info w-25 text-white" data-bs-toggle="modal" data-bs-target="#modalRules">
      Rules / Peraturan
    </button>
    <!-- Modal -->
    <div class="modal fade" id="modalRules" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Rules / Peraturan Permainan</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>1. Maksimal player yang dapat join adalah 4 player, jika penuh mohon menunggu</p>
            <p>2. Setiap player akan bermain untuk menebak kata dengan clue clue yang sudah diberikan</p>
            <p>3. Setelah salah satu player ada yang menyelesaikan semua tebak kata, game akan berakhir</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rules'
}
</script>

<style>

</style>
