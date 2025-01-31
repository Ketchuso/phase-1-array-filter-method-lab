// Code your solution here
function findMatching(nameArray, string){
    let match = nameArray.filter(function(name){
        return name.toLowerCase() === string.toLowerCase();
    })
    return match;
}

function fuzzyMatch(nameArray, string){
    let match = nameArray.filter(function(name){
        return name.charAt(0) === string.charAt(0);
    })
    return match;
}

function matchName(driver, string){
    let match = driver.filter(function(name){
        return name.name === string;
    })
    return match
}