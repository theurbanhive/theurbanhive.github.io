define("@widget/SUBSCRIBE/c/bs-subscribe-form-d75ab79a.js",["exports"],(function(e){"use strict";function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e},t.apply(this,arguments)}var o=(global.keyMirror||guac.keymirror)({SECTION_TITLE_REND:null,FORM_DESC_REND:null,CONFIRM_TEXT_REND:null,CONFIRM_DESC_REND:null,SUBSCRIBE_LABEL_REND:null,PLACEHOLDER_TEXT_REND:null,VERIFICATION_TEXT_REND:null,SUBSCRIBE_INNER_FORM_REND:null,SUBSCRIBE_EMAIL_ERR_REND:null,SUBSCRIBE_SUBMIT_BUTTON_REND:null,SECTION_BACKGROUND:null,COUPON_DESC_REND:null,COUPON_CODE_REND:null,COUPON_CODE_FETCHING:null}),s={email:{regex:/^([a-zA-Z0-9_\-.+]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i}};class a extends(global.React||guac.react).Component{constructor(e){super(e),this.onSubmit=this.onSubmit.bind(this),this.handleChange=this.handleChange.bind(this),this.validateForm=this.validateForm.bind(this),this.state={input:"",isValid:!0}}handleChange(e){this.setState({input:e.target.value})}buildRequestBody(){const{accountId:e,websiteId:t,locale:o,inputPlaceholder:s}=this.props;return{accountId:e,websiteId:t,locale:o,formData:[{label:s,value:this.state.input}]}}sendForm(e){const{formSubmitHost:t}=this.props;if(!t)return!1;var o=new XMLHttpRequest;return o.open("POST",`${t}/v1/subscriber`),o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.onreadystatechange=this.handleSubmitResponse,o.send(JSON.stringify(e)),!0}validateForm(){let e=!0;return e=s.email.regex.test(this.state.input),this.setState({isValid:e}),e}validateAndSend(){if(this.validateForm()){const e=this.buildRequestBody();this.sendForm(e),this.props.onSubmit()}}onSubmit(e){e.preventDefault(),this.validateAndSend()}render(){const{input:e,isValid:t}=this.state,{inputPlaceholder:s,subscribeButtonLabel:a,staticContent:r={}}=this.props,{defaultButtonLabel:n,emailErrorMessage:l}=r,p=(0,(global.Core||guac["@wsb/guac-widget-core"]).UX2.utils.TCCLUtils.getTCCLString)({eid:"ux2.gem-subscribe.submit_form.click",type:"click"});return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.InputGroup,{input:{placeholder:s,onChange:this.handleChange,value:e},button:{children:a||n,"data-tccl":p,"data-aid":o.SUBSCRIBE_SUBMIT_BUTTON_REND},error:!t&&l,errorProps:{"data-aid":o.SUBSCRIBE_EMAIL_ERR_REND},onSubmit:this.onSubmit})}}a.propTypes={accountId:(global.PropTypes||guac["prop-types"]).string,websiteId:(global.PropTypes||guac["prop-types"]).string,formSubmitHost:(global.PropTypes||guac["prop-types"]).string,category:(global.PropTypes||guac["prop-types"]).string,formSuccessMessage:(global.PropTypes||guac["prop-types"]).string,formFields:(global.PropTypes||guac["prop-types"]).array,formFieldVariationOptions:(global.PropTypes||guac["prop-types"]).object,onSubmit:(global.PropTypes||guac["prop-types"]).func,subscribeButtonLabel:(global.PropTypes||guac["prop-types"]).string,inputPlaceholder:(global.PropTypes||guac["prop-types"]).string,staticContent:(global.PropTypes||guac["prop-types"]).object,locale:(global.PropTypes||guac["prop-types"]).string.isRequired};const r={verification:{wordWrap:"break-word",marginBottom:"medium"}},n=()=>(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Loader,{"data-aid":o.COUPON_CODE_FETCHING,size:"medium",style:{marginTop:"xlarge",opacity:"0.5"}});class l extends(global.React||guac.react).Component{constructor(e){super(e),this.state={code:null,loaded:!1},this.loadCouponData=this.loadCouponData.bind(this)}componentDidMount(){this.loadCouponData()}loadCouponData(){const{olsConfigHost:e}=this.props;if(!e)return;const t=new XMLHttpRequest,o=new Date;t.open("GET",`${e}/api/v3/config?ts=${+o}`,!0),t.withCredentials=!0,t.setRequestHeader("Accept","*/*"),t.onload=()=>{let e={},o=null;try{e=t.response?JSON.parse(t.response):{}}catch(t){e={}}e.subscribe_coupon&&(o=e.subscribe_coupon.code),this.setState({code:o,loaded:!0})},t.onerror=()=>{this.setState({loaded:!0})},t.send()}render(){const{couponDiscount:e,couponDiscountMessage:t}=this.props,{code:s,loaded:a}=this.state;if(!a)return(global.React||guac.react).createElement(n,null);if(!e||!s)return null;const{Block:l,Text:p}=(global.Core||guac["@wsb/guac-widget-core"]).UX2.Element,i=t&&t.replace("{coupon_code}",s.toUpperCase()).replace("{discount}",e);return(global.React||guac.react).createElement(l,null,(global.React||guac.react).createElement(p,{style:r.verification,"data-aid":o.COUPON_DESC_REND},i),(global.React||guac.react).createElement("input",{type:"hidden",name:"coupon_code",value:s,"data-aid":o.COUPON_CODE_REND}))}}l.propTypes={olsConfigHost:(global.PropTypes||guac["prop-types"]).string.isRequired,couponDiscount:(global.PropTypes||guac["prop-types"]).number.isRequired,couponDiscountMessage:(global.PropTypes||guac["prop-types"]).string.isRequired};const p={container:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",marginHorizontal:"auto",maxWidth:"90%","@md":{maxWidth:"80%"}},verification:{wordWrap:"break-word",marginBottom:"medium"},success:{wordWrap:"break-word",marginBottom:"medium"}},i=e=>{let{enable:t,message:s}=e;if(!t)return null;const a={style:p.success,tag:"p","data-aid":o.CONFIRM_TEXT_REND,"data-route":"confirmationMessage"};return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Text.Major,a,s)};i.propTypes={enable:(global.PropTypes||guac["prop-types"]).bool,message:(global.PropTypes||guac["prop-types"]).string};const c=e=>{let{enable:t,text:s}=e;return t?(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Text,{style:p.verification,"data-aid":o.CONFIRM_DESC_REND},s):null};c.propTypes={enable:(global.PropTypes||guac["prop-types"]).bool,text:(global.PropTypes||guac["prop-types"]).string};class u extends(global.React||guac.react).PureComponent{render(){const{formSuccessMessage:e,verificationText:t,showCoupon:o,olsConfigHost:s,couponDiscount:a,couponDiscountMessage:r}=this.props;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Group.Group,{style:p.container},(global.React||guac.react).createElement(i,{enable:!!e,message:e}),(global.React||guac.react).createElement(c,{enable:!o,text:t}),o?(global.React||guac.react).createElement(l,{olsConfigHost:s,couponDiscount:a,couponDiscountMessage:r}):null)}}u.propTypes={formSuccessMessage:(global.PropTypes||guac["prop-types"]).string,category:(global.PropTypes||guac["prop-types"]).string,verificationText:(global.PropTypes||guac["prop-types"]).string,showCoupon:(global.PropTypes||guac["prop-types"]).bool,olsConfigHost:(global.PropTypes||guac["prop-types"]).string,couponDiscount:(global.PropTypes||guac["prop-types"]).number,couponDiscountMessage:(global.PropTypes||guac["prop-types"]).string},u.defaultProps={formSuccessMessage:"",category:"",verificationText:"",showCoupon:!1,olsConfigHost:"",couponDiscount:0};var g={local:{olsHost:"https://{websiteId}.onlinestore.dev-godaddy.com",olsPublishedSiteHost:"https://{websiteId}.onlinestore.dev-godaddy.com",formSubmitHost:"https://gem.apps.dev-godaddy.com"},development:{olsHost:"https://{websiteId}.onlinestore.dev-godaddy.com",olsPublishedSiteHost:"https://{websiteId}.onlinestore.dev-godaddy.com",formSubmitHost:"https://gem.apps.dev-godaddy.com"},test:{olsHost:"https://{websiteId}.onlinestore.test-godaddy.com",olsPublishedSiteHost:"https://{websiteId}.mysimplestore.test-godaddy.com",formSubmitHost:"https://gem.apps.test-godaddy.com"},production:{olsHost:"https://{websiteId}.onlinestore.godaddy.com",olsPublishedSiteHost:"https://{websiteId}.mysimplestore.com",formSubmitHost:"https://gem.apps.godaddy.com"}};class d extends(global.React||guac.react).Component{constructor(e){super(e),this.state={formSubmitted:!1},this.onSubmit=this.onSubmit.bind(this)}onSubmit(){this.setState({formSubmitted:!0})}renderDescriptionSection(){let{forceCouponDescription:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{description:t,couponDescription:s}=this.props,a=e||this.shouldShowCoupon(),r=a?s:t;return r?(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Text,{style:{wordWrap:"break-word",textAlign:"center",marginBottom:"small"},"data-aid":o.FORM_DESC_REND,"data-route":a?"couponDescription":"description"},r):null}renderSectionTitle(e,t,s){return e?(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Element.Heading.Middle,{"data-aid":o.SECTION_TITLE_REND,"data-route":"sectionTitle",isInternalPage:t,order:s,style:{wordWrap:"break-word",textAlign:"center"}},e):null}getFormSubmitHost(){const{env:e}=this.props;return(g&&g[e]||{}).formSubmitHost}getOlsConfigHost(){const{env:e,renderMode:t,websiteId:o}=this.props,s=g&&g[e]||{};return(("PUBLISH"===t?s.olsPublishedSiteHost:s.olsHost)||"").replace("{websiteId}",o)}shouldShowCoupon(){const{hasNonCommercePlan:e,couponToggleHidden:t,couponToggle:o}=this.props;return Boolean(!e&&!t&&o)}render(){const{category:e,section:s,confirmationMessage:r,staticContent:n,couponConfirmationMessage:l,couponDiscount:p,couponDiscountMessage:i}=this.props,{verificationText:c}=n;if(this.state.formSubmitted)return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Base,{category:e,section:s},(global.React||guac.react).createElement(u,{formSuccessMessage:this.shouldShowCoupon()?l:r,verificationText:c,olsConfigHost:this.getOlsConfigHost(),showCoupon:this.shouldShowCoupon(),couponDiscount:p,couponDiscountMessage:i}));const g=(global.Core||guac["@wsb/guac-widget-core"]).UX2.Component.Grid;return(global.React||guac.react).createElement((global.Core||guac["@wsb/guac-widget-core"]).UX2.Base,{category:e,section:s},(global.React||guac.react).createElement(g,{bottom:!1,"data-aid":o.SUBSCRIBE_INNER_FORM_REND,inset:!0},(global.React||guac.react).createElement(g.Cell,null,this.renderDescriptionSection(),(global.React||guac.react).createElement(a,t({formSubmitHost:this.getFormSubmitHost(),onSubmit:this.onSubmit},this.props)))))}}d.propTypes={category:(global.PropTypes||guac["prop-types"]).string,formTitle:(global.PropTypes||guac["prop-types"]).string,section:(global.PropTypes||guac["prop-types"]).string,confirmationMessage:(global.PropTypes||guac["prop-types"]).string,description:(global.PropTypes||guac["prop-types"]).string,env:(global.PropTypes||guac["prop-types"]).string,renderMode:(global.PropTypes||guac["prop-types"]).string.isRequired,websiteId:(global.PropTypes||guac["prop-types"]).string.isRequired,staticContent:(global.PropTypes||guac["prop-types"]).object,locale:(global.PropTypes||guac["prop-types"]).string,hasNonCommercePlan:(global.PropTypes||guac["prop-types"]).boolean,couponToggleHidden:(global.PropTypes||guac["prop-types"]).boolean,couponToggle:(global.PropTypes||guac["prop-types"]).boolean,couponDescription:(global.PropTypes||guac["prop-types"]).string,couponConfirmationMessage:(global.PropTypes||guac["prop-types"]).string,couponDiscount:(global.PropTypes||guac["prop-types"]).number,couponDiscountMessage:(global.PropTypes||guac["prop-types"]).string},e.D=o,e.F=u,e.I=a,e.S=d,e._=t})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-subscribe-form-d75ab79a.js.map
