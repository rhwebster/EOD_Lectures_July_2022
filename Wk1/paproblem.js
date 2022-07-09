function additionMutator(arr, number) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        // console.log(`this is iteration ${i}`, num, arr[i])
        num += number;
        console.log(`this is iteration ${i}`, num, arr[i])
        arr2.push(num)
        console.log(arr2)
    }
    console.log(arr2);
    return arr2;
}

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1);     // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2);     // [ 10, 8, 3 ]