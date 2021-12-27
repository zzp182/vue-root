import createElement from "./createElement";
import updateChildren from "./updateChildren";

export default function patchVnode(oldVnode, newVnode){
    // 判断新旧vnode是否是同一个对象
    if(newVnode === oldVnode) return;
    // 判断新vnode有没有text属性
    if(newVnode.text != undefined && newVnode.children == undefined || newVnode.children.length == 0){
        console.log('新vnode有text属性')
        if(newVnode.text != oldVnode.text){
            oldVnode.elm.innerText = newVnode.text
        }
    }else{
        console.log('新vnode没有text属性')
        // 判断老的有没有child,新的有child
        if(oldVnode.children != undefined && oldVnode.children.length > 0){
            // 老的有children ,新的也有children，此时就是最复杂的情况，新老都有children
            updateChildren(oldVnode.elm, oldVnode.children, newVnode.children)
        }else{
            // 老的没有children,新的有children 
            oldVnode.elm.innerHTML = ''
            for(let i = 0; i < newVnode.children.length; i++){
                let dom = createElement(newVnode.children[i])
                oldVnode.elm.appendChild(dom)
            }
        }
    }
}