/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

tribe.events=tribe.events||{},tribe.events.views=tribe.events.views||{},tribe.events.views.breakpoints={},function($,obj){"use strict";var $document=$(document);obj.selectors={container:'[data-js="tribe-events-view"]',dataScript:'[data-js="tribe-events-view-data"]',breakpointClassPrefix:"tribe-common--breakpoint-"},obj.breakpoints={},obj.setContainerClasses=function($container,data){Object.keys(data.breakpoints).forEach((function(breakpoint){var className=obj.selectors.breakpointClassPrefix+breakpoint;obj.breakpoints[breakpoint]=data.breakpoints[breakpoint],$container.outerWidth()<data.breakpoints[breakpoint]?$container.removeClass(className):$container.addClass(className)}))},obj.handleResize=function(event){obj.setContainerClasses(event.data.container,event.data.data)},obj.unbindEvents=function($container){$container.off("resize.tribeEvents",obj.handleResize).off("beforeAjaxSuccess.tribeEvents",obj.deinit)},obj.bindEvents=function($container,data){$container.on("resize.tribeEvents",{container:$container,data:data},obj.handleResize).on("beforeAjaxSuccess.tribeEvents",{container:$container},obj.deinit)},obj.deinit=function(event,jqXHR,settings){obj.unbindEvents(event.data.container)},obj.initTasks=function($container,data){$container instanceof jQuery||($container=$($container)),obj.bindEvents($container,data),obj.setContainerClasses($container,data);$container.data("tribeEventsBreakpoints",{initialized:!0})},obj.init=function(event,index,$container,data){$container instanceof jQuery||($container=$($container));var state=$container.data("tribeEventsBreakpoints");state&&state.initialized||obj.initTasks($container,data)},obj.setup=function(container){var $container=$(container);if($container.is(obj.selectors.container)){var $data=$container.find(obj.selectors.dataScript),data={};$data.length&&(data=JSON.parse($data.text().trim())),obj.initTasks($container,data)}},obj.ready=function(){$document.on("afterSetup.tribeEvents",obj.selectors.container,obj.init)},$(obj.ready)}(jQuery,tribe.events.views.breakpoints);