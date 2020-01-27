let Greeting = (name) => {

    console.log("Hello " + name);

    let map = new Map();

    map["name"] = "Max";
    map["name"] = "Igor";

    console.log(map["name"]);
    console.log(map["lastname"]);
}

Greeting("Artem");