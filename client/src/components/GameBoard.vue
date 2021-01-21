<template>
  <div class="position-relative bg-1">
    <div class="leader-board position-absolute text-white">
      <span class="fs-4 fw-bold">LEADER BOARD</span>
      <div class="bg-3 p-1 fs-5 rounded-pill mt-2">
        <span class="mx-2">Abby</span>
        <span class="mx-2 text-warning">4/5</span>
      </div>
      <div class="bg-3 p-1 fs-5 rounded-pill mt-2">
        <span class="mx-2">Anthony</span>
        <span class="mx-2 text-warning">3/5</span>
      </div>
      <div class="bg-3 p-1 fs-5 rounded-pill mt-2">
        <span class="mx-2">Arif</span>
        <span class="mx-2 text-warning">2/5</span>
      </div>
      <div class="bg-3 p-1 fs-5 rounded-pill mt-2">
        <span class="mx-2">Pajar</span>
        <span class="mx-2 text-warning">2/5</span>
      </div>
    </div>
    <div class="w-50 mx-auto text-white fs-5">
      <div class="mb-3 rounded overflow-hidden">
        <div class="d-flex justify-content-start">
          <div class="col-2 bg-warning p-2">1</div>
          <div class="col-10 bg-2 p-2 fw-bold">Reptil</div>
        </div>
      </div>
      <div class="mb-3 rounded overflow-hidden">
        <div class="d-flex justify-content-start">
          <div class="col-2 bg-warning p-2">2</div>
          <div class="col-10 bg-2 p-2 fw-bold">Ekor</div>
        </div>
      </div>
      <div class="mb-3 rounded overflow-hidden">
        <div class="d-flex justify-content-start">
          <div class="col-2 bg-warning p-2">3</div>
          <div class="col-10 bg-2 p-2 fw-bold">Putus</div>
        </div>
      </div>
      <div class="mb-3 rounded overflow-hidden">
        <div class="d-flex justify-content-start">
          <div class="col-2 bg-warning p-2">4</div>
          <div class="col-10 bg-2 p-2 fw-bold">Nyamuk</div>
        </div>
      </div>
      <div class="mb-3 rounded overflow-hidden">
        <div class="d-flex justify-content-start">
          <div class="col-2 bg-warning p-2">5</div>
          <div class="col-10 bg-2 p-2 fw-bold">Dinding</div>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between w-50 mt-5 mx-auto">
      <div class="col-2 mx-auto bg-2 p-3 rounded">
        <input type="text" class="form-control text-center fs-4 fw-bold text-uppercase" maxlength="1">
      </div>
      <div class="col-2 mx-auto bg-2 p-3 rounded">
        <input type="text" class="form-control text-center fs-4 fw-bold text-uppercase" maxlength="1">
      </div>
      <div class="col-2 mx-auto bg-2 p-3 rounded">
        <input type="text" class="form-control text-center fs-4 fw-bold text-uppercase" maxlength="1">
      </div>
      <div class="col-2 mx-auto bg-2 p-3 rounded">
        <input type="text" class="form-control text-center fs-4 fw-bold text-uppercase" maxlength="1">
      </div>
      <div class="col-2 mx-auto bg-2 p-3 rounded">
        <input type="text" class="form-control text-center fs-4 fw-bold text-uppercase" maxlength="1">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameBoard'
}
</script>

<style>
.leader-board {
  left: 2rem;
}
.bg-1 {
  background-color: #11698e;
}
.bg-2 {
  background-color: #19456b;
}
.bg-3 {
  background-color: #eb596e;
}
</style>
