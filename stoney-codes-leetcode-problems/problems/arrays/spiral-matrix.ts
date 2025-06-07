// Given an m x n matrix, return all elements of the matrix in spiral order.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  while (matrix) {
    // #1) add first row / list of matrix
    const firstList = matrix.shift();
    if (firstList) result.push(...firstList);

    // #2) append last element of all lists in matrix
    if (matrix && matrix[0]) {
      for (const row of matrix) {
        if (row !== undefined && row.length > 0) {
          const lastElement = row.pop();
          if (lastElement) result.push(lastElement);
        }
      }
    }

    // #3) add reverse of last row / list
    if (matrix) {
      const lastRowReverse = matrix.pop()?.reverse();
      if (lastRowReverse) result.push(...lastRowReverse);
    }

    // #4) append first element of all rows / lists
    if (matrix) {
      for (const row of matrix) {
        const firstElement = row.shift();
        if (firstElement) result.push(firstElement);
      }
    }
  }

  return result;
}

const spiralOrder2 = (matrix: number[][]): number[] => {
  const result: number[] = [];

  // iterative approach over recursive call stack approach
  while (matrix) {
    // 1 get the first row 
    const firstList = matrix.shift();
    if (firstList) result.push(...firstList);
    // 2 get last element of reamaining lists
    if (matrix && matrix[0]) {
      for (const row of matrix) {
        if (row != undefined && row.length > 0) {
          const lastEl = row.pop();
          if (lastEl) result.push(lastEl);
        }
      }
    }
    // 3 add reverse of last list 
    if (matrix) {
      const lastRowReverse = matrix.pop()?.reverse();
      if (lastRowReverse) result.push(...lastRowReverse);
    }
    // 4 add first el of remaining lists
    if (matrix) {
      for (const row of matrix) {
        const firstEl = row.shift();
        if (firstEl) result.push(firstEl);
      }
    }
  }
}

const spiralOrder1 = (matrix: number[][]): number[] => {
  const result: number[] = [];
  // iterative approach over recursive call stack approach 
  while (matrix) {
    // #1 get the first row
    const firstList = matrix.shift();
    if (firstList) result.push(...firstList);
    // #2 get the last element of all remaining rows 
    if (matrix && matrix[0]) {
      for (const row of matrix) {
        if (row !== undefined && row.length > 0) {
          const lastElement = row.pop();
          if (lastElement) result.push(lastElement);
        }
      }
    }
    // #3 get the last row in reverse 
    if (matrix) {
      const lastRowReverse = matrix.pop()?.reverse();
      if (lastRowReverse) result.push(...lastRowReverse);
    }
    // #4 append first element of all remainging rows
    if (matrix) {
      for (const row of matrix) {
        const firstElement = row.shift();
        if (firstElement) result.push(firstElement);
      }
    }
  }

  return result;
}
