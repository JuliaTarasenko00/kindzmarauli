import{_ as C}from"./defaultTheme-ZRyStqT3.js";import{_ as D,T as N}from"./TransitionGroupContext-RMZt82C4.js";import{a0 as x,R as v}from"./index-bcBMVgA9.js";function _(a,s=166){let r;function i(...e){const t=()=>{a.apply(this,e)};clearTimeout(r),r=setTimeout(t,s)}return i.clear=()=>{clearTimeout(r)},i}function O(a){return a&&a.ownerDocument||document}function w(a){return O(a).defaultView||window}const S={disabled:!1};var k=function(s){return s.scrollTop},m="unmounted",p="exited",f="entering",h="entered",T="exiting",l=function(a){D(s,a);function s(i,e){var t;t=a.call(this,i,e)||this;var n=e,o=n&&!n.isMounting?i.enter:i.appear,u;return t.appearStatus=null,i.in?o?(u=p,t.appearStatus=f):u=h:i.unmountOnExit||i.mountOnEnter?u=m:u=p,t.state={status:u},t.nextCallback=null,t}s.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===m?{status:p}:null};var r=s.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==h&&(t=f):(n===f||n===h)&&(t=T)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e=this.props.timeout,t,n,o;return t=n=o=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,o=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:o}},r.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this);n&&k(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:m})},r.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,u=this.props.nodeRef?[o]:[x.findDOMNode(this),o],c=u[0],E=u[1],b=this.getTimeouts(),g=o?b.appear:b.enter;if(!e&&!n||S.disabled){this.safeSetState({status:h},function(){t.props.onEntered(c)});return}this.props.onEnter(c,E),this.safeSetState({status:f},function(){t.props.onEntering(c,E),t.onTransitionEnd(g,function(){t.safeSetState({status:h},function(){t.props.onEntered(c,E)})})})},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:x.findDOMNode(this);if(!t||S.disabled){this.safeSetState({status:p},function(){e.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:T},function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:p},function(){e.props.onExited(o)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this),o=e==null&&!this.props.addEndListener;if(!n||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],c=u[0],E=u[1];this.props.addEndListener(c,E)}e!=null&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var o=C(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return v.createElement(N.Provider,{value:null},typeof n=="function"?n(e,o):v.cloneElement(v.Children.only(n),o))},s}(v.Component);l.contextType=N;l.propTypes={};function d(){}l.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};l.UNMOUNTED=m;l.EXITED=p;l.ENTERING=f;l.ENTERED=h;l.EXITING=T;const I=l,L=a=>a.scrollTop;function U(a,s){var r,i;const{timeout:e,easing:t,style:n={}}=a;return{duration:(r=n.transitionDuration)!=null?r:typeof e=="number"?e:e[s.mode]||0,easing:(i=n.transitionTimingFunction)!=null?i:typeof t=="object"?t[s.mode]:t,delay:n.transitionDelay}}export{I as T,O as a,_ as d,U as g,w as o,L as r};