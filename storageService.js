(function() {
    'use strict';

    angular
        .module('todoApp')
        .service('storageService', Service);

    function Service($window) {
        this.set = set;
        this.get = get;

        //Loads value from the session storage
        function get() {
            var json = $window.localStorage.getItem("taskStorage");
            if (json != null) {
                return angular.fromJson(json);
            }
            return null;
        }

        //Saves the value to the session storage
        function set(value) {
            $window.localStorage.setItem("taskStorage", angular.toJson(value));
        }
    }
})();