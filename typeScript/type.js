/*
var isWinter: boolean = false;
isWinter = true;

var count: Number = 5;
var notName: String = "Bran";

var names: any[] = ['John', 'Rickon', 'Arya', 5];

enum Starks {Jon, Bran, Eduard, Catlyn};

var cat : Starks = Starks.Catlyn;

function getName() : void{
    console.log('ololo trololo')
}*/
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Eddard" });
printName({ name: "Joe" });
//# sourceMappingURL=type.js.map