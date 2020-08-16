var Stringify = function(msg) { return JSON.stringify(msg,null,2) }
    Stringify.parse = function(obj) { return JSON.parse(JSON.stringify(obj,null,2)) }
    Stringify.log = function(obj) { return console.log(this(obj)) }

module.exports = Stringify;
    