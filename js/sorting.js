function insertionSort(arr){
    for (i = 1; i < arr.length; i++){
        let j = i - 1
        let current = arr[i]
        while (j >= 0 && arr[j] > current) {
            arr[j - 1] = arr[j]
            j--
        }

        arr[j+ 1 ] = current
    }
}