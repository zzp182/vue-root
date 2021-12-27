import h from './mysnbbdom/h.js'
import patch from './mysnbbdom/patch.js'

const myVode1 = h('section', {}, [
    h('li', {key:'A'}, 'A'),
    h('li', {key:'B'}, 'B'),
    h('li', {key:'C'}, 'C'),
    h('li', {key:'D'}, 'D'),
    h('li', {key:'E'}, 'E'),
])
// const myVode = h('h1', {}, '你好')
// const myVode1 = h('section', {}, '我是老文字')
// 得到盒子和按钮
const container = document.getElementById('container')
const btn = document.getElementById('btn');

console.log(container)
// 第一次上树
patch(container , myVode1);

// 新节点
const myVode2 = h('section', {}, [
    h('li', {key:'Q'}, 'Q'),
    h('li', {key:'A'}, 'A'),
    h('li', {key:'B'}, 'B'),
    h('li', {key:'C'}, 'C'),
    h('li', {key:'D'}, 'D'),
    h('li', {key:'E'}, 'E'),
   
       
])
// const myVode2 = h('section', {}, '新vnode')

btn.onclick = function() {
    patch(myVode1, myVode2)
}