var getData = require('./getData.js')
require('./styles.css')

var data = getData()
console.log(data.firstname + ' ' + data.lastname)
