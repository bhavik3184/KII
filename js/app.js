(function() {
    // var app = angular.module("kiiWeb", ["ngRoute", "ngDialog"]);
    var app = angular.module("kiiWeb", ["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "/view/ppt.html",
                controller: "headerController"
            })
            .when("/home", {
                templateUrl: "/view/home.html",
                controller: "homeController"
            })
            .when("/dieselpetrolengines", {
                templateUrl: "/view/product/dieselpetrolengines.html",
                controller: ""
            })
            .when("/pumpset", {
                templateUrl: "/view/product/pumpset.html",
                controller: "pumpController"
            })
            .when("/spareparts", {
                templateUrl: "/view/product/spareparts.html",
                controller: "sparepartsController"
            })
            .when("/agriculturalmachinery", {
                templateUrl: "/view/product/agriMach.html",
                controller: "agriMachController"
            })
            .when("/agriculturalequipment", {
                templateUrl: "/view/product/agriEquip.html",
                controller: "agriEquipController"
            })
            .when("/constructionmachinery", {
                templateUrl: "/view/product/constrMach.html",
                controller: "constrController"
            })
            .when("/projects", {
                templateUrl: "/view/product/projects.html"
            })
            .when("/castingforgingcomponents", {
                templateUrl: "/view/product/castingforgingcomponents.html"
            })
            .when("/ourreach", {
                templateUrl: "view/ourreach.html"
            })
            .when("/contactus", {
                templateUrl: "/view/contactus.html"
            })
            .otherwise({
                redirectTo: "/"
            });
    });
}());