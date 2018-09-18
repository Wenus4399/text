/**
 * Created by home on 2017/8/1.
 */
app.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when("/food",{templateUrl:"food.html",controller:"food"})
        .when("/elect",{templateUrl:"elect.html",controller:"food"})
        .when("/book",{templateUrl:"book.html",controller:"food"})
        .when("/cloth",{templateUrl:"cloth.html",controller:"food"})
        .when("/shop",{templateUrl:"shop.html",controller:"shop"})
        .when("/stastic",{templateUrl:"stastic.html",controller:"stastic"})
        .when("/add",{templateUrl:"add.html",controller:"add"})
        .when("/correct",{templateUrl:"correct1.html",controller:"correct"})
        .when("/delet",{templateUrl:"delet.html",controller:"delet"})
        .when("/",{templateUrl:"all.html"})

}]);