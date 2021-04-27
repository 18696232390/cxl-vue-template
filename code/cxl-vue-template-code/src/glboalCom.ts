import { App } from 'vue';

// import JsonExcel from 'vue-json-excel';
//glboalCom.ts
// import { Pano } from 'vuejs-vr';

interface GlobalCom{
    components:string[]
}
// Pano,JsonExcel
const comps = [];//全局的组件信息
export default{
    install(app:App<Element>,options:GlobalCom){
        console.log(app);//当前的app实例
        console.log(options);//传入的自定义信息
        options.components.forEach((comp:string) => {
            const tempCom = comps.find(item => item.name === comp);//通过组件名找到对应的组件
            tempCom && app.component(tempCom.name,tempCom);//如果存在，注册当前组件
        });
    }
}