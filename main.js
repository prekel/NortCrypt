function mix(str) {
    var p = str;
    for (var i = 1; i < str.length - 1; i++) {
        if (str[i] == p[i]) {
            for (var j = 1; j < str.length - 1; j++) {
                if (p[j] != str[i] && str[j] != p[i]) {
                    var temp = p[i];
                    p = p.substring(0, i) + p[j] + p.substring(i + 1);
                    p = p.substring(0, j) + temp + p.substring(j + 1);
                }
            }
        }
    }
    return p;
}
var h = /[а-я]{3,}/gi; //шаблон: слова из букв русского алфавита длиннее 3 букв
document.body.innerHTML = document.body.innerHTML.replace(h, mix);
