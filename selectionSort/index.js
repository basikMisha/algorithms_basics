function findSmallest(array) {
    let smallest = array[0];
    let smIndex = 0;
    array.forEach((elem, index) => {
        if(elem < smallest) {
            smallest = elem;
            smIndex = index;
        }
    });
    return smIndex;
}

const arr = [5, 3, 6, 2, 10];


function selectionSort(array) {
    const sortedArr = [];
    while (array.length > 0) {
        const smallest = findSmallest(arr);
        sortedArr.push(array.splice(smallest, 1)[0]);
      }
    return sortedArr;
}

console.log(selectionSort(arr));
