// 真正创建节点,将vnode创建位dom，是孤儿节点，不进行插入 
export default function createElement(vnode) {
    console.log('目的是把虚拟节点',vnode,'真正变为DOM')

    let domNode = document.createElement(vnode.sel)

    if(vnode.text !== '' && (vnode.children == undefined || vnode.children.length == 0 ) ){
        // 它内部是文字
        domNode.innerText = vnode.text;
        // 将孤儿节点上树，让标杆节点的父元素调用insertbefore方法，将新的孤儿节点插入到标杆节点之前
        // pivot.parentNode.insertBefore(domNode,pivot)
    } else if(Array.isArray(vnode.children) && vnode.children.length >0){
      // 它内部是子节点，就要递归创建节点
      for(let i=0;i<vnode.children.length;i++){
          // 得到当前的children
          let ch = vnode.children[i];
          // 创建出它的DOM，一旦调用createElement意味着：创建出DOM了，并且它的属性指向了创建出的DOM，但是还没有上树，是一个孤儿节点
          let chDOM = createElement(ch)
          // 上树
          domNode.appendChild(chDOM)
      }
    }
    // 补充elm属性
    vnode.elm = domNode;

    return vnode.elm
}