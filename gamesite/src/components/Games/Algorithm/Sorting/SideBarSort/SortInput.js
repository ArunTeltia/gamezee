import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './SortInput.css';

const SortInput = () => {
  const [Sort, SelectSort] = useState('bubble');
  const [labelData, setlabelData] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [array, setArray] = useState([3, 8, 1, 5, 9, 6, 0]);
  const [backgroundColorData, setBackgroundColorData] = useState([
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(125, 6, 6, 0.6)',
  ]);
  const handleSelectChange = e => {
    console.log(e.target.value);
    SelectSort(e.target.value);
  };
  const handleInputChange = (e, index) => {
    console.log(e.target.value);
    console.log(index);
    const SpreadArray = [...array];
    SpreadArray[index] = +e.target.value;
    setArray(SpreadArray);
  };
  const onAddClick = e => {
    e.preventDefault();
    const addData = [...array, 0];
    const addLabelData = [...labelData, labelData.length];
    const backgroundData = [...backgroundColorData, 'rgba(125, 6, 6, 0.6)'];
    setArray(addData);
    setlabelData(addLabelData);
    setBackgroundColorData(backgroundData);
  };
  const onRemoveClick = e => {
    e.preventDefault();
    const addData = [...array.splice(1)];

    const addLabelData = [...labelData.splice(1)];
    const backgroundData = [...backgroundColorData.splice(1)];
    setArray(addData);
    setlabelData(addLabelData);
    setBackgroundColorData(backgroundData);
  };
  const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  const onSubmitClick = async e => {
    if (Sort === 'bubble') {
      console.log('bubble');
      const len = array.length;
      let i, j, stop;
      for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
          if (array[j] > array[j + 1]) {
            setArray(array => {
              let data = [...array];
              let temp = data[j];
              data[j] = data[j + 1];
              data[j + 1] = temp;
              console.log(data);
              return data;
            });
            setBackgroundColorData(backgroundColorData => {
              let data = [...backgroundColorData];
              let temp = data[j];
              data[j] = data[j + 1];
              data[j + 1] = temp;
              console.log(data);
              return data;
            });
            await sleep(2000);
            console.log(array);
          }
        }
      }
    } else if (Sort === 'selection') {
      let len = array.length,min;
      for (let i = 0; i < len; i++) {
        // Finding the smallest number in the subarray
		min = i;
        for (let j = i + 1; j < len; j++) {
          if (array[j] < array[min]) {
            min = j;
          }
        }
        if (min != i) {
		  setArray(array => {
			let data = [...array];
			let temp = data[i];
			data[i] = data[min];
			data[min] = temp;
			console.log(data);
			return data;
		  });
		  
		  setBackgroundColorData(backgroundColorData => {
			let data = [...backgroundColorData];
			let temp = data[i];
			data[i] = data[min];
			data[min] = temp;
			console.log(data);
			return data;
		  });
		  await sleep(1000);
        }
      }
    } else if (Sort === 'insertion') {
		let len = array.length;
        for (let i = 1; i < len; i++) {
            // Choosing the first element in our unsorted subarray
			let current = array[i];
			let backgroundColor = backgroundColorData[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < array[j])) {
				setArray(array => {
					let data = [...array];
					data[j+1] = data[j];
					return data;
				});
				setBackgroundColorData(backgroundColorData => {
					let data = [...backgroundColorData];
					data[j+1] = data[j];
					return data;
				});
                j--;
			}
			setArray(array => {
				let data = [...array];
				data[j+1] = current;
				return data;
			});
			setBackgroundColorData(backgroundColorData => {
				let data = [...backgroundColorData];
				data[j+1] = backgroundColor;
				return data;
			});
			await sleep(800);
        }
    } else if (Sort === 'merge') {
    } else if (Sort === 'heap') {
    }
  };
  const chartData = {
    labels: labelData,
    datasets: [
      {
        label: 'Index',
        data: array,
        backgroundColor: backgroundColorData,
      },
    ],
  };
  return (
    <div className="side_bar_sort">
      <select
        id="sorttype"
        className="select-css"
        onChange={e => handleSelectChange(e)}
        value={Sort}
      >
        <option value="bubble">Bubble Sort</option>
        <option value="selection">Selection Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="merge">Merge Sort</option>
        <option value="heap">Heap Sort</option>
      </select>
      <div className="input_sort">
        <button className="removeData" onClick={e => onRemoveClick(e)}>
          Remove
        </button>
        {array.map((elem, index) => {
          return (
            <input
              key={'input' + index}
              className="input_pod"
              type="number"
              value={elem}
              onChange={e => handleInputChange(e, index)}
            />
          );
        })}
        <button className="addData" onClick={e => onAddClick(e)}>
          Add
        </button>
      </div>

      <div className="chart">
        <Bar
          data={chartData}
          options={{
            title: {
              text: 'Sorting',
              fontSize: 25,
            },
          }}
        />
      </div>
      <button
        className="submit_button"
        onClick={e => {
          onSubmitClick(e);
        }}
      >
        Sort
      </button>
    </div>
  );
};

export default SortInput;
