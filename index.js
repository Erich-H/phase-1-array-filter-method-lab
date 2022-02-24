// Code your solution here
function findMatching(array, string) {
    const matching = array.filter((
        el => el.toLowerCase() === string.toLowerCase()
    ))
    return matching
}

function fuzzyMatch(array, string) {
    const fuzzy = array.filter((
        el => el.slice(0, 2) === string
    ))
    return fuzzy
}

function matchName(objArr, string) {
    const matching = objArr.filter((
        el => el.name === string
    ))
    return matching
}