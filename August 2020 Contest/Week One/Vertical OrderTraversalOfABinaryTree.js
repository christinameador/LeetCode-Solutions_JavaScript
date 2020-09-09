var verticalTraversal = function(root) {
    const tree = [];
    
    function dfs(node, x, y) {
        if(!node) return;
        tree.push([x, y, node.val]);
        dfs(node.left, x-1, y-1);
        dfs(node.right, x+1, y-1);
    }
    dfs(root, 0, 0);
    
    tree.sort((a, b) => {
        const [xa, ya, va] = a;
        const [xb, yb, vb] = b;
        
        if(xa !== xb) return xa - xb;
        if(ya !== yb) return yb - ya;
        return va - vb;
    });
    
    const map = new Map();
    
    for(let [x, y, v] of tree) {
        if(!map.has(x)) map.set(x, []);
        map.get(x).push(v);
    }
    return [...map.values()];
};