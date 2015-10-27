/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    var arr = [];

    for (var i = 0; i < array.length; i++) {
      if (n === undefined) {
        return array[i];
      } else if (i < n && n !== undefined) {
        arr.push(array[i]);
      }
    }
    return arr;
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    var arr2 = [];

    for (var i = 0; i < array.length; i++) {
      if (n === undefined) {
        return array.pop();
      } else if(i === array.length - n && n !== undefined) {
        arr2.push(array[i]);
      } else if(i === n && n !== undefined && n !== 0) {
        arr2.push(array[i]);
      } else if(n > array.length && n !== undefined) {
        arr2.push(array[i]);
      }
    }
    return arr2;
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function (collection, iterator) {
    var newArr = [];
    var val;
    var dex;
    for(var i in collection) {
      val = collection[i];
      dex = i;
      newArr.push(iterator(val, dex, collection));
      i++;
    }
     return newArr;
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
      for (var i = 0; i < array.length; i++) {
          return array.indexOf(target);
      }
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, iterator) {
    var even = [];
    var odd = [];
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] % iterator === 0 && iterator % 2 === 0 && iterator !== 0) {
        even.push(collection[i]);
      } else if(collection[i] % iterator === 0 && iterator % 3 === 0 && iterator !== 0) {
        odd.push(collection[i]);
      }
    }
    return [even, odd];
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, iterator) {
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {

  };


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
    var arr3 = [];
    var arrObj;
    for (var i in array) {
        arrObj = array[i];
        for(var j in arrObj) {
            console.log(j);
      if (j === propertyName) {
           console.log(arrObj[j]);
        arr3.push(arrObj[j]);
      }
      i++;
    }
  }  return arr3;
}

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    for (var i in collection) {
        console.log(collection[i]);
      if (collection[i] === target) {
        return true;
       }
       i++;
       }
       return false;
    }


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {

  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj) {
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
  };


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    var y = false;
    return function() {
      y = true;
      return func();
    }
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
      return function() {
        setTimeout(func(), wait, a, b);
      }
    };



  // Shuffle an array.
  _.shuffle = function(array) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

}).call(this);
