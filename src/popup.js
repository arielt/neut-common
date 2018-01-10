"use strict";

/*jslint browser:true */
/*global chrome, $, jQuery, alert*/

chrome.runtime.sendMessage(
    {'type': 'topSites'},
    function generateList(response) {
        var i, element, results = response.result.topSites;
        for (i = 0; i < results.length; i += 1) {
            element = "<tr><td>";
            element += results[i].host + "</td><td class='center'>";
            element += results[i].reqNum;
            element += "</td><td class='center'>";
            element += (results[i].avg / 1000).toFixed(2);
            element += "</td><td class='center' style='white-space:nowrap;'>";
            element += (results[i].last / 1000).toFixed(2);
            element += "</td></tr>";
            $('#hosts-table').find('tbody').append(element);
        }
        $('#footer').text("Overall tracking " + response.result.sitesNum + " sites");
    }
);
