google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Afstand km/uur');
      data.addColumn('number', 'Totale snelheid');
      data.addColumn('number', 'Totale afstand in km');

      data.addRows([
        [0,  37.8, 80.8, 91.8],
        [2,  30.9, 69.5, 72.4],
        [3,  95.4,   107, 125.7],
        [4,  61.7, 34.8, 160.5],
        [5,  61.9, 75.6, 105.4],
      ]);

      var options = {
        chart: {
          title: 'Snelheid',
          subtitle: 'in km/uur'
        },
        colors: ['#A4978E', '#563937', '#0B353F', '#726A64'],
        axes: {
          x: {
            0: {side: 'top'}
          }
        }
      };

      var chart = new google.charts.Line(document.getElementById('line_top_x'));

      chart.draw(data, google.charts.Line.convertOptions(options));
     }


      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Groente & Fruit',     11],
          ['Volkoren (Pasta, Brood, Rijst)',  10],
          ['Water',  20],
          ['Vlees en Vis', 12],
          ['Zuivel',    17]
        ]);

       var options = {
        title: 'Voorraden',
        chart: {
          title: 'Voorraden',
        },
        colors: ['#A4978E', '#563937', '#0B353F', '#393532', '#996A62', '#726A64'],
        axes: {
          x: {
            0: {side: 'top'}
          }
        }
      };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

    google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawMultSeries);

  function drawMultSeries() {
      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Motivation Level');
      data.addColumn('number', 'Energy Level');

      var data = google.visualization.arrayToDataTable([
         ['Element', '', { role: 'style' }],
         ['Koolstofdioxide', 95, '#A4978E'],
         ['Stikstof', 3, '#0B353F'],
         ['Edelgas argon', 1.6, '#393532'],


       ['Overig', 19.30, 'color: #996A62'], // CSS-style declaration
      ]);

      var options = {
        title: 'Atmosfeer',
        hAxis: {
         format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'In procenten %'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }