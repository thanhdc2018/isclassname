function isclassname (str){
    regex = /^[CAP][0-9]{4}[GHIKLM]$/;
    if (regex.test(str)) {
        return true;
    }else {return false;}
}

let validnames = [
    "C0318G",
    "C0418L",
    "C0818M",
    "C1218I",
];

let invalidnames = [
    "M0318G",
    "P0323A",
    "I1418p",
    "S1318K",
];

console.log("TRUE class name");
for (validname of validnames) {
    console.log(validname + ": " + isclassname(validname));
}
console.log("FALSE class name");
for (invalidname of invalidnames) {
    console.log(invalidname + ": " + isclassname(invalidname))
};
