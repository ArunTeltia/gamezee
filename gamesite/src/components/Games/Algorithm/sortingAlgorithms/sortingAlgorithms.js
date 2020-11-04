export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
export function getBubbleSortAnimations(array){
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
        animations.push([j, auxiliaryArray[j+1]]);
        animations.push([j+1, auxiliaryArray[j]]);
        let temp = auxiliaryArray[j];
        auxiliaryArray[j] = auxiliaryArray[j + 1];
        auxiliaryArray[j + 1] = temp;
      }
    }
  }
  return animations
}
export function getInsertionSortAnimations(array){
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array
  const len = array.length;
  for (let i = 1; i < len; i++) {
    let j = i - 1;
    let current = auxiliaryArray[i];
    while (j > -1 && current < auxiliaryArray[j]) {  
      animations.push([j+1, auxiliaryArray[j]]);
      auxiliaryArray[j+1] = auxiliaryArray[j];
      j--;
    }
    animations.push([j+1, current]);
    auxiliaryArray[j + 1]=current;
  }
  return animations
}
export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array
  const len = auxiliaryArray.length;
  for(let i = 0; i < len; i++) {
    let min = i;
    for(let j = i+1; j < len; j++){
        if(auxiliaryArray[j] < auxiliaryArray[min]) {
            min=j; 
        }
     }
     if (min != i) {
    animations.push([min, auxiliaryArray[i]]); 
    animations.push([i, auxiliaryArray[min]]); 
    let tmp = auxiliaryArray[min]; 
    auxiliaryArray[min] = auxiliaryArray[i];
    auxiliaryArray[i] = tmp; 
     }     
  }
  return animations;
};
export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array
  const len = auxiliaryArray.length;
  quickSort(auxiliaryArray,0,auxiliaryArray.length,animations);
  console.log(animations);
  animations.pop();
  animations.pop();
  return animations;
}
const quickSort = (arr, start, end,animations) => {
  let pivotIndex = pivot(arr, start, end,animations);

  if (start >= end) return arr;
  quickSort(arr, start, pivotIndex,animations);
  quickSort(arr, pivotIndex + 1, end,animations);

};
const pivot = (arr, start = 0, end = arr.length + 1,animations) => {
  const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

  let pivot = arr[start],
      pointer = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < pivot  ) {
      pointer++;
      animations.push([pointer,arr[i]]);
      animations.push([i,arr[pointer]]);
      swap(arr, pointer, i);
    }
  };
  animations.push([start,arr[pointer]]);
  animations.push([pointer,arr[start]]);
  swap(arr, start, pointer);

  return pointer;
}
