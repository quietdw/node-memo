{
  let eventBus = (function () {
    let events = {};
    function on(event, hander) {
      events[event] = events[event] || []
      events[event].push(hander)
    };
    function emit(event, data) {
      if (events[event]) {
        events[event].forEach(hander => {
          hander.call(undefined, data)
        });
      }
    }

    return {
      on: on, emit: emit
    }
  })()

  module.exports = eventBus
}