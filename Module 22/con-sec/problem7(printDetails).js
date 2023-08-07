function printDetails(person) {
    if (typeof person !== "object") {
        return "Enter Valid object";
    } else {
        const name = person.name || "nai";
        const age = person.age || "nai";
        const email = person.email || "nai";
        const bow = person.bow || "nai";
        const result = `My name: ${name}, my age: ${age}, my email: ${email}, my wife: ${bow}`;
        return result;
    }
}

const obj = {
    name: 'mehedy',
    age: 26,
    email: "abc@gmail.com"
};

console.log(printDetails(obj));
