// ==UserScript==
// @name           Cocoa Pivotal Tracker
// @namespace      http://github.com/mattpuchlerz/cocoa-pivotal-tracker
// @description    Re-skins Pivotal Tracker to appear more like a Cocoa application.
// @include        http://www.pivotaltracker.com/*
// @include        https://www.pivotaltracker.com/*
// ==/UserScript==

var link   = document.createElement('link');
link.type  = 'text/css';
link.rel   = 'stylesheet';
link.href  = 'http://mattpuchlerz.github.com/cocoa-pivotal-tracker/cocoa-pivotal-tracker.css';
link.media = 'screen';
link.title = 'Cocoa Tracker';
link.id    = 'cocoa-tracker-link';

document.getElementsByTagName('head')[0].appendChild(link);