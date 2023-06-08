"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[641],{8641:function(e,s,t){t.r(s),t.d(s,{default:function(){return V}});var n=t(8683),i=t(5671),r=t(3144),o=t(136),a=t(5716),c=t(2791),l=t(7781),u=t(5861),d=t(885),f=t(7757),p=t.n(f),h=t(1767),x={descriptionBlock:"ProfileInfo_descriptionBlock__hSKEO",contact:"ProfileInfo_contact__cl-VC"},j=t(6674),v=t(184),m=function(e){var s=e.status,t=e.updateStatus,n=(0,c.useState)(!1),i=(0,d.Z)(n,2),r=i[0],o=i[1],a=(0,c.useState)(s),l=(0,d.Z)(a,2),u=l[0],f=l[1];(0,c.useEffect)((function(){f(s)}),[s]);return(0,v.jsxs)("div",{children:[!r&&(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Status:    "}),(0,v.jsx)("span",{onDoubleClick:function(){return o(!0)},children:s||"------"})]}),r&&(0,v.jsx)("input",{onChange:function(e){f(e.currentTarget.value)},placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438 \u0441\u0432\u043e\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",onBlur:function(){o(!1),t(u)},autoFocus:!0,value:u})]})},b=t(6565),P=t(704),g=t(2707),k=(0,P.Z)({form:"edit-profile"})((function(e){var s=e.profile,t=e.error,n=e.handleSubmit;return(0,v.jsxs)("form",{onSubmit:n,children:[(0,v.jsx)("div",{children:(0,v.jsx)("button",{children:"save"})}),t&&(0,v.jsx)("div",{className:x.formError,children:t}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Full Name"}),": ",(0,g.SP)("Full name","fullName",[],g.II)]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Looking for a job"}),": ",(0,g.SP)("","lookingForAJob",[],g.II,{type:"checkbox"})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"My professional skills"}),":",(0,g.SP)("My professional skills","lookingForAJobDescription",[],g.gx)]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"About Me"}),":",(0,g.SP)("About Me","aboutMe",[],g.gx)]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Contacts"}),":",s.contacts&&Object.keys(s.contacts).map((function(e){return(0,v.jsx)("div",{className:x.contact,children:(0,v.jsxs)("b",{children:[e,":",(0,g.SP)(e,"contacts."+e,[],g.II)]})},e)}))]})]})})),S=function(e){var s,t=e.profile,n=e.status,i=e.updateStatus,r=e.isOwner,o=e.savePhoto,a=e.saveProfile,l=(0,c.useState)(!1),f=(0,d.Z)(l,2),P=f[0],g=f[1];if(!t)return(0,v.jsx)(j.p,{});var S=function(){var e=(0,u.Z)(p().mark((function e(s){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(s);case 2:g(!1);case 3:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:h,alt:"Main image"})}),(0,v.jsxs)("div",{className:x.descriptionBlock,children:[(0,v.jsx)("img",{src:(null===(s=t.photos)||void 0===s?void 0:s.small)||b,alt:"ava"}),(0,v.jsx)("div",{children:r&&(0,v.jsx)("input",{type:"file",onChange:function(e){var s;null!==(s=e.target.files)&&void 0!==s&&s.length&&o(e.target.files[0])}})}),P?(0,v.jsx)(k,{onSubmit:S,profile:t,initialValues:t}):(0,v.jsx)(_,{goToEditMode:function(){g(!0)},isOwner:r,profile:t})]}),(0,v.jsx)("div",{children:(0,v.jsx)(m,{updateStatus:i,status:n})})]})},y=function(e){var s=e.contactTitle,t=e.contactValue;return(0,v.jsxs)("div",{className:x.contact,children:[(0,v.jsx)("b",{children:s}),":",t]})},_=function(e){var s=e.profile,t=e.isOwner,n=e.goToEditMode;return(0,v.jsxs)("div",{children:[t&&(0,v.jsx)("div",{children:(0,v.jsx)("button",{onClick:n,children:"edit"})}),(0,v.jsxs)("div",{children:["Full Name: ",s.fullName]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"Looking for a job"}),": ",s.lookingForAJob?"yes":"no"]}),s.lookingForAJob&&(0,v.jsxs)("div",{children:[(0,v.jsx)("b",{children:"My professional skills"}),": ",s.lookingForAJobDescription]}),(0,v.jsxs)("div",{children:["About Me: ",s.aboutMe]}),(0,v.jsxs)("div",{children:["Contacts: ",s.contacts&&Object.keys(s.contacts).map((function(e){var t=null!==s&&void 0!==s&&s.contacts?s.contacts[e]:"";return(0,v.jsx)(y,{contactTitle:e,contactValue:t},e)}))]})]})},w="Posts_item__Z+4zD",M=t(7690),N=function(e){return(0,v.jsxs)("div",{className:w,children:[(0,v.jsx)("img",{src:M,alt:"avatar"}),e.postTitle,(0,v.jsx)("div",{children:(0,v.jsxs)("span",{children:["like ",e.numberOfLikes]})})]})},I="MyPosts_postsBlock__+pHan",A="MyPosts_posts__KG2SH",Z=t(6139),C=t(9674),O=(0,C.D)(10),T=(0,P.Z)({form:"ProfileAddNewPostForm"})((function(e){return(0,v.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,v.jsx)("div",{children:(0,v.jsx)(Z.Z,{name:"newPostText",component:g.gx,placeholder:"Post message",validate:[C.C,O]})}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{children:"Add post"})})]})})),F=c.memo((function(e){console.log("render");var s=e.posts.map((function(e){return(0,v.jsx)(N,{numberOfLikes:e.numberOfLikes,postTitle:e.postTitle},e.id)}));return(0,v.jsxs)("div",{className:I,children:[(0,v.jsx)("h2",{children:"My posts"}),(0,v.jsx)(T,{onSubmit:function(s){e.addPosts(s.newPostText)}}),(0,v.jsx)("div",{className:A,children:s})]})})),D=t(81),E=t(364),B=(0,E.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPosts:function(s){e((0,D.Pi)(s))}}}))(F),J=function(e){return(0,v.jsxs)("div",{children:[(0,v.jsx)(S,{status:e.status,profile:e.profile,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),(0,v.jsx)(B,{})]})},L=t(9271),U=function(e){(0,o.Z)(t,e);var s=(0,a.Z)(t);function t(){return(0,i.Z)(this,t),s.apply(this,arguments)}return(0,r.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId)||this.props.history.push("./login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,s,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,v.jsx)("div",{children:(0,v.jsx)(J,(0,n.Z)({isOwner:!this.props.match.params.userId},this.props))})}}]),t}(c.Component),V=(0,l.qC)((0,E.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:D.om,updateStatus:D.NN,getStatus:D.fG,savePhoto:D.m2,saveProfile:D.Gi}),L.EN)(U)},7690:function(e,s,t){e.exports=t.p+"static/media/Avatar_user.33d3e696a011a454df2b.png"},6565:function(e,s,t){e.exports=t.p+"static/media/ava_2_anders.d1fb6f14144989e9dea0.png"},1767:function(e,s,t){e.exports=t.p+"static/media/voleibol-2.428b650d1cb8d4e00930.jpg"}}]);
//# sourceMappingURL=641.30fae766.chunk.js.map