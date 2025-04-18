// breadth first search
// graph traversal algorithm
// explores nodes at the current level first, works well for finding the 
// shortest path in an unweighted graph
// uses a queue (FIFO structure)

// time complexity O(v + e) v = vertices and edges
// space complexity O(v) we store visited nodes and the queue

// returns an array of the path taken to find the shortest path
const bfs0 = (graph: Record<number, number[]>, start: number): number[] => {
    const visited = new Set<number>();
    const queue: number[] = [start];
    const result: number[] = [];

    while(queue.length > 0) {
        const node = queue.shift()!; // Dequeue first element

        if(!visited.has(node)) {
            visited.add(node);
            result.push(node);

            // Enqueue all unvisited neighbors
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return result;
}

// Example graph (Adjacency List)
const graph = {
    1: [2, 3],
    2: [1, 4, 5],
    3: [1, 6, 7],
    4: [2],
    5: [2],
    6: [3],
    7: [3]
};

// Run BFS from node 1
console.log(bfs0(graph, 1)); // Output: [1, 2, 3, 4, 5, 6, 7]
// visualisation
//     1
//    / \
//   2   3
//  /|   |\
// 4 5   6 7

// 28/03/25 rep 
const bfs2 = (graph: Map<number, number[]>, start: number): number[] => {
    const visited = new Set<number>();
    const queue: number[] = [start];
    const result: number[] = [];

    while (queue.length > 0) {
        const node = queue.shift()!;

        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
    return result;
}

// 17/03/25 rep
const bfs1 = (graph: Map<number, number[]>, start: number): number[] => {
    const visited = new Set<number>();
    const queue: number[] = [start];
    const result: number[] = [];

    while (queue.length > 0) {
        const node = queue.shift()!; // takes the first element 

        if (!visited.has(node)) {
            // if we havent visited the node add it to visted and add it to results
            visited.add(node);
            result.push(node);

            // add each neighbor to the queue, this perpetuates the breadth first pattern
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor)
                }
            }
        }
    }
    return result;
}

// time complexity O(v + e) verts and edges
// space complexity O(v) we need to store all the verts we visit