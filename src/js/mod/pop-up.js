require('less/pop-up.less')

var toast = require('./toast.js').toast
var eventBus = require('./eventBus.js')
var Note = require('./note.js').Note


function PopUp() {
    this.message ={
        content:'',
        level:''
    }
    this.createNote();
    this.bindEvent();
}

PopUp.prototype = {
    defaultOpts: {
        content:'',
        level:'1' // 1到5
    },
    createNote() {
        let tpl = `
    <div class="create-box">
      <h2>添加新便签<svg class="icon close" aria-hidden="true">
          <use xlink:href="#i-close"></use>
        </svg></h2>
      <textarea class="content" name="" id="" placeholder="请输入内容"></textarea>
      <div class="stars">重要星级:
        <div class="stars-innerWapper">
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
      </div>
      <button class="submit">添加</button>
    </div>
        `
        this.$popUp = $(tpl);
        $('#pop-up').append(this.$popUp);
    },
    bindEvent() {

        eventBus.on('closed',()=>{
            console.log(123)
            this.$popUp.find('.content').val('')
            $('.stars-innerWapper svg').css('fill','#d8d8d8')
        })

        this.$popUp.find('.stars-innerWapper').on('click','svg',(e)=>{
            this.message.level = $(e.currentTarget).index()
            let index = this.message.level
            let scale = `:nth-child(-n+${index+1})`
            $('.stars-innerWapper svg').css('fill','#d8d8d8')
            $('.stars-innerWapper svg'+scale).css('fill','#00d3aa')
        })

        this.$popUp.find('.close').on('click',()=>{
            eventBus.emit('closePopUp')
        })

        this.$popUp.find('.submit').on('click',()=>{
            this.message.content = $('.content').val()
            eventBus.emit('submit',JSON.parse(JSON.stringify(this.message)))
            eventBus.emit('closePopUp')
            this.message = {
                content:'',
                level:''
            }
        })
    }
}

module.exports.PopUp = PopUp;

