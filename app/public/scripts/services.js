angular.module('serviceModule', [function ($provide) {
  $provide.factory('parse', [function () {
    // inti Parse SDK
    Parse.initialize(
      "pxGiWLC7KF3wgoTVUezr0TN3aTkynXI2oKm3dFhv",
      "xCS53P1wQhLq8sdLIjYLPgQxVSxNHiln8DuaV6z4"
    );
  }]);
  $provide.factory('reading', ['parse', function () {
    // our reading object
    var Reading = Parse.Object.extend("Reading");

    // the service that will be returned
    var serviceInstance = {
      save: function (temp) {
        reading = new Reading();
        reading.set("date", new Date().toISOString());
        reading.set("temp", temp);
        reading.save(null, {
          success: function (reading) {
            alert('reading saved');
          },
          error: function (reading, error) {
          // The save failed.
            alert("Error: " + error.code + " " + error.message);
          }
        });
      },

      query: function (callback) {
        var query = new Parse.Query(Reading);
        query.find({
          success: function (results) {
            var historyData = [];
            angular.forEach(results, function (i, e, a) {
              historyData.push({
                  date: i.get('date'),
                  temp: i.get('temp')
              });
            });
            callback(historyData);
          },
          error: function (error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });
      }
    };
    return serviceInstance;
  }]);
}]);