(function () {


    var mod = angular.module('maRestaurants');

    mod.component('maRestaurantItemComponent', {
        bindings: {
            index: '@', // 1 way string passed to component
            restaurant: '<', // 1 way object passed to component
            removeItem: '&' // expression passed to the component
        },
        templateUrl: 'app/restaurants/ma-restaurant-item-component-template.html'
    });



})();