function minValue(values) {
    let newValue = "";     
    values = [...new Set(values)].sort((a, b) => a - b);
    for (let i = 0; i < values.length; i++) {
        newValue += values[i];
    }
    return parseInt(newValue);
}

