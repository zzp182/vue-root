import h from './mysnbbdom/h.js'
import patch from './mysnbbdom/patch.js'


const myVode = h('h1', {}, '你好')
const container = document.getElementById('container')
patch(container , myVode);
