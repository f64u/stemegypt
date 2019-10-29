const anchorate = require("anchorate").anchorate

exports.onRouteUpdate = () => {
  anchorate({
    scroller: function(element) {
      if (!element) return false
      element.scrollIntoView({ behavior: "smooth" })
      return true
    },
  })
}
