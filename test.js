var str=`
王兵
韦杰
赵某某
钱某某
王某某
孙某某
`;

var arr=str.split('\n');
console.log(arr);
var res=arr.filter(function(val,index,arr){
   if( val.search(/^王/) >-1 ){
        return false;
   }else{
       return true;
   }
}).join('\n');
console.log(arr);
console.log(res);