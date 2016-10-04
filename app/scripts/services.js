'use strict';

angular.module('confusionApp')

  .constant("baseURL","http://localhost:3000/")

  .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL,$http) {


      this.getDishes = function(){
          return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
 };
//      
//      $http.get('http://localhost:3000/dishes/1').success(function(res){
//          console.log("gettin to respsonse",res);
//    
  /*})
      
       $http.get('http://localhost:3000/dishes').success(function(response) {
            console.log("I got the data I requested",response);
            $scope.contact = "";
          });
        };
        */

      this.getPromotion = function(){          return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
      };


  }])

  .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {

      var corpfac = {};

      corpfac.getLeaders = function(){
          return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }});
      };

      return corpfac;

  }])

 .service('favFactory', ['$resource', 'baseURL', function($resource,baseURL) {


      this.getFav = function(){
          return $resource(baseURL+"favorites/:id",null,  {'update':{method:'PUT' }});
      };

  }])
  .service('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {

      this.getFeedbacks = function(){
          return $resource(baseURL+"feedback/:id",null,  {'update':{method:'PUT' }});
      };

  }])

;
