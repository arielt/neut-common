# Notes

## Install from code

* Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the More Tools menu to get to the same place).

* Ensure that the Developer mode checkbox in the top right-hand corner is checked.

* Click Load unpacked extension… to pop up a file-selection dialog.

* Navigate to the repo directory and select it.

## Components

content_script.js - Content script. https://developer.chrome.com/extensions/content_scripts

event_page.js - Event page. https://developer.chrome.com/extensions/event_pages

## Timing

network time = responseEnd - connectStart

https://www.w3.org/TR/navigation-timing/

https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming

https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API

On load fires when sub-resources are loaded, but obviously doesn't include
upcoming AJAX and similar calls.
We don't measure sub-resources (though on-load is fired when sub-resources)

More extensive timing:
https://github.com/SOASTA/boomerang/blob/master/plugins/restiming.js
```
> window.performance.getEntries()
(6) [PerformanceNavigationTiming, PerformancePaintTiming, PerformancePaintTiming, PerformanceResourceTiming, PerformanceResourceTiming, PerformanceResourceTiming]

> performance.getEntriesByType("navigation");
var perf = performance.getEntriesByType("navigation")[0]
perf.responseEnd - perf.connectStart
performance.getEntriesByType("navigation")[0].responseEnd - performance.getEntriesByType("navigation")[0].connectStart
```

For detailed inspection resource-by-resource, use

```
performance.getEntriesByType('resource')
```

* http://www.picturetopeople.org/text_generator/others/transparent/transparent-text-generator.html

  Logo: Font Masque, Color 28B573 (greenish)

  Primary color: #337ab7, Font: ethnocentric

* Debug Chrome local storage

```
chrome.storage.local.get(function(result){console.log(result)})

chrome.storage.local.get("hosts", function (result) {
    console.log(result);
});
```

## TODOs
