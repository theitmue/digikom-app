(this["webpackJsonpdigikom-app"]=this["webpackJsonpdigikom-app"]||[]).push([[0],{280:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),s=a.n(r),o=(a(34),a(80)),c=a.n(o),l=a(125),d=a(37),h=a(58),j=a(67),u=a(66),p=a(126),b=a.n(p),v=a(341),f=a(326),m=a(329),O=a(134),g=a(331),x=a(327),k=a(330),S=a(328),C=a(332),y=a(336),I=a(334),N=a(335),w=a(333),z=a(59),D=a.n(z),A=a(342),P=a(323),T=a(324),H=a(129),B=a.n(H),L=a(3);function _(e){return Object(L.jsx)("div",{className:"Akkordeon",children:Object(L.jsxs)(A.a,{children:[Object(L.jsx)(P.a,{expandIcon:Object(L.jsx)(B.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(L.jsx)("b",{children:e.titel})}),Object(L.jsx)(T.a,{children:Object(L.jsx)(D.a,{children:e.inhalt})})]})})}var K=a(325),E=function e(t,a,n,i,r){Object(d.a)(this,e),this.defaultProps={title:Object(L.jsx)(K.a,{color:"secondary"}),img:"/placeholder.jpg",descr:Object(L.jsx)(K.a,{color:"secondary"}),acordeones:[{Titel:"Loading...",Inhalt:"Loading..."}],refs:"Referenzen und Anregungen"},this.title=t||this.defaultProps.title,this.img=a||this.defaultProps.img,this.descr=n||this.defaultProps.descr,this.acordeones=i||this.defaultProps.acordeones,this.refs=r||this.defaultProps.refs},F=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this)).defaultProps={thema:new E,active:!1},n.state={open:!1},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},e.thema?n.thema=e.thema:n.thema=n.defaultProps.thema,e.active?n.active=e.active:n.active=n.defaultProps.active,console.log("New Streifen:"),console.log("ACTIVE?"+e.active),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return this.props.active?Object(L.jsx)("div",{className:"Streifen",children:Object(L.jsxs)(f.a,{className:"Streifenkarte",variant:"elevation",raised:"true",children:[Object(L.jsx)("div",{className:"Karteninhalt",children:Object(L.jsxs)(x.a,{children:[Object(L.jsx)(S.a,{component:"img",image:"/digikom-app"+this.thema.img,title:"Titelbild"}),Object(L.jsxs)(m.a,{children:[Object(L.jsx)(O.a,{variant:"h5",gutterBottom:!0,component:"center",children:this.props.thema.title}),Object(L.jsx)(O.a,{variant:"body2",children:Object(L.jsx)(D.a,{children:this.props.thema.descr})}),Object(L.jsx)("div",{children:this.props.thema.acordeones.map((function(e){return Object(L.jsx)(_,{titel:e.Titel,inhalt:e.Inhalt})}))})]})]})}),Object(L.jsxs)(k.a,{children:[Object(L.jsx)(v.a.div,{whileHover:{scale:1.1},children:Object(L.jsx)(g.a,{onClick:this.handleClickOpen,variant:"contained",color:"primary",children:"Mehr erfahren"})}),Object(L.jsxs)(C.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(L.jsx)(w.a,{id:"alert-dialog-title",children:"Anregungen und weiterf\xfchrende Links"}),Object(L.jsx)(I.a,{children:Object(L.jsx)(N.a,{id:"alert-dialog-description",children:this.props.thema.refs})}),Object(L.jsx)(y.a,{children:Object(L.jsx)(g.a,{onClick:this.handleClose,color:"primary",children:"Schlie\xdfen"})})]}),Object(L.jsx)(v.a.div,{whileHover:{scale:1.1},children:Object(L.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(t){return e.props.action("-",t)},children:" Vorheriger "})}),Object(L.jsx)(v.a.div,{whileHover:{scale:1.1},children:Object(L.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(t){return e.props.action("+",t)},children:" N\xe4chster "})})]})]})}):Object(L.jsx)("div",{className:"StreifenRueck",children:Object(L.jsx)(f.a,{className:"StreifenRueck",variant:"elevation",raised:"true",onClick:function(t){return e.props.navigation(e.props.id-1,t)},children:Object(L.jsx)("div",{className:"KarteninhaltCovered",children:Object(L.jsxs)(x.a,{children:[Object(L.jsx)(S.a,{}),Object(L.jsx)(m.a,{})]})})})})}}]),a}(i.a.Component),R=a(132),M=a(337),W=a(338),X=a(281),Y=a(343),J=a(339),V=a(340);function U(e){var t=Object(n.useState)(!1),a=Object(R.a)(t,2),i=a[0],r=a[1];return Object(L.jsxs)("div",{children:[Object(L.jsx)(M.a,{className:"AppBar",position:"static",children:Object(L.jsxs)(W.a,{children:[Object(L.jsx)(X.a,{onClick:function(){r(!0)},color:"inherit",edge:"start","aria-label":"menu",children:Object(L.jsx)(J.a,{})}),Object(L.jsxs)(O.a,{variant:"h6",children:["Digikom-App ",e.version]})]})}),Object(L.jsxs)(Y.a,{className:"drawer",anchor:"left",variant:"temporary",open:i,onClose:function(){r(!1)},children:[Object(L.jsx)(O.a,{variant:"h4",children:"Inhalt"}),Object(L.jsx)(V.a,{}),e.buttonNamen.map((function(t){return Object(L.jsxs)("div",{children:[Object(L.jsx)(g.a,{className:"DrawerButton",variant:"contained",color:"primary",onClick:function(a){e.action(t.ID,a),r(!1)},children:t.Titel}),Object(L.jsx)(V.a,{})]})})),Object(L.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(t){window.open(e.impressumlink)},children:"Kontakt"})]})]})}var q=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).impressum_link=n.props.impressum,n.serverAdress=n.props.server,n.globalOriginX=.5,n.globalOriginY=.5,n.rotStrCoeff=7,n.state={rotations_array:[0],aktiverStreifen:0,daten:[{id:0,rotID:0,tema:new E,rotation:0,z:1,activo:!0}]},n.UNSAFE_componentWillMount=Object(l.a)(c.a.mark((function e(){var t,a,i,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,alert("HEllo World"),e.next=4,b.a.get(n.serverAdress+"/streifens");case 4:for(t=e.sent,alert("Hello World: "+t.data),a=[],i=[],r=0;r<n.rotStrCoeff;r++)i.push(r*(360/n.rotStrCoeff)%360);for(console.log("L\xe4nge des Rotationsarrays: "+i.length),s=0;s<t.data.length;s+=1)a.push({id:t.data[s].id,rotID:s%i.length,tema:new E(t.data[s].Titel,null,t.data[s].Beschreibung,t.data[s].Acordeon,t.data[s].Refs),rotation:i[(t.data[s].id-1)%i.length],activo:t.data[s].id-1==0,z:t.data.length-t.data[s].id});console.log(a),a.sort((function(e,t){return e.id>t.id?1:-1})),console.log("Nach Sortierung"),console.log(a),n.setState({rotations_array:i,daten:a}),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),n.setState({error:e.t0}),alert("Error:\n"+e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,18]])}))),n.handleLinkClick=function(){window.open(n.props.impressum)},n}return Object(h.a)(a,[{key:"clickHandler",value:function(e,t){for(var a=this.state.daten[e].rotID,n=this.state.daten,i=this.rotStrCoeff-a,r=n.length-1-n[e].z,s=this.state.aktiverStreifen,o=0;o<n.length;o++)n[o].rotID=(n[o].rotID+i)%this.rotStrCoeff,n[o].rotation=this.state.rotations_array[n[o].rotID],n[o].z=(n[o].z+r)%n.length,n[o].z>n[s].z&&(s=o),n[o].activo=!1;for(var c=0,l=0;l<n.length;l++)n[l].z>n[c].z&&(c=l);n[s=c].activo=!0,this.setState({daten:n,aktiverStreifen:s})}},{key:"handleSwitchButton",value:function(e,t){var a=this.state.daten;e="+"==e?(this.state.aktiverStreifen+1)%a.length:(this.state.aktiverStreifen+(a.length-1))%a.length;for(var n=this.state.daten[e].rotID,i=this.rotStrCoeff-n,r=a.length-1-a[e].z,s=this.state.aktiverStreifen,o=0;o<a.length;o++)a[o].rotID=(a[o].rotID+i)%this.rotStrCoeff,a[o].rotation=this.state.rotations_array[a[o].rotID],a[o].z=(a[o].z+r)%a.length,a[o].z>a[s].z&&(s=o),a[o].activo=!1;for(var c=0,l=0;l<a.length;l++)a[l].z>a[c].z&&(c=l);a[s=c].activo=!0,this.setState({daten:a,aktiverStreifen:s})}},{key:"makeTitels",value:function(){for(var e=[],t=0;t<this.state.daten.length;t++)e.push({ID:t,Titel:this.state.daten[t].tema.title});return e}},{key:"render",value:function(){var e=this;return Object(L.jsxs)("div",{className:"Oberflaeche",children:[Object(L.jsx)(v.a.div,{animate:{zIndex:108},className:"Nav",children:Object(L.jsx)(U,{buttonNamen:this.makeTitels(),action:function(t,a){return e.clickHandler(t,a)},impressumlink:this.props.impressum,version:this.props.version})}),Object(L.jsx)(v.a.div,{className:"Kompass",children:this.state.daten.map((function(t){return Object(L.jsx)(v.a.div,{animate:{rotate:t.rotation,zIndex:t.z,originX:e.globalOriginX,originY:e.globalOriginY},className:t.activo?"Kompassstreifen_Active":"Kompassstreifen_Hidden",children:Object(L.jsx)(F,{id:t.id,thema:t.tema,active:t.activo,action:function(t,a){return e.handleSwitchButton(t,a)},navigation:function(t,a){return e.clickHandler(t,a)}})})}))}),Object(L.jsx)("footer",{children:Object(L.jsx)(v.a.div,{children:Object(L.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(t){return e.handleLinkClick()},children:"Kontakt"})})})]})}}]),a}(i.a.Component),G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,344)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(L.jsx)(i.a.StrictMode,{children:Object(L.jsx)("div",{children:Object(L.jsx)(q,{server:"https://digikom-backend.herokuapp.com",impressum:"https://omen.cs.uni-magdeburg.de/itiamsl/deutsch/home/index.html",version:"b0.9.1"})})}),document.getElementById("root")),G(console.log)},34:function(e,t,a){}},[[280,1,2]]]);
//# sourceMappingURL=main.f96dc4ba.chunk.js.map