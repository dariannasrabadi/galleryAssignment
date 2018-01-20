console.log('Client has loaded');

let app = angular.module('appStart', []);

app.controller('GalleryController', ['$http', function($http) { //Gallery Controller Start
    console.log('Gallery Controller Loaded');
    const self = this;
    self.getImages = function() {
        $http({
            method: 'GET',
            url: '/gallery'
        })
        .then(function(response) {
            console.log('get response: ', response.data);
            self.imageResult = response.data;           
        })
        .catch(function(error) {
            console.log('Error getting images', error);
		});
    };

    self.getImages();

    self.likeCounter = function (data) {
        console.log('In like counter', this);
        console.log(data);
        
    };



}]); //Gallery Controller End