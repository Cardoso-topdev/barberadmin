(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{35:function(e,t,c){},63:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(37),r=c.n(s),i=c(5),o=c.n(i),j=c(10),l=c(7),b=c(3),d=c(4),u=c(8),m=c.n(u),h=c(14),x=c(15),O=(c(35),c(17)),p=c(22),v=c(21),f=(c(63),c(1));var g=function(){return Object(f.jsx)(n.Fragment,{children:Object(f.jsxs)("nav",{className:"navbar",children:[Object(f.jsx)(b.b,{to:"/",children:Object(f.jsx)(O.b,{})}),Object(f.jsx)(b.b,{to:"/barberadmin/overview",children:Object(f.jsx)(O.a,{})}),Object(f.jsx)(b.b,{to:"/barberadmin/servicios",children:Object(f.jsx)(O.c,{})}),Object(f.jsx)(b.b,{to:"/barberadmin/historialventas",children:Object(f.jsx)(v.a,{})}),Object(f.jsx)(b.b,{to:"/barberadmin/salidas",children:Object(f.jsx)(p.a,{})})]})})},N=function(e){var t=e.setConsulta,c=Object(d.g)(),a=Object(n.useState)([]),s=Object(l.a)(a,2),r=s[0],i=s[1],u=function(e){i(Object(x.a)(Object(x.a)({},r),{},Object(h.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(j.a)(o.a.mark((function e(n){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.a.post("https://ajbarbershop.herokuapp.com/api",r);case 3:a=e.sent,s=a.data,console.log(s),t(!0),c.push("/servicios");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("div",{className:"contenedor-nav",children:Object(f.jsx)(g,{})}),Object(f.jsxs)("div",{className:"container d-flex align-items-center flex-column",children:[Object(f.jsx)("h1",{className:"titulos mt-5",children:"AJ BarberShop "}),Object(f.jsx)("h3",{className:"titulos mt-3",children:"Agregar Servicio"}),Object(f.jsx)("div",{className:"contenedor nuevo-servicio mt-3",children:Object(f.jsxs)("form",{className:"form-nuevo",onSubmit:O,children:[Object(f.jsx)("input",{type:"text",placeholder:"Nombre del servicio",name:"nombre",id:"nombre",onChange:u}),Object(f.jsx)("input",{type:"text",placeholder:"Descripcion",name:"descripcion",id:"descripcion",onChange:u}),Object(f.jsx)("input",{type:"number",placeholder:"Duracion en minutos",name:"duracion",id:"duracion",onChange:u}),Object(f.jsx)("input",{type:"number",placeholder:"Costo",name:"costo",id:"costo",onChange:u}),Object(f.jsx)("input",{className:"btn btn-nuevo mt-3",type:"submit",value:"Agregar Servicio"}),Object(f.jsx)(b.b,{className:"btn btn-nuevo",to:"/servicios",children:"Regresar"})]})})]})]})},S=function(e){var t=e.service;return Object(f.jsx)(n.Fragment,{children:Object(f.jsx)("div",{className:"col-md-8 mx-auto",children:Object(f.jsx)("div",{className:"list-group",children:t.map((function(e){return Object(f.jsx)(b.b,{className:"list-group-item list-group-item-action flex-column align-items-start",to:"/transacciones/".concat(e.id),children:Object(f.jsxs)("div",{className:"d-flex w-100 justify-content-around",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:e.nombre}),Object(f.jsxs)("p",{children:["Duracion: ",e.duracion," minutos"]})]}),Object(f.jsxs)("p",{className:"d-flex align-items-center",children:["$ ",e.costo]})]})},e.id)}))})})})},w=function(e){var t=e.service;return Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("div",{className:"contenedor-nav",children:Object(f.jsx)(g,{})}),Object(f.jsxs)("div",{className:"container d-flex flex-column",children:[Object(f.jsx)("h1",{className:"titulos mt-5",children:"AJ BarberShop"}),Object(f.jsx)("h3",{className:"titulos mt-3",children:"Servicios"}),Object(f.jsxs)("div",{className:"row flex-column align-items-center",children:[Object(f.jsx)("div",{className:"btn-container text-center",children:Object(f.jsx)(b.b,{to:"/nuevoservicio",className:"col-md-8 mx-auto btn btn-nuevo mt-3 mb-5",children:"Agregar nuevo servicio"})}),0!==t.length?Object(f.jsx)(S,{service:t}):Object(f.jsx)("p",{children:"No hay servicios agregados"})]})]})]})},y=c(39),D=Object(d.h)((function(e){var t=e.match,c=Object(n.useState)([]),a=Object(l.a)(c,2),s=a[0],r=a[1],i=t.params.id,u=Object(d.g)(),O=new Date,p=O.getMonth()+1,v="".concat(p,"/").concat(O.getDate(),"/").concat(O.getFullYear());Object(n.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://ajbarbershop.herokuapp.com/api/".concat(i));case 2:t=e.sent,c=t.data,r.apply(void 0,Object(y.a)(s).concat([c]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=function(){var e=Object(j.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m.a.post("https://ajbarbershop.herokuapp.com/api/registros",{servicioId:s.id,fecha:v,costo:s.costo});case 3:c=e.sent,c.data,u.push("/servicios");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(n.Fragment,{children:Object(f.jsxs)("div",{className:"container mt-5 flex-column align-items-center justify-content-center",children:[Object(f.jsx)("h1",{className:"titulos mt-5",children:"AJ BarberShop"}),Object(f.jsx)("h3",{className:"titulos mt-3",children:"Ventas"}),Object(f.jsxs)("form",{className:"form-nuevo mx-auto",onSubmit:g,children:[Object(f.jsx)("label",{children:"Nombre de servicio"}),Object(f.jsx)("input",{type:"text",placeholder:"Nombre del servicio",name:"nombre",id:"nombre",value:s.nombre,disabled:!0}),Object(f.jsx)("label",{children:"Duracion"}),Object(f.jsx)("input",{type:"number",placeholder:"Duracion en minutos",name:"duracion",id:"duracion",value:s.duracion,disabled:!0}),Object(f.jsx)("label",{children:"Costo"}),Object(f.jsx)("input",{type:"number",placeholder:"Costo",name:"costo",id:"costo",value:s.costo,onChange:function(e){r(Object(x.a)(Object(x.a)({},s),{},Object(h.a)({},e.target.name,e.target.value)))}}),Object(f.jsx)("input",{className:"btn btn-nuevo mt-3",type:"submit",value:"Vender Servicio"}),Object(f.jsx)(b.b,{className:"btn btn-nuevo",to:"/servicios",children:"Regresar"})]})]})})})),F=function(){var e=new Date,t=e.getMonth()+1,c="".concat(t,"/").concat(e.getDate(),"/").concat(e.getFullYear()),a=Object(n.useState)(0),s=Object(l.a)(a,2),r=s[0],i=s[1],b=Object(n.useState)(0),d=Object(l.a)(b,2),u=d[0],h=d[1],x=Object(n.useState)(0),O=Object(l.a)(x,2),p=O[0],v=O[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("https://ajbarbershop.herokuapp.com/ingresos",{hoy:c});case 2:return t=e.sent,null!==(n=t.data)[0].ingresos&&i(n[0].ingresos),e.next=7,m.a.post("https://ajbarbershop.herokuapp.com/salidas/total",{hoy:c});case 7:null!==(a=e.sent).data[0].salidas&&h(a.data[0].salidas),null!==r&&null!==a&&(s=n[0].ingresos-a.data[0].salidas,v(s));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("div",{className:"contenedor-nav",children:Object(f.jsx)(g,{})}),Object(f.jsxs)("div",{className:"container d-flex align-items-center flex-column",children:[Object(f.jsx)("h1",{className:"titulos mt-5",children:"AJ BarberShop "}),Object(f.jsx)("h3",{className:"titulos mt-3",children:"Overview"}),Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("h3",{className:"titulos",children:"Total del dia"}),Object(f.jsxs)("p",{children:["$ ",p]})]}),Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("h3",{className:"titulos",children:"Ingresos totales"}),Object(f.jsxs)("p",{children:["$ ",r]})]}),Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("h3",{className:"titulos",children:"Salidas totales"}),Object(f.jsxs)("p",{children:["$ ",u]})]})]})]})};var k=function(){var e=new Date,t=e.getMonth()+1,c="".concat(t,"/").concat(e.getDate(),"/").concat(e.getFullYear()),a=Object(n.useState)([]),s=Object(l.a)(a,2),r=s[0],i=s[1],u=function(e){var t;i(Object(x.a)(Object(x.a)({},r),{},(t={},Object(h.a)(t,e.target.name,e.target.value),Object(h.a)(t,"fecha",c),t)))},O=Object(d.g)(),p=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m.a.post("https://ajbarbershop.herokuapp.com/salidas",r);case 3:c=e.sent,n=c.data,console.log(n),O.push("/overview");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("div",{className:"contenedor-nav",children:Object(f.jsx)(g,{})}),Object(f.jsxs)("div",{className:"container d-flex align-items-center flex-column",children:[Object(f.jsx)("h1",{className:"titulos mt-5",children:"AJ BarberShop "}),Object(f.jsx)("h3",{className:"titulos mt-3",children:"Registrar Salida"}),Object(f.jsx)("div",{className:"contenedor nuevo-servicio mt-5",children:Object(f.jsxs)("form",{className:"form-nuevo",onSubmit:p,children:[Object(f.jsx)("input",{type:"text",placeholder:"Nombre del movimiento",name:"nombre",id:"nombre",onChange:u}),Object(f.jsx)("input",{type:"text",placeholder:"Descripcion",name:"descripcion",id:"descripcion",onChange:u}),Object(f.jsx)("input",{type:"number",placeholder:"Cantidad a retirar",name:"costo",id:"costo",onChange:u}),Object(f.jsx)("input",{className:"btn btn-nuevo mt-3",type:"submit",value:"Registrar salida"}),Object(f.jsx)(b.b,{className:"btn btn-nuevo",to:"/",children:"Regresar"})]})})]})]})};var C=function(){return Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("div",{className:"contenedor-nav",children:Object(f.jsx)(g,{})}),Object(f.jsxs)("div",{className:"container d-flex align-items-center flex-column",children:[Object(f.jsx)("h1",{className:"titulos mt-5",children:"AJ BarberShop "}),Object(f.jsx)("h3",{className:"titulos mt-3 mb-5",children:"Menu"}),Object(f.jsxs)("div",{className:"menu",children:[Object(f.jsx)("div",{className:"menu-item",children:Object(f.jsxs)(b.b,{to:"/barberadmin/overview",children:[Object(f.jsx)(O.a,{}),Object(f.jsx)("h3",{children:"Overview"})]})}),Object(f.jsx)("div",{className:"menu-item",children:Object(f.jsxs)(b.b,{to:"/barberadmin/servicios",children:[Object(f.jsx)(O.c,{}),Object(f.jsx)("h3",{children:"Servicios"})]})}),Object(f.jsx)("div",{className:"menu-item",children:Object(f.jsxs)(b.b,{to:"/barberadmin/historialventas",children:[Object(f.jsx)(v.a,{}),Object(f.jsx)("h3",{children:"Ventas"})]})}),Object(f.jsx)("div",{className:"menu-item",children:Object(f.jsxs)(b.b,{to:"/barberadmin/salidas",children:[Object(f.jsx)(p.a,{}),Object(f.jsx)("h3",{children:"Salidas"})]})})]})]})]})},A=function(e){var t=e.service;return Object(f.jsx)(n.Fragment,{children:Object(f.jsx)("div",{className:"col-md-8 mx-auto",children:Object(f.jsx)("div",{className:"list-group",children:t.map((function(e){return Object(f.jsx)(b.b,{className:"list-group-item list-group-item-action flex-column align-items-start",to:"#",children:Object(f.jsxs)("div",{className:"d-flex w-100 justify-content-around",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("h3",{children:["#",e.id," ",e.nombre]}),Object(f.jsx)("p",{children:e.fecha.slice(0,10)})]}),Object(f.jsxs)("p",{className:"d-flex align-items-center",children:["$ ",e.costo]})]})},e.id)}))})})})};var B=function(){var e=new Date,t=e.getMonth()+1,c="".concat(e.getFullYear(),"/").concat(t,"/").concat(e.getDate()),a=Object(n.useState)([]),s=Object(l.a)(a,2),r=s[0];return s[1],Object(n.useEffect)((function(){(function(){var e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("https://ajbarbershop.herokuapp.com/registros",{hoy:c});case 2:t=e.sent,n=t.data,console.log(n[0]),console.log(r.length);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)("div",{className:"contenedor-nav",children:Object(f.jsx)(g,{})}),Object(f.jsxs)("div",{className:"container d-flex flex-column",children:[Object(f.jsx)("h1",{className:"titulos mt-5",children:"AJ BarberShop"}),Object(f.jsx)("h3",{className:"titulos mt-3 mb-4",children:"HistorialVentas"}),Object(f.jsxs)("p",{children:["Ventas del dia: ",r.length]}),Object(f.jsx)("div",{className:"row flex-column align-items-center",children:0!==r.length?Object(f.jsx)(A,{service:r}):Object(f.jsx)("p",{children:"No hay ventas todavia"})})]})]})};var J=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(l.a)(s,2),i=r[0],u=r[1],h=Object(n.useState)(),x=Object(l.a)(h,2),O=x[0],p=x[1];return Object(n.useEffect)((function(){i&&function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://ajbarbershop.herokuapp.com/api");case 2:t=e.sent,c=t.data,a(c),u(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i]),Object(f.jsx)(b.a,{children:Object(f.jsxs)(d.d,{children:[Object(f.jsx)(d.b,{exact:!0,path:"/",children:Object(f.jsx)(d.a,{to:"/barberadmin"})}),Object(f.jsx)(d.b,{exact:!0,path:"/barberadmin",component:C}),Object(f.jsx)(d.b,{exact:!0,path:"/barberadmin/overview",component:F}),Object(f.jsx)(d.b,{exact:!0,path:"/barberadmin/servicios",component:function(){return Object(f.jsx)(w,{service:c,setIdServicio:p})}}),Object(f.jsx)(d.b,{exact:!0,path:"/barberadmin/nuevoservicio",component:function(){return Object(f.jsx)(N,{setConsulta:u})}}),Object(f.jsx)(d.b,{path:"/barberadmin/transacciones/:id",component:function(){return Object(f.jsx)(D,{idServicio:O})}}),Object(f.jsx)(d.b,{exact:!0,path:"/barberadmin/salidas",component:function(){return Object(f.jsx)(k,{})}}),Object(f.jsx)(d.b,{exact:!0,path:"/barberadmin/historialventas",component:B})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root")),M()}},[[70,1,2]]]);
//# sourceMappingURL=main.0afa7b75.chunk.js.map