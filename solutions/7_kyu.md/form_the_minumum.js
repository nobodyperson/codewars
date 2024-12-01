//https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values) {
    let newValue = "";     
    values = [...new Set(values)].sort((a, b) => a - b);
    for (let i = 0; i < values.length; i++) {
        newValue += values[i];
    }
    return parseInt(newValue);
}

