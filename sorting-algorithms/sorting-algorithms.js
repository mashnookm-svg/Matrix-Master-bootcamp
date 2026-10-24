// Bubble Sort
// function bubbleSort(arr){
//     let len=arr.length
//     for(let i=0 ; i<len ; i++){
//         for(let j=0 ; j<len-1-i ; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//             }
//         }
//     }
//     return arr;
// }
// let array=[9,7,5,4,3,1];
// console.log(bubbleSort(array))

// Selection Sort

function SelectionSort(arr){
    for(let i=0 ; i<arr.length ; i++){
        minindex=i
        for(let j=i+1 ; j<arr.length ; j++){
            if(arr[j]<arr[minindex]){
                minindex=j
            }
        }
        temp=arr[i]
        arr[i]=arr[minindex]
        arr[minindex]=temp
    }
    return arr
}
let array=[23,54,24,67,94,34,89,59,2,54]
console.log(SelectionSort(array))