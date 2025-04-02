const dfs1 = (graph: Map<number, number[]>, start: number): number[] => {
    const stack: number[] = [start];
    const visited = new Set<number>();
    const result: number[] = [];

    while (stack.length > 0) {
        const node = stack.pop()!;
        if (visited.has(node)) continue;
        visited.add(node);
        result.push(node);
        for (const neighbor of graph.get(node) || []) {
            if (!visited.has(neighbor)) stack.push(neighbor);
        }
    }
    return result
}

// rep 2 3/3/25
const dfs2 = (graph: Map<number, number[]>, start: number): number[] => {
    const stack: number[] = [start];
    const visited = new Set<number>();
    const result: number[] = [];

    while(stack.length > 0) {
        const node = stack.pop()!;
        if (visited.has(node)) continue;
        visited.add(node);
        result.push(node);
        for (const neighbor of graph.get(node) || [])  {
            if(!visited.has(neighbor)) stack.push(neighbor);
        }
    }
    return result;
}