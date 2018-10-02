
const container = document.getElementById('mynetwork');
const data = {
    nodes: nodes,
    edges: edges
};
const options = {
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
                min: 50,
                max: 300
            },

            min: 80,
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
        color: {
            inherit: 'from'
        },
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

document.network = new vis.Network(container, data, options);

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
