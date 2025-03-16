// breadth first search
// graph traversal algorithm
// explores nodes at the current level first, works well for finding the 
// shortest path in an unweighted graph
// uses a queue (FIFO structure)

// time complexity O(v + e) v = vertices and edges
// space complexity O(v) we store visited nodes and the queue

// returns an array of the path taken to find the shortest path
const bfs = (graph: Record<number, number[]>, start: number): number[] => {
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
console.log(bfs(graph, 1)); // Output: [1, 2, 3, 4, 5, 6, 7]
// visualisation
//     1
//    / \
//   2   3
//  /|   |\
// 4 5   6 7

const bfsDegreesOfSeparation = (network: Map<string, string[]>, start: string, target: string): number => {
    if (start === target) return 0;

    const queue: [string, number][] = [[start, 0]]; // [person, degree]
    const visited = new Set<string>();

    while (queue.length > 0) {
        const [person, degree] = queue.shift()!; // dequeue

        if(!visited.has(person)) {
            visited.add(person);

            for (const friend of network[person] || []) {
                if (friend === target) {
                    return degree + 1;
                }
                if (!visited.has(friend)) {
                    queue.push([friend, degree + 1]);
                }
            }
        }

        return -1; // No connection found
    }
}

// Example Social Network (Adjacency List)
const socialNetwork = new Map<string, string[]>([
    ["Alice", ["Bob", "Claire"]],
    ["Bob", ["Alice", "David", "Eve"]],
    ["Claire", ["Alice", "Frank"]],
    ["David", ["Bob"]],
    ["Eve", ["Bob", "Frank"]],
    ["Frank", ["Claire", "Eve"]]
]);

// Find degrees of separation between Alice and Frank
console.log(bfsDegreesOfSeparation(socialNetwork, "Alice", "Frank")); // Output: 2