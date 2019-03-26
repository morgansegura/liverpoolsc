// External Libs
import SmoothScroll from 'smooth-scroll'

export const toggleMobileNav = () => {
  const wrapper = document.getElementsByTagName('body')[0]

  // toggle open/closed calsses for transition effects
  const superToggle = (element, class0, class1) => {
    element.classList.toggle(class0)
    element.classList.toggle(class1)
  }
  superToggle(wrapper, 'mobile-nav--is-open', 'mobile-nav--is-closed')
}

export const overlayClose = overlay => {
  const wrapper = document.getElementsByTagName('body')[0]

  overlay.onclick = () => {
    wrapper.classList.add('mobile-nav--is-closed')
    wrapper.classList.remove('mobile-nav--is-open')
  }

  document.onkeydown = function(evt) {
    evt = evt || window.event
    var isEscape = false
    if ('key' in evt) {
      isEscape = evt.key === 'Escape' || evt.key === 'Esc'
    } else {
      isEscape = evt.keyCode === 27
    }
    if (isEscape) {
      wrapper.classList.add('mobile-nav--is-closed')
      wrapper.classList.remove('mobile-nav--is-open')
    }
  }

  // console.log('click overlay')
}

export const scrollHeader = () => {
  const header = document.getElementById('headerMain')
  window.onscroll = e => {
    scrollFunction()
    function scrollFunction() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        header.classList.add('fill')
        header.classList.remove('unfill')
      } else {
        header.classList.remove('fill')
        header.classList.add('unfill')
      }
    }
  }
}

export const moneyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

export const smoothScroll = () => {
  try {
    const scroll = new SmoothScroll('a[href*="#"]', {
      ignore: '[data-scroll-ignore]',
      header: null,
      topOnEmptyHash: true,

      // Speed & Duration
      speed: 500,
      speedAsDuration: false,
      durationMax: null,
      durationMin: null,
      clip: true,

      easing: 'easeInOutCubic',
      customEasing: function(time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time
      },
      updateURL: false, // Update the URL on scroll
      popstate: false,

      // Custom Events
      emitEvents: true, // Emit custom events
    })
    return scroll
  } catch (oError) {
    console.log(oError)
  }
}
