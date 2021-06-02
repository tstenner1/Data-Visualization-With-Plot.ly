# Plot.ly Homework - Belly Button Biodiversity

In this repository, I build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Part 1: Plotly

1. I use the D3 library to read in `samples.json`.

2. Thus, creating a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Using `sample_values` as the values for the bar chart.

* Using `otu_ids` as the labels for the bar chart.

* Using `otu_labels` as the hovertext for the chart.

  ![bar Chart](Images/hw01.png)

3. Then I created a bubble chart that displays each sample.

* Using `otu_ids` for the x values.

* Using `sample_values` for the y values.

* Using `sample_values` for the marker size.

* Using `otu_ids` for the marker colors.

* Using `otu_labels` for the text values.

![Bubble Chart](Images/bubble_chart.png)

4. Then I display the sample metadata, i.e., an individual's demographic information.

5. What follows is displaying each key-value pair from the metadata JSON object somewhere on the page.

![hw](Images/hw03.png)

6. Then I updated all of the plots any time that a new sample is selected.

An example dashboard is shown below:

![hw](Images/hw02.png)
- - -

**Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo.


## References

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
