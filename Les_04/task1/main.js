function meeting(arrays, need) {
    if (need > 8) return 'Your meeting room can take up to 8 chairs!';
    if (need === 0) return 'Game ON';

    let freeChairs = arrays.map((arr) => ((arr[1] - arr[0].length) > 0) ? arr[1] - arr[0].length : 0);

    let result = [];
    for (let countChairs of freeChairs) {

        if (need == 0) break;
        let counter = countChairs - need;

        if (counter > 0) {
            result.push(need);
            break;
        } else if (counter < 0) {
            result.push(need + counter);
            need = Math.abs(countChairs - need);
        } else {
            result.push(need);
            need -= countChairs;
            break;
        }
    }

    if (need > 0) {
        return 'Not enough!';
    }

    return result;
}


let test = meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5);

alert(test);
