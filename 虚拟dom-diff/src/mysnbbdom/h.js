import vnode from "./vnode";
//形态1：h('div', {}, '文字')
//形态2：h('div', {}, [])
//形态3：h('div', {}, {})
export default function(sel, data, c) {
    //检查参数的个数
    if( arguments.length !== 3)
        throw new Error('h函数必须传入三个参数')
    if(typeof c == 'string' || typeof c == 'number'){
        //判断形态1
        return vnode(sel, data, undefined, c, undefined)
    }else if(Array.isArray(c)){
        //判断形态2
        let children = []
        for(let i= 0;i<c.length;i++){
            if(!(typeof c[i] == 'object' && c[i].hasOwnProperty('sel'))){
                throw new Error('传入的数组参数中有项不是h函数')
            }else{
                children.push(c[i]); 
            }
        }
        //循环结束，证明children收集完毕,可以返回虚拟节点了 
        return vnode(sel,data,children,undefined,undefined)
    }else if(typeof c == 'object' && c.hasOwnProperty('sel')){
        //判断形态3
        let children = [c]
        return vnode(sel,data,children,undefined,undefined)
    }else{
        throw new Error('传入的参数类型不对')
    }
}