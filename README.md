# Neut agent common code

## Components

content_script.js - Content script. https://developer.chrome.com/extensions/content_scripts

event_page.js - Event page. https://developer.chrome.com/extensions/event_pages

## Timing

Network time = responseEnd - connectStart

https://www.w3.org/TR/navigation-timing/

https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming

https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API

On load event fires when sub-resources are loaded. It obviously doesn't include
upcoming AJAX and similar calls.

We don't measure fetch of sub-resources.

## TODOs
