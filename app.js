// Define function to create metadata
function buildMetadata(selection) {

    // Read json data
    d3.json("samples.json").then((sampleData) => {

        console.log(sampleData);
    // Parse and filter the data for sample metadata
        var parsedData = sampleData.metadata;
        console.log("parsed data inside buildMetadata function")
        console.log(parsedData);

        var sample = parsedData.filter(item => item.id == selection);
        console.log("showing sample[0]:");
        console.log(sample[0]);

        // Specify location of the metadata & update 
        var metadata = d3.select("#sample-metadata").html("");

        Object.entries(sample[0]).forEach(([key, value]) => {
            metadata.append("p").text(`${key}: ${value}`);
        });

        console.log("next again");
        console.log(metadata);
    });
}

// function that will create charts for sample
function buildCharts(selection) {

    // Read json data
    d3.json("samples.json").then((sampleData) => {
