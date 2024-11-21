document.addEventListener('DOMContentLoaded', function () {
    // Боковое меню
    const burgerMenu = document.querySelector('.header__burger__menu')
    const sidebar = document.querySelector('.sidebar')
    let isSidebarOpen = false
  
    function toggleSidebar() {
      sidebar.style.left = isSidebarOpen ? '-100%' : '0'
      isSidebarOpen = !isSidebarOpen
    }
  
    // Открытие и закрытие бокового меню
    if (burgerMenu) {
      burgerMenu.addEventListener('click', function (event) {
        event.stopPropagation()
        toggleSidebar()
      })
    }
  
    document.addEventListener('click', function (event) {
      if (
        isSidebarOpen &&
        !sidebar.contains(event.target) &&
        event.target !== burgerMenu
      ) {
        toggleSidebar()
      }
    })
  
    // Модальные окна
    const modalOverlayFeedback = document.getElementById('modalOverlayFeedback')
    const modalOverlayCall = document.getElementById('modalOverlayCall')
    const closeModalBtnFeedback = document.getElementById('closeModalBtnFeedback')
    const closeModalBtnCall = document.getElementById('closeModalBtnCall')
    const openModalBtnFeedback = document.querySelector('.open-modal-btn')
    const openModalBtnCall = document.querySelector('.header__container_repair')
    const openModalBtnStatus = document.querySelector('.header__container_status')
  
    // Функция для открытия модального окна
    function openModal(modal) {
      if (modal) {
        modal.classList.add('show')
      }
    }
  
    // Функция для закрытия модального окна
    function closeModal(modal) {
      if (modal) {
        modal.classList.remove('show')
      }
    }
  
    // Открытие модальных окон по клику на кнопки
    if (openModalBtnFeedback) {
      openModalBtnFeedback.addEventListener('click', function () {
        openModal(modalOverlayFeedback)
      })
    }
  
    if (openModalBtnCall) {
      openModalBtnCall.addEventListener('click', function () {
        openModal(modalOverlayFeedback)
      })
    }
  
    if (openModalBtnStatus) {
      openModalBtnStatus.addEventListener('click', function () {
        openModal(modalOverlayCall)
      })
    }
  
    // Закрытие модальных окон по клику на кнопку закрытия
    if (closeModalBtnFeedback) {
      closeModalBtnFeedback.addEventListener('click', function () {
        closeModal(modalOverlayCall)
      })
    }
  
    if (closeModalBtnCall) {
      closeModalBtnCall.addEventListener('click', function () {
        closeModal(modalOverlayCall)
      })
    }
  
    // Закрытие модальных окон по клику вне контента
    ;[modalOverlayFeedback, modalOverlayCall].forEach((modal) => {
      if (modal) {
        modal.addEventListener('click', function (event) {
          if (event.target === modal) {
            closeModal(modal)
          }
        })
      }
    })
  
    // Функция "Показать все/Скрыть"
    const toggleBtn = document.getElementById('toggleBtn')
    const hiddenSlides = document.querySelectorAll('.swiper-slide.hidden')
    let isExpanded = false
  
    if (toggleBtn && hiddenSlides.length > 0) {
      toggleBtn.addEventListener('click', function () {
        if (isExpanded) {
          hiddenSlides.forEach((slide) => slide.classList.add('hidden'))
          toggleBtn.innerHTML = `<img class="show_button" src="assets/expand.svg" alt="show_all"> Показать все`
        } else {
          hiddenSlides.forEach((slide) => slide.classList.remove('hidden'))
          toggleBtn.innerHTML = `<img class="collapse_button" src="assets/collapse.svg" alt="hide_all"> Скрыть`
        }
        isExpanded = !isExpanded
      })
    }
  })
  