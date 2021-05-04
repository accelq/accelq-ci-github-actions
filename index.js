(()=>{"use strict";var e={123:(e,t)=>{var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.PASS="pass",e.FAIL="fail",e.NOT_RUN="notRun",e.RUNNING="running",e.INFO="info",e.FATAL="fatal",e.WARN="warn",e.ALL="all"}(n||(n={})),function(e){e.NOT_APPLICABLE="Not Applicable",e.SCHEDULED="Scheduled",e.IN_PROGRESS="In Progress",e.COMPLETED="Completed",e.ABORTED="Aborted",e.FAILED="Failed To Start",e.RECURRING="Recurring",e.ERROR="Error",e.CONTINUOUS_INTEGRATION="Continuous Integration"}(o||(o={}));const r={LOG_DELIMITER:">>> ",USER_AGENT:"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",JOB_STATUS_POLL_TIME:3e4,JOB_PICKUP_RETRY_COUNT:30,JOB_WEB_LINK:"#/forward?entityType=9&resultId={0}",EXT_JOB_WEB_LINK:"#/resultext?tenant={0}&resultId={1}",API_VERSION:"1.0",AQ_RESULT_INFO_KEY:"AQReportInfo",TEST_CASE_STATUS:n,TEST_JOB_STATUS:o};t.default=r},86:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});const n={validateJobID:e=>{try{if(+e<=0)return"Must be a number greater than 0"}catch(t){return"Not a number"}return null},validateTenantCode:function(e){return this.validateGenericField(e)},validateAppURL:e=>{try{new URL(e)}catch(t){return"Not a URL"}return null},validateGenericField:e=>{try{if(null==e||0==e.length)return"Cannot be empty"}catch(t){return"Cannot be empty"}return null},validateProjectCode:function(e){return this.validateGenericField(e)},validateAPIKey:function(e){return this.validateGenericField(e)},validateUserId:e=>{try{const t=new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);if(null==e||0==e.length)return"Cannot be empty";if(!t.test(e))return"User ID must be in email format"}catch(t){}return null}};t.default=n},358:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{i(o.next(e))}catch(t){a(t)}}function l(e){try{i(o.throw(e))}catch(t){a(t)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}i((o=o.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(123)),s=r(n(949)),l=r(n(376)),i=n(368),u={BASE_URL:"",API_ENDPOINT:"",PROXY_HOST:"",PROXY_PORT:80,setProxy:function(e,t){this.PROXY_HOST=e,this.PROXY_PORT=0==t?80:t},isProxySet:function(){return this.PROXY_HOST&&this.PROXY_HOST.length>0},getProxyConfig:function(){let e=this.BASE_URL.split("://")[0];return new s.default(`${e}://${this.PROXY_HOST}:${this.PROXY_PORT}`)},testConnection:function(e,t,n,r){return o(this,void 0,void 0,(function*(){const o=i.AQUtil.getRunParam(n,r);try{let r;this.isProxySet()&&(r=this.getProxyConfig());const s=yield l.default.request({method:"POST",url:`${this.API_ENDPOINT}/jobs/${n}/validate-ci-job`,httpsAgent:r,headers:{"User-Agent":a.default.USER_AGENT,API_KEY:e,USER_ID:t,"Content-Type":"application/json"},data:JSON.stringify(o)});return 200==s.status||s.status,""}catch(s){const e=s.response;return e&&404!=e.status?401==e.status?"Connection request failed. Please check connection parameters.":e.status>=500?"Server Error"+e.data.message:200!=e.status?"Template Job ID does not exist.":null:"Connection request failed. Please check the URL and Tenant Code."}}))},triggerJob:function(e,t,n,r){return o(this,void 0,void 0,(function*(){const o=i.AQUtil.getRunParam(n,r);try{let r;this.isProxySet()&&(r=this.getProxyConfig());const s=yield l.default.request({method:"PUT",url:`${this.API_ENDPOINT}/jobs/${n}/trigger-ci-job`,httpsAgent:r,headers:{"User-Agent":a.default.USER_AGENT,API_KEY:e,USER_ID:t,"Content-Type":"application/json"},data:JSON.stringify(o)}),i=s.data;return 200==s.status||204==s.status?{pid:i[0]}:i}catch(s){return console.log("Error is: "+s.response.data.message),null}}))},setBaseURL:function(e,t){this.BASE_URL="/"==e.charAt(e.length-1)?e:e+"/",this.API_ENDPOINT=this.BASE_URL+"awb/api/"+a.default.API_VERSION+"/"+t},getResultExternalAccessURL:function(e,t){let n=a.default.EXT_JOB_WEB_LINK;return n=n.replace("{0}",t),n=n.replace("{1}",e),this.BASE_URL+n},getJobSummary:function(e,t,n){return o(this,void 0,void 0,(function*(){let o;this.isProxySet()&&(o=this.getProxyConfig());return(yield l.default.request({method:"GET",httpsAgent:o,url:`${this.API_ENDPOINT}/runs/${e}`,headers:{"User-Agent":a.default.USER_AGENT,API_KEY:t,USER_ID:n,"Content-Type":"application/json"}})).data}))}};t.default=u},368:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AQUtil=void 0,t.AQUtil={getRunParam:(e,t)=>{let n={};return t&&t.length>0&&(n.runProperties=JSON.parse(t)),n.jobPid=+e,n},getRunParamJsonPayload:e=>{if(null==e||0==e.trim().length)return;const t=e.split("&");let n={};return t.forEach((e=>{const t=e.split("=");if(2==t.length){const e=t[0].trim(),o=t[1].trim();""!==e&&""!==o&&(n[e]=o)}})),JSON.stringify(n)},getFormattedTime:(e,t)=>{const n=new Date(e),o=new Date(t).getTime()-n.getTime(),r=+(o/1e3%60).toFixed(),a=+(o/6e4%60).toFixed(),s=+(o/36e5%24).toFixed(),l=+(o/864e5%365).toFixed();let i="";return 0!=l&&(i+=l>1?l+" days":l+" day"),0!=s&&(i+=s>1?s+" hrs":s+" hr"),0!=a&&(i+=" "+(a>1?a+" mins":a+" min")),0!=r&&(i+=" "+(r>1?r+" seconds":r+" second")),i}}},492:function(e,t,n){var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function s(e){try{i(o.next(e))}catch(t){a(t)}}function l(e){try{i(o.throw(e))}catch(t){a(t)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}i((o=o.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=r(n(123)),s=r(n(86)),l=r(n(358)),i=n(368),u=n(953);function c(e){return new Promise((t=>setTimeout(t,e)))}!function(){var e;o(this,void 0,void 0,(function*(){try{const t=u.getInput("appURL",{required:!0})||"",n=u.getInput("userName",{required:!0})||"",r=u.getInput("apiKey",{required:!0})||"",d=u.getInput("tenantCode",{required:!0})||"",f=u.getInput("jobId",{required:!0})||"",p=u.getInput("runParam")||"",T=u.getInput("proxyHost")||"",E=u.getInput("proxyPort")||"";let _;if(_=s.default.validateAppURL(t),null!=_)throw new Error("ACCELQ App URL: "+_);if(_=s.default.validateUserId(n),null!=_)throw new Error("ACCELQ User ID: "+_);if(_=s.default.validateAPIKey(r),null!=_)throw new Error("API Key: "+_);if(_=s.default.validateTenantCode(d),null!=_)throw new Error("Tenant Code: "+_);if(_=s.default.validateJobID(f),null!=_)throw new Error("ACCELQ CI Job ID: "+_);if(_=yield function(e,t,n,r,a,s,u,c){return o(this,void 0,void 0,(function*(){l.default.setBaseURL(e,r),u&&u.length>0?l.default.setProxy(u,+c):l.default.setProxy("",0);const o=i.AQUtil.getRunParamJsonPayload(s);return yield l.default.testConnection(n,t,a,o)}))}(t,n,r,d,f,p,T,E),null===_)throw new Error("Something went wrong in extension");if(_)throw new Error(_);_=yield function(e,t,n,r,s,u,d,f){return o(this,void 0,void 0,(function*(){let o=null,p=0;try{l.default.setBaseURL(e,r),d&&d.length>0?l.default.setProxy(d,+f):l.default.setProxy("",0),console.log("******************************************"),console.log("*** Begin: ACCELQ Test Automation Step ***"),console.log("******************************************"),console.log();const T=i.AQUtil.getRunParamJsonPayload(u),E=yield l.default.triggerJob(n,t,s,T);if(null==E)throw new Error("Unable to submit the Job, check plugin log stack");if(null!=E.cause)throw new Error(E.cause);p=E.pid;let _=0,h=0,g=0,S=0,A="",P=0;const R=l.default.getResultExternalAccessURL(p.toString(),r);for(;;){if(o=yield l.default.getJobSummary(p,n,t),null!=o.cause)throw new Error(o.cause);if(null!=o.summary&&(o=o.summary),_=+o.pass,h=+o.fail,S=+o.notRun,0==P){const e=o.purpose,t=o.scnName,n=o.testSuiteName,r=o.testcaseCount;null!=n&&n.length>0?console.log("Test Suite Name: "+n):console.log("Scenario Name: "+t),console.log("Purpose: "+e),console.log("Total Test Cases: "+r),console.log(),console.log("Results Link: "+R),console.log("Need to abort? Click on the link above, login to ACCELQ and abort the run."),console.log()}if(A=o.status.toUpperCase(),A==a.default.TEST_JOB_STATUS.COMPLETED.toUpperCase()){const e=" "+i.AQUtil.getFormattedTime(o.startTimestamp,o.completedTimestamp);console.log("Status: "+o.status.toUpperCase()+" ("+e.trim()+")")}else console.log("Status: "+o.status.toUpperCase());if(g=_+h+S,console.log("Total "+g+": "+_+" Pass / "+h+" Fail"),console.log(),A==a.default.TEST_JOB_STATUS.SCHEDULED.toUpperCase()&&++P,P==a.default.JOB_PICKUP_RETRY_COUNT)throw new Error("No agent available to pickup the job");if(A==a.default.TEST_JOB_STATUS.COMPLETED.toUpperCase()||A==a.default.TEST_JOB_STATUS.ABORTED.toUpperCase()||A==a.default.TEST_JOB_STATUS.FAILED.toUpperCase()||A==a.default.TEST_JOB_STATUS.ERROR.toUpperCase())break;yield c(a.default.JOB_STATUS_POLL_TIME)}if(console.log("Results Link: "+R),console.log(),h>0||A==a.default.TEST_JOB_STATUS.ABORTED.toUpperCase()||A==a.default.TEST_JOB_STATUS.FAILED.toUpperCase()||A==a.default.TEST_JOB_STATUS.ERROR.toUpperCase())throw new Error(a.default.LOG_DELIMITER+"Run Failed");return console.log("**********************************************"),console.log("*** Completed: ACCELQ Test Automation Step ***"),console.log("**********************************************"),console.log(),{status:!0}}catch(T){if(o=yield l.default.getJobSummary(p,n,t),null!=o.cause)throw new Error(o.cause);return null!=o.summary&&(o=o.summary),console.log("Status: "+o.status),console.log("Pass: "+o.pass),{status:!1,error:T}}}))}(t,n,r,d,f,p,T,E),_.status?console.log("Run Completed!!!"):u.setFailed((null===(e=_.error)||void 0===e?void 0:e.message)||"Job Failed!!!")}catch(t){u.setFailed(t.message)}}))}()},953:e=>{e.exports=require("@actions/core")},376:e=>{e.exports=require("axios")},949:e=>{e.exports=require("https-proxy-agent")}},t={};(function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports})(492)})();