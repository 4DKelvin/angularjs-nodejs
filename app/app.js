var app = angular.module('app', ['ngRoute'], function ($compileProvider) {
    $compileProvider.directive('data-spy', function ($compile) {

        // directive factory creates a link function
        return function (scope, element, attrs) {
            alert();
            scope.$watch(
                function (scope) {
                    return scope.$eval(attrs.compile);
                },
                function (value) {
                    element.html(value);
                    $($compile(element.contents())(scope)).parent().affix({
                        offset: {
                            top: Number($(element).data('offset-top')),
                            bottom: Number($(element).data('offset-bottom'))
                        }
                    });
                }
            );
        };
    });
});

app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: '/views/doc.html',
        controller: 'HomeCtrl'
    }).when('/layouts/', {
        templateUrl: '/views/doc.html',
        controller: 'LayoutCtrl'
    }).when('/components/', {
        templateUrl: '/views/doc.html',
        controller: 'ComponentsCtrl'
    }).when('/plugins/', {
        templateUrl: '/views/doc.html',
        controller: 'PluginsCtrl'
    }).otherwise({ redirectTo: '/' });

});
