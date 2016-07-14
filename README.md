ordinalize
=======

ordinalize numbers

```javascript
var ordinalize = require("@nathanfaucett/ordinalize");


ordinalize(0) === "0";
ordinalize(1) === "1st";
ordinalize(2) === "2nd";
ordinalize(3) === "3rd";
ordinalize(10) === "10th";
ordinalize(11) === "11th";
ordinalize(12) === "12th";
ordinalize(13) === "13th";
ordinalize(14) === "14th";
ordinalize(51) === "51st";
ordinalize(62) === "62nd";
ordinalize(73, false) === "73";
ordinalize(84, false) === "th";
ordinalize(100, false) === "th";
```
