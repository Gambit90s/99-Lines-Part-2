let myFriends = ["Ronnie", "Bobbie", "Ricki", "Mike", "Brosif"]; // An array of 'myFriends'.

for(let i = 0; i < myFriends.length; i++) 
{
let myFriend = myFriends[i];
    console.log(myFriend);

    for(let k = 99; k > 0; k--) {
        if(k > 2) { // 99 to 2 ..."lines of"... 
            console.log(k + " lines of code in the file, " + k + " lines of code; " + myFriend + " strikes one out, clears it all out, " + (k - 1) + " lines of code in the file.");
        } else if(k == 2) { // 2 == plural. 
            console.log(k + " lines of code in the file, " + k + " lines of code; " + myFriend + " strikes one out, clears it all out, " + (k - 1 ) + " line of code in the file.");
        } else if (k == 1) { // 1 == singular.
            console.log(k + " line of code in the file, " + k + " line of code; " + myFriend + " strikes one out, clears it all out, no more lines of code in the file!");
        };
    };
};  