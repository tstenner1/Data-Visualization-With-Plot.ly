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
// Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart
        var parsedData = sampleData.samples;
        console.log("parsed data inside buildCharts function")
        console.log(parsedData);

        var sampleDict = parsedData.filter(item => item.id == selection)[0];
        console.log("sampleDict")
        console.log(sampleDict);


        var sampleValues = sampleDict.sample_values; 
        var barChartValues = sampleValues.slice(0, 10).reverse();
        console.log("sample_values")
        console.log(barChartValues);

        var idValues = sampleDict.otu_ids;
        var barChartLabels = idValues.slice(0, 10).reverse();
        console.log("otu_ids");
        console.log(barChartLabels);

        var reformattedLabels = [];
        barChartLabels.forEach((label) => {
            reformattedLabels.push("OTU " + label);
        }); 