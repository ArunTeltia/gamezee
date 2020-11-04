import React from 'react';
import {getMergeSortAnimations,getBubbleSortAnimations,getInsertionSortAnimations,getSelectionSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

const ANIMATION_SPEED_MS = 7;

const NUMBER_OF_ARRAY_BARS = 140;

const PRIMARY_COLOR = 'orange';

const SECONDARY_COLOR = 'red';

const helperSorter=(animations)=>{
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS) 
  }
}
function isSorted(arr) {
  const limit = arr.length - 1;
  return arr.every((_, i) => (i < limit ? arr[i] <= arr[i + 1] : true));
}
export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 530));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    helperSorter(animations);
  }

  quickSort() {
  }

  insertionSort(){
    const animations = getInsertionSortAnimations(this.state.array);
    helperSorter(animations);
    // this.setState(this.state.array.sort());
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    helperSorter(animations);
  }
  selectionSort(){
    const animations = getSelectionSortAnimations(this.state.array);
    helperSorter(animations);
  }
  
  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        <div className="ArrayBars">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        </div>
        <div className="buttons">
        <button className="new_array" onClick={() => this.resetArray()}>New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.selectionSort()}>Selection Sort</button>
        </div>
        <div>
          PS:Selection Sort has lowest number of swaps
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
