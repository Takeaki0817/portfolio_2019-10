(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{132:function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=n(1),u=n(13);var p=function(e,t){return function(n){var i=e(n),r=n.displayName,o=void 0===r?n.name||"Component":r;return i.displayName="".concat(Object(u.upperFirst)(Object(u.camelCase)(t)),"(").concat(o,")"),i}};t.a=p((function(e){var t=0;return(function(n){function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a(this,s(o).apply(this,arguments))).instanceId=t++,e}var u,p,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(o,n),u=o,(p=[{key:"render",value:function(){return Object(l.f)(e,i({},this.props,{instanceId:this.instanceId}))}}])&&r(u.prototype,p),d&&r(u,d),o}(l.a))}),"withInstanceId")},194:function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=n(11),o=n(251),a=n(328),s=function(e){function FocusTrap(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FocusTrap);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(FocusTrap.__proto__||Object.getPrototypeOf(FocusTrap)).call(this,e));return t.setFocusTrapElement=function(e){t.focusTrapElement=e},"undefined"!=typeof document&&(t.previouslyFocusedElement=document.activeElement),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(FocusTrap,e),i(FocusTrap,[{key:"componentDidMount",value:function(){var e=this.props.focusTrapOptions,t={returnFocusOnDeactivate:!1};for(var n in e)e.hasOwnProperty(n)&&"returnFocusOnDeactivate"!==n&&(t[n]=e[n]);var i=o.findDOMNode(this.focusTrapElement);this.focusTrap=this.props._createFocusTrap(i,t),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()}},{key:"componentDidUpdate",value:function(e){if(e.active&&!this.props.active){var t={returnFocus:this.props.focusTrapOptions.returnFocusOnDeactivate||!1};this.focusTrap.deactivate(t)}else!e.active&&this.props.active&&this.focusTrap.activate();e.paused&&!this.props.paused?this.focusTrap.unpause():!e.paused&&this.props.paused&&this.focusTrap.pause()}},{key:"componentWillUnmount",value:function(){this.focusTrap.deactivate(),!1!==this.props.focusTrapOptions.returnFocusOnDeactivate&&this.previouslyFocusedElement&&this.previouslyFocusedElement.focus&&this.previouslyFocusedElement.focus()}},{key:"render",value:function(){var e=this,t=r.Children.only(this.props.children);return r.cloneElement(t,{ref:function(n){e.setFocusTrapElement(n),"function"==typeof t.ref&&t.ref(n)}})}}]),FocusTrap}(r.Component);s.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:a},e.exports=s},225:function(e,t,n){"use strict";(function(e){var i=n(18),r=n.n(i),o=n(4),a=n.n(o),s=n(5),c=n.n(s),l=n(6),u=n.n(l),p=n(7),d=n.n(p),g=n(16),h=n.n(g),m=n(8),f=n.n(m),v=n(1),b=n(2),y=n.n(b),_=n(14),k=n.n(_),S=n(51),E=n(0),w=n(3),C=n(226),O=n(50),N=function(t){function OptIn(e){var t;return a()(this,OptIn),(t=u()(this,d()(OptIn).call(this,e))).state={optIn:Object(O.a)(),error:!1},t.handleOptIn=t.handleOptIn.bind(h()(t)),t}return f()(OptIn,t),c()(OptIn,[{key:"handleOptIn",value:function(e){var t=this,n=!!e.target.checked,i=Object(w.i)("googlesitekit_tracking_optin");Object(O.b)(n),n&&Object(O.c)("tracking_plugin",this.props.optinAction),Object(S.default)({path:"/wp/v2/users/me",method:"POST",data:{meta:r()({},i,n)}}).then((function(){t.setState({optIn:n,error:!1})})).catch((function(e){t.setState({optIn:!n,error:{errorCode:e.code,errorMsg:e.message}})}))}},{key:"render",value:function(){var t=this.state,n=t.optIn,i=t.error,r=this.props,o=r.id,a=r.name,s=r.className,c=Object(E.sprintf)(
/* translators: %s: privacy policy URL */
Object(E.__)('Help us improve the Site Kit plugin by allowing tracking of anonymous usage stats. All data are treated in accordance with <a href="%s" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>',"google-site-kit"),"https://policies.google.com/privacy");return e.createElement("div",{className:k()("googlesitekit-opt-in",s)},e.createElement(C.a,{id:o,name:a,value:"1",checked:n,onChange:this.handleOptIn},e.createElement("span",{dangerouslySetInnerHTML:Object(w.t)(c,{ALLOWED_TAGS:["a"],ALLOWED_ATTR:["href","target","rel"]})})),i&&e.createElement("div",{className:"googlesitekit-error-text"},i.errorMsg))}}]),OptIn}(v.a);N.propTypes={id:y.a.string,name:y.a.string,className:y.a.string,optinAction:y.a.string},N.defaultProps={id:"googlesitekit-opt-in",name:"optIn"},t.a=N}).call(this,n(11))},226:function(e,t,n){"use strict";(function(e){var i=n(4),r=n.n(i),o=n(5),a=n.n(o),s=n(6),c=n.n(s),l=n(7),u=n.n(l),p=n(8),d=n.n(p),g=n(1),h=n(2),m=n.n(h),f=n(14),v=n.n(f),b=n(30),y=function(t){function Checkbox(e){var t;return r()(this,Checkbox),(t=c()(this,u()(Checkbox).call(this,e))).formFieldRef=Object(g.h)(),t.checkboxRef=Object(g.h)(),t}return d()(Checkbox,t),a()(Checkbox,[{key:"componentDidMount",value:function(){new b.e(this.formFieldRef.current).input=new b.c(this.checkboxRef.current)}},{key:"render",value:function(){var t=this.props,n=t.onChange,i=t.id,r=t.name,o=t.value,a=t.checked,s=t.disabled,c=t.children;return e.createElement("div",{className:"mdc-form-field",ref:this.formFieldRef},e.createElement("div",{className:v()("mdc-checkbox",{"mdc-checkbox--disabled":s}),ref:this.checkboxRef},e.createElement("input",{className:"mdc-checkbox__native-control",type:"checkbox",id:i,name:r,value:o,checked:a,disabled:s,onChange:n}),e.createElement("div",{className:"mdc-checkbox__background"},e.createElement("svg",{className:"mdc-checkbox__checkmark",viewBox:"0 0 24 24"},e.createElement("path",{className:"mdc-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),e.createElement("div",{className:"mdc-checkbox__mixedmark"}))),e.createElement("label",{htmlFor:i},c))}}]),Checkbox}(g.a);y.propTypes={onChange:m.a.func.isRequired,id:m.a.string.isRequired,name:m.a.string.isRequired,value:m.a.string.isRequired,checked:m.a.bool,disabled:m.a.bool,children:m.a.node.isRequired},y.defaultProps={checked:!1,disabled:!1},t.a=y}).call(this,n(11))},328:function(e,t,n){var i=n(329),r=n(261),o=null;function a(e){return setTimeout(e,0)}e.exports=function(e,t){var n=document,s="string"==typeof e?n.querySelector(e):e,c=r({returnFocusOnDeactivate:!0,escapeDeactivates:!0},t),l={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},u={activate:function(e){if(l.active)return;_(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=n.activeElement;var t=e&&e.onActivate?e.onActivate:c.onActivate;t&&t();return d(),u},deactivate:p,pause:function(){if(l.paused||!l.active)return;l.paused=!0,g()},unpause:function(){if(!l.paused||!l.active)return;l.paused=!1,d()}};return u;function p(e){if(l.active){g(),l.active=!1,l.paused=!1;var t=e&&void 0!==e.onDeactivate?e.onDeactivate:c.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:c.returnFocusOnDeactivate)&&a((function(){k(l.nodeFocusedBeforeActivation)})),u}}function d(){if(l.active)return o&&o.pause(),o=u,_(),a((function(){k(m())})),n.addEventListener("focusin",v,!0),n.addEventListener("mousedown",f,!0),n.addEventListener("touchstart",f,!0),n.addEventListener("click",y,!0),n.addEventListener("keydown",b,!0),u}function g(){if(l.active&&o===u)return n.removeEventListener("focusin",v,!0),n.removeEventListener("mousedown",f,!0),n.removeEventListener("touchstart",f,!0),n.removeEventListener("click",y,!0),n.removeEventListener("keydown",b,!0),o=null,u}function h(e){var t=c[e],i=t;if(!t)return null;if("string"==typeof t&&!(i=n.querySelector(t)))throw new Error("`"+e+"` refers to no known node");if("function"==typeof t&&!(i=t()))throw new Error("`"+e+"` did not return a node");return i}function m(){var e;if(!(e=null!==h("initialFocus")?h("initialFocus"):s.contains(n.activeElement)?n.activeElement:l.firstTabbableNode||h("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return e}function f(e){s.contains(e.target)||(c.clickOutsideDeactivates?p({returnFocus:!i.isFocusable(e.target)}):e.preventDefault())}function v(e){s.contains(e.target)||e.target instanceof Document||(e.stopImmediatePropagation(),k(l.mostRecentlyFocusedNode||m()))}function b(e){if(!1!==c.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void p();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){if(_(),e.shiftKey&&e.target===l.firstTabbableNode)return e.preventDefault(),void k(l.lastTabbableNode);if(!e.shiftKey&&e.target===l.lastTabbableNode)e.preventDefault(),k(l.firstTabbableNode)}(e)}function y(e){c.clickOutsideDeactivates||s.contains(e.target)||(e.preventDefault(),e.stopImmediatePropagation())}function _(){var e=i(s);l.firstTabbableNode=e[0]||m(),l.lastTabbableNode=e[e.length-1]||m()}function k(e){e!==n.activeElement&&(e&&e.focus?(e.focus(),l.mostRecentlyFocusedNode=e,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(e)&&e.select()):k(m()))}}},329:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],i=n.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,t){t=t||{};var n,o,s,c=[],p=[],d=new UntouchabilityChecker(e.ownerDocument||e),g=e.querySelectorAll(i);for(t.includeContainer&&r.call(e,i)&&(g=Array.prototype.slice.apply(g)).unshift(e),n=0;n<g.length;n++)a(o=g[n],d)&&(0===(s=l(o))?c.push(o):p.push({documentOrder:n,tabIndex:s,node:o}));return p.sort(u).map((function(e){return e.node})).concat(c)}function a(e,t){return!(!s(e,t)||function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||l(e)<0)}function s(e,t){return t=t||new UntouchabilityChecker(e.ownerDocument||e),!(e.disabled||function(e){return p(e)&&"hidden"===e.type}(e)||t.isUntouchable(e))}o.isTabbable=function(e,t){if(!e)throw new Error("No node provided");return!1!==r.call(e,i)&&a(e,t)},o.isFocusable=function(e,t){if(!e)throw new Error("No node provided");return!1!==r.call(e,c)&&s(e,t)};var c=n.concat("iframe").join(",");function l(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function u(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function p(e){return"INPUT"===e.tagName}function UntouchabilityChecker(e){this.doc=e,this.cache=[]}UntouchabilityChecker.prototype.hasDisplayNone=function(e,t){if(e===this.doc.documentElement)return!1;var n=function(e,t){for(var n=0,i=e.length;n<i;n++)if(t(e[n]))return e[n]}(this.cache,(function(t){return t===e}));if(n)return n[1];var i=!1;return"none"===(t=t||this.doc.defaultView.getComputedStyle(e)).display?i=!0:e.parentNode&&(i=this.hasDisplayNone(e.parentNode)),this.cache.push([e,i]),i},UntouchabilityChecker.prototype.isUntouchable=function(e){if(e===this.doc.documentElement)return!1;var t=this.doc.defaultView.getComputedStyle(e);return!!this.hasDisplayNone(e,t)||"hidden"===t.visibility},e.exports=o},435:function(e,t,n){"use strict";n.r(t),function(e,i){var r=n(9),o=n.n(r),a=n(4),s=n.n(a),c=n(5),l=n.n(c),u=n(6),p=n.n(u),d=n(7),g=n.n(d),h=n(16),m=n.n(h),f=n(8),v=n.n(f),b=n(1),y=n(13),_=n(0),k=n(63),S=n(34),E=n(22),w=n(10),C=n(3),O=n(437),N=n(444),j=function(t){function Setup(t){var n;s()(this,Setup),n=p()(this,g()(Setup).call(this,t));var i=e.googlesitekit.admin.connectURL,r=e.googlesitekit.setup,o=r.isAuthenticated,a=r.hasSearchConsoleProperty,c=r.isSiteKitConnected,l=r.isVerified,u=r.needReauthenticate,d=e.googlesitekit.permissions.canSetup;return n.state={canSetup:d,isAuthenticated:o,isVerified:l,needReauthenticate:u,hasSearchConsoleProperty:a,hasSearchConsolePropertyFromTheStart:a,connectURL:i,errorMsg:"",isSiteKitConnected:c,completeSetup:!1},n.siteConnectedSetup=n.siteConnectedSetup.bind(m()(n)),n.siteVerificationSetup=n.siteVerificationSetup.bind(m()(n)),n.searchConsoleSetup=n.searchConsoleSetup.bind(m()(n)),n.resetAndRestart=n.resetAndRestart.bind(m()(n)),n.completeSetup=n.completeSetup.bind(m()(n)),n.setErrorMessage=n.setErrorMessage.bind(m()(n)),n}return v()(Setup,t),l()(Setup,[{key:"resetAndRestart",value:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(w.c.set(w.a,"site","reset"));case 2:Object(C.d)(),this.setState({isSiteKitConnected:!1,isAuthenticated:!1,isVerified:!1,hasSearchConsoleProperty:!1,completeSetup:!1,errorMsg:""});case 4:case"end":return e.stop()}}),null,this)}},{key:"completeSetup",value:function(){this.setState({completeSetup:!0})}},{key:"siteConnectedSetup",value:function(e){this.setState({isSiteKitConnected:e})}},{key:"siteVerificationSetup",value:function(e){this.setState({isVerified:e})}},{key:"searchConsoleSetup",value:function(e){this.setState({hasSearchConsoleProperty:e})}},{key:"isSetupFinished",value:function(){var e=this.state,t=e.isSiteKitConnected,n=e.isAuthenticated,i=e.isVerified,r=e.hasSearchConsoleProperty,o=e.completeSetup;return t&&n&&i&&r&&o}},{key:"setErrorMessage",value:function(e){this.setState({errorMsg:e})}},{key:"getApplicableSteps",value:function(){var e,t=O.a,n=Object.keys(t);for(e=0;e<n.length;e++)t[n[e]].isApplicable(this.state)||delete t[n[e]];return t}},{key:"currentStep",value:function(e){var t,n=Object.keys(e);for(t=0;t<n.length-1;t++)if(!e[n[t]].isCompleted(this.state))return n[t];return n[t]}},{key:"stepStatus",value:function(e,t){return e[t].isCompleted(this.state)?"completed":t===this.currentStep(e)?"inprogress":""}},{key:"render",value:function(){var t=this,n=this.state,r=n.canSetup,o=n.isAuthenticated,a=n.isVerified,s=n.needReauthenticate,c=n.hasSearchConsoleProperty,l=n.connectURL,u=n.isSiteKitConnected;if(this.isSetupFinished()){var p=Object(C.m)("googlesitekit-dashboard",{notification:"authentication_success"});Object(y.delay)((function(){e.location.replace(p)}),500,"later")}var d=this.getApplicableSteps(),g=this.currentStep(d),h=d[g].Component,m=i.createElement(h,{siteConnectedSetup:this.siteConnectedSetup,connectURL:l,siteVerificationSetup:this.siteVerificationSetup,searchConsoleSetup:this.searchConsoleSetup,completeSetup:this.completeSetup,isSiteKitConnected:u,isAuthenticated:o,isVerified:a,needReauthenticate:s,hasSearchConsoleProperty:c,setErrorMessage:this.setErrorMessage,resetAndRestart:d.clientCredentials?this.resetAndRestart:void 0}),f=r,v=!f&&!o;return i.createElement(b.b,null,i.createElement(k.a,null),i.createElement("div",{className:"googlesitekit-wizard"},i.createElement("div",{className:"mdc-layout-grid"},i.createElement("div",{className:"mdc-layout-grid__inner"},i.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},i.createElement(E.a,null,i.createElement("section",{className:"googlesitekit-wizard-progress"},i.createElement("div",{className:"mdc-layout-grid"},i.createElement("div",{className:"mdc-layout-grid__inner"},f&&i.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},i.createElement("div",{className:"googlesitekit-wizard-progress__steps"},Object.keys(d).map((function(e,n){return i.createElement(N.a,{key:d[e].title,currentStep:g===e,title:d[e].title,step:n+1,status:t.stepStatus(d,e),warning:d[e].warning,error:d[e].error,stepKey:e})})))))),v&&i.createElement("div",{className:"googlesitekit-setup__footer"},i.createElement("div",{className:"mdc-layout-grid"},i.createElement("div",{className:"mdc-layout-grid__inner"},i.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},i.createElement("h1",{className:"googlesitekit-setup__title"},Object(_.__)("Authenticate Site Kit","google-site-kit")),i.createElement("p",{className:"googlesitekit-setup__description"},Object(_.__)("Please sign into your Google account to begin.","google-site-kit")),i.createElement(S.a,{href:"#",onClick:function(){Object(C.x)("plugin_setup","signin_with_google"),document.location=l}},Object(_.__)("Sign in with Google","google-site-kit"))))))),f&&m))))))}}]),Setup}(b.a);t.default=j}.call(this,n(15),n(11))},437:function(e,t,n){"use strict";var i=n(0),r=n(438),o=n(439),a=n(441),s=n(443),c={authentication:{title:Object(i.__)("Authenticate","google-site-kit"),required:!0,isApplicable:function(){return!0},isCompleted:function(e){return e.isSiteKitConnected&&e.isAuthenticated&&!e.needReauthenticate},Component:r.a},verification:{title:Object(i.__)("Verify URL","google-site-kit"),required:!0,isApplicable:function(){return!0},isCompleted:function(e){return e.isSiteKitConnected&&e.isAuthenticated&&e.isVerified},Component:o.a},seachConsoleProperty:{title:Object(i.__)("Connect Search Console","google-site-kit"),required:!0,isApplicable:function(){return!0},isCompleted:function(e){return e.isSiteKitConnected&&e.isAuthenticated&&e.isVerified&&e.hasSearchConsoleProperty},Component:a.a},completeSetup:{title:Object(i.__)("Finish","google-site-kit"),required:!1,isApplicable:function(){return!0},isCompleted:function(e){return e.isSiteKitConnected&&e.isAuthenticated&&e.isVerified&&e.hasSearchConsoleProperty},Component:s.a}};t.a=c},438:function(e,t,n){"use strict";(function(e){var i=n(4),r=n.n(i),o=n(5),a=n.n(o),s=n(6),c=n.n(s),l=n(7),u=n.n(l),p=n(8),d=n.n(p),g=n(1),h=n(2),m=n.n(h),f=n(0),v=n(3),b=n(34),y=n(21),_=n(225),k=n(62),S=function(t){function WizardStepAuthentication(){return r()(this,WizardStepAuthentication),c()(this,u()(WizardStepAuthentication).apply(this,arguments))}return d()(WizardStepAuthentication,t),a()(WizardStepAuthentication,[{key:"render",value:function(){var t=this.props,n=t.connectURL,i=t.needReauthenticate,r=t.resetAndRestart;return e.createElement("section",{className:"googlesitekit-wizard-step googlesitekit-wizard-step--two"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},e.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-wizard-step__title "},Object(f.__)("Authenticate with Google","google-site-kit")),e.createElement("p",null,Object(f.__)("Please sign into your Google account to begin.","google-site-kit")),i&&e.createElement("p",{className:"googlesitekit-error-text"},Object(f.__)("You did not grant access to one or more of the requested scopes. Please grant all scopes that you are prompted for.","google-site-kit")),e.createElement("p",null,e.createElement(b.a,{onClick:function(){Object(v.x)("plugin_setup","signin_with_google"),document.location=n}},Object(f.__)("Sign in with Google","google-site-kit")),r&&e.createElement(y.a,{className:"googlesitekit-wizard-step__back",onClick:r},Object(f.__)("Back","google-site-kit"))),e.createElement("div",{className:"googlesitekit-wizard-step__action googlesitekit-wizard-step__action--justify"},e.createElement(_.a,{optinAction:"analytics_optin_setup_fallback"}),e.createElement(k.a,null))))))}}]),WizardStepAuthentication}(g.a);S.propTypes={connectURL:m.a.string.isRequired,resetAndRestart:m.a.func},t.a=S}).call(this,n(11))},439:function(e,t,n){"use strict";(function(e){var i=n(70),r=n.n(i),o=n(4),a=n.n(o),s=n(5),c=n.n(s),l=n(6),u=n.n(l),p=n(7),d=n.n(p),g=n(8),h=n.n(g),m=n(1),f=n(2),v=n.n(f),b=n(440),y=function(t){function WizardStepVerification(){return a()(this,WizardStepVerification),u()(this,d()(WizardStepVerification).apply(this,arguments))}return h()(WizardStepVerification,t),c()(WizardStepVerification,[{key:"render",value:function(){var t=!this.props.isVerified;return e.createElement("section",{className:"googlesitekit-wizard-step googlesitekit-wizard-step--three"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},e.createElement(b.a,r()({shouldSetup:t},this.props))))))}}]),WizardStepVerification}(m.a);y.propTypes={siteVerificationSetup:v.a.func.isRequired},t.a=y}).call(this,n(11))},440:function(e,t,n){"use strict";(function(e,i){var r=n(9),o=n.n(r),a=n(4),s=n.n(a),c=n(5),l=n.n(c),u=n(6),p=n.n(u),d=n(7),g=n.n(d),h=n(16),m=n.n(h),f=n(8),v=n.n(f),b=n(1),y=n(2),_=n.n(y),k=n(0),S=n(3),E=n(30),w=n(10),C=n(34),O=n(35),N=n(62),j=function(t){function SiteVerification(e){var t;s()(this,SiteVerification);var n=(t=p()(this,g()(SiteVerification).call(this,e))).props,i=n.isAuthenticated,r=n.shouldSetup;return t.state={loading:i&&r,loadingMsg:Object(k.__)("Getting your verified sites…","google-site-kit"),siteURL:" ",selectedURL:"",errorCode:!1,errorMsg:""},t.onProceed=t.onProceed.bind(m()(t)),t}return v()(SiteVerification,t),l()(SiteVerification,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isAuthenticated,n=e.shouldSetup;t&&n&&this.requestSitePropertyList()}},{key:"requestSitePropertyList",value:function(){var t,n,i,r,a,s=this,c=this.props.setErrorMessage;o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,o.a.awrap(w.c.get(w.b,"site-verification","verification"));case 3:if(t=l.sent,n=t.verified,i=t.identifier,!n){l.next=16;break}return Object(S.x)("verification_setup","verification_check_true"),l.next=10,o.a.awrap(s.insertSiteVerification(i));case 10:if(!0!==l.sent.verified){l.next=14;break}return s.props.siteVerificationSetup(!0),l.abrupt("return",!0);case 14:l.next=17;break;case 16:Object(S.x)("verification_setup","verification_check_false");case 17:s.setState({loading:!1,siteURL:i}),l.next=26;break;case 20:l.prev=20,l.t0=l.catch(0),r=l.t0.message,Object(S.y)(l.t0.message)&&(a=JSON.parse(l.t0.message),r=a.error.message||l.t0.message),c(r),s.setState({loading:!1,errorCode:l.t0.code,errorMsg:r,siteURL:e.googlesitekit.admin.siteURL});case 26:case"end":return l.stop()}}),null,null,[[0,20]])}},{key:"insertSiteVerification",value:function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(w.c.set(w.b,"site-verification","verification",{siteURL:e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}},{key:"onProceed",value:function(){var t,n,i,r;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=this.props.setErrorMessage,n=this.state.siteURL?this.state.siteURL:e.googlesitekit.admin.siteURL,t(""),this.setState({loading:!0,loadingMsg:Object(k.__)("Verifying…","google-site-kit"),errorCode:!1,errorMsg:""}),a.prev=4,a.next=7,o.a.awrap(this.insertSiteVerification(n));case 7:!0===a.sent.verified&&(Object(S.x)("verification_setup","verification_insert_tag"),this.props.siteVerificationSetup(!0)),a.next=17;break;case 11:a.prev=11,a.t0=a.catch(4),i=a.t0.message,Object(S.y)(a.t0.message)&&(r=JSON.parse(a.t0.message),i=r.error.message||a.t0.message),t(i),this.setState({loading:!1,errorCode:a.t0.code,errorMsg:i});case 17:case"end":return a.stop()}}),null,this,[[4,11]])}},{key:"renderForm",value:function(){var e=this.state,t=e.loading,n=e.loadingMsg,r=e.siteURL,o=i.createElement(b.b,null,n&&i.createElement("p",null,n),i.createElement(O.a,null));return t?o:i.createElement(b.b,null,i.createElement("div",{className:"googlesitekit-wizard-step__inputs"},i.createElement(E.k,{label:Object(k.__)("Website Address","google-site-kit"),name:"siteProperty",floatingLabelClassName:"mdc-floating-label--float-above",outlined:!0,disabled:!0},i.createElement(E.b,{value:r}))),i.createElement("div",{className:"googlesitekit-wizard-step__action googlesitekit-wizard-step__action--justify"},i.createElement(C.a,{onClick:this.onProceed},Object(k.__)("Continue","google-site-kit")),i.createElement(N.a,null)))}},{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,n=e.shouldSetup,r=this.state.errorMsg;return n?i.createElement(b.b,null,i.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-wizard-step__title "},Object(k.__)("Verify URL","google-site-kit")),i.createElement("p",{className:"googlesitekit-wizard-step__text"},Object(k.__)("We will need to verify your URL for Site Kit.","google-site-kit")),r&&0<r.length&&i.createElement("p",{className:"googlesitekit-error-text"},r),t&&this.renderForm()):SiteVerification.renderSetupDone()}}],[{key:"renderSetupDone",value:function(){return i.createElement(b.b,null,i.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-wizard-step__title "},Object(k.__)("Verify URL","google-site-kit")),i.createElement("p",{className:"googlesitekit-wizard-step__text"},Object(k.__)("Congratulations, your site has been verified!","google-site-kit")))}}]),SiteVerification}(b.a);j.propTypes={isAuthenticated:_.a.bool.isRequired,shouldSetup:_.a.bool.isRequired,siteVerificationSetup:_.a.func.isRequired,completeSetup:_.a.func,setErrorMessage:_.a.func.isRequired},t.a=j}).call(this,n(15),n(11))},441:function(e,t,n){"use strict";(function(e){var i=n(70),r=n.n(i),o=n(4),a=n.n(o),s=n(5),c=n.n(s),l=n(6),u=n.n(l),p=n(7),d=n.n(p),g=n(8),h=n.n(g),m=n(1),f=n(2),v=n.n(f),b=n(442),y=function(t){function WizardStepSearchConsoleProperty(){return a()(this,WizardStepSearchConsoleProperty),u()(this,d()(WizardStepSearchConsoleProperty).apply(this,arguments))}return h()(WizardStepSearchConsoleProperty,t),c()(WizardStepSearchConsoleProperty,[{key:"render",value:function(){var t=this.props,n=t.isVerified,i=t.hasSearchConsoleProperty,o=n&&!i;return e.createElement("section",{className:"googlesitekit-wizard-step googlesitekit-wizard-step--four"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},o?e.createElement(b.a,r()({shouldSetup:o},this.props)):b.a.connected()))))}}]),WizardStepSearchConsoleProperty}(m.a);y.propTypes={searchConsoleSetup:v.a.func.isRequired},t.a=y}).call(this,n(11))},442:function(e,t,n){"use strict";(function(e,i){var r=n(9),o=n.n(r),a=n(4),s=n.n(a),c=n(5),l=n.n(c),u=n(6),p=n.n(u),d=n(7),g=n.n(d),h=n(16),m=n.n(h),f=n(8),v=n.n(f),b=n(1),y=n(2),_=n.n(y),k=n(0),S=n(3),E=n(10),w=n(35),C=n(62),O=n(30),N=n(34),j=function(t){function SearchConsole(t){var n;s()(this,SearchConsole),n=p()(this,g()(SearchConsole).call(this,t));var i=e.googlesitekit.admin.siteURL;return n.state={loading:!0,sites:!1,selectedURL:i,siteURL:i,connected:!1,errorCode:!1,errorMsg:""},n.handleURLSelect=n.handleURLSelect.bind(m()(n)),n.insertPropertyToSearchConsole=n.insertPropertyToSearchConsole.bind(m()(n)),n.submitPropertyEventHandler=n.submitPropertyEventHandler.bind(m()(n)),n}return v()(SearchConsole,t),l()(SearchConsole,[{key:"componentDidMount",value:function(){var e,t,n;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e=this.props,t=e.isAuthenticated,n=e.shouldSetup,t&&n){i.next=3;break}return i.abrupt("return");case 3:this.requestSearchConsoleSiteList();case 4:case"end":return i.stop()}}),null,this)}},{key:"requestSearchConsoleSiteList",value:function(){var e,t=this,n=this.props.setErrorMessage;o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,o.a.awrap(E.c.get(E.b,"search-console","matched-sites"));case 3:if(1!==(e=i.sent).length){i.next=9;break}return i.next=7,o.a.awrap(t.insertPropertyToSearchConsole(e[0].siteURL));case 7:return t.props.searchConsoleSetup(e[0].siteURL),i.abrupt("return");case 9:if(e.length){i.next=11;break}throw{code:"no_property_matched",message:Object(k.__)("Your site has not been added to Search Console yet. Would you like to add it now?","google-site-kit")};case 11:throw n(""),t.setState({loading:!1,selectedURL:e[0].siteURL,sites:e}),{code:"multiple_properties_matched",message:Object(k.sprintf)(
/* translators: %d: the number of matching properties */
Object(k.__)("We found %d existing accounts. Please choose which one to use below.","google-site-kit"),e.length)};case 16:i.prev=16,i.t0=i.catch(0),n(i.t0.message),t.setState({loading:!1,errorCode:i.t0.code,errorMsg:i.t0.message});case 20:case"end":return i.stop()}}),null,null,[[0,16]])}},{key:"insertPropertyToSearchConsole",value:function(e){var t,n=arguments;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=n.length>1&&void 0!==n[1]&&n[1],i.next=3,o.a.awrap(E.c.set(E.b,"search-console","site",{siteURL:e}));case 3:t&&Object(S.x)("search_console_setup","add_new_sc_property"),this.setState({loading:!1,connected:!0});case 5:case"end":return i.stop()}}),null,this)}},{key:"submitPropertyEventHandler",value:function(){var e=this,t=this.state,n=t.selectedURL,i=t.errorCode,r=this.props.setErrorMessage;o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.awrap(e.insertPropertyToSearchConsole(n,"no_property_matched"===i));case 3:r(""),e.props.searchConsoleSetup(n),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),r(t.t0.message[0].message),e.setState({loading:!1,errorCode:t.t0.code,errorMsg:t.t0.message[0].message});case 11:case"end":return t.stop()}}),null,null,[[0,7]])}},{key:"handleURLSelect",value:function(e,t){this.setState({selectedURL:t.getAttribute("data-value")})}},{key:"matchedForm",value:function(){var e=this.state,t=e.sites,n=e.selectedURL;if(!t)return null;var r=t.map((function(e){var t=e.siteURL;return t.startsWith("sc-domain:")&&(
/* translators: %s: Search Console property domain name */
t=Object(k.sprintf)(Object(k.__)("%s (domain property)","google-site-kit"),t.replace(/^sc-domain:/,""))),{label:t,value:e.siteURL}}));return i.createElement(b.b,null,i.createElement("div",{className:"googlesitekit-setup-module__inputs"},i.createElement(O.j,{enhanced:!0,name:"siteProperty",label:Object(k.__)("Choose URL","google-site-kit"),outlined:!0,onEnhancedChange:this.handleURLSelect,options:r,value:n})),i.createElement("div",{className:"googlesitekit-wizard-step__action googlesitekit-wizard-step__action--justify"},i.createElement(N.a,{onClick:this.submitPropertyEventHandler},Object(k.__)("Continue","google-site-kit")),i.createElement(C.a,null)))}},{key:"noSiteForm",value:function(){var e=this.state.siteURL;return i.createElement(b.b,null,i.createElement("div",{className:"googlesitekit-setup-module__inputs"},i.createElement(O.k,{label:Object(k.__)("Website Address","google-site-kit"),name:"siteProperty",floatingLabelClassName:"mdc-floating-label--float-above",outlined:!0,disabled:!0},i.createElement(O.b,{value:e}))),i.createElement("div",{className:"googlesitekit-wizard-step__action googlesitekit-wizard-step__action--justify"},i.createElement(N.a,{onClick:this.submitPropertyEventHandler},Object(k.__)("Continue","google-site-kit")),i.createElement(C.a,null)))}},{key:"renderForm",value:function(){var e=this.state,t=e.loading,n=e.sites;return t?i.createElement(b.b,null,i.createElement("p",null,Object(k.__)("We’re locating your Search Console account.","google-site-kit")),i.createElement(w.a,null)):0===n.length?this.noSiteForm():this.matchedForm()}},{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,n=e.shouldSetup,r=this.state,o=r.errorMsg,a=r.connected;return!n||a?SearchConsole.connected():i.createElement("section",{className:"googlesitekit-setup-module googlesitekit-setup-module--search-console"},i.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-setup-module__title "},Object(k._x)("Search Console","Service name","google-site-kit")),o&&0<o.length&&i.createElement("p",{className:"googlesitekit-error-text"},o),t&&n&&this.renderForm())}}],[{key:"connected",value:function(){return i.createElement("section",{className:"googlesitekit-setup-module googlesitekit-setup-module--search-console"},i.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-setup-module__title "},Object(k._x)("Search Console","Service name","google-site-kit")),i.createElement("p",{className:"googlesitekit-setup-module__text--no-margin"},Object(k.__)("Your Search Console is set up with Site Kit.","google-site-kit")))}}]),SearchConsole}(b.a);j.propTypes={isAuthenticated:_.a.bool.isRequired,shouldSetup:_.a.bool.isRequired,searchConsoleSetup:_.a.func.isRequired,setErrorMessage:_.a.func.isRequired},t.a=j}).call(this,n(15),n(11))},443:function(e,t,n){"use strict";(function(e,i){var r=n(4),o=n.n(r),a=n(5),s=n.n(a),c=n(6),l=n.n(c),u=n(7),p=n.n(u),d=n(8),g=n.n(d),h=n(1),m=n(2),f=n.n(m),v=n(0),b=n(3),y=n(34),_=function(t){function WizardStepCompleteSetup(t){var n;return o()(this,WizardStepCompleteSetup),n=l()(this,p()(WizardStepCompleteSetup).call(this,t)),e.googlesitekit.setup.hasSearchConsoleProperty?Object(b.x)("plugin_setup","user_verified"):Object(b.x)("plugin_setup","site_verified"),n}return g()(WizardStepCompleteSetup,t),s()(WizardStepCompleteSetup,[{key:"render",value:function(){return i.createElement("section",{className:"googlesitekit-wizard-step googlesitekit-wizard-step--five"},i.createElement("div",{className:"mdc-layout-grid"},i.createElement("div",{className:"mdc-layout-grid__inner"},i.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-9-desktop "},i.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-wizard-step__title "},Object(v.__)("Congratulations!","google-site-kit")),i.createElement("p",null,Object(v.__)("You successfully completed the Site Kit setup and connected Search Console. Check the dashboard for more services to connect.","google-site-kit")),i.createElement("div",{className:"googlesitekit-wizard-step__action"},i.createElement(y.a,{id:"wizard-step-five-proceed",onClick:this.props.completeSetup},Object(v.__)("Go to Dashboard","google-site-kit")))),i.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-3-desktop "},i.createElement("div",{className:"googlesitekit-rocket"},i.createElement("img",{className:"googlesitekit-rocket__body",alt:"",src:e.googlesitekit.admin.assetsRoot+"images/rocket-body.png"}),i.createElement("img",{className:"googlesitekit-rocket__clouds",alt:"",src:e.googlesitekit.admin.assetsRoot+"images/rocket-clouds.png"}),i.createElement("img",{className:"googlesitekit-rocket__dust",alt:"",src:e.googlesitekit.admin.assetsRoot+"images/rocket-dust.png"}))))))}}]),WizardStepCompleteSetup}(h.a);_.propTypes={completeSetup:f.a.func.isRequired},t.a=_}).call(this,n(15),n(11))},444:function(e,t,n){"use strict";var i=n(4),r=n.n(i),o=n(5),a=n.n(o),s=n(6),c=n.n(s),l=n(7),u=n.n(l),p=n(8),d=n.n(p),g=n(1),h=n(2),m=n.n(h),f=n(11),v=n.n(f),b=n(14),y=n.n(b),_=n(25),k=function(e){function WizardProgressStep(){return r()(this,WizardProgressStep),c()(this,u()(WizardProgressStep).apply(this,arguments))}return d()(WizardProgressStep,e),a()(WizardProgressStep,[{key:"render",value:function(){var e=this.props,t=e.currentStep,n=e.step,i=e.title,r=e.status,o=e.warning,a=e.error,s=e.stepKey,c=r;o?c="warning":a&&(c="error");var l=!1;switch(c){case"warning":case"error":l=v.a.createElement(_.a,{id:"exclamation",height:"12",width:"2"});break;case"completed":l=v.a.createElement(_.a,{id:"check",height:"12",width:"16"})}return v.a.createElement("div",{className:y()("googlesitekit-wizard-progress-step","googlesitekit-wizard-progress-step--".concat(n),"googlesitekit-wizard-progress-step--".concat(s),{"googlesitekit-wizard-progress-step--current":t})},v.a.createElement("div",{className:"googlesitekit-wizard-progress-step__number-wrapper"},v.a.createElement("div",{className:y()("googlesitekit-wizard-progress-step__number","googlesitekit-wizard-progress-step__number--".concat(c))},v.a.createElement("span",{className:y()("googlesitekit-wizard-progress-step__number-text","googlesitekit-wizard-progress-step__number-text--".concat(c))},n),l&&v.a.createElement("span",{className:y()("googlesitekit-wizard-progress-step__number-icon","googlesitekit-wizard-progress-step__number-icon--".concat(c))},l))),v.a.createElement("p",{className:"googlesitekit-wizard-progress-step__text"},i))}}]),WizardProgressStep}(g.a);k.propTypes={currentStep:m.a.bool.isRequired,step:m.a.number.isRequired,title:m.a.string,status:m.a.string,warning:m.a.bool,error:m.a.bool},k.defaultProps={title:"",status:"",warning:!1,error:!1,removeFirstStep:!1},t.a=k},62:function(e,t,n){"use strict";(function(e){n(1);var i=n(0),r=n(21);t.a=function HelpLink(){var t=Object(i.__)("Need help?","google-site-kit");return e.createElement(r.a,{className:"googlesitekit-help-link",href:"https://sitekit.withgoogle.com/documentation/",external:!0},t)}}).call(this,n(11))}}]);