<template>
     <div>
      <div class="fixed-top" style="z-index: 2000 !important;">
        <div class="bg-white">
          <nav class="navbar navbar-expand-lg navbar-light container  d-flex flex-column">
            <div class="container-fluid position-relative">
              <!-- 多加一個div -->
              <div class="d-flex align-items-center">
                <a class="navbar-brand" href="#">
                  <img src="../assets/images/logo.png" style="height: 35px;" class="logo" alt="">
                </a>
                <div class="position-absolute end-0 ">
                  <button type="button" class="btn border-0 d-lg-none" style="font-size: 14px;">
                    登入
                  </button>

                  <button type="button"  class="btn border-0 d-lg-none btn-lightBrown badge rounded-pill"  style="font-size: 14px;">
                    註冊
                  </button>

                  <button type="button" class="btn border-0 d-lg-none p-0 ps-2" data-bs-toggle="modal" data-bs-target="#searchModal">
                    <img src="../assets/images/icon-search mobile.png" style="height: 25px;" alt="">
                  </button>
                  <button class="navbar-toggler border-0" type="button" data-bs-toggle="modal" data-bs-target="#navbarTogglerModal">
                    <!-- navbar-toggler-icon -->
                    <span class="navbar-toggler-icon" style="background-image: url(../assets/images/icon\ -menu\ mobile.png); "></span>
                  </button>
                </div>
              </div>

              <!-- 菜單Modal -->
              <div class="modal fade" id="navbarTogglerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog mx-3">
                  <!-- 改變modal弧度 -->
                  <div class="modal-content" style="border-radius: 20px;">
                    <!-- border-0 -->
                    <div class="modal-header border-0 p-0">
                      <button type="button" class="ms-auto border-0 bg-transparent p-3" data-bs-dismiss="modal" aria-label="Close">
                        <img src="../assets/images/icon-close mobile.png" alt="">
                      </button>
                    </div>
                    <div class="modal-body p-0 mx-4">
                      <ul class="list-unstyled">
                        <li class="text-center border-bottom pb-3"><a href="#" class="menuLink">甜點食譜</a></li>
                        <li class="text-center border-bottom p-3"><a href="#" class="menuLink">材料購買</a></li>
                        <li class="text-center border-bottom p-3"><a href="#" class="menuLink">優惠特報</a></li>
                        <li class="text-center pt-3"><a href="#" class="menuLink">會員專區</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 搜尋Modal -->
              <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog mx-3 ">
                  <!-- 改變modal弧度 -->
                  <div class="modal-content" style="border-radius: 20px;">
                    <!-- border-0 -->
                    <div class="modal-header border-0 p-0">
                      <button type="button" class="ms-auto border-0 bg-transparent p-3" data-bs-dismiss="modal" aria-label="Close">
                        <img src="../assets/images/icon-close mobile.png" alt="">
                      </button>
                    </div>
                    <div class="modal-body p-0 mx-4">
                      <ul class="list-unstyled">
                        <li class="text-center border-bottom pb-3 d-flex flex-column">
                          <!-- menuLink -->
                          <label for="category" class="form-label me-auto ms-2" style="font-size: 14px; color: #C0AB8E; ">種類</label>
                          <select name="" id="category"  class="form-select border-0">
                            <option value="全部">全部</option>
                          </select>
                        </li>
                        <li class="text-center border-bottom pb-3 d-flex flex-column">
                          <!-- menuLink -->
                          <label for="category" class="form-label me-auto ms-2 mt-2" style="font-size: 14px; color: #C0AB8E; ">成本</label>
                          <select name="" id="category"  class="form-select border-0">
                            <option value="全部">全部</option>
                          </select>
                        </li>
                        <li class="text-center border-bottom pb-3 d-flex flex-column">
                          <!-- menuLink -->
                          <label for="category" class="form-label me-auto ms-2 mt-2" style="font-size: 14px; color: #C0AB8E; ">評價</label>
                          <select name="" id="category"  class="form-select border-0">
                            <option value="全部">全部</option>
                          </select>
                        </li>
                      </ul>
                      <div class="bg-white border-0 position-relative">
                        <input type="search" class="form-control rounded-pill my-4 py-2" placeholder="請輸入甜點名稱" style="border-color: #C0AB8E;">
                        <button type="submit" class="border-0 bg-transparent position-absolute top-50 translate-middle start-100 pe-5">
                          <img src="../assets/images/icon-search.png" style="height: 25px;" alt="">
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 禁止顯示 新增modal取代手機板 -->
              <div class="collapse navbar-collapse" id="navbarNav">
                <!-- mx-auto ul 置中 -->
                <ul class="navbar-nav mx-auto">
                  <li class="nav-item me-3">
                    <a class="nav-link brown " aria-current="page" href="#">甜點食譜</a>
                  </li>
                  <li class="nav-item mx-3">
                    <a class="nav-link brown" href="#">材料購買</a>
                  </li>
                  <li class="nav-item mx-3">
                    <a class="nav-link brown" href="#">優惠特報</a>
                  </li>
                  <li class="nav-item ms-3">
                    <a class="nav-link brown" href="#">會員專區</a>
                  </li>
                </ul>
                <ul class="navbar-nav ms-auto d-flex align-items-center">
                  <li class="nav-item me-3">
                    <a class="nav-link brown" href="#">登入</a>
                  </li>
                  <li class="nav-item ms-3">
                    <button type="button" class="btn brown btn btn-lightBrown badge rounded-pill fs-6 px-4 btn-pd" data-bs-toggle="tooltip" data-bs-placement="bottom" title="立即註冊抽獎去！"
                    >註冊</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
        <RouterView></RouterView>
    </div>
</template>
<script>
// RouterLink
import { RouterView } from 'vue-router'
import Tooltip from 'bootstrap/js/dist/tooltip'

export default {
  data () {
    return {
    }
  },
  components: {
    // RouterLink,
    RouterView
  },
  mounted () {
    // // 選取所有元素包含data-bs-toggle="tooltip"
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl)
    })
  }
}
</script>
<style>
  .nav-link{
    font-size: 20px;
    font-weight: bold;
  }
  .tooltip-inner {
    background-color: #F5AE4C;
    margin-top: 10px;
    color: #fff ;
    font-size: 18px;
    padding: 15px;
  }
 /* 工具提示窗向下 */
 .tooltip.bs-tooltip-bottom .tooltip-arrow::before {
          margin: -9px 0px;
          border-bottom-color: #F5AE4C;
        }

</style>
