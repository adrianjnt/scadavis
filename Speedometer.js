        var svgraph = new scadavis( { 
          svgurl: "https://raw.githubusercontent.com/riclolsen/displayfiles/master/speedometer.svg" 
        });
        svgraph.setValue("TAG1", 0);
        // update at each .5 seconds
        setInterval( function() {
          var v = Math.random()*10-2.5*svgraph.getValue("TAG1")/60 +svgraph.getValue("TAG1");
          if (v < 0) v = 0;
          if (v > 120) v = 120;
          svgraph.setValue("TAG1", v);
        }, 500);
