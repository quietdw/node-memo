require('less/index.less')
var toast = require('../mod/toast.js').toast
var eventBus = require('../mod/eventBus.js')
var Note = require('../mod/note.js').Note
var PopUp = require('../mod/pop-up.js').PopUp
var Waterfall = require('../libs/waterfall.js').waterfall

console.log('------')

new PopUp()

$('#addNote').find('.add').on('click',()=>{
    $('#pop-up').addClass('active')
})

eventBus.on('closePopUp',()=>{
    $('#pop-up').removeClass('active')
    eventBus.emit('closed')
})
eventBus.on('submit',(data)=>{
   new Note(data)
   Waterfall('#content')
})