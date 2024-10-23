function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    function fn() {
      return "fisrt class";
    }
  
    return fn;
  }
  function returnsAnAnonymousFunction() {
    return function() {
        return "before all";
        
    }
  }
  
