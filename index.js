function saturdayFun(activity){
   switch(activity){
    case 'bathe my dog':
        return "This Saturday, I want to bathe my dog!"
        
    default:
        return "This Saturday, I want to roller-skate!"
}
}

function mondayWork(location){
    switch(location) {
     case 'work from home':
        return "This Monday, I will work from home."
     
     default:
        return "This Monday, I will go to the office."
}
}

function wrapAdjective(wrap) {
    const innerFunction = function (emphatic) {
      return `You are ${wrap}${emphatic}${wrap}!`;
    };
    return innerFunction;
  }
    


saturdayFun();
saturdayFun("bathe my dog");
mondayWork();
mondayWork("work from home");
wrapAdjective("*"), ("a hard worker");
wrapAdjective("||");