//定义一个新的模块，在这个模块中定义一个新的/通用的过滤器
angular.module("fenYe",[]);
//在这个模块中注册一个分页的过滤器
angular.module("fenYe")
    .filter("pageFilter",function(){
    //这个过滤器函数会接收三个参数
    //参数1：是被 过滤 的数组（商品集合）
    //参数2：请求的页码数
    //参数3：是页面的大小
       return function(szlength,pageNum,pageSize) {
          if(angular.isArray(szlength) && angular.isNumber(pageNum) && angular.isNumber(pageSize)) {
              //根据分页算法，计算请求页面数据的起始索引值
              var startIndex = (pageNum - 1) * pageSize;
              //判断起始索引是否在数组范围内
              if(startIndex>=szlength.length){
                  return [];    //如果计算的索引值超出了数组范围，返回空数组
              }
              //从传进的数组中截取指定数量（pageSize）出来，并返回
              return szlength.slice(startIndex, startIndex + pageSize)
          }
       }
    })
    .filter("pageNavFilter",function(){
            return function(szlength,pageSize){
                if(angular.isArray(szlength) && angular.isNumber(pageSize)){
                    //计算页数
                    var pageNum=Math.ceil(szlength.length/pageSize);
                    var nav=[];
                    for(var i=0;i<pageNum;i++){
                        nav.push(i+1);    //nav=[1,2,3]
                    }
                    return nav;
                }else{
                    return szlength;
                }
            }
    });

