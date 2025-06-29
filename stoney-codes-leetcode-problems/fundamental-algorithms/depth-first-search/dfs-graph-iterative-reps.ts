// 3. Boundary checking (crucial for graph problems!)
function isValidPosition(matrix: number[][], row: number, col: number): boolean {
    return row >= 0 && row < matrix.length && 
           col >= 0 && col < matrix[0].length;
}

const dfsMatrixTraversal = (
  matrix: number[][],
  startRow: number,
  startCol: number
): number[] => {
  const visited = new Set<string>();
  const result: number[] = [];
  const stack: Array<{ row: number; col: number }> = [];

  // Start with initial position
  stack.push({ row: startRow, col: startCol });

  while (stack.length > 0) {
    // Pop from stack (LIFO - Last In, First Out)
    const { row, col } = stack.pop()!;
    const key = `${row},${col}`;

    // Skip if out of bounds or already visited
    if (!isValidPosition(matrix, row, col) || visited.has(key)) {
      continue;
    }

    // Mark as visited and add to result
    visited.add(key);
    result.push(matrix[row][col]);
    console.log(
      `DFS iterative visiting [${row}][${col}] = ${matrix[row][col]}`
    );

    // Add all valid neighbors to stack
    // Note: We add in reverse order to match recursive DFS order
    const directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    for (let i = directions.length - 1; i >= 0; i--) {
      const [dRow, dCol] = directions[i];
      const newRow = row + dRow;
      const newCol = col + dCol;

      // We'll check bounds when we pop from stack
      stack.push({ row: newRow, col: newCol });
    }
  }
  return result;
};
