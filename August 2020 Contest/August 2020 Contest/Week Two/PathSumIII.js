function recPathSum (root,sum,count){
    if(!root) return []
    // finding value of possible numbers from left and right subtrees
    let left = recPathSum(root.left,sum,count)
    let right = recPathSum(root.right,sum,count)
    // checking is the root itself is equal to sum or not
    if(root.val === sum) count[0]+= 1
    
	// Adding root value to the possible sumArrays obtained from the right and left sub trees
    left = left.map(item => item + root.val)
    right = right.map(item => item + root.val)
	
	// Filtering out the values which are equal to the required sum and counting the length of the required array
	// Then adding it to the count 
    count[0] += left.concat(right).filter(item=>item===sum).length
    
	// Returning the possible sumArray to the parent
    return [root.val,...left,...right]
}
var pathSum = function(root, sum) {
    let count = [0]
    recPathSum(root,sum,count)
    return count
};