var iceCreamStore = {
    order: {
        customerName: "tom",
        icecream: "vanilla"
    }
}

console.log(iceCreamStore.order.customerName);
var won5Students = [
    {
        name: "Sydney",
        email: "sjbarney99@gmail.com"
    },
    {
        name: "Caden",
        email: "cado36@gmail.com"
    }
];
console.log(won5Students[1]);
won5Students.push({name: "Buzz", email: "buzzlightyearToTheRescue@gmail.com"});
console.log(won5Students[2]);
console.log(won5Students[1].email);

var myPhone = {

    model: "Iphone 8",
    manufacturer: "Apple",
    processor: {
        model: "IOS",
        manufacturer: "Apple",
        powerLimit: "64gb"
    },
    screen: {
        width: 2,
        height: 4,
        type: "Touch Screen"
    }
}
var phone = myPhone.processor.model;
console.log(phone);
function myFunc() {
    var jessie = "is in a local scope";
    name = 'The function ran';
    return "Something";
}
console.log(myFunc);
myFunc();
name;

if (true) {
    var varTest = "Hey";
    let letTest = false;
    console.log(letTest);
}
console.log(varTest);
console.log(letTest);


