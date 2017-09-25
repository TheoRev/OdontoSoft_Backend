(function () {
	angular.module('odonto.directives', [])
		.directive('menuBar', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/menu-bar.html'
			};
		});

	angular.module('patient.directives', [])
		.directive('menuBar', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/menu-bar.html'
			};
		})
		.directive('formPatient', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/patient/form-patient.html'
			};
		});

	angular.module('control.directives', [])
		.directive('menuBar', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/menu-bar.html'
			};
		})
		.directive('formControl', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/control/form-control.html'
			};
		})
		.directive("selectBrowser", function ($timeout, $parse) {
			return selectBrowser($timeout, $parse);
		});

	angular.module('work.directives', [])
		.directive('menuBar', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/menu-bar.html'
			}
		})
		.directive('formWork', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/work/form-work.html'
			};
		});

	angular.module('tratment.directives' [])
		.directive('menuBar', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/menu-bar.html'
			}
		});

		

	function selectBrowser($timeout, $parse) {
		return {
			restrict: 'AC',
			require: 'ngModel',
			link: function (scope, element, attrs) {
				$timeout(function () {
					element.select2();
					element.select2Initialized = true;
				});

				var refreshSelect = function () {
					if (!element.select2Initialized) return;
					$timeout(function () {
						element.trigger('change');
					});
				};

				var recreateSelect = function () {
					if (!element.select2Initialized) return;
					$timeout(function () {
						element.select2('destroy');
						element.select2();
					});
				};

				scope.$watch(attrs.ngModel, refreshSelect);

				if (attrs.ngOptions) {
					var list = attrs.ngOptions.match(/ in ([^ ]*)/)[1];
					// watch for option list change
					scope.$watch(list, recreateSelect);
				}

				if (attrs.ngDisabled) {
					scope.$watch(attrs.ngDisabled, refreshSelect);
				}
			}
		};
	}
})();