(function() {
    var app = angular.module("kiiWeb");

    var headerController = function($scope, $location) {

        var homeUrl = $location.protocol() + "://" + $location.host();

        var menus = [{
            name: "Presentation",
            link: homeUrl + "#/ppt",
            cls: ""
        }, {
            name: "Home",
            link: homeUrl + "#/home",
            cls: ""
        }, {
            name: "Products",
            link: "dropdown-toggle",
            cls: "dropdown"
        }, {
            name: "Our reach",
            link: homeUrl + "#/ourreach",
            cls: ""
        }, {
            name: "Contact Us",
            link: homeUrl + "#/contactus",
            cls: ""
        }];

        var productmenus = [{
            name: "Diesel/Petrol Engines ",
            link: homeUrl + "#/dieselpetrolengines",
            cls: "btn "
        }, {
            name: "Pump set",
            link: homeUrl + "#/pumpset",
            cls: "btn "
        }, {
            name: "Spare parts ",
            link: homeUrl + "#/spareparts",
            cls: "btn "
        }, {
            name: "Agricultural Machinery ",
            link: homeUrl + "#/agriculturalmachinery",
            cls: "btn "
        }, {
            name: "Agricultural Equipment",
            link: homeUrl + "#/agriculturalequipment",
            cls: "btn "
        }, {
            name: "Construction Machinery",
            link: homeUrl + "#/constructionmachinery",
            cls: "btn "
        }, {
            name: "Projects",
            link: homeUrl + "#/projects",
            cls: "btn "
        }, {
            name: "Casting & forging components",
            link: homeUrl + "#/castingforgingcomponents",
            cls: "btn "
        }];

        $scope.menus = menus;
        $scope.productmenus = productmenus;
    };

    app.controller("headerController", ["$scope", "$location", headerController]);
}());