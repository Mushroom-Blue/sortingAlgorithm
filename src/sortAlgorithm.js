function sort(array){
    for (let index = 0; index < array.length; index++) {
        let minimum = index;
        for (let n = index + 1; n < array.length; n++) {
            if (array[n] < array[minimum]) {
                minimum = n;
            }
            
        }
        if (array[minimum] < array[index]) {
            [array[index], array[minimum]] = [array[minimum], array[index]]
        }
    }
    return array;
}