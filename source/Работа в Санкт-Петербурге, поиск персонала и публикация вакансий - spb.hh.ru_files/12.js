(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1473:function(e,n,t){"use strict";t.d(n,"d",(function(){return s})),t.d(n,"e",(function(){return c})),t.d(n,"b",(function(){return i})),t.d(n,"f",(function(){return o})),t.d(n,"a",(function(){return l})),t.d(n,"c",(function(){return u})),t.d(n,"h",(function(){return d}));var a=t(2),r=t.n(a),s="everyone",c="no_one",i="clients",o="whitelist",l="blacklist",u="direct",p=[s,c,i,o,l,u];n.g=p;var d=r.a.oneOf(p)},1865:function(e,n,t){"use strict";t.d(n,"a",(function(){return k}));var a=t(0),r=t.n(a),s=t(2),c=t.n(s),i=t(1423),o=t(1432),l=t(21),u=t.n(l),p=t(122),d=t(151),m=t(1422),v=t(47),y=t(20),b=function e(n){var t=n.visible,a=n.onClose,s=n.trls,c=Object(i.useSelector)((function(e){var n;return null===(n=e.vacancyResponsePopup)||void 0===n?void 0:n.vacancy}));return(null==c?void 0:c.companyUrl)?r.a.createElement(d.f,{visible:t,onClose:a},r.a.createElement(d.d,null,r.a.createElement(d.e,null,s[e.trls.advertisingTitle])),r.a.createElement(d.a,null,r.a.createElement("div",{className:"vacancy-response-popup-body"},s[e.trls.advertisingText])),r.a.createElement(d.c,null,r.a.createElement(p.c,{kind:p.c.kinds.secondary,Element:"a",rel:"nofollow",href:c.companyUrl,"data-qa":"vacancy-response-link-advertising",onClick:function(){Object(v.default)({data:{goal:"vacancy-response-company-url"}}),Object(v.StatisticsProcessing)({data:{action:"vacancy_response_perform",label:c.vacancyId}}),u.a.sendEvent("applicant","response-sent-complete","ad-vacancy")}},s[e.trls.advertisingAction]))):(y.default.log("out error",new Error("Advertising vacancy without companyUrl"),{id:null==c?void 0:c.vacancyId}),null)};b.displayName="components/VacancyResponsePopup/AdvertisingPopup/AdvertisingPopup",b.trls={advertisingTitle:"vacancy.advertising.title",advertisingText:"vacancy.advertising.text",advertisingAction:"vacancy.advertising.goforward"},b.propTypes={visible:c.a.bool,onClose:c.a.func,trls:c.a.object};var f=Object(m.a)(b),h=t(417),g=t(2047),E=t(1627),j=t(187);function O(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==t)return;var a,r,s=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(a=t.next()).done)&&(s.push(a.value),!n||s.length!==n);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw r}}return s}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var S=function e(n){var t=n.visible,s=n.onClose,c=n.vacancyId,o=n.vacancyBodyFooterNodeRef,l=n.trls,m=O(Object(a.useState)(!1),2),v=m[0],y=m[1],b=Object(i.useSelector)((function(e){return e.applicantVacancyResponseStatuses[c]})),f=0===b.usedResumeIds.length,I=b.shortVacancy,S=O(Object(a.useState)(null),2),R=S[0],w=S[1],k=!b.unusedResumeIds.length,A=I["@responseLetterRequired"];return Object(a.useEffect)((function(){if(t){var e=A?"view-req-letter":"view-nonreq-letter";u.a.sendEvent("applicant","response-sent-attempt",e)}}),[A,t]),r.a.createElement(g.a,{vacancyId:c,setSubmitting:y,onResponse:s,errorCode:R,onError:w,vacancyBodyFooterNodeRef:o,render:function(n){var a=n.renderForm;return r.a.createElement(d.f,{visible:t,onClose:s},r.a.createElement(d.d,{outlined:!0},r.a.createElement(d.e,null,l[f?e.trls.title.default:e.trls.title.repeat]),r.a.createElement("div",null,"«",I.name,"»")),r.a.createElement(d.a,null,a()))},renderSubmit:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{visible:!!R},r.a.createElement("div",{className:"vacancy-response-popup-error","data-qa-popup-error-code":R},r.a.createElement(E.b,{code:R,letterMaxLength:b.letterMaxLength}))),r.a.createElement(d.c,null,r.a.createElement(p.c,{onClick:s,"data-qa":"vacancy-response-popup-close-button"},l[e.trls.cancel]),r.a.createElement(h.j,null,r.a.createElement(p.c,{type:p.c.types.submit,kind:p.c.kinds.primary,"data-qa":"vacancy-response-submit-popup",disabled:k||v,loading:v&&r.a.createElement(j.a,{initial:j.a.kinds.inverted})},l[f?e.trls.submit.default:e.trls.submit.repeat]))))}})};S.displayName="components/VacancyResponsePopup/Popup/Popup",S.trls={title:{default:"vacancy.response.popup.title",repeat:"vacancy.response.popup.title.again"},submit:{default:"vacancy.response.popup.submit",repeat:"vacancy.response.popup.submitAgain"},cancel:"vacancy.response.popup.cancel"},S.propTypes={visible:c.a.bool,onClose:c.a.func,vacancyId:c.a.number,vacancyBodyFooterNodeRef:c.a.object,trls:c.a.object};var R=Object(m.a)(S),w=Object(o.e)("vacancyResponsePopupVisible"),k={ADVERTISING:"advertising",NORMAL:"normal"},A=function(e){var n,t=e.vacancyId,a=e.vacancyBodyFooterNodeRef,s=Object(i.useDispatch)(),c=Object(i.useSelector)((function(e){return e.vacancyResponsePopupVisible})),o=Object(i.useSelector)((function(e){return e.vacancyResponsePopup}));if((null==o||null===(n=o.vacancy)||void 0===n?void 0:n.vacancyId)!==t)return null;var l=function(){return s(w(!1))},u=null==o?void 0:o.type;return u===k.ADVERTISING?r.a.createElement(f,{visible:c,onClose:l}):u===k.NORMAL?r.a.createElement(R,{visible:c,onClose:l,vacancyId:t,vacancyBodyFooterNodeRef:a}):null};A.displayName="components/VacancyResponsePopup/index/VacancyResponsePopup",A.propTypes={vacancyId:c.a.number.isRequired,vacancyBodyFooterNodeRef:c.a.object};n.b=A},2047:function(e,n,t){"use strict";var a=t(0),r=t.n(a),s=t(1423),c=t(2),i=t.n(c),o=t(1487),l=t(21),u=t.n(l),p=t(417),d=t(38),m=t(156),v=t(1422),y=t(1439),b=t(7),f=t.n(b),h=t(419),g=t(1231),E=t(1425),j=t(628),O=t(1531),I=t(1473),S=function e(n){var t=n.resume,a=n.visibility,s=n.vacancy,c=n.hidden,i=n.trls;if(!a||c)return null;var o,l,u,d,m=t.hash;return a.accessType===I.e&&(o=a.whitelist.containsEmployer?Object(j.format)(i[e.trls.noOne.employerToWhitelist],{"{0}":s.company.visibleName}):!a.whitelist.containsEmployer&&a.whitelist.canAdd<=0?i[e.trls.noOne.whitelistIsFull]:Object(j.format)(i[e.trls.noOne.toWhitelist],{"{0}":s.company.visibleName})),a.accessType!==I.f||a.whitelist.containsEmployer||(o=a.whitelist.canAdd<=0?Object(j.format)(i[e.trls.whitelist.whitelistIsFull],{"{0}":a.whitelist.limit}):Object(j.format)(i[e.trls.whitelist.addEmployer],{"{0}":s.company.visibleName})),a.accessType===I.a&&a.connectedEmployers.length&&(o=1===a.connectedEmployers.length?Object(j.format)(i[e.trls.blacklist.removeEmployerCurrent],{"{0}":s.company.visibleName}):Object(j.format)(i[e.trls.blacklist.removeEmployerMany],{"{0}":s.name,"{1}":(l=a.connectedEmployers,u=i[e.trls.and],d=l.map((function(e){return"«".concat(e.name,"»")})),Object(O.a)(d,u))})),o?r.a.createElement("div",{className:"vacancy-response-popup-resume__hint"},r.a.createElement(p.c,null,o," ",r.a.createElement(E.a,{to:"/applicant/resumes/edit/visibility?resume=".concat(m),target:"_blank"},i[e.trls.changeVisibility]))):null};S.displayName="components/VacancyResponseForm/VisibilityHint/VisibilityHint",S.trls={noOne:{toWhitelist:"vacancy.response.popup.visibility.noOne",employerToWhitelist:"vacancy.response.popup.visibility.noOne.companyInWhiteList",whitelistIsFull:"vacancy.response.popup.visibility.noOne.responseDisabled"},whitelist:{addEmployer:"vacancy.response.popup.visibility.addToWhiteList",whitelistIsFull:"vacancy.response.popup.visibility.limitExceeded"},blacklist:{removeEmployerMany:"vacancy.response.popup.visibility.removeFromBlackList.many",removeEmployerCurrent:"vacancy.response.popup.visibility.removeFromBlackList"},changeVisibility:"vacancy.response.popup.visibility.changeVisibility",and:"abstract.and"},S.propTypes={resume:i.a.object,visibility:i.a.object,vacancy:i.a.object,hidden:i.a.bool,trls:i.a.object};var R=Object(v.a)(S),w=function e(n){var t=n.resume,a=n.selected,s=n.single,c=n.hidden,i=n.setSelected,o=n.visibility,l=n.vacancy,u=n.trls,d=t.hash,m=t.title[0].string,v=t.isIncomplete;return r.a.createElement("div",{className:f()("vacancy-response-popup-resume",{"vacancy-response-popup-resume_single":s,"vacancy-response-popup-resume_selected":a})},r.a.createElement("div",{className:"vacancy-response-popup-resume__title"},r.a.createElement(g.a,{right:!0},s?r.a.createElement("span",{"data-qa":"resume-title"},m):r.a.createElement(h.a,{checked:a,onChange:i,id:"resume_".concat(d),labelProps:{"data-qa":"resume-title"},disabled:c},m)),c?r.a.createElement(E.a,{to:"/applicant/resumes/edit/visibility?resume=".concat(d),target:"_blank"},u[e.trls.resumeLink.toSettings]):r.a.createElement(E.a,{to:"/resume/".concat(d),target:"_blank",className:"vacancy-response-popup-resume__link","data-qa":"vacancy-response-view-resume"},u[e.trls.resumeLink.view])),r.a.createElement(R,{resume:t,visibility:o,vacancy:l,hidden:c}),v&&r.a.createElement("div",{className:"vacancy-response-popup-resume__hint"},r.a.createElement(p.c,null,u[e.trls.incompleteHint])))};w.displayName="components/VacancyResponseForm/Resume/Resume",w.trls={resumeLink:{view:"vacancy.response.popup.resume.link",toSettings:"vacancy.response.popup.resume.settings"},incompleteHint:"vacancy.response.popup.unfinished.hint"},w.propTypes={resume:i.a.object,selected:i.a.bool,single:i.a.bool,hidden:i.a.bool,setSelected:i.a.func,visibility:i.a.object,vacancy:i.a.object,trls:i.a.object};var k=Object(v.a)(w),A=t(1233),N=t(424);function T(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==t)return;var a,r,s=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(a=t.next()).done)&&(s.push(a.value),!n||s.length!==n);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw r}}return s}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var C=function e(n){var t=n.value,s=n.onChange,c=n.required,i=n.maxLength,o=n.trls,l=T(Object(a.useState)(!!c||!!t),2),u=l[0],p=l[1];return u?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"vacancy-response-popup-subtitle"},o[e.trls.title]),r.a.createElement(N.a,{rows:10,maxLength:i,noresize:!0,value:t,"data-qa":"vacancy-response-popup-form-letter-input",onChange:function(e){return s(e.target.value)}})):r.a.createElement(A.a,{onClick:function(){return p(!0)},"data-qa":"vacancy-response-letter-toggle"},o[e.trls.expand])};C.displayName="components/VacancyResponseForm/Letter/Letter",C.trls={expand:"vacancy.response.popup.letter",title:"vacancy.response.popup.letter"},C.propTypes={value:i.a.string,onChange:i.a.func,required:i.a.bool,maxLength:i.a.number,trls:i.a.object};var F=Object(v.a)(C),V=function e(n){var t=n.visible,a=n.topics,s=n.resumes,c=n.trls,i=a.filter((function(e){return!!s[e.resumeId]}));if(!t||!i.length)return null;var o=i.find((function(e){return e.invited})),l=o||i[0],u=c[o?e.trls.invited.text:e.trls.applied.text],p=c[o?e.trls.invited.link:e.trls.applied.link];return r.a.createElement("div",{className:"vacancy-response"},u," ",r.a.createElement(E.a,{to:1===i.length?"/applicant/negotiations/item?topicId=".concat(l.id):"/applicant/negotiations"},p))};V.displayName="components/VacancyResponseForm/AlreadyRespondedPlate/AlreadyRespondedPlate",V.trls={applied:{text:"vacancy.response.resumes.applied",link:"vacancy.response.resumes.applied.link"},invited:{text:"vacancy.response.resumes.invitation",link:"vacancy.response.resumes.invitation.link"}},V.propTypes={visible:i.a.bool,topics:i.a.array.isRequired,resumes:i.a.object.isRequired,trls:i.a.object};var q=Object(v.a)(V),x=t(1264),L=function e(n){var t,s,c,i=n.inconsistencies,o=n.selectedResumeId,l=n.resumes,p=n.vacancyId,d=n.trls,m=null==i||null===(t=i.resume)||void 0===t?void 0:t.find((function(e){return String(e.id)===String(o)})),v=null==m||null===(s=m.inconsistencies)||void 0===s||null===(c=s.inconsistency)||void 0===c?void 0:c[0],y=Object(a.useRef)();if(Object(a.useEffect)((function(){return u.a.sendHHEventElementShown(y.current,{name:"vacancy_response_inconsistency",resumeId:o,vacancyId:p,type:null==v?void 0:v.type})}),[y,v,o,p]),!(null==i?void 0:i.resume)||!m||!v)return null;var b=l.find((function(e){return String(e.id)===String(o)}));if(!b)return null;var f=b.title[0].string;return r.a.createElement(g.a,{top:!0},r.a.createElement("div",{ref:y},r.a.createElement(x.a,null,r.a.createElement("strong",null,"".concat(d[e.trls.caption]," ")),Object(j.format)(d[e.trls.inconsistencies[v.type]],{"{0}":"".concat(v.languageTrl," ").concat(d[e.trls.lang]),"{1}":f}))))};L.displayName="components/VacancyResponseForm/Inconsistencies/Inconcistencies",L.trls={caption:"vacancy.response.popup.inconsistency",lang:"vacancy.response.popup.inconsistency.lang",inconsistencies:{LANGUAGE:"vacancy.response.popup.inconsistency.language",AREA:"vacancy.response.popup.inconsistency.area",DISTANCE:"vacancy.response.popup.inconsistency.distance",EXPERIENCE:"vacancy.response.popup.inconsistency.experience"}},L.propTypes={inconsistencies:i.a.shape({resume:i.a.array}),selectedResumeId:i.a.string,vacancyId:i.a.number,resumes:i.a.array,trls:i.a.object};var P=Object(v.a)(L),B=t(1704),M=t(1627),U=t(1426),D=t(1620),H=t(1549),W=t(1579),G=t(107),$=t(1428),J=t(1495),z=t(1621);function X(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==t)return;var a,r,s=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(a=t.next()).done)&&(s.push(a.value),!n||s.length!==n);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==t.return||t.return()}finally{if(i)throw r}}return s}(e,n)||Q(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,n){if(e){if("string"==typeof e)return Y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Y(e,n):void 0}}function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var Z=Object(m.a)((function(e,n){d.a.setItem(e,n)}),100),ee=[Object(J.a)("vacancy_response")],ne=function e(n){var t,c,i=n.vacancyId,l=n.submitting,m=n.setSubmitting,v=n.onResponse,b=n.errorCode,f=n.onError,h=n.vacancyBodyFooterNodeRef,g=n.needRedirect,E=n.trls,j=n.render,O=void 0===j?function(){}:j,I=n.renderContent,S=void 0===I?function(){}:I,R=n.renderSubmit,w=void 0===R?function(){}:R,A=Object(s.useDispatch)(),N=Object(s.useSelector)((function(e){return e.applicantVacancyResponseStatuses[i]})),T=N.negotiations.topicList,_=N.shortVacancy,C=N.usedResumeIds.length>0,V=N.hiddenResumeIds.length>0,x=[].concat(K(N.unusedResumeIds),K(N.hiddenResumeIds)),L=x.map((function(e){return N.resumes[e]})),J=null===(t=L[0])||void 0===t?void 0:t.id,Q=X(Object(a.useState)(null===(c=L[0])||void 0===c?void 0:c.id),2),Y=Q[0],ne=Q[1],te=1===L.length,ae="vacancy_response_letter_".concat(i),re=X(Object(a.useState)(d.a.getItem(ae)||""),2),se=re[0],ce=re[1],ie=Object(a.useRef)();Object(a.useEffect)((function(){te&&Y!==J&&ne(J)}),[J,te,Y]),Object(a.useEffect)((function(){b===M.a&&se.trim().length&&f(null),Z(ae,se)}),[b,se,ae,f]);var oe=function(e){if(!_["@responseLetterRequired"]||se.trim().length){m(!0),f(null);var n=L.find((function(e){return String(e.id)===String(Y)})),t=!!(null==e?void 0:e.skipTest),a=new FormData(!t&&ie.current||void 0),r={vacancy_id:i,resume_hash:n.hash,ignore_postponed:!0,incomplete:n.isIncomplete,letter:se,lux:!0,withoutTest:t?"yes":"no"};Object.keys(r).forEach((function(e){a.append(e,r[e])})),U.a.post("/applicant/vacancy_response/popup",a).then((function(e){var n,t=e.data;d.a.removeItem(ae),v&&v();var a,r=[Object(D.c)({vacancyId:i,data:t.responseStatus}),Object(H.a)({vacancyId:i,labels:[W.a.response]})];if("response_label"in t&&u.a.sendEvent("applicant","response-sent-complete",t.response_label),Object(B.c)({dispatch:A,data:t,employerId:null===(n=_.company)||void 0===n?void 0:n.id}),g){var s="";"responsesStreak"in t&&(s="?responsesCount=".concat(t.responsesStreak.responsesCount,"&responsesRequired=")+"".concat(t.responsesStreak.responsesRequired)),A(Object(o.g)("/vacancy/".concat(i).concat(s)))}else"responsesStreak"in t&&r.push(Object(z.b)({vacancyId:i,data:t.responsesStreak}));A(r),(null==h?void 0:h.current)&&!g&&(a=h.current,Object(G.default)(a,{topOffset:0,centered:!1}))}),(function(e){var n,t=e.response,a=null==t||null===(n=t.data)||void 0===n?void 0:n.error;t&&"resume-incomplete"===a&&"redirectUrl"in t.data?A(Object(o.g)(t.data.redirectUrl)):f(a||"unknown"),g&&m(!1)})).finally((function(){!g&&m(!1)}))}else f(M.a)};return O({renderForm:function(){return r.a.createElement($.b,{onSubmit:oe,initialValues:{skipTest:!1},decorators:ee,render:function(n){var t=n.handleSubmit,a=n.form;return r.a.createElement(y.a,{onSubmit:t,ref:ie,name:"vacancy_response"},S(a),r.a.createElement("div",{className:"vacancy-response-popup-body"},r.a.createElement(q,{visible:C&&!l,topics:T,resumes:N.resumes}),x.length&&r.a.createElement(p.h,null,r.a.createElement("div",{className:"vacancy-response-popup-subtitle"},E[e.trls.resumesTitle]),r.a.createElement("div",{className:"vacancy-response-popup-resume-list","data-qa":"vacancy-response-resume-list"},V&&r.a.createElement(p.d,null,E[e.trls.hiddenResumes]),L.map((function(e){var n;return r.a.createElement(k,{resume:e,key:e.hash,selected:e.id===Y,single:te,hidden:N.hiddenResumeIds.includes(String(e.id)),setSelected:function(){return ne(e.id)},visibility:null===(n=N.resumeVisibility)||void 0===n?void 0:n[e.id],vacancy:_})}))),r.a.createElement(F,{value:se,onChange:ce,required:_["@responseLetterRequired"],maxLength:N.letterMaxLength}),r.a.createElement(P,{inconsistencies:N.resumeInconsistencies,selectedResumeId:Y,vacancyId:i,resumes:L}))||null,w({form:a})))}})}})};ne.trls={resumesTitle:"vacancy.response.popup.resumes",hiddenResumes:"vacancy.response.popup.hidden.resumes"},ne.propTypes={vacancyId:i.a.number,submitting:i.a.bool,setSubmitting:i.a.func,onResponse:i.a.func,errorCode:i.a.string,onError:i.a.func,vacancyBodyFooterNodeRef:i.a.object,submitTriggerRef:i.a.object,needRedirect:i.a.bool,trls:i.a.object,children:i.a.node,onSubmit:i.a.func};n.a=Object(v.a)(ne)}}]);
//# sourceMappingURL=12.5dedbb58ab676b2e10cf.js.map