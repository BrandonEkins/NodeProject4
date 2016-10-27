angular.module('app', ['ngMaterial'])
    .controller('mainCtrl', [
        '$scope',
        function($scope) {
            $scope.currentMonth = {};
            $scope.calendar = [{
                    id: 0,
                    name: "January",
                    days: [],
                }, {
                    id: 1,
                    name: "Febuary",
                    days: [],
                }, {
                    id: 2,
                    name: "March",
                    days: [],
                }, {
                    id: 3,
                    name: "April",
                    days: [],
                }, {
                    id: 4,
                    name: "May",
                    days: [],
                }, {
                    id: 5,
                    name: "June",
                    days: [],
                }, {
                    id: 6,
                    name: "July",
                    days: [],
                }, {
                    id: 7,
                    name: "August",
                    days: [],
                }, {
                    id: 8,
                    name: "September",
                    days: [],
                }, {
                    id: 9,
                    name: "October",
                    days: [],
                }, {
                    id: 10,
                    name: "November",
                    days: [],
                },
                {
                    id: 11,
                    name: "December",
                    days: [],
                },
            ]
            $scope.day = {
                date: 0,
                dayOfWeek: "",
                events: [] // work on this
            }
            $scope.daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            $scope.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            $scope.currentDayOfWeek = 5;
            $scope.calcDays = function() {
                for (var i = 0; $scope.calendar.length > i; i++) { //selects correct month
                    for (var j = 0; $scope.currentDayOfWeek > j; j++) {
                        $scope.calendar[i].days.push({
                            date: null,
                            dayOfWeek: j,
                            events: []
                        });
                    }
                    for (var j = 1; $scope.daysInEachMonth[i] >= j; j++) {
                        $scope.calendar[i].days.push({ // adds days to day array
                            date: j,
                            dayOfWeek: $scope.currentDayOfWeek,
                            events: []
                        });
                        if ($scope.currentDayOfWeek == 6) { // increments days of week
                            $scope.currentDayOfWeek = 0;
                        } else {
                            $scope.currentDayOfWeek += 1;
                        }
                    }

                }
            }
            $scope.calcDays();
            $scope.setDate = function() {
                var my_date = new Date();
                $scope.currentMonth = $scope.calendar[my_date.getMonth()];
                $scope.curMonthInt = my_date.getMonth();
            }
            $scope.setDate();
            $scope.forwardMonth = function() {
                $scope.curMonthInt += 1;
                $scope.currentMonth = $scope.calendar[$scope.curMonthInt]
            }
            $scope.backMonth = function() {
                $scope.curMonthInt -= 1;
                $scope.currentMonth = $scope.calendar[$scope.curMonthInt]
            }
            $scope.isToday = function (date) {
                var today = new Date();
                return date == today.getDate() && $scope.currentMonth.id == today.getMonth();
            }
            $scope.compareHide = function(value) {
                if (value == "end") {
                    if ($scope.currentMonth.id > 10)
                        return true;
                    else
                        return false;
                } else {
                    if ($scope.currentMonth.id < 1)
                        return true;
                    else
                        return false;
                }
            }
            $scope.addEvent = function() {
                $scope.selected_event = {};
                $scope.currentMonth.days[$scope.selected_date].events.push($scope.selected_event);
            }
        }
    ]);
