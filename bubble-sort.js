/*
Bubble Sort works by repeatedly swapping the adjacent elements if they are in wrong order.
*/

let bubbleSort = (input) => {
    //console.dir(input);
    for (let i = 0; i < input.length - 1; i++) {

        for (let j = i + 1; j < input.length; j++) {

            if (input[i] > input[j]) {
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
            //console.log(input[i] + "-" + input[j] + "-" + input.join(""));
        }
        //console.dir(input);
    }

    return input;
}

console.assert(bubbleSort([9, 4, 7, 2, 8, 1]).join("") === "124789", "Sort for [9, 4, 7, 2, 8, 1] failed.");
console.assert(bubbleSort([5, 3, 1]).join("") === "135", "Sort for [5,3,1] failed.");