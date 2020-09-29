var arrowObject = {
    name: 'arrowObject',
    printName: () => {
        // this doesnot refer to the function object
        console.log(this);
    }
};

var functionObject = {
    name: 'functionObject',
    // normal func this refers to the function
    printName: function () {
        console.log(this);
    }
};

// Prints: Object {name: "functionObject"}
functionObject.printName();
arrowObject.printName();