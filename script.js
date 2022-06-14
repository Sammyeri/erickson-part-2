let name =prompt("Welcome to GC mini golf! What is your name?");
let numberholes =prompt(`Hi, ${name}! Would you like to play 3 or 6 holes today?`);
let putts=0

if (numberholes == 3){
    let par =9;
    console.log(`${name} is playing ${numberholes} holes with par of ${par}.`);
    for (let i=1; i<=3; i++){
        putts += parseInt(prompt(`How many putts for hole ${i}?`));
    }
    if (putts < par) {
        under = par - putts;
        console.log(`Great job, ${name}! your total par was -${under}`);
    } else if (putts == par) {
        console.log(`Good game, ${name}. Your total par was: 0.`);
    } else {
        over = putts - par;
        console.log(`Nice try, ${name}... Your total par was: +${over}.`);
    }
} else if (numberholes == 6){
    let par =18;
    console.log(`${name} is playing ${numberholes} holes with par of ${par}.`);
    for (let i=1; i<=6; i++){
        putts += parseInt(prompt(`How many putts for hole ${i}?`))
    }
    if (putts < par) {
        under = par - putts;
        console.log(`Great job, ${name}! your total par was -${under}`);
    } else if (putts == par) {
        console.log(`Good game, ${name}. Your total par was: 0.`);
    } else {
        over = putts - par;
        console.log(`Nice try, ${name}... Your total par was: +${over}.`);
    }
} else {
    console.log(`Im sorry, we do not have ${numberholes} holes, please try again.`);
}

