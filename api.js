ProjectItem = {};

var apiObjects;

ProjectItem.makeObject = function() {

};

ProjectItem.loadAll = function(data) {
    projects = data.map(function(stuff) {
      return new ProjectItem(stuff);
    });
  };

ProjectItem.fetchAllFromServer = function(callback) {
    console.log('fetching data from server');
    $.ajax({
      type: 'GET',
      url: 'js/data.json',
      success: function(data, message, xhr) {
        localStorage.eTag = xhr.getResponseHeader('eTag');
        ProjectItem.data = data;
        localStorage.data = JSON.stringify(data);
        apiObjects = JSON.parse(localStorage.data);
        ProjectItem.loadAll(ProjectItem.data);
        console.log('status text of data.json request: ' + xhr.statusText);
        console.log('status code of data.json request: ' + xhr.status);
        callback();
      }
    });
  };
