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
