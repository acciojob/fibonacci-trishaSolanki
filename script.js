// function fibonacci(num) {
//     if(num === 0){
//         return 0;
//     }else if(num === 1){
//         return 1;
//     }else{
//         let feb = [0,1];
    
//         for(let i=2; i<=num; i++){
//             feb[i] = feb[i-1] + feb[i-2];
//         }
//         return feb[num];
//     }
// }

// module.exports = fibonacci;


function fibonacci(num) {
  if (num <= 0) return 0;
  if (num === 1) return 0;
  if (num === 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}
module.exports = fibonacci;
