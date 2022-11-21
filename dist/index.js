"use strict";
var summera = function (a, b) { return a + b; };
var apiUrl = "https://tv-api-k39vq.ondigitalocean.app/SVT%2024.json";
var tvProgram = fetch(apiUrl)
    .then(function (res) { return res.json(); })
    .then(function (data) {
    return data;
});
var firstnames = ["Jonatan", "Eva", "Anna"];
var years = [23, 34, 54, 46];
var something;
something = "fem";
something = null;
//tuple
var employee = ["Jonatan", 13];
//enum
var Status;
(function (Status) {
    Status[Status["Loading"] = 0] = "Loading";
    Status[Status["Complete"] = 1] = "Complete";
    Status[Status["Failed"] = 2] = "Failed";
})(Status || (Status = {}));
;
var loadingStatus = Status.Failed;
if (loadingStatus === Status.Complete) {
}
var loadingStatus2 = "failed";
//# sourceMappingURL=index.js.map