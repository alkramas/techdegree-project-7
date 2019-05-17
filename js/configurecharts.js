// get toggle feedback
let trafficToggle = document.querySelector('#traffic-toggle');
let toggleCollection = trafficToggle.querySelectorAll('input');

// set default week
trafficWeek();
function toggleTrafficChart() {
  for (let i = 0; i < toggleCollection.length; i += 1) {
    // console.log(toggleCollection[i]);
    let thisElement = toggleCollection[i];
    if (thisElement.checked === true) {
      // console.log(thisElement.id + ' is toggled');
      if (thisElement.id === 'month') {
          // console.log(thisElement.id + ' is toggled');
          trafficMonth();
      } else if (thisElement.id === 'year') {
          // console.log(thisElement.id + ' is toggled');
          trafficYear();
      } else if (thisElement.id === 'week') {
          // console.log(thisElement.id + ' is toggled');
          trafficWeek();
      }
    }
  }
};

trafficToggle.addEventListener('change', function(e){
  let id = e.target.id;
  // console.log('the event target object is ' + id);
  toggleTrafficChart();
});






// traffic chart
function trafficWeek() {
  var ctx = document.getElementById('traffic-chart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
          datasets: [{
              label: '',
              backgroundColor: ['blue', 'grey', '#5a61a8'],
              borderColor: ['blue', 'grey', '#5a61a8'],
              data: [0, 500, 1250, 750, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250]
          }]
      },

      // Configuration options go here
      options: {
        legend: {
          display: false
        }
      }
  });
}

// traffic chart
function trafficMonth() {
  var ctx = document.getElementById('traffic-chart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['week 1', 'week 2', 'week 3', 'week 4'],
          datasets: [{
              label: '',
              backgroundColor: ['blue', 'grey', '#5a61a8'],
              borderColor: ['blue', 'grey', '#5a61a8'],
              data: [30, 74, 210, 153]
          }]
      },

      // Configuration options go here
      options: {
        legend: {
          display: false
        }
      }
  });
}

function trafficYear() {
  var ctx = document.getElementById('traffic-chart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['january', 'feburary', 'march', 'april', 'mai', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
          datasets: [{
              label: '',
              backgroundColor: ['blue', 'grey', '#5a61a8'],
              borderColor: ['blue', 'grey', '#5a61a8'],
              data: [7030, 1960, 3874, 6048, 8312, 8981, 7601, 4320, 5871, 3240, 1258, 2874, 3108]
          }]
      },

      // Configuration options go here
      options: {
        legend: {
          display: false
        }
      }
  });
}

// daily charts
var ctx = document.getElementById('dailyChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: '',
            backgroundColor: '#5a61a8',
            borderColor: 'rgb(255, 99, 132)',
            data: [50, 80, 150, 121, 219, 201, 77]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      }
    }

});




// mobile users charts
var ctx = document.getElementById('doughnutChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['blue', 'grey', '#5a61a8'],
            borderColor: ['blue', 'grey', '#5a61a8'],
            data: [20, 12, 86]
        }]
    },

    // Configuration options go here
    options: {
      legend: {
      position: 'right'
    }}
});


// launch alert plugin
