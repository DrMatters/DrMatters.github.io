$(document).ready(function() {
	var network;


  function redrawAll() {

    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {
      physics: {
        stabilization: false,
        barnesHut: {
          gravitationalConstant: -80000,
          springConstant: 0.001,
          springLength: 200
        }
      },
      
      nodes: {
        shape: 'dot',
        scaling: {

          label: {
            min: 40,
            max: 300
          },

          min: 20,
          max: 440
        },
        font: {
          size: 12,
          face: 'Tahoma'
        },
      },
      edges: {
      	scaling: {
      		min: 5,
      		max: 100
      	},
        color: {inherit: 'from'},
        smooth: {
          type: 'continuous'
        }
      },
      interaction: {
        tooltipDelay: 200,
        hideEdgesOnDrag: true
      },
      layout: {
      	improvedLayout: false
      }
    };

    // Note: data is coming from ./datasources/WorldCup2014.js
    network = new vis.Network(container, data, options);
  }

  redrawAll()
	
    $('.js-example-basic-single').select2({
    	data: nodes.map(node => ({
			id: node.id,
			text: node.label
    	}))
    });


    $('.js-example-basic-single').on('select2:select', e => {
	    network.focus(e.params.data.id, {
	    	scale: 0.25,
	    });
	});

});