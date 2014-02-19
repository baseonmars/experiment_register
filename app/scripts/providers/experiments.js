angular.module('experimentRegister', ['ngRoute'])
  .provider('experiments', function ($routeProvider) {
    var _experiments = [];

    /**
     * Any method set on this is available via the provider.
     * the provider is injected using the stated name, plus the
     * string Provider. so
     *
     *  .provider('foo', ...
     *
     * is injected into configuration with the string `fooProvider`
     */
    this.set = function (name, desc) {
      console.log('adding', routeFor(name), controller(name));
      _experiments.push({name: name, description: desc});
      $routeProvider.when(routeFor(name), {
        templateUrl: 'scripts/experiments' + routeFor(name) + '/views/main.html',
        controller: controller(name)
      })
    };

    /**
     * This is the factory method that is available for runtime
     * injection, you just use the stated name to inject this
     *
     *  .controller('FooCtrl', ['experiments', function (experiments) ...
     */
    this.$get = function () {
      return {
        getAll: function () {
          return _experiments;
        }
      }
    };

    /**
     * TODO Extract these methods to a testable module
     */
    function routeFor(name) {
      return "/" + name.toLowerCase().replace(/\s/g, "_");
    }

    function controller(name) {
      return name.replace(/(\s?\b\w)/g, function (a) {
        return a.toUpperCase().trim();
      });
    }
  });