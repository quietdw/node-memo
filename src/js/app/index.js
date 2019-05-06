require('less/index.less')
var toast = require('../mod/toast.js').toast
var eventBus = require('../mod/eventBus.js')
var Note = require('../mod/note.js').Note
var PopUp = require('../mod/pop-up.js').PopUp

console.log('------')

new PopUp()

$('#addNote').find('.add').on('click',()=>{
    $('#pop-up').addClass('active')
})

eventBus.on('closePopUp',()=>{
    $('#pop-up').removeClass('active')
})