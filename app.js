

document.addEventListener("DOMContentLoaded", button);
function button() {
    
    let button = document.createElement("button");
    let btnText = document.createTextNode("Sing");

    button.appendChild(btnText);
    document.body.appendChild(button);
};



document.addEventListener("click", click);

function click() {
    for (let i = 0; i < myFriends.length; i++) {
        let div = document.createElement("div");
        div.className = "myFriends";

        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(myFriends[i]);
        h3.appendChild(h3Text);
        div.appendChild(h3);

        for (let j = 99; j > 0; j--) {
            let p = document.createElement("p");
            let pText;

            if (j > 2) {
                pText = document.createTextNode(j + "lines of code in the file," + j + "lines of code;" + myFriends[i] + "strike one outerHeight, clears it all out," + (j - 1) + "lines of code in the file");
            } else if (j === 2) {
                pText = document.createTextNode(j + "lines of code in the file," + j + "lines of code;" + myFriends[i] + "strike one outerHeight, clears it all out," + (j - 1) + "lines of code in the file");
            } else {
                pText = document.createTextNode(j + "lines of code in the file," + j + "lines of code;" + myFirends[i] + "strike one outerHeight, clears it all out, no more lines of code in the file");

                p.appendChild(pText);
                div.appendChild(p);
            }
            div.body.appendChild(div);
        }
    }



    let myFriends = ["Ronnie", "Bobbie", "Ricki", "Mike", "Brosif"]; // An array of 'myFriends'.
    function Sing() {
        for (let i = 0; i < myFriends.length; i++) {

            for (let j = 99; j > 0; j--) {
                if (j > 2) { // 99 to 2 ..."lines of"... 
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + myFriends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.");
                } else if (j == 2) { // 2 == plural. 
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + myFriends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.");
                } else  { // 1 == singular.
                    console.log(j + " line of code in the file, " + j + " line of code; " + myFriends[i] + " strikes one out, clears it all out, no more lines of code in the file!");
                };
            };
        };
    };
};