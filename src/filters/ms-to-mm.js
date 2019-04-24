const msTomm = {}

function convertMsToMm (ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000 / 1000).toFixed(0))
  return `${min}:${sec}`
}

msTomm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    return convertMsToMm(val)
  })
}

export default msTomm
