var toast = require('../mod/toast.js').toast
var eventBus = require('../mod/eventBus.js')

console.log('------')
console.log(toast)
console.log(eventBus)

window.eventBus = eventBus

toast('hello')