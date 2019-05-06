require('less/note.less')
let toast = require('./toast.js').toast;


function Note(opts) {
  this.createNote(opts);
  this.bindEvent();
}

Note.prototype = {
  createNote(opts) {
    let tpl = `
  <div class="note">
      <div class="created-date">2018年01月08日<span class="close"><svg class="icon" aria-hidden="true">
            <use xlink:href="#i-close"></use>
          </svg></span></div>
      <div class="note-content">
        
      </div>
      <div class="stars">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#i-star"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#i-star"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#i-star"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#i-star"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#i-star"></use>
        </svg>
      </div>
      <div class="complete">已完成</div>
    </div>
  `
    this.$note = $(tpl);
    this.$note.find('.note-content').text(opts.content)
    $('#content').append(this.$note);
  },
  bindEvent() {
    let $note = this.$note
    let $close = $note.find('.close')
    $close.on('click', () => {
      $note.remove()
      toast('删除成功', 1000)
    })
  }
}

module.exports.Note = Note;

