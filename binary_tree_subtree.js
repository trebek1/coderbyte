function Node(val){
	this.value = val; 
	this.left = null; 
	this.right = null; 
}

//making the tree

var root = new Node(10); 
var n1 = new Node(4); 
var n2 = new Node(6);
var n3 = new Node(30);

root.left = n1;
root.right = n2;
n1.right = n3;

// bigge(right) tree with subtree 
var root_r = new Node(26);
var n1_r = new Node(10);
var n2_r = new Node(3);
var n3_r = new Node(4);
var n4_r = new Node(6);
var n5_r = new Node(3);
var n6_r = new Node(30);

n3_r.right = n6_r;
n1_r.left = n3_r;
n1_r.right = n4_r;
n2_r.right = n5_r;
root_r.left = n1_r;
root_r.right = n2_r;

// first create pre-order and in order-arrays 
// a pre-order and in-order array is needed to uniquely identify a binary treee 

function in_order(root,nodes){

	// in order traversal prints smallest to largst in binary tree 
	// visits left child then node, then right 
	if(root && root.left){
		in_order(root.left, nodes); 
	}
	nodes.push(root.value);
	if(root && root.right){
		in_order(root.right, nodes);
	} 
	return nodes; 
}

// pre-order traversal 

function pre_order(root, nodes){
	// push root value 
	// if a left exists, call itself, 
	// if right exitst, call right 
	// visiting nodes before visiting their children 

	nodes.push(root.value); 
	if(root && root.left){
		pre_order(root.left, nodes); 
	}
	if(root && root.right){
		pre_order(root.right, nodes); 
	}
	return nodes; 
}

function post_order(root, nodes){
	if(root && root.left){
		post_order(root.left);
	}
	if(root && root.right){
		post_order(root.right)
	}
	nodes.push(root.value); 
	return nodes; 
}

function Table(){

	return {}; 
}

var table = new Table(); 

function levels(root,level, table){
	if(!table[level]){
			table[level] = [];
		}
		table[level].push(root.value); 
		level++; 
	if(root.left){
		levels(root.left,level,table);
	} 
	if(root.right){
		levels(root.right,level,table);
	}
	return table; 
}

function level_order(root, nodes){
	var queue = [root];
	while(queue.length > 0){

		var n = queue.shift();
		nodes.push(n.value); 
		if(n.left){
			queue.push(n.left);
		}
		if(n.right){
			queue.push(n.right)
		}
		level++; 
	}
	return nodes;
}

function is_subtree(root, root_r){

	var inorder1 = in_order(root, []).join('-'); 
	console.log(inorder1);
	
	var inorder2 = in_order(root_r,[]).join('-');
	console.log(inorder2); 
	
	var preorder1 = pre_order(root,[]).join('-');
	console.log(preorder1);
	
	var preorder2 = pre_order(root_r,[]).join('-');
	console.log(preorder2); 

	console.log(inorder2.indexOf(inorder1))

	return inorder2.indexOf(inorder1) !== -1 && preorder2.indexOf(preorder1) !== -1 
}

function pre_order_nr(root,nodes){
	var stack = [];
	while(1){
		while(root){
			
			nodes.push(root.value);
			stack.unshift(root);
			root = root.left;  
		}
		if(stack.length === 0){
			break; 	
		}else{

			root = stack.shift(); 
			root = root.right;

		}	
		

	}

	return nodes; 

}

console.log(pre_order_nr(root_r, [])); 
console.log(pre_order(root_r, [])); 
//console.log(is_subtree(root, root_r));
//console.log(level_order(root_r, []));
//console.log(levels(root_r, 0, table)); 


// in order -> print left node, then parent then right node (prints in order of increasing value) 

// pre-order -> print parent before children 

// post order -> print children before prnting node 

// level order -> print all of one level before moving onto next (bfs)










