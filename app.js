var app = angular.module('demo',[]);

app.controller('DynamicFormController', function ($scope, $log) {

    // we would get this from the api
    $scope.entity = [
      {
        index: 1,
        name : "Description",
        visited: false,
        active: true,
        fields :
          [
            {type: "text", name: "Dataset Name", label: "Name" , required: true, data:""},
            {type: "text", name: "Path", label: "Name" , required: true, data:""},
            {type: "text", name: "Config", label: "Name" , required: true, data:""},
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
          name : "Configuration",
          visited: false,
          active: false,
          fields :
            [
              {type: "text", name: "Configuration 1", label: "Name" , required: true, data:""},
              {type: "text", name: "Configuration 2", label: "Name" , required: true, data:""},
              {type: "text", name: "Configuration 3", label: "Name" , required: true, data:""},
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
            name : "Documentation",
            visited: false,
            active: false,
            fields :
              [
                {type: "text", name: "Doc 1", label: "Name" , required: true, data:""},
                {type: "text", name: "Doc 2", label: "Name" , required: true, data:""},
                {type: "text", name: "Doc 3", label: "Name" , required: true, data:""},
                // {type: "radio", name: "color_id", label: "Colors" , options:[{id: 1, name: "orange"},{id: 2, name: "pink"},{id: 3, name: "gray"},{id: 4, name: "cyan"}], required: true, data:""},
                // {type: "email", name: "emailUser", label: "Email" , required: true, data:""},
                // {type: "text", name: "city", label: "City" , required: true, data:""},
                // {type: "password", name: "pass", label: "Password" , min: 6, max:20, required: true, data:""},
                // {type: "select", name: "teacher_id", label: "Teacher" , options:[{name: "Mark"},{name: "Claire"},{name: "Daniel"},{name: "Gary"}], required: true, data:""},
                // {type: "checkbox", name: "car_id", label: "Cars" , options:[{id: 1, name: "bmw"},{id: 2, name: "audi"},{id: 3, name: "porche"},{id: 4, name: "jaguar"}], required: true, data:""}
              ]
            }
        ];

      $scope.submitForm = function(){
        $log.debug($scope.entity);
      }

      $scope.backButtonClick = function(index){
        if(index > 1) {
          $scope.entity[index - 2].active = true;
          $scope.entity[index - 1].active = false;
        }
      }

      $scope.nextButtonClick = function(index){
        if(index < $scope.entity.length) {
          $scope.entity[index].active = true;
          $scope.entity[index].visited = true;
          $scope.entity[index - 1].active = false;
          $scope.entity[index - 1].visited = true;
        }
        // console.log(index,$scope.entity);\
      }

      $scope.nextStage = function(index) {
        for(var i = 1;i <= index;i++) {
          $scope.entity[i - 1].active = true;
          $scope.entity[i - 1].visited = true;
        }
        for(var i = index + 1;i <= $scope.entity.length;i++) {
          $scope.entity[i - 1].active = false;
          $scope.entity[i - 1].active = false;
        }
        $scope.nextButtonClick(index)
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
