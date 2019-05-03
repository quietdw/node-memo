require('less/toast.less')

class Toast {
  constructor(message, duration) {
    this.message = message
    this.duration = duration
    this.createToast()
    this.showToast()
  }



  createToast() {
    let template = `<div class="toast">${this.message}</div>`
    this.$toast = $(template)
    $('body').append(this.$toast)
  }

  showToast() {
    this.$toast.fadeIn(300, () => {
      setTimeout(() => {
        this.$toast.fadeOut(300, () => {
          this.$toast.remove()
        })
      }, this.duration);
    })
  }
}

function toast(message, duration) {
  return new Toast(message, duration)
}

module.exports.toast = toast