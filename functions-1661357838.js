function validateEmail(email){var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}
function validateURL(userInput){var res=userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);if(res==null)
return false;else
return true;}
function number_format(number,decimals,dec_point,thousands_sep){number=(number+'').replace(/[^0-9+\-Ee.]/g,'');var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),sep=(typeof thousands_sep==='undefined')?',':thousands_sep,dec=(typeof dec_point==='undefined')?'.':dec_point,s='',toFixedFix=function(n,prec){var k=Math.pow(10,prec);return ''+(Math.round(n*k)/k).toFixed(prec);};s=(prec?toFixedFix(n,prec):''+Math.round(n)).split('.');if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep);}
if((s[1]||'').length<prec){s[1]=s[1]||'';s[1]+=new Array(prec-s[1].length+1).join('0');}
return s.join(dec);}
function isset(){const a=arguments
const l=a.length
let i=0
let undef
if(l===0){throw new Error('Empty isset')}
while(i!==l){if(a[i]===undef||a[i]===null){return false}
i++}
return true}
function in_array(needle,haystack,argStrict){var key='',strict=!!argStrict;if(strict){for(key in haystack){if(haystack[key]===needle){return true;}}}else{for(key in haystack){if(haystack[key]==needle){return true;}}}
return false;}
function empty(mixed_var){var undef,key,i,len;var emptyValues=[undef,null,false,0,'','0'];for(i=0,len=emptyValues.length;i<len;i++){if(mixed_var===emptyValues[i]){return true;}}
if(typeof mixed_var==='object'){for(key in mixed_var){return false;}
return true;}
return false;}
function windowSize(){var e=window,a='inner';if(!('innerWidth'in window)){a='client';e=document.documentElement||document.body;}
return{width:e[a+'Width'],height:e[a+'Height']};}
function str_replace(search,replace,subject,count){var i=0,j=0,temp='',repl='',sl=0,fl=0,f=[].concat(search),r=[].concat(replace),s=subject,ra=Object.prototype.toString.call(r)==='[object Array]',sa=Object.prototype.toString.call(s)==='[object Array]';s=[].concat(s);if(count){this.window[count]=0;}
for(i=0,sl=s.length;i<sl;i++){if(s[i]===''){continue;}
for(j=0,fl=f.length;j<fl;j++){temp=s[i]+'';repl=ra?(r[j]!==undefined?r[j]:''):r[0];s[i]=(temp).split(f[j]).join(repl);if(count&&s[i]!==temp){this.window[count]+=(temp.length-s[i].length)/f[j].length;}}}
return sa?s:s[0];}
function shuffle(inputArr){var valArr=[],k='',i=0,strictForIn=false,populateArr=[];for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(){return 0.5-Math.random();});this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function setCookie(cname,cvalue,extimeDays){var d=new Date();d.setTime(d.getTime()+(extimeDays*86400*1000));var expires="expires="+d.toGMTString();if(location.hostname=='remoteok.com'){document.cookie=cname+"="+cvalue+"; "+expires+'; secure;domain=.'+location.hostname+';path=/; samesite=lax';}
if(location.hostname=='remoteok.test'){document.cookie=cname+"="+cvalue+"; "+expires+';domain=.'+location.hostname+';path=/; samesite=lax';}}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)!=-1)return c.substring(name.length,c.length);}
return "";}
function getQueryString(name){name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),results=regex.exec(location.search);return results===null?"":decodeURIComponent(results[1].replace(/\+/g," "));}
function urlExists(url,cb){jQuery.ajax({url:url,dataType:'text',type:'GET',complete:function(xhr){if(typeof cb==='function')
cb.apply(this,[xhr.status]);}});}
function explode(delimiter,string,limit){if(arguments.length<2||typeof delimiter==='undefined'||typeof string==='undefined')return null;if(delimiter===''||delimiter===false||delimiter===null)return false;if(typeof delimiter==='function'||typeof delimiter==='object'||typeof string==='function'||typeof string==='object'){return{0:''};}
if(delimiter===true)delimiter='1';delimiter+='';string+='';var s=string.split(delimiter);if(typeof limit==='undefined')return s;if(limit===0)limit=1;if(limit>0){if(limit>=s.length)return s;return s.slice(0,limit-1).concat([s.slice(limit-1).join(delimiter)]);}
if(-limit>=s.length)return[];s.splice(s.length+limit);return s;}
function microtime(){return Math.floor(new Date().getTime());}
function time(){return Math.floor(new Date().getTime()/1000);}
function makeUrlSlug(text){if(typeof text==='undefined')return '';text=text.trim();text=text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');if(text.substr(-1)=='-'){text=text.substr(0,text.length-1);}
if(text.substr(0,1)=='-'){text=text.substr(1,text.length);}
return text;}
var showConsoleLog=false;if(typeof userIsAdmin!=='undefined'){if(userIsAdmin){showConsoleLog=true;}}
function consoleLog(msg){if(window.location.hostname=='remoteok.com'&&!showConsoleLog)return;console.log(msg);}