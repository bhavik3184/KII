(function() {
    var app = angular.module("kiiWeb");

    var validateContactFrmCtrl = function($scope) {
        $scope.cntName = "";
        $scope.cntEmail = "";
        $scope.form = {
            create: [{
                    vClass: "{ 'has-error' : userForm.cntName.$invalid && !userForm.cntName.$pristine }",
                    vLabel: "Name*",
                    vType: "text",
                    isReq: "Required",
                    vName: "name",
                    vModel: "userName",
                    vPlaceholder: "Name",
                    vMinLen: "",
                    vValidation: [{
                        vShow: "userForm.userName.$invalid && !userForm.userName.$pristine",
                        showMsg: "You name is required."
                    }]
                }, {
                    vClass: "{ 'has-error' : userForm.cntEmail.$invalid && !userForm.cntEmail.$pristine }",
                    vLabel: "Email",
                    vType: "email",
                    isReq: "",
                    vName: "email",
                    vModel: "cntEmail",
                    vPlaceholder: "EMail",
                    vMinLen: "5",
                    vValidation: [{
                        vShow: "userForm.cntEmail.$invalid && !userForm.cntEmail.$pristine",
                        showMsg: "Enter a valid email."
                    }, {
                        vShow: "userForm.email.$error.minlength",
                        showMsg: "Email is too short."
                    }]
                }, {
                    vClass: "{ 'has-error' : userForm.cntPhone.$invalid && !userForm.cntPhone.$pristine }",
                    vLabel: "Phone*",
                    vType: "text",
                    isReq: "Required",
                    vName: "phone",
                    vModel: "cntPhone",
                    vPlaceholder: "Phone",
                    vMinLen: "10",
                    vValidation: [{
                        vShow: "userForm.cntPhone.$invalid && !userForm.cntPhone.$pristine",
                        showMsg: "Phone is required."
                    }]
                }

            ]
        };
    };

    var dpeController = function($scope) {
        $scope.images = [{
            headtext: "Air Cooled Lister / Petter type",
            imageurl: "/images/dpe/FNL_DPE_AC_3.jpg"
        }, {
            headtext: "Water Cooled Lister / Petter type",
            imageurl: "/images/dpe/FNL_DPE_WC.jpg"
        }];
    };

    var pumpController = function($scope) {
        $scope.images = [{
            headtext: "Centrifugal Pumps",
            imageurl: "/images/pump/FNL_centrifugalpumps.jpg"
        }, {
            headtext: "Submersible Pumps",
            imageurl: "/images/pump/FNL_Submersible Pumps.jpg"
        }, {
            headtext: "Vertical Turbine Pumps",
            imageurl: "/images/pump/FNL_verticalturbinepumps.jpg"
        }, {
            headtext: "Mono Block Pumps",
            imageurl: "/images/pump/FNL_Mono Block Pumps.jpg"
        }];
    };

    var sparepartsController = function($scope) {
        $scope.images = {
            others: [{
                headtext: "Tractor",
                imageurl: "/images/spare/FNL_Tractor.jpg"
            }, {
                headtext: "Pumps foot valve 1",
                imageurl: "/images/spare/FNL_FOOTVALVE_1.jpg"
            }, {
                headtext: "Pumps foot valve 2",
                imageurl: "/images/spare/FNL_FOOTVALVE_2.jpg"
            }, {
                headtext: "Automobile Spares",
                imageurl: "/images/spare/FNL_AutomobileSpares.jpg"
            }],
            engine: [{
                headtext: "STUB SHAFT GAF 1",
                imageurl: "/images/spare/FNL_STUB_SHAFT_GAF_1.jpg"
            }, {
                headtext: "STUB SHAFT GAF 2",
                imageurl: "/images/spare/FNL_STUB_SHAFT_GAF_2.jpg"
            }, {
                headtext: "Elements for air cleaner 1",
                imageurl: "/images/spare/FNL_ELEMENTS_AIR_CLEANER_1.jpg"
            }, {
                headtext: "Elements for air cleaner 2",
                imageurl: "/images/spare/FNL_ELEMENTS_AIR_CLEANER_2.jpg"
            }]
        };
    };

    var agriMachController = function($scope) {
        $scope.images = [{
            headtext: "Seed Cleaners",
            imageurl: "/images/agriMach/FNL_SeedCleaners.jpg"
        }, {
            headtext: "Seed Graders",
            imageurl: "/images/agriMach/FNL_SeedGraders.jpg"
        }, {
            headtext: "Grinding mills",
            imageurl: "/images/agriMach/FNL_GrindingMills.jpg"
        }];
    };

    var agriEquipController = function($scope) {
        $scope.images = [{
            headtext: "Harrow Disc",
            imageurl: "/images/agriEquip/FNLHarrowDisc.jpg"
        }, {
            headtext: "Ridgers",
            imageurl: "/images/agriEquip/FNL_Ridgers.jpg"
        }, {
            headtext: "Cultivators",
            imageurl: "/images/agriEquip/FNL_Cultivators.jpg"
        }, {
            headtext: "Rotavators",
            imageurl: "/images/agriEquip/FNL_Rotavators.jpg"
        }, {
            headtext: "Seed cum Fertiliser Drill",
            imageurl: "/images/agriEquip/FNL_SeedCumFertiliserDrill.jpg"
        }, {
            headtext: "Tipping / Non Tipping Trailers",
            imageurl: "/images/agriEquip/FNL_TippingNonTippingTrailers.jpg"
        }, {
            headtext: "Soil Levellers",
            imageurl: "/images/agriEquip/FNL_SoilLevellers.jpg"
        }, {
            headtext: "Seed Grading and Cleaning Machinery",
            imageurl: "/images/agriEquip/FNL_SeedGradingandCleaningMachinery.jpg"
        }, {
            headtext: "Gravity Seperators",
            imageurl: "/images/agriEquip/FNL_GravitySeperators.jpg"
        }, {
            headtext: "Chisel Ploughs",
            imageurl: "/images/agriEquip/FNL_ChiselPloughs.jpg"
        }];
    };

    var constrController = function($scope) {
        $scope.images = [{
            headtext: "Concrete Mixers",
            imageurl: "/images/constr/FNL_ConcreteMixers.jpg"
        }, {
            headtext: "Concrete Cutters 1",
            imageurl: "/images/constr/FNL_ConcreteCutter.jpg"
        }, {
            headtext: "Concrete Cutters 2",
            imageurl: "/images/constr/FNL_ConcreteCuttersFloorJoint.jpg"
        }, {
            headtext: "Concrete Block Pavers",
            imageurl: "/images/constr/FNLConcreteBlockPavers.jpg"
        }, {
            headtext: "Vibratory Rollers",
            imageurl: "/images/constr/FNL_VibratoryRollers.jpg"
        }, {
            headtext: "Earth Rammer",
            imageurl: "/images/constr/FNL_EarthRammer.jpg"
        }, {
            headtext: "Plate & Earth Compactors",
            imageurl: "/images/constr/FNL_PlateCompactorsEarthCompactors.jpg"
        }, {
            headtext: "Backhoe Loader",
            imageurl: "/images/constr/FNL_BackhoeLoader.jpg"
        }];
    };

    // var agriController = function($scope, ngDialog) {

    //     $scope.showDesc = function() {
    //         // $log.info("inside popus function");
    //         ngDialog.open({
    //             template: 'firstDialogId',
    //             // controller: 'InsideCtrl',
    //             className: 'ngdialog-theme-default'
    //         });

    //         // ngDialog.open({
    //         //     template: '<p>Inside Agricultural</p>',
    //         //     plain: true
    //         // });
    //     };
    // };

    var homeController = function($scope) {
        $scope.showSearch = false;
    };

    var indexController = function($scope, $location) {
        $scope.hide = $location.path();
    };


    // var ContactFrmCtrl = function($scope, $http) {
    //     $scope.formData = {};
    //     $scope.processForm = function() {
    //         alert('valid form!');
    //         $http({
    //             method: 'POST',
    //             url: 'contact-form.php',
    //             data: $scope.formData,
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             }
    //         });
    //     };
    // };





    var ContactFrmCtrl = function($scope, $http,service) {
        $scope.submissioncss = "alert alert-success";
        $scope.formData = {};
        $scope.submission = false;
        var param = function(data) {
            var returnString = '';
            alert(data);
            for (var d in data) {
                alert(d);
                if (data.hasOwnProperty(d))
                    returnString += d + '=' + data[d] + '&';
            }
            // Remove last ampersand and return
            console.log("Returing for :" + returnString);
            return returnString.slice(0, returnString.length - 1);
        };
        $scope.submitForm = function() {
            // alert(service.sendmail());
            if ($scope.userForm.$valid) {
                console.log("Inside submitForm");
                $http({
                        method: 'POST',
                        url: 'process.php',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        transformRequest: function(obj) {
                            var str = [];
                            for (var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        },
                        data: {
                            name: $scope.name,
                            email: $scope.email,
                            telephone: $scope.telephone,
                            message: $scope.description
                        }
                    })
                    .success(function(data) {
                        if (!data.success) {
                            console.log("Inside failed");
                            // if not successful, bind errors to error variables
                            $scope.errorName = data.errors.name;
                            $scope.errorEmail = data.errors.email;
                            $scope.errorTextarea = data.errors.message;
                            $scope.submissionMessage = data.messageError;
                            $scope.submissioncss = "alert alert-danger";
                            $scope.submission = true; //shows the error message
                            console.log(data.messageError);
                        }
                        else {
                            console.log("Inside success");
                            // if successful, bind success message to message
                            alert(data.emailsentstatus);
                            $scope.submissionMessage = data.messageSuccess;
                            $scope.formData = {}; // form fields are emptied with this line
                            $scope.submission = true; //shows the success message
                        }
                    });
                console.log("ENding submitForm");
            }
        };
    };



    // app.controller("agriController", ["$scope", "ngDialog", agriController]);
    app.controller("indexController", ["$scope", "$location", indexController]);
    app.controller("homeController", ["$scope", homeController]);
    app.controller("dpeController", ["$scope", dpeController]);
    app.controller("pumpController", ["$scope", pumpController]);
    app.controller("sparepartsController", ["$scope", sparepartsController]);
    app.controller("agriMachController", ["$scope", agriMachController]);
    app.controller("agriEquipController", ["$scope", agriEquipController]);
    app.controller("constrController", ["$scope", constrController]);
    app.controller("validateContactFrmCtrl", ["$scope", validateContactFrmCtrl]);
    app.controller("ContactFrmCtrl", ["$scope", "$http", ContactFrmCtrl]);
}());