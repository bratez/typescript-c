var Stark = (function () {
    function Stark() {
        this.name = "Brandon";
        this.saying = "Winterfell!";
    }
    Stark.prototype.hello = function (person) {
        console.log('hello, ' + person);
    };
    Stark.castle = "Winterfall!";
    return Stark;
})();
var ned = new Stark();
ned.saying = "Winter is coming";
//console.log(Stark.castle);
ned.hello("Robert");
//# sourceMappingURL=classes.js.map