package binarysearchtree

type BinarySearchTree struct {
	left  *BinarySearchTree
	data  int
	right *BinarySearchTree
}

// NewBst creates and returns a new BinarySearchTree.
func NewBst(i int) *BinarySearchTree {
	return &BinarySearchTree{
		left:  nil,
		data:  i,
		right: nil,
	}
}

// Insert inserts an int into the BinarySearchTree.
// Inserts happen based on the rules of a binary search tree
func (bst *BinarySearchTree) Insert(i int) {
	current := bst
	for {
		if i <= current.data {
			if current.left == nil {
				current.left = NewBst(i)
				return
			} else {
				current = current.left
			}
		} else {
			if current.right == nil {
				current.right = NewBst(i)
				return
			} else {
				current = current.right
			}
		}
	}
}

// SortedData returns the ordered contents of BinarySearchTree as an []int.
// The values are in increasing order starting with the lowest int value.
// A BinarySearchTree that has the numbers [1,3,7,5] added will return the
// []int [1,3,5,7].
func (bst *BinarySearchTree) SortedData() []int {
	result := make([]int, 0)
	nodes := make([]BinarySearchTree, 0)
	current := bst
	visited := map[BinarySearchTree]bool{}
	for {
		if _, seen := visited[*current]; !seen && current.left != nil {
			nodes = append(nodes, *current)
			visited[*current] = true
			current = current.left
			continue
		}
		result = append(result, current.data)
		if current.right != nil {
			current = current.right
			continue
		}

		if len(nodes) > 0 {
			current = &nodes[len(nodes)-1]
			nodes = nodes[:len(nodes)-1]
			continue
		}
		return result

	}
}
