import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    var promise = new Promise(function(resolve) {
      setTimeout(function () {
        resolve([
          {
            title: "Ticket 1",
            description: "desc 1",
            solution: "solucion 1",
            date: "10-10-10"
          },
          {
            title: "Ticket 2",
            description: "desc 2",
            solution: "solucion 2",
            date: "10-10-10"
          }
        ]);
      }, 5000);
    });

    return promise;
  }
});
