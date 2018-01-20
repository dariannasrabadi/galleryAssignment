console.log('Client has loaded');

let app = angular.module('appStart', []);

app.controller('GalleryController', ['$http', function($http) { //Gallery Controller Start
    console.log('Gallery Controller Loaded');
    const self = this;

    self.getImages = function() { // Start of GET IMAGES function
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
    }; // END of GET IMAGES function

    self.getImages(); // calling images to DOM on load.

    self.likeCounter = function (id, count) { // Start of likeCounter Function
        let dataToSend = {
            like_count: count
        }
        $http({
            method: 'PUT',
            url: '/gallery/' + id,
            data: dataToSend
        })
            .then(function(response) {
                console.log('Update like count: ', response);
                self.getImages(); 
            })
            .catch(function(error) {
                console.log('Error updating like counts: ', error);
		    });  
    };// End of likeCounter Function

    self.imageClick = function (id, count, i) {//Start of viewcounter & hide/show image PUT
        let dataToSend = {
            image_display: this.imageResult[i].image_display,
            view_count: count
        }
        $http({
            method: 'PUT',
            url: '/gallery/view/' + id,
            data: dataToSend
        })
            .then(function(response) {
                console.log('Update view count: ', response);
                self.getImages(); 
            })
            .catch(function(error) {
                console.log('Error updating view count: ', error);
		    });  
    }//END of viewcounter & hide/show image PUT
}]); //Gallery Controller End