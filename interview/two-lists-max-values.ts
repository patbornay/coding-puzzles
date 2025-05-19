// consider two lists of ints A and B both of length n.
// if there is an index i such that A[i] >= A[k] for all k
// AND B[i] >= B[k] for all k, then return i.
// Otherwise return -1.

// 1. Understand the problem 
// Basically I need to identify the largest number in A at index i is also the largest number 
// in B at index i
// example: A: [1,0,1] B: [0,1,1] returns index of 2