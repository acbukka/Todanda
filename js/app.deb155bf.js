(function(){"use strict";var A={4571:function(A,t,o){var e=o(9242),d=o(3396),i=o.p+"img/panda.7ebf0cf7.png";const g={class:"container"},n={class:"app"},s=(0,d._)("img",{class:"panda-img",src:i,alt:""},null,-1),r=(0,d._)("h1",{class:"app-title"},"Todanda",-1);function a(A,t,o,e,i,a){const B=(0,d.up)("todo-form"),c=(0,d.up)("todos-active"),C=(0,d.up)("todos-complited");return(0,d.wg)(),(0,d.iD)("div",g,[(0,d._)("div",n,[s,r,(0,d.Wm)(B,{onCreate:a.addTodo},null,8,["onCreate"]),(0,d.Wm)(c,{modelValue:i.todos.active,"onUpdate:modelValue":t[0]||(t[0]=A=>i.todos.active=A),todos:i.todos,onRemove:a.removeTodo,onDone:a.doneTodo,isActive:i.isActive},null,8,["modelValue","todos","onRemove","onDone","isActive"]),(0,d.Wm)(C,{todos:i.todos,onRemove:a.removeTodo,onRestore:a.restoreTodo,isActive:i.isActive},null,8,["todos","onRemove","onRestore","isActive"])])])}var B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAggAAAIACAYAAADnr5QOAAAT1UlEQVR4nO3dy20bS7cFYPYFQ5ABKwNroFg0cQZWGPLICkPKwBPF4oFuBjyAlEP/qPPfxqW5uqXmo1/k9wGGYUmHm2zyuJZ3VXVVm83m26qHr1+/9vmxVv/880/bl3tRV90u6u5fr3mMh4eHX83XXl5evpff39/f//3z1dXVv7/f3d393v5vHx8ff+4+5mfPyfurbhd15193HV8BFm37L5P7+/tfJQA0g3+XJhQ0ys8/Pz9/3/7a9p/Lz5cA8fT09PMUfxEB8/M/3hNYvhIKml8lFHz58uW1qqrX3UG+y3aA+CxMNMpjlxqlVqm5/RyA5RMQYMG6QsEhA/4+dh+/KywAyyUgwAJtB4O2UDCV7bBQnpvPFiyXgAAL0gSDMt+/zxTCFJqgYG0CLJOAAAvRBIPSxr++vn5dyvMuz7U85/gGMGt2McBClEF2DtMIhyjPu3QTyu6Ht7e3m+W9Arg8OgiwAGVwPZf36ZxeC5wzAQFmrFlrsBpoN8LYmtdgbQLMn4AAM1V2ASxprcG+ymuz0wHmS0CAGSrrDea8Q+FUymu0gBHmSUCAmbm0OfpmAWN8A5iUgAAzck7rDfYlJMC8CAgwE1rtrgHMSVXXda/jnh3NqW4XdY+rWx5vyfc4OKXmVMlj75XQdp378nlWt8ul1dVBgAk15ykIB/9VrkP5ZXcDTE9AgIk04eASdivsq1wT90mAaQkIMIHmXAXhoNs53wMClkBAgIkYAD9nZwNMR0CAkTVTC657P64VTENAgBGZWtifawXTEBBgZLe3t9rme3J/BBifgAAjKt0DWxr355rB+AQEGJHuweF0EWBcAgKMRPfgOOXauTcCjEdAgJHY1ng81xDGIyDACPzL93RcSxiHgAAjsPbgdFxLGIeAACOw9uB0XEsYx7pvu84Rmep2Ubdbc2MkTqtc04+urc+zul3U7U8HAQb28PDgVsEnZpoBhicgwMDcKvj0TDPA8AQEGJDpheE00wzAMAQEGEgZvEwvDMe1hWEJCDAg0wvDcW1hWAICABAEBAAgCAgwEAsUh+caw3AEBGCxykJFOxlgGGvXFU6vDFr39/dW2QOLpYMAAAQBAQby8vJiG97AXGMYjoAALNLV1ZU3DgYkIACL5DwGGFZV1/W3PhUckaluF3XbVVXlxMER1HV9s1vF51ndLur2p4MAAAQBAQAIAgIAEAQEACAICABAEBAAgCAgAABBQAAAgoAAAAQBAQAIAgIAEAQEACAICABAEBAAgLDue4ykIzLV7aJuOubxOf498XlWt4u6/ekgAABBQAAAgoAAAAQBAQAIAgIAEAQEACAICABAEBAAgCAgAABBQAAAgoAAAAQBAQAIAgIAEAQEACBUdV1/i6+2cESmul3UbVdV1WvrNzipuq5vpnh/21xg3f+NL/av22vsaeP9HaeuDgIAEAQEACAICABAEBAAgCAgAABBQAAAgoAAAAQBAQAIAgIAEAQEACAICABAEBAAgCAgAABBQAAAwrrvMZKOyFS3iyNf0zGPz/Hvif9/R6vryOYzrquDAAAEAQEACAICABAEBAAgCAgAQBAQAIAgIAAAQUAAAIKAAAAEAQEACAICABAEBAAgCAgAQBAQAIBQ1XXd67hOR2Sq20XddlVVvbZ+g5Oq6/pmive3jbrqdlliXR0EACAICABAEBAAgCAgAABBQAAAgoAAAAQBAQAIAgIAEAQEACAICABAEBAAgCAgAABBQAAAgoAAAIR132MkHZGpbhd10zGPz/Hvic+zul3U7U8HAQAIAgIAEAQEACAICABAEBAAgCAgAABBQAAAgoAAAAQBAQAIAgIAEAQEACAICABAEBAAgCAgAAChquv6W3y1hSMy1e2ibruqql5bv8FJ1XV9M8X720Zddbsssa4OAgAQBAQAIAgIAEAQEACAICAAAEFAAACCgAAABAEBAAgCAgAQBAQAIAgIAEAQEACAICAAAEFAAADCuu8xko7IVLeLuumYx+f498TnWd0u6vangwAABAEBAAgCAgAQBAQAIAgIAEAQEACAICAAAEFAAACCgAAABAEBAAgCAgAQBAQAIAgIAEAQEACAUNV1/S2+2sIRmep2UbddVVWvrd/gpOq6vpni/W2jrrpdllhXBwEACAICABAEBAAgCAgAQBAQAIAgIAAAQUAAAIKAAAAEAQEACAICABAEBAAgCAgAQBAQAIAgIAAAYd33GElHZKrbRd10zONz/Hvi86xuF3X700EAAIKAAAAEAQEACAICABAEBAAgCAgAQBAQAIAgIAAAQUAAAIKAAAAEAQEACAICABAEBAAgCAgAQKjquv4WX23hiEx1u6jbrqqq19ZvcFJ1Xd9M8f62UVfdLkusq4MAAAQBAQAIAgIAEAQEACAICABAEBAAgCAgAABBQAAAgoAAAAQBAQAIAgIAEAQEACAICABAEBAAgFBtNptexz0v8ahKmNKXL19e39/fvQcDurq6Wr29vcVxzzBHh46FU42/6/jKTLRdkPJCHx4efjV/fnl5+R4/BDMhHAyvXOMSxM79dbJcd3d3v5sn//j4+HPVMr4dM4gPaTYdhO3Hb4JACQD+kgXgXP348eN3CQ67Y+C2qToIkwaEtlDw/PysKwDAxSlTZn/+/LnZHRsvaoqhebH39/e6BADwf66vr/+dMithoUxPPD09/Zzq2ozaQWgeo/y5XIRyAYQDAPjb9vi42WxuDh2DZz/F0ChP9Pb21spuANjDoTt2FjHFYMsXABymjJ9VVb2OubV38BsllXUG5UUJBwBwvDKmlrF16Es56BRDeRHxRQDgJOq6/rCbcMwUwyAdhPKEhAMAGFYZa4e60dLJA0JpezTbNACAYZUxd4gph5NOMViICADTaFvAOIspBuEAAKZ1yrNJTrLN0XoDAJhW84/0MiZ/tnixj6qu615TDG1tijLtIBwAwPwcGxIOnmIo4cAxqwAwT8eO0QcFhBIOyopJaw4AYJ7KGH3M7oa9pxiacOBYZgCYv0MPe9orIJQCzUmM8QMAwCwdsh5h7ykG4QAAluWQDQW9A4JFiQCwTOUmSvuO4b3vg1CmFixKBIDlOWT87t1BuL291T0AgAXbp4vQKyDoHgDA8pWxvO3Gh2167WJwt0QAOB99djV82kEY4ghJAGA6fcb2TzsIugcAcH4+6yJ82EHQPQCA8/TZGP9hB6GsdrQ4EQDOT7k3wtvbW2cXYd21mrHcGEk4AIDz1IzxXTmgdYqhOZApvgEAnI0y1ncd5FRtNpuYYmhuq6yDAADnq5lmaOsitHYQVgfelhEAWI6PxvoICKYXAOBydE0zxBSD6QUAuAxliqFom2ZoPc1ROACA8/fReB9TDG0LFQCA89U29kdAAACIgPDw8GCBIgBckLaxPwICAICAAAAEAQEACHEfhNvbW/dAAIALUu6H8OfPn79OdtRBAABCVdf1Xx2Eqqpe46cAgLNW17UOAgDwsQgIzX2ZAYDL0Db2R0AAAIiAcHd39/virwoAXJC2sT8CAgCAgAAAhNjmWI58vL6+ttURAC7EZrO5+fr1618vVgcBAAjRQVi5WRIAXJTdmyStdBAAgDatAaHthgkAwPnpGvNbA8LuiU4AwHnqGvNb1yCsrEMAgIvQtv5g1dVBWH3QcgAAzsNHY/263PdgV9kLWW67+Pz8/D2+CQCcheYWy21ZoNpsNq1TDCUkmGYAgPNVphfawsHqoymG1SetBwBguT4b4z8MCG2nOwEAy/fZGN85xbAyzQAAZ+uj6YVVnzsp/vjx48OEAQAsS5+x/cMOwkoXAQDOzmfdg1XfsxjKMZDxRQBgcfqO6Z8GhJIwShfBjgYAWLYylpcx/bPuwapvB6E80Nvbmy4CACxY17kLbfY67lkXAQCWaZ/uwWrfgKCLAADLVMbwvuFgtW9AWH1w6hMAME+HbDbYOyCs7GoAgMUo9zzYZ2qhcVBAKIXcQAkA5q2M1U9PTz/3DQdFVdf1hzdKauw+eAkJX758eX1/f4+fBQCmVRYlHrN28KAOQsOiRQCYp2PH6IMDQtNRsB4BAOblFGPzUR2E5i6LdjYAwDyUMfmQRYm7jgoIq61OQnlCbqQEAOMr42/51fyD/dhwsDpFQGieSHM7ZrsbAGBcd3d3v5sbIZ0iHKxOFRAa5UmV7RRCAgCM45itjB85eJvjR5q5j+vr69cPfgwAOEJZjPjReoPyvUOdtIPQ2F68qJsAAKdVxtZTLUbsMkgHYVuTXtxUCQCOUxYiliOb+waD2XUQtjUvoCyesNMBAPZXxs4ynVDG0iG7BtvW8ZWBNassrU8AgM816wxWJ9q+2NfgHYQ2zfqE8qJ1FADgb03HYHudwZjhYDVVQGiUF91MPZQLYUEjAJeqjIFNKGimElYjdw22TRoQtpULUfZxCgsAXIpmN0L5VcbAYxYVnlq12Wx67WI45knvm366apXHeXh4+NX8+eXl5Xv53e4I5qa0B30ux+FaM0fN9Hm5w2Hz9B4fH3+uWsa4z8bIrjGxj2O6D7MMCKeqC1OytXd4x553D2M69nYBhzhm/B19F8OYpgom6qpbHl84GM/ue+LzrG6XJdadymzWIAAA8yEgAABBQAAAgoAAAAQBAQAIAgIAEAQEACAICABAEBAAgCAgAABBQAAAgoAAAIR138MnHKyhbhd1mdq+x+d+xOdZ3S6XVlcHAQAIAgIAEAQEACAICABAEBAAgCAgAABBQAAAgoAAAAQBAQAIAgIAEAQEACAICABAEBAAgCAgAABh3fcYSUdkqttF3eRI6HHtvic+z+p2Ubc/HQQAIAgIAEAQEACAICAAAEFAAACCgAAABAEBAAgCAgAQBAQAIAgIAEAQEACAICAAAEFAAACCgAAAhHXfYyQdkaluF3WZ2u574vOsbhd1+9NBAACCgAAABAEBAAgCAgAQBAQAIAgIAEAQEACAICAAAEFAAACCgAAABAEBAAgCAgAQBAQAIAgIAEBY9z1G0hGZ6nZRNzkSely774nPs7pd1O1PBwEACAICABAEBAAgCAgAQBAQAIAgIAAAQUAAAIKAAAAEAQEACAICABAEBAAgCAgAQBAQAIAgIAAAYd33GElHZKrbRV2mtvue+Dyr20Xd/nQQAIAgIAAAQUAAAIKAAAAEAQEACAICABAEBAAgCAgAQBAQAIAgIAAAQUAAAIKAAAAEAQEACAICABDWfY+RdESmul3UTY6EHtfue+LzrG4XdfvTQQAAgoAAAAQBAQAIAgIAEAQEACAICABAEBAAgCAgAABBQAAAgoAAAAQBAQAIAgIAEAQEACAICABAWPc9RtIRmep2UZep7b4nPs/qdlG3Px0EACAICABAEBAAgCAgAABBQAAAgoAAAAQBAQAIAgIAEAQEACAICABAEBAAgCAgAABBQAAAgoAAAIR132MkHZGpbhd1kyOhx7X7nvg8q9tF3f50EACAICAAAEFAAACCgAAABAEBAAgCAgAQBAQAIAgIAEAQEACAICAAAEFAAACCgAAABAEBAAgCAgAQ1n2PkXREprpd1GVqu++Jz7O6XdTtTwcBAAgCAgAQBAQAIAgIAEAQEACAICAAAEFAAACCgAAABAEBAAgCAgAQBAQAIAgIAEAQEACAICAAAGHd9xhJR2Sq20Xd5Ejoce2+Jz7P6nZRtz8dBAAgCAgAQBAQAIAgIAAAQUAAAIKAAAAEAQEACAICABAEBAAgCAgAQBAQAIAgIAAAQUAAAIKAAACEdd9jJB2RqW4XdZna7nvi86xuF3X700EAAIKAAAO5urpyaYHFEhAAgCAgwEDu7u5+u7bDco1hOAICABAEBAAgCAgwkMfHx5+u7bBcYxiOgAADcb+E4bnGMBwBAQAIAgIAEAQEYJHciAqGJSDAgH78+GGf/kDcAwGGJSDAgKyyH87T05NrCwMSEGBAVtkDS7Xue4ykIzLV7aJut1KnzJW/v793/gz7a6Zuut4Ln2d1u6jbnw4CDKj8z/nnz58b1/i0TN3A8AQEGJhphtMr1/SYfxkBnxMQYAS25J1GuY6uJYxDQIAR2JJ3GmUth2sJ4xAQYGClFW5L3umUa2l6AYYnIMBINpuNxYpHcg1hPAICjKD8i7fZ8shhyrWzOBHGIyDAiN7e3vwL+EC2i8K4BAQYSfMvX12E/TQ7F3QPYFxr1xvGVboIVVW9uuz9lJ0LdV3rHsDIdBBgAk557O+z2yoDwxAQYAK2PfZnWyNMQ0CAiWibf862RpiOgAATMgB2K1MLFibCdKq6rr/1qe6ITHW7qHt43fJY9/f3v56fn7/HD1+wEg6OmYbxeVa3i7r96SDAhJrbMNv6+P/KtbBGA6YnIMAMuIHSf5VwUK6FaQWYnoAAE2sGQ4sWBSWYEwEBZqAJCZe8aLF57boHMA8CAsxEc6BT6SRc0pqE8lrLa7ZjAeZFQIAZaQbI0mq/hLstltfYrDkQDmBenMUAM9MMlM1K/nPdAtlsZRQMYJ50EGCmmi2Q57guobwm4QDmTUCAGTu3dQnWG8ByCAgwc9vrEpYaFMpzLl0D6w1gOQQEWIDtAbUMskuadmiCga4BLIuAAAvUTDvMeadDeW7b0wnCASyLgAALVhb6NUFhDlMP5Tk0waBZhCgYwDIJCHAGymDcrFEYOyxsh4LyHBy0BOeh2mw2vY57dkSmul3UnVfd7RrlKOmXl5fv7+/v8XPHKKHg7u7uryOZ256fz5W6XdSdf103SoIzs/0XQhnA2wbxh4eHX83XSoAov5cQsd15KAFg+8o8Pj7++zjbf1mZPoAztVqt/gOA0RRyCkanxwAAAABJRU5ErkJggg==";const c=A=>((0,d.dD)("data-v-28449c8e"),A=A(),(0,d.Cn)(),A),C=c((()=>(0,d._)("h2",{class:"form-title"},"Add task:",-1))),l={class:"form-wrapper"},u=c((()=>(0,d._)("img",{class:"plus-img",src:B,alt:""},null,-1)));function Q(A,t,o,i,g,n){const s=(0,d.up)("my-input"),r=(0,d.up)("my-button");return(0,d.wg)(),(0,d.iD)("form",{class:"form",onSubmit:t[1]||(t[1]=(0,e.iM)((()=>{}),["prevent"]))},[C,(0,d._)("div",l,[(0,d.Wm)(s,{class:"add-input",modelValue:g.todo.title,"onUpdate:modelValue":t[0]||(t[0]=A=>g.todo.title=A),type:"text",placeholder:"New task"},null,8,["modelValue"]),(0,d.Wm)(r,{class:"form-btn",onClick:n.addTodo},{default:(0,d.w5)((()=>[u])),_:1},8,["onClick"])])],32)}var I={data(){return{todo:{title:""}}},methods:{addTodo(){this.todo.id=Date.now(),this.$emit("create",this.todo),this.todo={title:""}}}},E=o(89);const v=(0,E.Z)(I,[["render",Q],["__scopeId","data-v-28449c8e"]]);var m=v,p=o(7139);const f=A=>((0,d.dD)("data-v-b35557ca"),A=A(),(0,d.Cn)(),A),h={class:"todo-list"},w=f((()=>(0,d._)("h2",{class:"todo-list__title"},"Active:",-1))),D={class:"todo-title"};function b(A,t,o,e,i,g){const n=(0,d.up)("todo-item");return(0,d.wg)(),(0,d.iD)("div",h,[w,(0,d._)("ul",null,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(o.todos.active,(t=>((0,d.wg)(),(0,d.j4)(n,{class:"todo-item",todo:t,key:t.id,onRemove:o=>A.$emit("remove",t),onDone:o=>A.$emit("done",t),isActive:o.isActive},{default:(0,d.w5)((()=>[(0,d._)("p",D,(0,p.zw)(t.title),1)])),_:2},1032,["todo","onRemove","onDone","isActive"])))),128))])])}var y={props:{todos:{type:Object,required:!0},isActive:{type:Boolean,required:!0}}};const M=(0,E.Z)(y,[["render",b],["__scopeId","data-v-b35557ca"]]);var O=M;const Y=A=>((0,d.dD)("data-v-7cc6b227"),A=A(),(0,d.Cn)(),A),x={class:"todo-list"},H=Y((()=>(0,d._)("h2",{class:"todo-list__title"},"Complited:",-1))),V={class:"todo-title"};function G(A,t,o,e,i,g){const n=(0,d.up)("todo-item");return(0,d.wg)(),(0,d.iD)("div",x,[H,(0,d._)("ul",null,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(o.todos.complited,(t=>((0,d.wg)(),(0,d.j4)(n,{class:"todo-item",todo:t,key:t.id,onRemove:o=>A.$emit("remove",t),onRestore:o=>A.$emit("restore",t),isActive:!o.isActive},{default:(0,d.w5)((()=>[(0,d._)("p",V,(0,p.zw)(t.title),1)])),_:2},1032,["todo","onRemove","onRestore","isActive"])))),128))])])}var X={props:{todos:{type:Object,required:!0},isActive:{type:Boolean,required:!0}}};const U=(0,E.Z)(X,[["render",G],["__scopeId","data-v-7cc6b227"]]);var q=U,W={name:"App",components:{TodosActive:O,TodosComplited:q,TodoForm:m},data(){return{todos:{active:[{id:1,title:"Add your first todo"},{id:2,title:"Get happy"}],complited:[{id:3,title:"Open the Todanda :)"}]},isActive:!0}},methods:{addTodo(A){this.todos.active.push(A),this.todoStorage()},removeTodo(A){this.todos.active=this.todos.active.filter((t=>t.id!==A.id)),this.todos.complited=this.todos.complited.filter((t=>t.id!==A.id)),this.todoStorage()},doneTodo(A){this.todos.active=this.todos.active.filter((t=>t.id!==A.id)),this.todos.complited.push(A),this.todoStorage()},restoreTodo(A){this.todos.complited=this.todos.complited.filter((t=>t.id!==A.id)),this.todos.active.push(A),this.todoStorage()},todoStorage(){const A=JSON.stringify(this.todos);localStorage.setItem("todos",A)}},mounted(){if(localStorage.todos){const A=JSON.parse(localStorage.todos);this.todos=A}}};const k=(0,E.Z)(W,[["render",a]]);var P=k;const F={class:"btn"};function R(A,t,o,e,i,g){return(0,d.wg)(),(0,d.iD)("button",F,[(0,d.WI)(A.$slots,"default",{},void 0,!0)])}var Z={name:"my-button"};const z=(0,E.Z)(Z,[["render",R],["__scopeId","data-v-6d571352"]]);var T=z;const J=["value"];function j(A,t,o,e,i,g){return(0,d.wg)(),(0,d.iD)("input",{value:o.modelValue,onInput:t[0]||(t[0]=(...A)=>g.updateInput&&g.updateInput(...A)),class:"input",type:"text"},null,40,J)}var K={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(A){this.$emit("update:modelValue",A.target.value)}}};const L=(0,E.Z)(K,[["render",j],["__scopeId","data-v-5d607286"]]);var N=L,S=o.p+"img/del.c00ecfed.png",_=o.p+"img/done.498a071d.png",$=o.p+"img/restore.a80849e7.svg";const AA=A=>((0,d.dD)("data-v-1f4c03a8"),A=A(),(0,d.Cn)(),A),tA={class:"todo-item"},oA=AA((()=>(0,d._)("img",{class:"todo-item__img",src:i,alt:""},null,-1))),eA={class:"post__btns"},dA=AA((()=>(0,d._)("img",{class:"del-img",src:S,alt:"Remove task"},null,-1))),iA=AA((()=>(0,d._)("img",{class:"done-img",src:_,alt:"Done task"},null,-1))),gA=AA((()=>(0,d._)("img",{class:"restore-img",src:$,alt:"Done task"},null,-1)));function nA(A,t,o,e,i,g){const n=(0,d.up)("my-button");return(0,d.wg)(),(0,d.iD)("div",tA,[oA,(0,d.WI)(A.$slots,"default",{},void 0,!0),(0,d._)("div",eA,[(0,d.Wm)(n,{class:"del-btn",onClick:t[0]||(t[0]=t=>A.$emit("remove",o.todo))},{default:(0,d.w5)((()=>[dA])),_:1}),o.isActive?((0,d.wg)(),(0,d.j4)(n,{key:0,class:"done-btn",onClick:t[1]||(t[1]=t=>A.$emit("done",o.todo))},{default:(0,d.w5)((()=>[iA])),_:1})):(0,d.kq)("",!0),o.isActive?(0,d.kq)("",!0):((0,d.wg)(),(0,d.j4)(n,{key:1,class:"restore-btn",onClick:t[2]||(t[2]=t=>A.$emit("restore",o.todo))},{default:(0,d.w5)((()=>[gA])),_:1}))])])}var sA={name:"todo-item",props:{todo:{type:Object,required:!0},isActive:{type:Boolean,required:!0}}};const rA=(0,E.Z)(sA,[["render",nA],["__scopeId","data-v-1f4c03a8"]]);var aA=rA,BA=[T,N,aA];const cA=(0,e.ri)(P);BA.forEach((A=>{cA.component(A.name,A)})),cA.mount("#app")}},t={};function o(e){var d=t[e];if(void 0!==d)return d.exports;var i=t[e]={exports:{}};return A[e](i,i.exports,o),i.exports}o.m=A,function(){var A=[];o.O=function(t,e,d,i){if(!e){var g=1/0;for(a=0;a<A.length;a++){e=A[a][0],d=A[a][1],i=A[a][2];for(var n=!0,s=0;s<e.length;s++)(!1&i||g>=i)&&Object.keys(o.O).every((function(A){return o.O[A](e[s])}))?e.splice(s--,1):(n=!1,i<g&&(g=i));if(n){A.splice(a--,1);var r=d();void 0!==r&&(t=r)}}return t}i=i||0;for(var a=A.length;a>0&&A[a-1][2]>i;a--)A[a]=A[a-1];A[a]=[e,d,i]}}(),function(){o.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return o.d(t,{a:t}),t}}(),function(){o.d=function(A,t){for(var e in t)o.o(t,e)&&!o.o(A,e)&&Object.defineProperty(A,e,{enumerable:!0,get:t[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){o.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)}}(),function(){o.p="/Todanda/"}(),function(){var A={143:0};o.O.j=function(t){return 0===A[t]};var t=function(t,e){var d,i,g=e[0],n=e[1],s=e[2],r=0;if(g.some((function(t){return 0!==A[t]}))){for(d in n)o.o(n,d)&&(o.m[d]=n[d]);if(s)var a=s(o)}for(t&&t(e);r<g.length;r++)i=g[r],o.o(A,i)&&A[i]&&A[i][0](),A[i]=0;return o.O(a)},e=self["webpackChunktodo"]=self["webpackChunktodo"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(4571)}));e=o.O(e)})();
//# sourceMappingURL=app.deb155bf.js.map