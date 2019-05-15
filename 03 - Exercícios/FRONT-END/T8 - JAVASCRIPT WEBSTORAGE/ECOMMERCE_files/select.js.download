
(function(){var BROWSER_IS_NOT_SUPPORTED='Your browser is not supported';var CLIENT_ID_NOT_FOUND='The client id must be included';var INVALID_LINK_TYPE_OPTION='The link-type option must be "direct" or "shared"';var INVALID_MULTISELECT_OPTION='The multiselect option must be "true" or "false"';var INVALID_OPTION_TESTMODE='Invalid option "testmode"';var POPUP_CLOSE_DETECTION_INTERVAL=1000;var rvalidchars=/^[\],:{}\s]*$/;var rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g;var rvalidBoxDomains=/(https:\/\/([a-zA-Z0-9-]+\.)?(app\.box\.com|app\.boxcn\.net|ent\.box\.com)((\/.*)?))/i;var rvalidTestDomains=/(https:\/\/([a-zA-Z0-9-]+\.)?(app\.[A-Za-z0-9]+\.inside-box\.net)((\/.*)?))/i;var windowConfiguration={height:520,width:590};var booleanOptionNames=['multiselect','testMode'];var boxSelectId=1;function indexOf(array,value){for(var i=0;i<array.length;i++){if(array[i]===value){return i;}}
return-1;}
function validateOptions(options){var validationErrors=[];var type='';if(!options.clientId){validationErrors.push(CLIENT_ID_NOT_FOUND);}
if(!options.linkType||!(options.linkType==='direct'||options.linkType==='shared')){validationErrors.push(INVALID_LINK_TYPE_OPTION);}
if(options.multiselect!==undefined&&options.multiselect!==null){type=typeof options.multiselect;if(type==='boolean'||type==='string'){if(type==='string'&&!(options.multiselect==='true'||options.multiselect==='false')){validationErrors.push(INVALID_MULTISELECT_OPTION);}}else{validationErrors.push(INVALID_MULTISELECT_OPTION);}}
if(options.testMode!==undefined&&options.testMode!==null){type=typeof options.testMode;if(type==='boolean'||type==='string'){if(type==='string'&&!(options.testMode==='true'||options.testMode==='false')){validationErrors.push(INVALID_OPTION_TESTMODE);}}else{validationErrors.push(INVALID_OPTION_TESTMODE);}}
return validationErrors;}
function isValidEventOrigin(origin){return origin&&(rvalidBoxDomains.test(origin)||rvalidTestDomains.test(origin));}
function parseJSON(data){if(!data||typeof data!=='string'){return null;}
try{if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);}
if(rvalidchars.test(data.replace(rvalidescape,'@').replace(rvalidtokens,']').replace(rvalidbraces,''))){return(new Function('return '+data))();}}catch(e){}
return null;}
window.BoxSelect=function(userOptions){var button;var proxy;var popup;var stylesheet;var eventCallbacks={};var monitoringPopupClose=false;var configuredOptions={clientId:'',linkType:'direct',multiselect:true,headerPrompt:'',domain:'https://app.box.com',testMode:false,navigator:navigator};var pickerId=boxSelectId++;function configureOptions(options){for(var optionName in options){if(options.hasOwnProperty(optionName)&&options[optionName]!==null){var value=options[optionName];if(indexOf(booleanOptionNames,optionName)!=-1&&typeof value==='string'){value=(options[optionName]==='true');}
configuredOptions[optionName]=value;}}}
function parseOptions(userButton){var parsedOptions={clientId:userButton.getAttribute('data-client-id'),linkType:userButton.getAttribute('data-link-type'),multiselect:userButton.getAttribute('data-multiselect'),headerPrompt:userButton.getAttribute('data-header-prompt'),domain:userButton.getAttribute('data-domain'),testMode:userButton.getAttribute('data-testmode')};var validationErrors=validateOptions(parsedOptions);if(validationErrors.length===0){configureOptions(parsedOptions);}
return validationErrors;}
function setOptions(options){options=options||{};var validationErrors=validateOptions(options);if(validationErrors.length===0){configureOptions(options);}
return validationErrors;}
function findButton(){if(button){return button;}
button=document.getElementById('box-select');return button;}
function createButton(){if(button){return button;}
button=document.createElement('div');button.className='box-select';return button;}
function launchPopupDirectly(){if(popup&&!popup.closed){popup.focus();return false;}
var name='';var url=configuredOptions.domain+'/index.php?rm=box_select_view';url+='&client_id='+configuredOptions.clientId;url+='&link_type='+configuredOptions.linkType;url+='&multiselect='+configuredOptions.multiselect;if(configuredOptions.headerPrompt){url+='&header_prompt='+encodeURIComponent(configuredOptions.headerPrompt);}
url+='&picker_id='+pickerId;var specs=getWindowSpecs();popup=window.open(url,name,specs);detectPopupClose();return true;}
function launchPopupViaProxy(){if(proxy){return false;}
proxy=document.createElement('iframe');var url=configuredOptions.domain+'/index.php?rm=box_select_proxy';url+='&client_id='+configuredOptions.clientId;url+='&link_type='+configuredOptions.linkType;url+='&multiselect='+configuredOptions.multiselect;if(configuredOptions.headerPrompt){url+='&header_prompt='+encodeURIComponent(configuredOptions.headerPrompt);}
url+='&picker_id='+pickerId;proxy.src=url;proxy.height='0px';proxy.width='0px';document.body.appendChild(proxy);return true;}
function removeProxyFrame(){if(proxy){proxy.parentNode.removeChild(proxy);proxy=null;}}
function notifyCancelListeners(){if(eventCallbacks[object.CANCEL_EVENT_TYPE]){var listeners=eventCallbacks[object.CANCEL_EVENT_TYPE];for(var i=0;i<listeners.length;i++){listeners[i]();}}}
function checkPopupClosed(){if(monitoringPopupClose){if(popup.closed){notifyCancelListeners();}else{detectPopupClose();}}}
function detectPopupClose(){monitoringPopupClose=true;if(popup&&!popup.closed){window.setTimeout(checkPopupClosed,POPUP_CLOSE_DETECTION_INTERVAL);}}
function getWindowSpecs(){var dualScreenLeft=window.screenLeft!==undefined?window.screenLeft:screen.left;var dualScreenTop=window.screenTop!==undefined?window.screenTop:screen.top;var width=screen.width;if(window.innerWidth){width=window.innerWidth;}else if(document.documentElement.clientWidth){width=document.documentElement.clientWidth;}
var height=screen.height;if(window.innerHeight){height=window.innerHeight;}else if(document.documentElement.clientHeight){height=document.documentElement.clientHeight;}
var left=((width/2)-(windowConfiguration.width/2))+dualScreenLeft;var top=((height/2)-(windowConfiguration.height/2))+dualScreenTop;left=left>0?left:0;top=top>0?top:0;var specs='width='+windowConfiguration.width+',height='+windowConfiguration.height+',top='+top+',left='+left;return specs;}
function receiveEventFromPopup(event){if(event.data){var data=parseJSON(event.data);var origin=event.origin||event.originalEvent.origin;if(isValidEventOrigin(origin)){if(data&&(data.eventType===object.SUCCESS_EVENT_TYPE||data.eventType===object.CANCEL_EVENT_TYPE)&&(parseInt(data.pickerId,10)===pickerId)){if(eventCallbacks[data.eventType]){var listeners=eventCallbacks[data.eventType];for(var i=0;i<listeners.length;i++){if(data.eventType===object.SUCCESS_EVENT_TYPE){listeners[i](data.links);}else{listeners[i]();}}}
object.closePopup();}}}}
function subscribeToEventsFromPopup(){var eventMethod=window.addEventListener?'addEventListener':'attachEvent';var eventer=window[eventMethod];var messageEvent=eventMethod==='attachEvent'?'onmessage':'message';eventer(messageEvent,receiveEventFromPopup,false);}
function unsubscribeToEventsFromPopup(){var eventMethod=window.addEventListener?'removeEventListener':'detachEvent';var eventer=window[eventMethod];var messageEvent=eventMethod==='detachEvent'?'onmessage':'message';eventer(messageEvent,receiveEventFromPopup,false);}
function addEventCallback(eventType,callback){if(typeof callback==='function'){eventCallbacks[eventType]=eventCallbacks[eventType]||[];eventCallbacks[eventType].push(callback);return true;}
return false;}
function isMSIEInternetExplorer(){var ua=configuredOptions.navigator.userAgent;var msieRe=new RegExp('MSIE');var operaRe=new RegExp('Opera');return(msieRe.test(ua)&&!operaRe.test(ua));}
function isTridentInternetExplorer(){var ua=configuredOptions.navigator.userAgent;var tridentRe=new RegExp('Trident');return tridentRe.test(ua);}
function isInternetExplorer(){return isMSIEInternetExplorer()||isTridentInternetExplorer();}
function getInternetExplorerVersion(){var ua=configuredOptions.navigator.userAgent;if(isMSIEInternetExplorer()){var msieRe=new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');if(msieRe.exec(ua)!==null){return parseFloat(RegExp.$1);}}else if(isTridentInternetExplorer()){var rvRe=new RegExp('rv:([0-9]{1,}[\.0-9]{0,})');if(rvRe.exec(ua)!==null){return parseFloat(RegExp.$1);}}
return-1;}
function injectStylesheet(){if(stylesheet){return;}
stylesheet=document.getElementById('box-select-stylesheet');if(stylesheet){return;}
stylesheet=document.createElement('style');stylesheet.type='text/css';stylesheet.id='box-select-stylesheet';var rules='';rules+='#box-select, .box-select { '+'width: 160px; '+'height: 42px; '+'border: none; '+'cursor: pointer; '+'background: url(\'https://app.box.com/img/box_select/Item_Selector_Button_Sprites.png\') no-repeat;'+'background-position: -50px -100px; '+'}';rules+='#box-select:hover, .box-select:hover { '+'background-position: -50px -50px ; '+'}';rules+='#box-select:active, .box-select:active { '+'background-position: -50px 0;'+'}';rules+='#box-select.not-supported, .box-select.not-supported { '+'zoom: 1;'+'filter: alpha(opacity=30);'+'opacity: 0.3;'+'}';if(stylesheet.styleSheet){stylesheet.styleSheet.cssText=rules;}else{stylesheet.textContent=rules;}
document.getElementsByTagName('head')[0].appendChild(stylesheet);}
function render(validationErrors,isBrowserSupported){if(validationErrors.length>0||!isBrowserSupported){button.disabled=true;button.className+=' not-supported';if(!isBrowserSupported){button.title=BROWSER_IS_NOT_SUPPORTED;}else{button.title=validationErrors[0];}}
injectStylesheet();button.onclick=object.launchPopup;}
function init(options){button=findButton();var validationErrors=[];if(button){validationErrors=parseOptions(button);}else{validationErrors=setOptions(options);button=createButton();}
if(configuredOptions.testMode){rvalidTestDomains=/((https:\/\/(.+?\.)?(app\.[A-Za-z0-9]+\.inside-box\.net))|(https?:\/\/(.+?\.)?(localhost))((\/.*)?))/i;}
var isBrowserSupported=object.isBrowserSupported();render(validationErrors,isBrowserSupported);subscribeToEventsFromPopup();}
var object={SUCCESS_EVENT_TYPE:'BoxSelect:Success',CANCEL_EVENT_TYPE:'BoxSelect:Cancel',closePopup:function(){if(popup){popup.close();monitoringPopupClose=false;}
removeProxyFrame();},success:function(callback){return addEventCallback(object.SUCCESS_EVENT_TYPE,callback);},cancel:function(callback){return addEventCallback(object.CANCEL_EVENT_TYPE,callback);},unregister:function(eventType,callback){var unregistered=false;if(typeof callback==='function'){var callbacks=eventCallbacks[eventType]||[];eventCallbacks[eventType]=[];for(var i=0;i<callbacks.length;i++){if(callbacks[i]!==callback){eventCallbacks[eventType].push(callbacks[i]);}else{unregistered=true;}}}else if(eventCallbacks[eventType]){eventCallbacks[eventType]=[];unregistered=true;}
return unregistered;},isBrowserSupported:function(){return(!isInternetExplorer()||getInternetExplorerVersion()>=8.0);},launchPopup:function(){if(isInternetExplorer()){return launchPopupViaProxy();}else{return launchPopupDirectly();}},getButton:function(){return button;},_destroy:function(){unsubscribeToEventsFromPopup();}};init(userOptions);return object;};}());