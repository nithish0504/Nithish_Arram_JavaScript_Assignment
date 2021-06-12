//Start of Assignment
//Start of question 1
let array1=[1,2,3,4,5];
n=array1.length;
//n in length of array
d=5;
//This function takes array and its length and d as input and rotates the array
function rotateArray(arr,d,n){
   while (d!==0){ 
       arr.unshift(arr.pop());
       d=d-1;
   }
}
//This function doesn't return anything
//Function call
rotateArray(array1,d,n);
console.log(array1);
// End of question 1



// Start of question 2
const arrayToCount = [3,3,4,2,4,4,2,4,4];
// function to get majority Element
function majorityElement(arrayToCount){
    let array_length=arrayToCount.length;
    //min_count is n/2
    min_count=array_length/2;
    //initiating a variable to store Majority Element
    let mode=null;
    for (let num of arrayToCount) {
        // Count of each element in the array
        let count = arrayToCount.filter(i => i === num).length;
        //checking the conditional case >n/2
        if (count>min_count){
            // updating variable
            mode=num;
        }
    }
    //Checking if there is a majority Element
    if(mode===null){
        console.log("No majority Element");
    }
    else{
        console.log("Majority Element is"+"  "+mode);
    }
}
//Function call
majorityElement(arrayToCount);
//End of quetion 2




// Start of question 3

function minDifferenceTriplet(arr1, arr2, arr3, len){
        //Sorting the arrays uding function using difference
		arr1.sort(function(a, b){return a - b});
		arr2.sort(function(a, b){return a - b});
		arr3.sort(function(a, b){return a - b});
		let minel = 0;
		let maxel = 0;
		let otherel = 0;
		//initializing difference to maximun
		let difference = 100000000;
		// Iterating through the three arrays
		for (let l of arr1){
		    for (let m of arr2){
		        for(let n of arr3){
		             // Getting sum of the three elements
		             let sum = l + m + n;
		             //Getting max of three elements
			         let max = Math.max(Math.max(l, m), n);
			         //Getting min of three elements
			         let min = Math.min(Math.min(l, m), n);
			         //Checking the difference of the triplets 
		         	 if (difference > (max - min)){
			        	difference = max - min;
			        	maxel = max;
			        	otherel = sum - (max + min);
			        	minel = min;
		         	}
		        }
		    }
		}

		// Printing the triplets 
		console.log(maxel + ", " + otherel + ", " + minel);
	}
// initializing arrays	
let arr1 = [15,12,18,9];
let arr2 = [10,17,13,8];
let arr3 = [14,16,11,5];
//Getting length of arrays
let len = arr1.length;
//Function call
minDifferenceTriplet(arr1, arr2, arr3, len);
//End of question 3

//Start of question 4

     
//Function t calculate maximum sum path in the matrix
function maximumSumPath(mat){
    //Finding maximum value of the first row
    //initializing max_sum variable
    let max_sum = -1;
    //Iterating through the first row and colums of first row
    //initializing i to 0 and incrimenting i to iterate over the colums
    //i<M checking so that we dont go out ofindex range
    for(let i = 0; i < M; i++)
        //Getting maximum of maxP_sum and elements of first row
        max_sum = Math.max(max_sum, mat[0][i]);
    //Iterating through ith row till i<n no of rows
    for(let i = 1; i < N; i++){
        //Initializing max_sum to -1
        max_sum = -1;
        //Iterating through columns till j<M no of columns
        for(let j = 0; j < M; j++){
            //Iterating through all the possible paths
            if (j > 0 && j < M - 1)
                //Gettings max of two elements and summing them in the path
                mat[i][j] += Math.max(mat[i - 1][j],
                             Math.max(mat[i - 1][j - 1],
                                      mat[i - 1][j + 1]));
 
            // When diagonal right is not possible
            else if (j > 0)
            //Getting max of two elements and Summing them in the path
                mat[i][j] += Math.max(mat[i - 1][j],
                                      mat[i - 1][j - 1]);
  
            //Iterating till the last but one column 
            else if (j < M - 1)
                //Getting max of two elements and summing them in the path
                mat[i][j] += Math.max(mat[i - 1][j],
                                      mat[i - 1][j + 1]);
            // Store max path sum
            max_sum = Math.max(mat[i][j], max_sum);
        }
    }
    //Printing the maximum sum
    console.log(max_sum);
}
 
//Initializing matrix
let matrix1 = [[ 10, 10, 2, 0, 20, 4 ],[ 1, 0, 0, 30, 2, 5 ],
             [ 0, 10, 4, 0, 2, 0 ],
            [ 1, 0, 2, 20, 0, 4 ] ];
//Storing number or rows of matrix
let N=matrix1.length;
//Storing number of colums in matrix1
let M=matrix1[0].length;
//Function call
maximumSumPath(matrix1);

//End of question 4


//Start of question 5
//Fuction to get row containing maximum no of 1's
function getMaxNoOf1(matrix){
    // Initializing index for iteration
    let ind=0;
    //Initializing maxCountOf1 for comparision
    let maxCountOf1=0;
    //Initializing loop ehich iterates through matrix
    for (let i of matrix){
        //Finding no of 1's in each row
       let countOf1 = i.filter(j => j === 1).length;
       //Comparing the no of 1's with the countOf1 variable
       if (countOf1>maxCountOf1){
           // Storing the maximun index
           result_index=ind;
       }
       //Incrementing index to iterate through matrix
       ind=ind+1;
    }
    //Printing the result index of row of matrix having maximum no of 1's
    console.log(result_index);
}
//initializing matrix
let matrix=[[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]];
//Function call
getMaxNoOf1(matrix);
//End of question 5

//Nithish Arram revert to nithish0504@gmail.com

//End of Assignment