var words = ['你好', '在吗', '欢迎', '请问您有什么需要'];
var i = 0;

function say(t) {
    setTimeout(function() {
        console.log(words[i]);
        i++;
    }, t);
}

var g = function*() {
    yield say(1000);
    yield say(2000);
    yield say(3000);
    yield say(4000);
}

var res = g();
res.next();
res.next();
res.next();
res.next();