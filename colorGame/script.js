//to display the current time
const watch = document.querySelector(".watch");
const showTime = () => {
    let dt = new Date();
    watch.innerHTML = dt;
}
setInterval(showTime, 1000);

const pink = document.querySelector(".pink")
const blue = document.querySelector(".blue")
const red = document.querySelector(".red")
const green = document.querySelector(".green")
const yellow = document.querySelector(".yellow")
const teal = document.querySelector(".teal")
const sandybrown = document.querySelector(".sandybrown")
const purple = document.querySelector(".purple")
const magenta = document.querySelector(".magenta")
const tomato = document.querySelector(".tomato")
const result = document.querySelector(".result")
const colorName = document.querySelector(".colorName")
const getBGColor = (color) => window.getComputedStyle(color).backgroundColor;

const getText = (txt) => {
    let t = txt.innerHTML;
    return `This is ${t} Color`
};
const pickedColor = (color, t) => color.addEventListener("mouseenter", () => colorName.innerHTML = t);
const notPicked = () => {
    addEventListener("mouseout", () => {
        return colorName.innerHTML = "No colors Selected"
    });
}

pickedColor(pink, getText(pink));
pickedColor(blue, getText(blue));
pickedColor(red, getText(red));
pickedColor(green, getText(green));
pickedColor(yellow, getText(yellow));
pickedColor(teal, getText(teal));
pickedColor(sandybrown, getText(sandybrown));
pickedColor(purple, getText(purple));
pickedColor(magenta, getText(magenta));
pickedColor(tomato, getText(tomato));
notPicked();
// const pickedColor = (color, d, t) => {
//     color.addEventListener("mouseenter", () => {
//         result.style.background = d;
//         colorName.innerHTML = t
//     });
// }
// pickedColor(pink, getBGColor(pink), getText(pink))
// pickedColor(blue, getBGColor(blue), getText(blue))
// pickedColor(red, getBGColor(red), getText(red))
// pickedColor(green, getBGColor(green), getText(green))
// pickedColor(yellow, getBGColor(yellow), getText(yellow))
// pickedColor(teal, getBGColor(teal), getText(teal))
// pickedColor(sandybrown, getBGColor(sandybrown), getText(sandybrown))
// pickedColor(purple, getBGColor(purple), getText(purple))
// pickedColor(magenta, getBGColor(magenta), getText(magenta))
// pickedColor(tomato, getBGColor(tomato), getText(tomato))



// i = 0;
// setInterval(() => {
//     const arr = ["DEVLOPE", "DEVLOPE", "DEVLOP", "DEVLO", "DEVL", "DEV", "DE", "D", "", "E", "En", "Ent", "Enter", "Enterp", "Enterpe", "Enterpen", "Enterpena", "Enterpenau", "Enterpenaur", "Enterpenau", "Enterpena", "Enterpen", "Enterpe", "Enterp", "Enter", "Ente", "Ent", "En", "E", "En", "Ent", "Enth", "Enthu", "Enthus", "Enthusi", "Enthusia", "Enthusias", "Enthusiast"];
//     changer.innerHTML = arr[i];
//     i++;
//     if (i === arr.length)
//         i = 0;
// }, 200);


// i = 0;
// const changer = document.querySelector("#changer");
// const role=(r)=>{
//     changer.innerHTML+=r
// }
// setInterval(() => {
//     const arr1 = ["E","N","T","E","R","P","E","N","A","U","R"]
//     const arr2 = ["E","N","T","H","U","S","I","A","S","T"]
//     const arr3 = ["D","E","V","L","O","P","E","R"]
//     role(arr1[i]);
//     i++;
//     if (i === arr.length)
//     i = 0;
// }, 1000)

// const role = (r) => {
//     let x = r.split('');
//     let i = 0;
//     let y=setInterval(() => {
//         console.log(x[i])
//         changer.innerHTML+=x[i]
//         i++;
//         if(i==x.length){
//             clearInterval(y)
//         }
//     }, 1000)

// }

// i=0;
// const arr = ["RAVI ", "CHANDAN ", "VIKKY "]
// for (var k=0;k<arr.length;) {
//     j = 0;
//         setInterval(() => {
//             console.log("k=", k);
//             changer.innerHTML += arr[k].charAt(j)
//             console.log(arr[k].charAt(j));
//             j++;
//         }, 1000);
//     if(changer.innerHTML=arr[k])
//     {
//         console.log("Inside k");
//         k++;
//     }

// }