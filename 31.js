//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correc
//message is printed.
var fiends_name = ["hina", "zubair", "anam"];
if (fiends_name.length > 0) {
    //      console.log("we have friends");
    //  }
    //Loop though the array and print each user
    for (var _i = 0, fiends_name_1 = fiends_name; _i < fiends_name_1.length; _i++) {
        var name_1 = fiends_name_1[_i];
        console.log(name_1);
    }
}
else {
    console.log("we need to find some users");
}
//remove all user name from array
var null_name = [];
//check if the list of user is not empty after removel
if (null_name.length > 0) {
    //      console.log("we need to find some users");
    //  }
    //Loop though the array and print each user
    for (var _a = 0, null_name_1 = null_name; _a < null_name_1.length; _a++) {
        var name_2 = null_name_1[_a];
        console.log(name_2);
    }
}
else {
    console.log("weneed to find some users!");
}
