var app = angular.module('demo', []);

app.controller('DynamicFormController', function ($scope, $log) {

    // we would get this from the api
    $scope.steps = [
        {
            index: 0,
            label: "Description",
            visited: true,
            active: true,
            fields:
                [
                    {type: "text", name: "Dataset Name", label: "Name", required: true, data: ""},
                    {type: "text", name: "Path", label: "Name", required: true, data: ""},
                    {type: "text", name: "Config", label: "Name", required: true, data: ""},
                    // {type: "radio", name: "color_id", label: "Colors" , options:[{id: 1, name: "orange"},{id: 2, name: "pink"},{id: 3, name: "gray"},{id: 4, name: "cyan"}], required: true, data:""},
                    // {type: "email", name: "emailUser", label: "Email" , required: true, data:""},
                    // {type: "text", name: "city", label: "City" , required: true, data:""},
                    // {type: "password", name: "pass", label: "Password" , min: 6, max:20, required: true, data:""},
                    // {type: "select", name: "teacher_id", label: "Teacher" , options:[{name: "Mark"},{name: "Claire"},{name: "Daniel"},{name: "Gary"}], required: true, data:""},
                    // {type: "checkbox", name: "car_id", label: "Cars" , options:[{id: 1, name: "bmw"},{id: 2, name: "audi"},{id: 3, name: "porche"},{id: 4, name: "jaguar"}], required: true, data:""}
                ]
        },
        {
            index: 1,
            label: "Configuration",
            visited: false,
            active: false,
            fields:
                [
                    {type: "text", name: "Configuration 1", label: "Name", required: true, data: ""},
                    {type: "text", name: "Configuration 2", label: "Name", required: true, data: ""},
                    {type: "text", name: "Configuration 3", label: "Name", required: true, data: ""},
                    // {type: "radio", name: "color_id", label: "Colors" , options:[{id: 1, name: "orange"},{id: 2, name: "pink"},{id: 3, name: "gray"},{id: 4, name: "cyan"}], required: true, data:""},
                    // {type: "email", name: "emailUser", label: "Email" , required: true, data:""},
                    // {type: "text", name: "city", label: "City" , required: true, data:""},
                    // {type: "password", name: "pass", label: "Password" , min: 6, max:20, required: true, data:""},
                    // {type: "select", name: "teacher_id", label: "Teacher" , options:[{name: "Mark"},{name: "Claire"},{name: "Daniel"},{name: "Gary"}], required: true, data:""},
                    // {type: "checkbox", name: "car_id", label: "Cars" , options:[{id: 1, name: "bmw"},{id: 2, name: "audi"},{id: 3, name: "porche"},{id: 4, name: "jaguar"}], required: true, data:""}
                ]
        },
        {
            index: 2,
            label: "Documentation",
            visited: false,
            active: false,
            fields:
                [
                    {type: "text", name: "Doc 1", label: "Name", required: true, data: ""},
                    {type: "text", name: "Doc 2", label: "Name", required: true, data: ""},
                    {type: "text", name: "Doc 3", label: "Name", required: true, data: ""},
                    // {type: "radio", name: "color_id", label: "Colors" , options:[{id: 1, name: "orange"},{id: 2, name: "pink"},{id: 3, name: "gray"},{id: 4, name: "cyan"}], required: true, data:""},
                    // {type: "email", name: "emailUser", label: "Email" , required: true, data:""},
                    // {type: "text", name: "city", label: "City" , required: true, data:""},
                    // {type: "password", name: "pass", label: "Password" , min: 6, max:20, required: true, data:""},
                    // {type: "select", name: "teacher_id", label: "Teacher" , options:[{name: "Mark"},{name: "Claire"},{name: "Daniel"},{name: "Gary"}], required: true, data:""},
                    // {type: "checkbox", name: "car_id", label: "Cars" , options:[{id: 1, name: "bmw"},{id: 2, name: "audi"},{id: 3, name: "porche"},{id: 4, name: "jaguar"}], required: true, data:""}
                ]
        },
        {
            index: 3,
            label: "Documentation",
            visited: false,
            active: false,
            fields:
                [
                    {type: "text", name: "Doc 1", label: "Name", required: true, data: ""},
                    {type: "text", name: "Doc 2", label: "Name", required: true, data: ""},
                    {type: "text", name: "Doc 3", label: "Name", required: true, data: ""},
                    // {type: "radio", name: "color_id", label: "Colors" , options:[{id: 1, name: "orange"},{id: 2, name: "pink"},{id: 3, name: "gray"},{id: 4, name: "cyan"}], required: true, data:""},
                    // {type: "email", name: "emailUser", label: "Email" , required: true, data:""},
                    // {type: "text", name: "city", label: "City" , required: true, data:""},
                    // {type: "password", name: "pass", label: "Password" , min: 6, max:20, required: true, data:""},
                    // {type: "select", name: "teacher_id", label: "Teacher" , options:[{name: "Mark"},{name: "Claire"},{name: "Daniel"},{name: "Gary"}], required: true, data:""},
                    // {type: "checkbox", name: "car_id", label: "Cars" , options:[{id: 1, name: "bmw"},{id: 2, name: "audi"},{id: 3, name: "porche"},{id: 4, name: "jaguar"}], required: true, data:""}
                ]
        }
    ];

    $scope.submitForm = function () {
        $log.debug($scope.steps);
    };

    $scope.backButtonClick = function (index) {
        $scope.steps[index].active = false;
        $scope.steps[index - 1].active = true;
    };

    $scope.nextButtonClick = function (index) {
        if (index < $scope.steps.length) {
            $scope.steps[index + 1].active = true;
            $scope.steps[index + 1].visited = true;
            $scope.steps[index].active = false;
        }
    };

    $scope.nextStage = function (index) {
        console.log(index)
        for(var i = 0; i < $scope.steps.length; i++)
        {
            $scope.steps[i].active = (i === index);
        }
    }
})

//   .directive("dynamicName",function($compile){
//     return {
//         restrict:"A",
//         terminal:true,
//         priority:1000,
//         link:function(scope,element,attrs){
//             element.attr('name', scope.$eval(attrs.dynamicName));
//             element.removeAttr("dynamic-name");
//             $compile(element)(scope);
//         }
//     }
// })
