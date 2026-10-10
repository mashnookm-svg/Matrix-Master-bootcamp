//exercise 1
{
    let car = {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        start: function() {
            console.log("The car has started.");
        }
    }

    console.log(car.make);
    car.start();
}

//exercise 2
{
    let car = {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        start: function() {
            console.log("The car has started.");
        },
        drive: function() {
            console.log("The car is driving.");
        }
    };

    car.start();
    car.drive();
}