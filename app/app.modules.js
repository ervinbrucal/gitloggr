var authModule = angular.module("authModule", []);
authModule.controller("homeController", homeController);
authModule.factory("authService", authFactory);
authModule.factory("userInfoModel", userInfoModel);