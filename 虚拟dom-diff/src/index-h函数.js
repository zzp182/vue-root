import h from './mysnbbdom/h.js'

var myVode = h('div', {}, [
    h('p',{},'哈哈'),
    h('p',{},'嘻嘻'),
    h('p',{},
        h('span',{},'sadsad')
    ),
])
console.log(myVode)