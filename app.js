var app = angular.module('demo', []);

app.controller('DynamicFormController', function ($scope) {

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
                    {type: "text", name: "Configuration 3", label: "Name", required: true, data: ""}
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
                ]
        },
        {
            index: 3,
            label: "Success",
            visited: false,
            active: false,
            success: "Successfully Submitted"
        }
    ];



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
        for(var i = 0; i < $scope.steps.length; i++)
        {
            $scope.steps[i].active = (i === index);
        }
    }
})
