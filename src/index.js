// background 会把 background-color 覆盖
// 需要先加载background 再加上 background-color ，才不会覆盖
import './y.less'
import './style.css'
import './x.scss'
import './z.styl'
import png from './1.png'
console.log(png)

console.log('xyxy')

const div = document.getElementById('app')
// div.innerHTML = `<img src="./1.png"> `
div.innerHTML = `<img src="${png}">`

const btn = document.createElement('button')
btn.innerText = '懒加载'
btn.onclick = () => {
    // 懒加载原理：用 import 函数的形式 导入模块，返回promise异步对象，
    // 如果加载成功，then中返回 module 模块对象
    const promise = import('./lazy')   //返回的是一个promise异步对象
    promise.then((module) =>{
         console.log(module)      // 如果加载成功返回的是一个模块
        const fn = module.default
        fn()
    }, () => {})
}
div.append(btn)
