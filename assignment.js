// A program to convert Feet into Mile.


function feetToMile(feet) {
    if (feet > 0) {
        var mile = feet * 0.00018939393;
        return mile;
    }
    else {
        console.log("Error:Distance cannot be negative");
    }
}

var output = feetToMile(5000);
console.log('Answer:', output, 'mile');




// A program to calculate the total wood for making a chair,table and bed.


function woodCalculator(chair, table, bed) {
    if (chair >= 0 && table >= 0 && bed >= 0) {
        var chairWood = chair * 1;
        var tableWood = table * 3;
        var bedwood = bed * 5;
        var sum = chairWood + tableWood + bedwood;
        return sum;
    }
    else {
        console.log("Alert:please don't leave any information empty or don't give any negative vale");
    }

}

var output = woodCalculator(5, 3, 5)
console.log('Total would required :', output, 'cubic feet')





// A program to calculate the total bricks for making a bulding


function brickCalculator(floor) {
    if (floor >= 1 && floor <= 10) {
        var brick = floor * 15 * 1000;
        return brick;
    }
    else if (floor >= 11 && floor <= 20) {
        var brick = (10 * 15 * 1000) + ((floor - 10) * 12 * 1000);
        return brick;
    }
    else if (floor >= 20) {
        var brick = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000);
        return brick;
    }
    else {
        console.log('please put the floor correctly');
    }
}

var output = brickCalculator(0);
console.log('Total brick required :', output);








//A program to find the smallest name in an array

function tinyFriend(names) {
    if (names === undefined || names.length == 0) {
        console.log('Alert: please put the names correctly')
    }
    else {
        var smallest = names[0];
        for (var i = 0; i < names.length; i++) {
            var currentName = names[i];
            if (currentName.length < smallest.length) {
                smallest = currentName;
            }

        }
        return smallest;
    }

}


var output = tinyFriend(['atik', 'mohin', 'mim', 'jakaria']);
console.log('The smallest name is :', output);
