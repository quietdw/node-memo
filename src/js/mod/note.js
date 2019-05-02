require('less/note.less')
let $ = require('jquery');
let Toast = require('./toast.js').Toast;
let Event = require('mod/eventBus.js');

function Note(opts) {
  this.createNote();
  this.bindEvent();
}

Note.prototype = {
  defaultOpts: {
    id: ''   //Note的 id
  },
  createNote() {
    let tpl = `
  <div class="note">
      <div class="created-date">2018年01月08日<span class="close"><svg class="icon" aria-hidden="true">
            <use xlink:href="#i-close"></use>
          </svg></span></div>
      <div class="note-content">
        Don't forget the paln for a trip
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
    $('#content').append(this.$note);
  },
  bindEvent() {
    let $note = this.$note
    let $close = $note.find('.close')
    $close.on('click', () => {
      $note.remove()
      Toast('删除成功')
    })
  }
}

module.exports.Note = Note;

