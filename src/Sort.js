import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // do cool stuff here

  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
    snapshot(nums);
    if (nums.length <= 1) return nums;

    const pivot = nums.pop();
    const left = [];
    const right = [];
  
    nums.forEach(n => {
      snapshot(nums);
      if (n < pivot) left.push(n);
      else right.push(n);
    });
    const result = [...sort(left), pivot, ...sort(right)];
    snapshot(result);
    return result;
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(50)));
  done();
  return <>
    <App />
    <h1>Sorfdasft</h1>
  </>
}
