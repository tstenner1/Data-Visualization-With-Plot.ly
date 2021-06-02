// Define function to create metadata
function buildMetadata(selection) {

    // Read json data
    d3.json("samples.json").then((sampleData) => {

        console.log(sampleData);