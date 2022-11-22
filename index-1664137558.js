var tweetJob=[];var originalFavicon;if(typeof showdown!=='undefined'){var markdownConverter=new showdown.Converter();}
var lazyloadItemTimeout=setTimeout(function(){},100);var company_image_data;var brandsScrollLeft=0;var infinityScrollIsAlreadyRunning=false;var isChrome=navigator.userAgent.indexOf('Chrome')>-1;var isIE=navigator.userAgent.indexOf('MSIE')>-1;var isFirefox=navigator.userAgent.indexOf('Firefox')>-1;var isSafari=navigator.userAgent.indexOf("Safari")>-1;var isOpera=navigator.userAgent.indexOf("Presto")>-1;var touchSupported=(('ontouchstart'in window)||window.DocumentTouch&&document instanceof DocumentTouch);var isFirefox=/(Firefox)/g.test(navigator.userAgent);var isiOs=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);var isMobile=(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));if((isChrome)&&(isSafari)){isSafari=false;}
var visits=getCookie('visits');var newUser=getCookie('new_user');var autoTypingTimer=setTimeout(function(){},10);if(empty(visits)){visits=0;}
if(empty(newUser)){newUser=true;}
else if(newUser=='false'){newUser=false;}
else if(visits>3){newUser=false}
else{newUser=true;}
setCookie('new_user',newUser,365);visits=parseInt(visits)+1;setCookie('visits',visits,365);var windowWidth=windowSize().width;var windowHeight=windowSize().height;if(typeof pageTagTitle!=='undefined'){if(getCookie('subscribed_to_newsletter_2020fix_'+pageTagTitle)){document.getElementsByTagName('html')[0].className=document.getElementsByTagName('html')[0].className.replace('catch-emails-enabled','')+' catch-emails-disabled';}}
else{if(getCookie('subscribed_to_newsletter')){document.getElementsByTagName('html')[0].className=document.getElementsByTagName('html')[0].className.replace('catch-emails-enabled','')+' catch-emails-disabled';}}
var pageLoadedEpoch=time();var lastScrollEpoch=time();var filterCount=0;var filterQuery=[];var filterUrl='';var filterAJAXUrl='';var disablePaginationBecauseWeReachedEnd=false;var floatingApplyJobButtonCurrentJobID=0;var visit_count;$(function(){if(!$('html').hasClass('logged-in')){visit_count=getCookie('visit_count');if(empty(visit_count)){visit_count=0;}
visit_count=parseInt(visit_count)+1;setCookie('visit_count',visit_count,7);console.log('visit_count='+visit_count);}
$('.preventLink').bind('click',function(e){e.preventDefault();});lazyload();$(".share-job-copy-paste").bind('click',function(){console.log('x');$(this).select();navigator.clipboard.writeText($(this).val());});if($('html').hasClass('pageType-job')){$('.expandContents .markdown').each(function(){markdown=$(this).text();markdown=str_replace('\\n',"\n",markdown);html=markdownConverter.makeHtml(markdown);html=str_replace('<a href=','<a target="_blank" rel="nofollow noopener" href=',html);$(this).html(html);});}
$('.action-apply').bind('click',function(event){event.preventDefault();event.stopPropagation();window.open('https://remoteok.com/l/'+$(this).data('job-id')+'?rh='+md5('23834834_'+$(this).data('job-id')),'_blank');});if($('html').hasClass('pageType-frontpage')){isFrontPage=true;}
else{isFrontPage=false;}
$(window).scroll();setTimeout(function(){$(window).scroll();},100);$('.filter-actions').scroll(function(){$('.search-filter-input').attr('placeholder',$('.search-filter-input').data('original-placeholder'));console.log('a1');$('.search-filter-results').hide();$('.location-filter-input').attr('placeholder',$('.location-filter-input').data('original-placeholder'));$('.location-filter-results').hide();$('.salary-filter-popup').hide();$('.salary-filter').removeClass('active');$('.benefits-filter').removeClass('active');$('.benefits-filter-results').hide();$('.location-filter').removeClass('active');$('.location-filter-results').hide();$('input.search').removeClass('active');});$(window).scroll(function(){if(windowWidth<600&&floatingApplyJobButtonCurrentJobID){var scrollPos=$(window).scrollTop();var jobPostBottom=$('.expand-'+floatingApplyJobButtonCurrentJobID).offset().top
+
$('.expand-'+floatingApplyJobButtonCurrentJobID).height()
-
$('.filter-actions').height();var jobPostTop=$('.expand-'+floatingApplyJobButtonCurrentJobID).offset().top;if(scrollPos>jobPostBottom||(scrollPos+windowHeight)<jobPostTop){$('.floating-apply-job-button-container').hide();}}
if($('.top-bar-dropdown').is(':visible')){var that=$('.filter-actions .top-bar-avatar');if(that.length){$('.top-bar-dropdown').css('position','absolute');$('.top-bar-dropdown').css('left',$(that).offset().left);$('.top-bar-dropdown').css('top',$(that).offset().top+$(that).height()+7);}}
if($('.search-filter-results').is(':visible')){var that=$('.search-filter-input');if(that.length){$('.search-filter-results').css('position','absolute');$('.search-filter-results').css('left',$(that).offset().left);$('.search-filter-results').css('top',$(that).offset().top+$(that).outerHeight()-$('.page').offset().top);}}
if($('.location-filter-results').is(':visible')){var that=$('.location-filter-input');if(that.length){$('.location-filter-results').css('position','absolute');$('.location-filter-results').css('left',$(that).offset().left);$('.location-filter-results').css('top',$(that).offset().top+$(that).outerHeight()-$('.page').offset().top);}}
if($('.salary-filter-popup').is(':visible')){var that=$('.salary-filter');if(($(that).offset().left+$('.salary-filter-popup').outerWidth())>windowSize().width){$('.salary-filter-popup').css('right',0);}
else{$('.salary-filter-popup').css('left',$(that).offset().left);}
$('.salary-filter-popup').css('top',$(that).offset().top+$(that).outerHeight()-$('.page').offset().top);}
if($('.benefits-filter-results').is(':visible')){var that=$('.benefits-filter');$('.benefits-filter-results').css('position','absolute');$('.benefits-filter-results').css('left',$(that).offset().left);$('.benefits-filter-results').css('top',$(that).offset().top+$(that).outerHeight()-$('.page').offset().top);}
lastScrollEpoch=time();clearTimeout(lazyloadItemTimeout);lazyloadItemTimeout=setTimeout(function(){$('.lazyload').each(function(){objectTop=$(this).offset().top;scrollTop=$(window).scrollTop();edge=scrollTop+windowHeight+1000;if(objectTop==scrollTop&&!$(this).hasClass('video')){return;}
if(objectTop<edge){if($(this).data('bg')){$(this).css('background-image',"url('"+$(this).data('bg')+"')");$(this).removeClass('lazyload');$(this).addClass('lazyloaded');}
if($(this).data('srcset')){$(this).prop('srcset',$(this).data('srcset'));$(this).removeClass('lazyload');$(this).addClass('lazyloaded');}
if($(this).data('src')){$(this).prop('src',$(this).data('src'));$(this).removeClass('lazyload');$(this).addClass('lazyloaded');}}});},250);});if(pageType=='job'){setTimeout(function(){$('body').scrollTop($('#jobsboard').offset().top);$(window).scrollTop($('#jobsboard').offset().top);},250);}
$(window).scroll(function(){if(!infinityScrollIsAlreadyRunning&&!disablePaginationBecauseWeReachedEnd){if(($(window).scrollTop()+6000)>$(document).height()){infinityScrollIsAlreadyRunning=true;consoleLog('=======');consoleLog('infinity scroll');consoleLog('=======');offset=$('#jobsboard tr.job:last').data('offset');if(isNaN(offset))return;if(pageType=='job'){filterAJAXUrl='/?';var url=filterAJAXUrl+'&action=get_jobs&except_id='+currentJobId+'&tags='+encodeURI(currentJobTags.slice(0,1).join(','))+'&offset='+offset;console.log('paginating related jobs for ['+currentJobTags.slice(0,1).join(',')+'] with offset '+offset);if(offset==1){$('#jobsboard tr.expand:last').after('<tr class="expand active"><td colspan="10" class="td-related-jobs"><h2>Related jobs</h2></td></tr>');}}
else{buildFilterQuery();var url=filterAJAXUrl+'&action=get_jobs&offset='+offset;console.log('paginating jobs for ['+filterAJAXUrl+'] with offset '+offset);}
activeAjax=$.ajax({async:true,url:url,type:'GET'}).done(function(reply){infinityScrollIsAlreadyRunning=false;$('footer').remove();if(empty(reply)){console.log('pagination no further jobs so disabling pagination now until user filters again');disablePaginationBecauseWeReachedEnd=true;return;}
consoleLog('=======');consoleLog('adding jobs from pagination');consoleLog('=======');$('#jobsboard tr.expand:last').after('<tr class="divider"><td colspan="10"></td></tr>'+reply);$('.loading_spinner_2018:not(.infinity-scroll)').hide();lazyload();});}}});var brandsScrollWidth=0;$('.top .brands img').each(function(){brandsScrollWidth=brandsScrollWidth+$(this).outerWidth();});var brandsScrollStop=false;function moveBrandsBar(){if(brandsScrollStop)return;requestAnimationFrame(moveBrandsBar);brandsScrollLeft=brandsScrollLeft+1;if(brandsScrollLeft==(brandsScrollWidth-250)){consoleLog('fading out',brandsScrollLeft,brandsScrollWidth);$('.top .brands .brands-scroller').fadeOut(1000,function(){brandsScrollLeft=0;$('.top .brands .brands-scroller').fadeIn(1000);});return;}
$('.top .brands').scrollLeft(brandsScrollLeft);}
$('.top .brands-hide-scrollbar-box').bind('click',function(e){$('.action-post-job').trigger('click');});$('.top .brands').bind('mouseenter',function(e){brandsScrollStop=true;});$('.top .brands').bind('mouseleave',function(e){brandsScrollLeft=$('.top .brands').scrollLeft();consoleLog('brandsScrollLeft',brandsScrollLeft);brandsScrollStop=false;requestAnimationFrame(moveBrandsBar);});requestAnimationFrame(moveBrandsBar);$('.action-expand-filter').bind('click',function(){$('body').toggleClass('filter-opened')});$('.action-delete-job').bind('click',function(e){e.stopPropagation();});var overiFrame=-1;insideTwitterButton=false;$('.twitter-follow-button-container').bind('mouseenter',function(){if(!insideTwitterButton){insideTwitterButton=true;}});$('.twitter-follow-button-container').bind('mouseleave',function(){insideTwitterButton=false;});$(window).blur(function(){if(insideTwitterButton){setCookie('twitter_followed','true',365);}});$('body').on('click','.active-filters-box div.suggested-filter',function(){$(this).removeClass('suggested-filter').addClass('active-filter');var html=$(this)[0].outerHTML;$(this).remove();$('.active-filters-box').prepend(html);buildFilterQuery();getJobs();});$('body').on('click','.action-remove-latest-filter',function(){if($('.active-filters-box div.latest-filter').length){$('.active-filters-box div.latest-filter').remove();}
else{$('.active-filters-box div.active-filter').eq(0).remove();}
buildFilterQuery();getJobs();if(!filterCount){$('.active-filters-box .action-remove-latest-filter').hide();}});$('tr.job .apply_button').bind('click',function(e){e.stopPropagation();})
$('tr.job .tags a').bind('click',function(e){e.stopPropagation();})
$('body').on('click','tr.job',function(event){if($(this).hasClass('placeholder')){return;}
id=$(this).attr('id');slug=$(this).data('slug')
openJob(id,slug,event);event.stopPropagation();});$('body').bind('click',function(e){e.stopPropagation();console.log("$('body').bind('click',function(e) {");console.log('8');$('html').removeClass('top-bar-dropdown-expanded');$('.search-filter-input').attr('placeholder',$('.search-filter-input').data('original-placeholder'));console.log('a2');$('.search-filter-results').hide();$('.location-filter-input').attr('placeholder',$('.location-filter-input').data('original-placeholder'));$('.location-filter-results').hide();$('.salary-filter-popup').hide();$('.salary-filter').removeClass('active');$('.benefits-filter').removeClass('active');$('.benefits-filter-results').hide();$('.location-filter').removeClass('active');$('.location-filter-results').hide();$('input.search').removeClass('active');});$('html').css('opacity',1);$('body').on('click','.search-filter-results div',function(e){e.stopPropagation();$('.search-filter-input').val('');$('.top .search').val('');if($(this).data('type')=='company'){window.location.href=$(this).data('url');return;}
var locationToAdd=$(this).data('location');var tagToAdd=$(this).data('tag');var isFilterAlreadyActive=false;$('.active-filters-box .active-filter').each(function(){if($(this).data('tag')&&$(this).data('tag')==tagToAdd){isFilterAlreadyActive=true;}
else if($(this).data('location')&&$(this).data('location')==locationToAdd){isFilterAlreadyActive=true;}});if(isFilterAlreadyActive){return;}
$('.filter-actions').scrollLeft(0);$('.loading_spinner_2018:not(.infinity-scroll)').show();$('.active-filters-box div').removeClass('latest-filter');if($(this).data('location')){$('.active-filters-box').prepend('<div data-location="'+$(this).data('location')+'" class="active-filter latest-filter">'+
$(this).text().split(' (')[0]+
'<img alt="Remove this filter" class="action-remove-this-filter" src="/assets/times-circle.svg">'+
'</div>');}
else{$('.active-filters-box').prepend('<div data-tag="'+$(this).data('tag')+'" class="active-filter latest-filter">'+
$(this).text().split(' (')[0]+
'<img alt="Remove this filter" class="action-remove-this-filter" src="/assets/times-circle.svg">'+
'</div>');}
buildFilterQuery();getJobs();});var searchTimeAJAX=0;$('.top .box .search').bind('keyup click',function(e){e.stopPropagation();search=$(this).val().toLowerCase();if(search.indexOf('#')>-1){$('.top .search').val(str_replace('#',' sharp',$('.top .search').val()));}
if(e.which==13&&$('.search-filter-results div').length>0){$('.search-filter-results div').eq(0).addClass('hover');$('.search-filter-results div').eq(0).click();return;}
console.log('2');$('html').removeClass('top-bar-dropdown-expanded');console.log('a3');if(!empty($('.search-filter-results').html())){$('.search-filter-results').show();}
$('.salary-filter-popup').hide();$('.salary-filter').removeClass('active');$('.location-filter-results').hide();$('.benefits-filter-results').hide();$('.search-filter-results').html('');$('.search-filter-results').css('position','absolute');$('.search-filter-results').css('left',$('.top .box .search').offset().left-$('.page').offset().left);$('.search-filter-results').css('top',$('.top .box .search').offset().top+$('.top .box .search').outerHeight()-$('.page').offset().top);if(empty(search)){y=0;addedAutocompleteTags=[];for(var tag in allTags){label=allTags[tag];$('.search-filter-results').append('<div data-tag="'+makeUrlSlug(tag)+'" data-slug="'+makeUrlSlug(tag)+'">'+label+'</div>');addedAutocompleteTags.push(tag);y++;if(y>=50)break;}}
else{y=0;addedAutocompleteTags=[];for(var tag in allTags){label=allTags[tag];if(tag.substr(0,search.length)==search){$('.search-filter-results').append('<div data-tag="'+makeUrlSlug(tag)+'" data-slug="'+makeUrlSlug(tag)+'">'+label+'</div>');addedAutocompleteTags.push(tag);y++;}
if(y>=50)break;}
for(var tag in allTags){label=allTags[tag];if(tag.indexOf(search)>-1&&!in_array(tag,addedAutocompleteTags)){$('.search-filter-results').append('<div data-tag="'+makeUrlSlug(tag)+'" data-slug="'+makeUrlSlug(tag)+'">'+label+'</div>');addedAutocompleteTags.push(tag);y++;}
if(y>=50)break;}}
if(addedAutocompleteTags.length>0){$('.search-filter-results').show();$('input.search').addClass('active');}
if($('.location-filter-results').length){$('.location-filter-results div').each(function(){needle=$(this).text().toLowerCase();if(needle.indexOf(search)>-1){console.log(needle+' =2= '+search);$('.search-filter-results').append('<div data-type="location" data-location="'+$(this).data('location')+'">'+$(this).html()+'</div>');addedAutocompleteTags.push($(this).data('location'));}});}
if(search.length>3){console.log('3');searchTimeAJAX=microtime();console.log('searching '+search+' via on server');$.ajax({url:"/?action=search",type:'POST',dataType:'json',data:{search:search,time:searchTimeAJAX},context:document.body}).done(function(reply){if(reply.time!=searchTimeAJAX){return;}
if(reply.results.length){$('input.search').addClass('active');for(var i=0;i<reply.results.length;i++){var result=reply.results[i];if(result.type=='tag'){$('.search-filter-results').append('<div data-type="tag" data-slug="'+makeUrlSlug(result.tag)+'">'+result.label+'</div>');addedAutocompleteTags.push(result.tag);}
if(result.type=='company'){$('.search-filter-results').append('<div data-type="company" data-url="'+makeUrlSlug(result.url)+'">'+result.label+'</div>');addedAutocompleteTags.push(result.url);}}
$('.search-filter-results').show();}
else{$('input.search').removeClass('active');}});}
else if(addedAutocompleteTags.length==0){$('input.search').removeClass('active');}});$('body').on('change','select.order-by',function(){buildFilterQuery();getJobs();});$('body').on('click','.active-filters-box .active-filter',function(e){$(this).remove();if($(this).data('salary')){$('.salary-filter-input').val(0);}
buildFilterQuery();getJobs();});$('.benefits-filter').bind('click',function(e){e.stopPropagation();console.log('3');$('html').removeClass('top-bar-dropdown-expanded');$('.search-filter-input').attr('placeholder',$('.search-filter-input').data('original-placeholder'));console.log('a4');$('.search-filter-results').hide();$('.location-filter-input').attr('placeholder',$('.location-filter-input').data('original-placeholder'));$('.location-filter-results').hide();$('.salary-filter-popup').hide();$('.salary-filter').removeClass('active');if(!$('.benefits-filter-results').is(':visible')){$('.benefits-filter-results').hide();$('.benefits-filter-results').css('position','absolute');if(($(this).offset().left+$('.benefits-filter-results').outerWidth())>windowSize().width){$('.benefits-filter-results').css('right',0);}
else{$('.benefits-filter-results').css('left',$(this).offset().left);}
$('.benefits-filter-results').css('top',$(this).offset().top+$(this).outerHeight()-$('.page').offset().top);$('.benefits-filter-results').show();$('.benefits-filter').addClass('active');}
else{$('.benefits-filter-results').hide();$('.benefits-filter').removeClass('active');}});$('body').on('click','.benefits-filter-results div',function(){var benefitToAdd=$(this).data('benefit');var isFilterAlreadyActive=false;$('.active-filters-box .active-filter').each(function(){if($(this).data('benefit')==benefitToAdd){isFilterAlreadyActive=true;}});if(isFilterAlreadyActive){return;}
$('.filter-actions').scrollLeft(0);$('.active-filters-box div').removeClass('latest-filter');$('.active-filters-box').prepend('<div data-benefit="'+$(this).data('benefit')+'" class="active-filter latest-filter">'+
$(this).text().split(' (')[0]+
'<img alt="Remove this filter" class="action-remove-this-filter" src="/assets/times-circle.svg">'+
'</div>');buildFilterQuery();getJobs();});$('.location-filter input').bind('click',function(e){if(!$('.location-filter-results').is(':visible')){$(this).data('original-placeholder',$(this).attr('placeholder'));$(this).attr('placeholder','Type...');console.log('4');$('html').removeClass('top-bar-dropdown-expanded');console.log('a5');$('.search-filter-results').hide();$('.location-filter-results').hide();$('.salary-filter-popup').hide();$('.benefits-filter').removeClass('active');$('.benefits-filter-results').hide();$('.salary-filter').removeClass('active');}
else{$(this).attr('placeholder',$(this).data('original-placeholder'));$('.location-filter-results').hide();$(this).attr('placeholder','Filter');}});$('.location-filter input').bind('keyup click',function(e){e.stopPropagation();var search=$(this).val().toLowerCase();if(e.which==13&&$('.location-filter-results div').length>0){$('.location-filter-results div').eq(0).addClass('hover');$('.location-filter-results div').eq(0).click();return;}
$('.location-filter-results').show();$('.location-filter-results').css('position','absolute');$('.location-filter-results').css('left',$(this).offset().left);$('.location-filter-results').css('top',$(this).offset().top+$(this).outerHeight()-$('.page').offset().top);if(empty(search)){$('.location-filter-results div').show();}
else{$('.location-filter-results div').hide();$('.location-filter-results div').each(function(){needle=$(this).text().toLowerCase();console.log(needle+' =1= '+search);if(needle.indexOf(search)>-1){$(this).show();}});}
if($('.location-filter-results').offset().left+$('.location-filter-results').width()>$('body').width()){$('.location-filter-results').css('left','auto');$('.location-filter-results').css('right','7px');}});$('body').on('click','.location-filter-results div',function(e){e.stopPropagation();var locationToAdd=$(this).data('location');if(!locationToAdd)return;$('.location-filter-input').attr('placeholder',$('.location-filter-input').data('original-placeholder'));$('.location-filter-results').hide();$('.location-filter-input').val('');var isFilterAlreadyActive=false;$('.active-filters-box .active-filter').each(function(){if($(this).data('location')==locationToAdd){isFilterAlreadyActive=true;}});if(isFilterAlreadyActive){return;}
$('.filter-actions').scrollLeft(0);$('.loading_spinner_2018:not(.infinity-scroll)').show();$('.active-filters-box div').removeClass('latest-filter');$('.active-filters-box').prepend('<div data-location="'+$(this).data('location')+'" class="active-filter latest-filter">'+
$(this).text().split(' (')[0]+
'<img alt="Remove this filter" class="action-remove-this-filter" src="/assets/times-circle.svg">'+
'</div>');buildFilterQuery();getJobs();});$('.salary-filter').bind('click',function(e){e.stopPropagation();console.log('5');$('html').removeClass('top-bar-dropdown-expanded');$('.search-filter-input').attr('placeholder',$('.search-filter-input').data('original-placeholder'));console.log('a6');$('.search-filter-results').hide();$('.location-filter-input').attr('placeholder',$('.location-filter-input').data('original-placeholder'));$('.location-filter-results').hide();$('.benefits-filter').removeClass('active');$('.benefits-filter-results').hide();if(!$('.salary-filter-popup').is(':visible')){$('.salary-filter-popup').hide();$('.salary-filter-popup').css('position','absolute');if(($(this).offset().left+$('.salary-filter-popup').outerWidth())>windowSize().width){$('.salary-filter-popup').css('right',0);}
else{$('.salary-filter-popup').css('left',$(this).offset().left);}
$('.salary-filter-popup').css('top',$(this).offset().top+$(this).outerHeight()-$('.page').offset().top);$('.salary-filter-popup').show();$('.salary-filter').addClass('active');}
else{$('.salary-filter-popup').hide();$('.salary-filter').removeClass('active');}});$('.salary-filter-input').bind('mousemove touchmove change click mouseup touchend touchstart mousedown mouseleave',function(e){var minSalary=$(this).val()*10*1000;$('.salary-filter-input-amount').html(minSalary/1000);});$('.salary-filter-input').bind('change',function(e){$('.active-filters-box .active-filter').each(function(){if($(this).data('salary')){$(this).remove();}});var minSalary=$(this).val()*10*1000;var minSalaryK=$(this).val()*10;$('.active-filters-box div').removeClass('latest-filter');$('.active-filters-box').prepend('<div data-salary="'+minSalary+'" class="active-filter latest-filter">'+
'💸 &gt;$'+minSalaryK+'k/y'+
'<img alt="Remove this filter" class="action-remove-this-filter" src="/assets/times-circle.svg">'+
'</div>');$('.filter-actions').scrollLeft(0);buildFilterQuery();getJobs();});$('.search-filter input').bind('click',function(e){if(!$('.search-filter-results').is(':visible')){$(this).data('original-placeholder',$(this).attr('placeholder'));$(this).attr('placeholder','Type...');console.log('6');$('html').removeClass('top-bar-dropdown-expanded');$('.location-filter-input').attr('placeholder',$('.location-filter-input').data('original-placeholder'));$('.location-filter-results').hide();console.log('a7');$('.search-filter-results').hide();$('.salary-filter-popup').hide();$('.benefits-filter-results').hide();$('.benefits-filter').removeClass('active');$('.salary-filter').removeClass('active');}
else{$(this).attr('placeholder',$(this).data('original-placeholder'));console.log('a8');$('.search-filter-results').hide();$(this).attr('placeholder','Filter');}});$('.search-filter input').bind('keyup click',function(e){e.stopPropagation();search=$(this).val().toLowerCase();if(e.which==13&&$('.search-filter-results div').length>0){$('.search-filter-results div').eq(0).addClass('hover');$('.search-filter-results div').eq(0).click();return;}
console.log('a9');$('.search-filter-results').hide();$('.search-filter-results').html('');$('.search-filter-results').css('position','absolute');$('.search-filter-results').css('left',$(this).offset().left);$('.search-filter-results').css('top',$(this).offset().top+$(this).outerHeight()-$('.page').offset().top);if(empty(search)){y=0;addedAutocompleteTags=[];for(var tag in allTags){label=allTags[tag];if(pageType=='tag'){$('.search-filter-results').append('<div data-add="yes" data-tag="'+makeUrlSlug(tag)+'" data-slug="'+makeUrlSlug(tag)+'">'+label+'</div>');}
else{$('.search-filter-results').append('<div data-add="no" data-tag="'+makeUrlSlug(tag)+'" data-slug="'+makeUrlSlug(tag)+'">'+label+'</div>');}
addedAutocompleteTags.push(tag);y++;if(y>=100)break;}}
else{y=0;addedAutocompleteTags=[];for(var tag in allTags){label=allTags[tag];if(tag.substr(0,search.length)==search){if(pageType=='tag'){$('.search-filter-results').append('<div data-add="yes" data-tag="'+makeUrlSlug(tag)+'" data-slug="'+makeUrlSlug(tag)+'">'+label+'</div>');}
else{$('.search-filter-results').append('<div data-add="no" data-tag="'+makeUrlSlug(tag)+'" data-slug="'+makeUrlSlug(tag)+'">'+label+'</div>');}
addedAutocompleteTags.push(tag);y++;}
if(y>=100)break;}
for(var tag in allTags){label=allTags[tag];if(tag.indexOf(search)>-1&&!in_array(tag,addedAutocompleteTags)){$('.search-filter-results').append('<div data-add="yes" data-tag="'+makeUrlSlug(tag)+'" data-slug="'+makeUrlSlug(tag)+'">'+label+'</div>');addedAutocompleteTags.push(tag);y++;}
if(y>=100)break;}}
if(search.length>3){searchTimeAJAX=microtime();console.log('searching '+search+' via on server');$.ajax({url:"/?action=search",type:'POST',dataType:'json',data:{search:search,time:searchTimeAJAX},context:document.body}).done(function(reply){if(reply.time!=searchTimeAJAX){return;}
if(reply.results.length){$('input.search').addClass('active');for(var i=0;i<reply.results.length;i++){var result=reply.results[i];if(result.type=='tag'){$('.search-filter-results').append('<div data-type="tag" data-slug="'+makeUrlSlug(result.tag)+'">'+result.label+'</div>');addedAutocompleteTags.push(result.tag);}
if(result.type=='company'){$('.search-filter-results').append('<div data-type="company" data-url="'+makeUrlSlug(result.url)+'">'+result.label+'</div>');addedAutocompleteTags.push(result.url);}}
$('.search-filter-results').show();}
else{$('input.search').removeClass('active');}});}
if(addedAutocompleteTags.length>0){$('.search-filter-results').show();$('input.search').addClass('active');}
else{$('input.search').removeClass('active');}
$('.filter-actions').scrollLeft(0);console.log('-------');console.log($('.search-filter-results').offset().left+$('.search-filter-results').width());console.log($('body').width());console.log($('.search-filter-results').offset().left+$('.search-filter-results').width()>$('body').width());console.log('-------');if($('.search-filter-results').offset().left+$('.search-filter-results').width()>$('body').width()){console.log('autocomplete-box outside view');$('.search-filter-results').css('left','auto');$('.search-filter-results').css('right','7px');}});$('.top .search').bind('click',function(e){consoleLog('search click');e.stopPropagation();});$('.top .search').bind('focus',function(e){consoleLog('search focus');$('body').addClass('minimize-header');setCookie('new_user','false',365);e.stopPropagation();});$('.top .search').bind('blur',function(){consoleLog('search blur');if(newUser){$('body').removeClass('minimize-header');}});$('.top .fa-chevron-down').bind('click',function(e){consoleLog('chevron click');$('body').addClass('minimize-header');$('body').addClass('minimize-header2');$('body').addClass('xxx');setCookie('new_user','false',365);e.stopPropagation();});var prevScroll=0;if(!empty(localStorage.visited_jobs)){visited_jobs=JSON.parse(localStorage.visited_jobs);$('tr.job').each(function(){id=parseInt($(this).data('id'));if(visited_jobs.indexOf(id)>-1){$(this).addClass('visited');}});}
if(pageType=='job'){if(windowSize().width<600){floatingApplyJobButtonCurrentJobID=currentJobId;if($('.expand-'+currentJobId+' .instructions .button.action-apply').length){$('.floating-apply-job-button-container').show();$('.floating-apply-job-button-container .button')[0].outerHTML=$('.expand-'+currentJobId+' .instructions .button.action-apply')[0].outerHTML;}}}
function openJob(idObj,slug,event){if(!$('html').hasClass('logged-in')&&visit_count>5){window.location.href='/sign-up?user_type=worker';return;}
consoleLog('openJob',idObj);consoleLog('toggleJob');that='#'+idObj;action='';if($(that).hasClass('active')){action='close';}
if(!$(that).hasClass('active')){action='open';}
$(that).addClass('visited');consoleLog('action',action);id=parseInt(idObj.replace('job-',''));if(action=='open'){if(!empty(localStorage.visited_jobs)){visited_jobs=JSON.parse(localStorage.visited_jobs);}
else{visited_jobs=[];}
if(visited_jobs.indexOf(id)<=0){visited_jobs.push(parseInt(id));}
try{localStorage.setItem('visited_jobs',JSON.stringify(visited_jobs));}
catch(error){}
if(windowSize().width<600){floatingApplyJobButtonCurrentJobID=$(that).data('id');if($('.expand-'+$(that).data('id')+' .instructions .button.action-apply').length){$('.floating-apply-job-button-container').show();$('.floating-apply-job-button-container .button')[0].outerHTML=$('.expand-'+$(that).data('id')+' .instructions .button.action-apply')[0].outerHTML;}}
if(windowSize().width<700&&$('.expand-'+$(that).data('id')+' .company_profile').length){$('.expand-'+$(that).data('id')+' .company_profile .qr_code_script').remove();var companyProfileHTML=$('.expand-'+$(that).data('id')+' .company_profile')[0].outerHTML;$('.expand-'+$(that).data('id')+' .company_profile').remove();$('.expand-'+$(that).data('id')+' .description').after(companyProfileHTML);}
if($('.expand-'+$(that).data('id')).length){if(!$('.expand-'+$(that).data('id')).is(':visible')){console.log("if(!$('.expand-'+$(that).data('id')).is(':visible')) {");url=$(that).data('url');$('#dynamic-favicon').remove();var link=document.createElement('link');link.id='dynamic-favicon';link.type='image/'+$(that).find('.logo').data('extension');link.rel='icon';link.href=$(that).find('.logo').data('src');originalFavicon=$('link.remoteok-favicon[rel="icon"]').attr('href');consoleLog($(that).find('.logo').data('src'));document.getElementsByTagName('head')[0].appendChild(link);}
console.log('isMetaOrShiftKeyPressed '+isMetaOrShiftKeyPressed(event));if(isMetaOrShiftKeyPressed(event)){window.open('https://remoteok.com/remote-jobs/'+slug,'_blank');return;}
else{if(window.ga){ga('send','pageview','/'+url);}
history.replaceState(null,null,url);if(window.sa_pageview){window.sa_pageview(url);}
$('.job-'+id).addClass('active');consoleLog('.job-'+id);$('.expand-'+id).addClass('active');lazyload();}}
$('.expand-'+id+' .expandContents .markdown').each(function(){if($(this).data('markdown-is-parsed'))return;markdown=$(this).html();markdown=str_replace('\\n',"\n",markdown);html=markdownConverter.makeHtml(markdown);html=str_replace('<a href=','<a target="_blank" rel="nofollow noopener" href=',html);$(this).html(html);$(this).data('markdown-is-parsed',true);});if($('.job-post-container').length){var html=$('.expand-'+$(that).data('id'));$('.job-post-container').html(html);}
$.ajax({url:"/?action=log_event",type:'POST',dataType:'json',data:{event:'open job',job_id:id,ref:ref},context:document.body}).done(function(reply){consoleLog('event logged open job '+id);});$('#snow_particles').hide();}
if(action=='close'){console.log("if(action=='close') {");consoleLog('that',that);consoleLog('id',id);$('.job-'+id).removeClass('active');$('.expand-'+id).removeClass('active');url=originalUrl;history.replaceState(null,null,originalUrl);if(window.sa_pageview){window.sa_pageview(originalUrl);}
floatingApplyJobButtonCurrentJobID=0;$('.floating-apply-job-button-container').hide();$('#dynamic-favicon').remove();var link=document.createElement('link');link.id='dynamic-favicon';link.rel='icon';link.href=originalFavicon;console.log('Favicon now: '+originalFavicon);document.getElementsByTagName('head')[0].appendChild(link);}}
$('img').bind('error',function(){$(this).css('opacity',0);});$('.action-close-catch-emails').bind('click',function(){if(!empty(pageTagTitle)){setCookie('hidden_subscribe_to_newsletter_'+pageTagTitle,'true',1);}
else{setCookie('hidden_subscribe_to_newsletter','true',1);}
$('.catch-emails').hide();$('html').removeClass('catch-emails-enabled');});$(window).scroll(function(){$('.tooltip-ui').hide();});$('.tooltip').each(function(){if(!empty($(this).attr('title'))){$(this).data('tooltip',$(this).attr('title'));$(this).attr('title','');$(this).removeClass('tooltip');$(this).addClass('tooltip-set');}});$('body').append('<div class="tooltip-ui"></div>');$('body').on('mouseenter','.tooltip-set',function(){if(isMobile)return;if(typeof $(this).data('tooltip')==='undefined'||$(this).data('tooltip')==''){return;}
$('.tooltip-ui').html(str_replace('&#013;','<br/>',$(this).data('tooltip')));$('.tooltip-ui').html(str_replace('\\n','<br/>',$(this).data('tooltip')));$('.tooltip-ui').removeClass('show').show().addClass('show');var top=$(this).offset().top+$(this).outerHeight();if(top<14)top=14;$('.tooltip-ui').css({top:top});var windowWidth=windowSize().width;var left=$(this).offset().left+($(this).outerWidth()/2)-($('.tooltip-ui').outerWidth()/2);if(left<14)left=14;if((left+$('.tooltip-ui').outerWidth())>(windowWidth-14))left=windowWidth-$('.tooltip-ui').outerWidth()-28;$('.tooltip-ui').css({left:left});});$('body').on('mouseleave','.tooltip-set',function(){$('.tooltip-ui').hide().removeClass('show');});$('body').on('click','.tooltip-ui',function(){$(this).hide().removeClass('show');});if($('.nav').length>0){var navOffset;setTimeout(function(){navOffset=$('.nav').offset().top;},250);}
$(window).scroll(function(){if($(window).scrollTop()>navOffset){if($('.nav').css('position')=='relative'){}}
else if($(window).scrollTop()<(navOffset-$('.nav').height()-$('.nav').height())){if($('.nav').css('position')=='fixed'){}}});function number_format(number,decimals,dec_point,thousands_sep){number=(number+'').replace(/[^0-9+\-Ee.]/g,'');var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),sep=(typeof thousands_sep==='undefined')?',':thousands_sep,dec=(typeof dec_point==='undefined')?'.':dec_point,s='',toFixedFix=function(n,prec){var k=Math.pow(10,prec);return ''+(Math.round(n*k)/k).toFixed(prec);};s=(prec?toFixedFix(n,prec):''+Math.round(n)).split('.');if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep);}
if((s[1]||'').length<prec){s[1]=s[1]||'';s[1]+=new Array(prec-s[1].length+1).join('0');}
return s.join(dec);}
if($('.search').length){var currentSampleJob;for(var tag in allTags){currentSampleJob=tag;break;}
var autoTypingActive=true;var transitionDelayTime=0;var sampleJobLength=0;var typingNow=false;var sampleJobTimer=0;var searchElement=$('.search');setInterval(function(){if(autoTypingActive){if(searchElement.val().substr(-1)=='|'){searchElement.val(searchElement.val().substr(0,searchElement.val().length-1)+' ');}
else if($('.search').val().substr(-1)==' '){searchElement.val(searchElement.val().substr(0,searchElement.val().length-1)+'|');}
else{searchElement.val(searchElement.val()+'|');}}},500);var prevValue;searchElement.bind('focus',function(){if(autoTypingActive){$(this).val('');clearTimeout(autoTypingTimer);autoTypingActive=false;console.log('focus search => set false autoTypingActive');}});searchElement.bind('click keyup',function(){if(autoTypingActive){$(this).val('');clearTimeout(autoTypingTimer);autoTypingActive=false;console.log('click/keyup search => set false autoTypingActive');}
if(prevValue!=$(this).val()){prevValue=$(this).val();}});searchElement.bind('blur',function(e){if($(this).val()==''){sampleJobLength=0;typingNow=false;autoTypingActive=true;console.log('blur search => set true autoTypingActive');nextSampleJob(true);}});function typeText(){displaySampleJob=currentSampleJob.substr(0,sampleJobLength++);if(empty(displaySampleJob)){searchElement.val(' ');}
else{searchElement.val(displaySampleJob);}
if(sampleJobLength<currentSampleJob.length+1){typingNow=true;randomMultiplier=80;random=Math.floor(Math.random()*(randomMultiplier*2));autoTypingTimer=setTimeout(typeText,random);}else{sampleJobLength=0;currentSampleJob='';typingNow=false;autoTypingTimer=setTimeout(backspaceText,1250+250*Math.random());}}
function backspaceText(){displaySampleJob=searchElement.val().slice(0,-1);if(empty(displaySampleJob)){searchElement.val(' ');}
else{searchElement.val(displaySampleJob);}
if(!empty(displaySampleJob)){randomMultiplier=80;random=Math.floor(Math.random()*(randomMultiplier*1.5));autoTypingTimer=setTimeout(backspaceText,random);}
else{nextSampleJob();}}
function nextSampleJob(instantly){console.log('nextSampleJob');sampleJobTimer++;if(sampleJobTimer>(Object.keys(allTags).length-1)){sampleJobTimer=0;}
var i=0;for(var tag in allTags){if(i==sampleJobTimer){currentSampleJob=tag;}
i++;}
if(instantly){typeText();}
else{autoTypingTimer=setTimeout(typeText,500);}}
typeText();}
$('.red').bind('click',function(){$(this).removeClass('red');});$('company_logo_image').bind('click',function(){$('input.company_logo').trigger('click');});$('.is_highlighted').bind('click',function(){if($(this).is(':checked')){$('.modal-post .price').text('$'+(basicPrice+priceForHighlightedExtra));$('.modal-post .highlighted_text').text('highlighted');}
else{$('.modal-post .price').text('$'+(basicPrice));$('.modal-post .highlighted_text').text('');}});});function buildFilterQuery(){disablePaginationBecauseWeReachedEnd=false;pageType='tag';console.log('buildFilterQuery');$('.floating-apply-job-button-container').hide();console.log('a1');$('.search-filter-results').hide();$('.salary-filter-popup').hide();$('.salary-filter').removeClass('active');$('.benefits-filter-results').hide();filterQuery['tags']=[];filterQuery['benefits']=[];filterQuery['location']=[];filterQuery['min_salary']=[];filterCount=0;$('.active-filters-box .active-filter').each(function(){if(!empty($(this).data('tag'))){filterQuery['tags'].push($(this).data('tag'));}
if(!empty($(this).data('benefit'))){filterQuery['benefits'].push($(this).data('benefit'));}
if(!empty($(this).data('location'))){filterQuery['location'].push($(this).data('location'));}
if(!empty($(this).data('salary'))){filterQuery['min_salary']=$(this).data('salary');}
if(!empty($(this).data('company'))){filterQuery['company']=$(this).data('company');}
if(!empty($(this).data('source'))){filterQuery['source']=$(this).data('source');}
if(!empty($(this).data('geolock'))){filterQuery['geolock']=true;}
filterCount++;});if(filterCount){$('.active-filters-box div.suggested-filter').remove();}
if($('select.order-by option:selected').val()&&$('.order-by option:selected').val()!='default'){filterQuery['order_by']=$('.order-by option:selected').val();}
console.log('==================');console.log('filterQuery');console.log(filterQuery);console.log('==================');filterUrl='/?';filterAJAXUrl='/?';if(!empty(filterQuery['tags'])){filterQuery['tags'].sort();filterUrl='/remote-';for(var tag of filterQuery['tags']){filterUrl=filterUrl+encodeURIComponent(tag)+'+';}
filterUrl=filterUrl.slice(0,-1);filterUrl=filterUrl+'-jobs';filterUrl=filterUrl+'?';console.log(filterUrl);}
for(var key in filterQuery){if(key=='tags')continue;if(empty(filterQuery[key]))continue;filterUrl=filterUrl+'&'+key+'='+filterQuery[key];}
for(var key in filterQuery){if(empty(filterQuery[key]))continue;filterAJAXUrl=filterAJAXUrl+'&'+key+'='+filterQuery[key];}
filterUrl=filterUrl.replace('?&','?');filterAJAXUrl=filterAJAXUrl.replace('?&','?');if(filterUrl.charAt(filterUrl.length-1)=='?'){filterUrl=filterUrl.slice(0,-1);}
if(filterAJAXUrl.charAt(filterAJAXUrl.length-1)=='?'){filterAJAXUrl=filterAJAXUrl.slice(0,-1);}
if(filterAJAXUrl=='/'){filterAJAXUrl='/?';}
console.log('==================');console.log('filterUrl');console.log(filterUrl);console.log('filterAJAXUrl');console.log(filterAJAXUrl);console.log('==================');originalUrl=filterUrl;}
function getJobs(){$('footer').remove();$('.loading_spinner_2018:not(.infinity-scroll)').show();$('body').scrollTop($('#jobsboard').offset().top);$(window).scrollTop($('#jobsboard').offset().top);$('.loading_spinner_2018:not(.infinity-scroll)').show();$('#jobsboard tbody').html('<tr class="placeholder job"><td colspan="10"></td></tr><tr class="divider"><td></td></tr><tr class="placeholder job"><td colspan="10"></td></tr><tr class="divider"><td></td></tr><tr class="placeholder job"><td colspan="10"></td></tr><tr class="divider"><td></td></tr><tr class="placeholder job"><td colspan="10"></td></tr><tr class="divider"><td></td></tr><tr class="placeholder job"><td colspan="10"></td></tr><tr class="divider"><td></td></tr><tr class="placeholder job"><td colspan="10"></td></tr><tr class="divider"><td></td></tr><tr class="placeholder job"><td colspan="10"></td></tr><tr class="divider"><td></td></tr><tr class="placeholder job"><td colspan="10"></td></tr><tr class="divider"><td></td></tr><tr class="placeholder job"><td colspan="10"></td></tr><tr class="divider"><td></td></tr>');history.replaceState(null,null,filterUrl);if(window.sa_pageview)window.sa_pageview(filterUrl);$.ajax({url:filterAJAXUrl+'&action=get_jobs',type:'GET',}).done(function(reply){if(filterUrl!='/'){$('.active-filters-box .action-remove-latest-filter').show();}
$('#jobsboard tbody').html(reply);if($('#jobsboard tbody tr.job').length){$('.active-filters-box .action-remove-latest-filter').text('❌ Clear '+$('#jobsboard tbody tr.job').length+'+ results');}
else{$('.active-filters-box .action-remove-latest-filter').text('❌ Reset filters');}
$('.loading_spinner_2018:not(.infinity-scroll)').hide();lazyload();});}
function lazyload(){$('.lazyload').each(function(){objectTop=$(this).offset().top;scrollTop=$(window).scrollTop();edge=scrollTop+windowHeight+1000;if(objectTop==scrollTop&&!$(this).hasClass('video')){return;}
if(objectTop<edge){if($(this).data('bg')){$(this).css('background-image',"url('"+$(this).data('bg')+"')");$(this).removeClass('lazyload');$(this).addClass('lazyloaded');}
if($(this).data('srcset')){$(this).prop('srcset',$(this).data('srcset'));$(this).removeClass('lazyload');$(this).addClass('lazyloaded');}
if($(this).data('src')){$(this).prop('src',$(this).data('src'));$(this).removeClass('lazyload');$(this).addClass('lazyloaded');}}});};(function($){'use strict'
function safeAdd(x,y){var lsw=(x&0xFFFF)+(y&0xFFFF)
var msw=(x>>16)+(y>>16)+(lsw>>16)
return(msw<<16)|(lsw&0xFFFF)}
function bitRotateLeft(num,cnt){return(num<<cnt)|(num>>>(32-cnt))}
function md5cmn(q,a,b,x,s,t){return safeAdd(bitRotateLeft(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b)}
function md5ff(a,b,c,d,x,s,t){return md5cmn((b&c)|((~b)&d),a,b,x,s,t)}
function md5gg(a,b,c,d,x,s,t){return md5cmn((b&d)|(c&(~d)),a,b,x,s,t)}
function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t)}
function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|(~d)),a,b,x,s,t)}
function binlMD5(x,len){x[len>>5]|=0x80<<(len%32)
x[(((len+64)>>>9)<<4)+14]=len
var i
var olda
var oldb
var oldc
var oldd
var a=1732584193
var b=-271733879
var c=-1732584194
var d=271733878
for(i=0;i<x.length;i+=16){olda=a
oldb=b
oldc=c
oldd=d
a=md5ff(a,b,c,d,x[i],7,-680876936)
d=md5ff(d,a,b,c,x[i+1],12,-389564586)
c=md5ff(c,d,a,b,x[i+2],17,606105819)
b=md5ff(b,c,d,a,x[i+3],22,-1044525330)
a=md5ff(a,b,c,d,x[i+4],7,-176418897)
d=md5ff(d,a,b,c,x[i+5],12,1200080426)
c=md5ff(c,d,a,b,x[i+6],17,-1473231341)
b=md5ff(b,c,d,a,x[i+7],22,-45705983)
a=md5ff(a,b,c,d,x[i+8],7,1770035416)
d=md5ff(d,a,b,c,x[i+9],12,-1958414417)
c=md5ff(c,d,a,b,x[i+10],17,-42063)
b=md5ff(b,c,d,a,x[i+11],22,-1990404162)
a=md5ff(a,b,c,d,x[i+12],7,1804603682)
d=md5ff(d,a,b,c,x[i+13],12,-40341101)
c=md5ff(c,d,a,b,x[i+14],17,-1502002290)
b=md5ff(b,c,d,a,x[i+15],22,1236535329)
a=md5gg(a,b,c,d,x[i+1],5,-165796510)
d=md5gg(d,a,b,c,x[i+6],9,-1069501632)
c=md5gg(c,d,a,b,x[i+11],14,643717713)
b=md5gg(b,c,d,a,x[i],20,-373897302)
a=md5gg(a,b,c,d,x[i+5],5,-701558691)
d=md5gg(d,a,b,c,x[i+10],9,38016083)
c=md5gg(c,d,a,b,x[i+15],14,-660478335)
b=md5gg(b,c,d,a,x[i+4],20,-405537848)
a=md5gg(a,b,c,d,x[i+9],5,568446438)
d=md5gg(d,a,b,c,x[i+14],9,-1019803690)
c=md5gg(c,d,a,b,x[i+3],14,-187363961)
b=md5gg(b,c,d,a,x[i+8],20,1163531501)
a=md5gg(a,b,c,d,x[i+13],5,-1444681467)
d=md5gg(d,a,b,c,x[i+2],9,-51403784)
c=md5gg(c,d,a,b,x[i+7],14,1735328473)
b=md5gg(b,c,d,a,x[i+12],20,-1926607734)
a=md5hh(a,b,c,d,x[i+5],4,-378558)
d=md5hh(d,a,b,c,x[i+8],11,-2022574463)
c=md5hh(c,d,a,b,x[i+11],16,1839030562)
b=md5hh(b,c,d,a,x[i+14],23,-35309556)
a=md5hh(a,b,c,d,x[i+1],4,-1530992060)
d=md5hh(d,a,b,c,x[i+4],11,1272893353)
c=md5hh(c,d,a,b,x[i+7],16,-155497632)
b=md5hh(b,c,d,a,x[i+10],23,-1094730640)
a=md5hh(a,b,c,d,x[i+13],4,681279174)
d=md5hh(d,a,b,c,x[i],11,-358537222)
c=md5hh(c,d,a,b,x[i+3],16,-722521979)
b=md5hh(b,c,d,a,x[i+6],23,76029189)
a=md5hh(a,b,c,d,x[i+9],4,-640364487)
d=md5hh(d,a,b,c,x[i+12],11,-421815835)
c=md5hh(c,d,a,b,x[i+15],16,530742520)
b=md5hh(b,c,d,a,x[i+2],23,-995338651)
a=md5ii(a,b,c,d,x[i],6,-198630844)
d=md5ii(d,a,b,c,x[i+7],10,1126891415)
c=md5ii(c,d,a,b,x[i+14],15,-1416354905)
b=md5ii(b,c,d,a,x[i+5],21,-57434055)
a=md5ii(a,b,c,d,x[i+12],6,1700485571)
d=md5ii(d,a,b,c,x[i+3],10,-1894986606)
c=md5ii(c,d,a,b,x[i+10],15,-1051523)
b=md5ii(b,c,d,a,x[i+1],21,-2054922799)
a=md5ii(a,b,c,d,x[i+8],6,1873313359)
d=md5ii(d,a,b,c,x[i+15],10,-30611744)
c=md5ii(c,d,a,b,x[i+6],15,-1560198380)
b=md5ii(b,c,d,a,x[i+13],21,1309151649)
a=md5ii(a,b,c,d,x[i+4],6,-145523070)
d=md5ii(d,a,b,c,x[i+11],10,-1120210379)
c=md5ii(c,d,a,b,x[i+2],15,718787259)
b=md5ii(b,c,d,a,x[i+9],21,-343485551)
a=safeAdd(a,olda)
b=safeAdd(b,oldb)
c=safeAdd(c,oldc)
d=safeAdd(d,oldd)}
return[a,b,c,d]}
function binl2rstr(input){var i
var output=''
var length32=input.length*32
for(i=0;i<length32;i+=8){output+=String.fromCharCode((input[i>>5]>>>(i%32))&0xFF)}
return output}
function rstr2binl(input){var i
var output=[]
output[(input.length>>2)-1]=undefined
for(i=0;i<output.length;i+=1){output[i]=0}
var length8=input.length*8
for(i=0;i<length8;i+=8){output[i>>5]|=(input.charCodeAt(i/8)&0xFF)<<(i%32)}
return output}
function rstrMD5(s){return binl2rstr(binlMD5(rstr2binl(s),s.length*8))}
function rstrHMACMD5(key,data){var i
var bkey=rstr2binl(key)
var ipad=[]
var opad=[]
var hash
ipad[15]=opad[15]=undefined
if(bkey.length>16){bkey=binlMD5(bkey,key.length*8)}
for(i=0;i<16;i+=1){ipad[i]=bkey[i]^0x36363636
opad[i]=bkey[i]^0x5C5C5C5C}
hash=binlMD5(ipad.concat(rstr2binl(data)),512+data.length*8)
return binl2rstr(binlMD5(opad.concat(hash),512+128))}
function rstr2hex(input){var hexTab='0123456789abcdef'
var output=''
var x
var i
for(i=0;i<input.length;i+=1){x=input.charCodeAt(i)
output+=hexTab.charAt((x>>>4)&0x0F)+
hexTab.charAt(x&0x0F)}
return output}
function str2rstrUTF8(input){return unescape(encodeURIComponent(input))}
function rawMD5(s){return rstrMD5(str2rstrUTF8(s))}
function hexMD5(s){return rstr2hex(rawMD5(s))}
function rawHMACMD5(k,d){return rstrHMACMD5(str2rstrUTF8(k),str2rstrUTF8(d))}
function hexHMACMD5(k,d){return rstr2hex(rawHMACMD5(k,d))}
function md5(string,key,raw){if(!key){if(!raw){return hexMD5(string)}
return rawMD5(string)}
if(!raw){return hexHMACMD5(key,string)}
return rawHMACMD5(key,string)}
if(typeof define==='function'&&define.amd){define(function(){return md5})}else if(typeof module==='object'&&module.exports){module.exports=md5}else{$.md5=md5}}(this));function isMetaOrShiftKeyPressed(event){if(event?.shiftKey){return true;}
if(event?.metaKey){return true;}
if(event?.ctrlKey){return true;}
if(event?.altKey){return true;}
return false;}
$(function(){if($('.filter-actions').length){let filterActionsIsStickyObserver=new IntersectionObserver(function(entries){if(entries[0].intersectionRatio===0){document.querySelector(".filter-actions").classList.add("sticky");console.log('sticky',entries[0].intersectionRatio);}
else if(entries[0].intersectionRatio===1)
document.querySelector(".filter-actions").classList.remove("sticky");console.log('sticky',entries[0].intersectionRatio);},{threshold:[0,1]});filterActionsIsStickyObserver.observe(document.querySelector("#filter-actions-sticky-observer"));}});