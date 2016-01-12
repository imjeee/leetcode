/**
 * no leetcode question found
 **/
function quicksort(arr) {
    if (arr === null || arr.length < 2) return;

    function qs(low, high) {
        if (low >= high) return;

        var mid = Math.floor((low + high)/2);
        var pivot = arr[mid];

        var i = low;
        var j = high;

        while(i <= j) {
            
            while (arr[i] < pivot) i++;
            while (arr[j] > pivot) j--;

            if (i <= j) {
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
                i++;
                j--;
            }
        }
        qs(low, j);
        qs(i, high);
    }

    qs(0, arr.length-1);
}
var arr = [9, 2, 4, 7, 3, 7, 10];
console.log(JSON.stringify(arr));
quicksort(arr);
console.log(JSON.stringify(arr));