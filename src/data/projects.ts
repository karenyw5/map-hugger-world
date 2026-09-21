export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  cardTitle: string;
  title: string;
  authors: string;
  thumb: string;
  hero: string;
  sectionHeading: string;
  paragraphs: string[];
  bullets?: string[];
  galleryHeading?: string;
  gallery?: { src: string; caption: string }[];
  pdf?: string;
  links?: ProjectLink[];
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "coastalsc-water-resources",
    cardTitle: "NASA DEVELOP Project: South Carolina Water Resources",
    title:
      "NASA DEVELOP: Assessing Unprotected Wetlands to Identify Priority Conservation Areas for Community Protection Against Flood Events in South Carolina",
    authors: "Asa Julien, Jake Ferus, Karen Wang, Sydney Brown",
    thumb: "/images/coastalsc-water-resources.jpeg",
    hero: "/images/coastalsc-water-resources.jpeg",
    sectionHeading: "Project Synopsis",
    paragraphs: [
      "Partnering with the Coastal Conservation League, we identified isolated freshwater wetlands in areas of high flood risk and assessed social vulnerability to flooding in Jasper, Horry, and Berkeley counties, South Carolina. Using Landsat 7, Landsat 8, and Sentinel-1 Earth observations, we created a weighted overlay map of flood risk highlighting isolated wetlands and a bivariate map showcasing the relationship between flood risk and social vulnerability. Both maps will help the Coastal Conservation League prioritize the conservation of areas with isolated wetlands that protect communities through flood mitigation.",
    ],
    bullets: [
      "Designed final maps, poster, and StoryMap, refining data visualization and cartography to clearly communicate findings to both scientific and public audiences",
      "Created a flood model in Google Earth Engine using Sentinel-1 SAR data, using speckle filtering and thresholding",
      "Learned how to run a weighted sum overlay analysis with multiple data sources utilizing ArcGIS Pro",
      "Gained confidence in collaborating with a partner organization, tailoring deliverables to their goals",
      "Strengthened passion for remote sensing, especially its role in flood mitigation and climate resilience",
    ],
    galleryHeading: "Final Maps & Deliverables",
    gallery: [
      {
        src: "/images/FloodRiskandIsolatedWetlandsMap.png",
        caption: "Flood risk and isolated wetlands, weighted overlay analysis",
      },
      {
        src: "/images/SocialVulnerabilityFloodRiskBivariateMap.png",
        caption: "Bivariate map of flood risk and social vulnerability",
      },
    ],
    links: [
      {
        label: "Presentation",
        href: "/pdfs/2025Sum_GA_CoastalSouthCarolinaWaterII_Presentation_FD-Final.pdf",
      },
      {
        label: "Poster",
        href: "/pdfs/2025Sum_GA_CoastalSouthCarolinaWaterII_Poster_FD-Final.pdf",
      },
      {
        label: "ArcGIS StoryMap",
        href: "https://storymaps.arcgis.com/stories/8394b83f937a4f7eaa831f5741a1bb03",
      },
      {
        label: "Technical Report",
        href: "/pdfs/2025Sum_GA_CoastalSouthCarolinaWaterII_TechPaper_FD-Final.pdf",
      },
    ],
    summary:
      "Mapping isolated wetlands, flood risk, and social vulnerability across three South Carolina counties with NASA DEVELOP.",
  },
  {
    slug: "noaa-lapenta",
    cardTitle: "NOAA Lapenta Project: Comparing Flood Indicators",
    title:
      "NOAA Lapenta Project: Comparing Flood Indicators Using Stationary and Nonstationary Extreme Water Level Analysis Across U.S. Coastal Regions",
    authors: "Karen Wang",
    thumb: "/images/noaa-lapenta-thumb.jpg",
    hero: "/images/noaa-lapenta-thumb.jpg",
    sectionHeading: "Abstract",
    paragraphs: [
      "Nearly 129 million people, approximately 40% of the U.S. population, live on the coast, where extreme water levels pose a growing flood risk. Standard flood risk assessments often assume these extremes are statistically stationary over time. However, this assumption may misrepresent risk, as sea level rise and shifting climate patterns can alter the frequency and severity of extreme events. Identifying where and how extreme sea levels are changing is critical for coastal planning, infrastructure design, and hazard mitigation. Nonstationary extreme value models address this limitation by allowing model parameters to vary with time. Comparing stationary and nonstationary approaches can improve the robustness of coastal flood indicators and help reveal the drivers of these changes.",
      "This project compares stationary and nonstationary generalized extreme value (GEV) models at nine U.S. water level stations across multiple coastal regions. Stationary analysis used annual maxima from hourly observations, while nonstationary analysis used monthly maxima, with long-term trend, seasonality, and nodal cycle in the location parameter and climate index covariates in location and scale. Model outputs were used to compare return levels, quantify driver contributions, and reinterpret the ten highest observed water levels. Time-varying return periods were evaluated for 1992, the midpoint of the 1983-2001 National Tidal Datum Epoch, and 2023.",
      "Preliminary results show that differences vary by station and return period, with nonstationary models producing higher estimates for frequent extremes (2-year events) and stationary models producing higher estimates for rare extremes (50- and 100-year events). Dominant drivers also vary regionally, with long-term trend as the most influential at most Atlantic and Gulf stations and seasonality at most Pacific stations. The nonstationary framework showed that many of the largest historically observed water levels were substantially more probable under 2023 conditions than under 1992 conditions due to sea level rise. These results indicate that accounting for time-varying processes changes, for both return level estimates and the interpretation of past extreme events, highlights the importance of nonstationarity to better understand evolving coastal flood risk.",
    ],
    pdf: "/pdfs/noaa-lapenta.pdf",
    summary:
      "Comparing stationary and nonstationary extreme value models of coastal water levels at nine U.S. stations.",
  },
  {
    slug: "final-project-moore",
    cardTitle: "GIS Final Project: Exploring Impacts of the 2013 Moore Tornado",
    title: "GIS Final Project: Exploring Impacts of the 2013 Moore Tornado",
    authors: "Karen Wang, Victor Thaxton, Madelyn Walker, Kaya Beaudoin",
    thumb: "/images/moore-thumb.jpg",
    hero: "/images/moore-thumb.jpg",
    sectionHeading: "Description",
    paragraphs: [
      "This project explores the impacts of the devastating EF5 tornado that occurred in Moore, Oklahoma in 2013. We worked with NAIP and Landsat satellite imagery, NEXRAD radar data, elevation models, and census data to map the tornado's path and understand how it affected housing and population patterns in the area.",
      "We used true and false-color composites, including NDVI and SWIR combinations, to highlight the damage path. We also created a web map that lets users compare before-and-after imagery of Moore and see the extent of the damage. Using radar reflectivity data, we isolated the tornado supercell, and by analyzing census tracts, we identified where housing unit loss and population shifts were most concentrated.",
      "Overall, this project helped me visualize and communicate how GIS can be applied to evaluate real-world effects of natural disasters. It helped me realize how GIS and spatial datasets can be used to address diverse environmental challenges, and made me excited about using spatial tools to analyze broader issues like emergency response and habitat loss.",
    ],
    pdf: "/pdfs/moore-tornado.pdf",
    summary:
      "Satellite imagery, radar, and census analysis of the 2013 EF5 tornado in Moore, Oklahoma.",
  },
  {
    slug: "millcreek-landuse",
    cardTitle: "Mill Creek Watershed 10-Year Land Cover Change Analysis",
    title: "Mill Creek Watershed 10-Year Land Cover Change Analysis",
    authors: "Karen Wang",
    thumb: "/images/millcreek-landuse-thumb.png",
    hero: "/images/millcreek-landuse.jpg",
    sectionHeading: "Description",
    paragraphs: [
      "This map compares land cover in the Mill Creek Watershed for 2001 and 2011 to highlight where development, agriculture, forest, wetlands, and other classes changed over the decade. Using the 2001 and 2011 land cover layers, I clipped them to the Mill Creek Watershed boundary and summarized area by class to calculate acres and percent change. Together, the map and table communicate both where change happened and how much of each land-cover type was gained or lost.",
    ],
    pdf: "/pdfs/millcreek-landuse.pdf",
    summary:
      "Land cover change between 2001 and 2011 across the Mill Creek Watershed, with acreage and percent change.",
  },
  {
    slug: "webster-risk",
    cardTitle: "Webster Township Water Contamination Risk Analysis",
    title: "Webster Township Water Contamination Risk Analysis",
    authors: "Karen Wang",
    thumb: "/images/webster-risk.jpg",
    hero: "/images/webster-risk.jpg",
    sectionHeading: "Description",
    paragraphs: [
      "This map shows a water contamination risk index for Webster Township that I built by converting three different inputs into comparable raster grids and combining them in ArcGIS Pro. First, I joined the soils layer to its lookup table to get percent sand values, then used Feature to Raster to make a soil texture grid, since sandier soils allow faster percolation.",
      "Next, I created a proximity-to-water grid by rasterizing streams and water/wetland polygons, reclassifying them to remove NoData, merging them with Raster Calculator and running Euclidean Distance to measure how far each cell is from surface water. I also derived an elevation-variability grid from the DEM using Focal Statistics to approximate slope, because steeper areas can move contaminants laterally.",
      "After that, I stretched all three rasters to a 0-100 scale and inverted the distance-to-water layer so that cells closer to water had higher risk values. Finally, I used Raster Calculator to create a weighted overlay, which I reclassified into low, moderate, and high risk so areas most vulnerable to surface and groundwater contamination are easy to see.",
    ],
    pdf: "/pdfs/webster-risk.pdf",
    summary:
      "A weighted raster overlay ranking low, moderate, and high water contamination risk in Webster Township.",
  },
  {
    slug: "edenville-dam",
    cardTitle: "Elevation Change After the Edenville Dam Failure",
    title: "Elevation Change After the Edenville Dam Failure",
    authors: "Karen Wang",
    thumb: "/images/edenville-dam-thumb.jpg",
    hero: "/images/edenville-dam.jpg",
    sectionHeading: "Description",
    paragraphs: [
      "This map visualizes the elevation change resulting from the Edenville Dam failure in 2020, which caused severe flooding and damages to the local area in Michigan. Using LiDAR data, I created pre-flood and post-flood DEMs, then used Raster Calculator to find the elevation change. Negative values indicate erosion, which mostly occurred where the dam burst, while positive elevation change represent sedimentation. In making this map, I learned how to use LiDAR data and DEMs to analyze the impacts of natural disasters on the landscape.",
    ],
    pdf: "/pdfs/edenville-dam.pdf",
    summary:
      "LiDAR-derived elevation change showing erosion and sedimentation after the 2020 Edenville Dam failure.",
  },
  {
    slug: "capecod-slr",
    cardTitle: "Sea Level Rise Change by 2100 in Cape Cod",
    title: "Sea Level Rise Change by 2100 in Cape Cod",
    authors: "Karen Wang",
    thumb: "/images/capecod-slr-thumb.jpg",
    hero: "/images/capecod-slr.jpg",
    sectionHeading: "Description",
    paragraphs: [
      "This map shows the projected sea level rise in Cape Cod, Massachusetts by the year 2100, using both low and high estimates. Using a digital elevation model (DEM) of the region, I used raster calculator in ArcGIS to visualize the areas that would be submerged in each scenario. To simulate sea level rise, I subtracted the projected sea level value from the original DEM, redefining which areas fall below the new \u201czero\u201d elevation and creating a new baseline.",
    ],
    pdf: "/pdfs/capecod-slr.pdf",
    summary:
      "Low and high sea level rise scenarios for Cape Cod by 2100, modeled from a digital elevation model.",
  },
  {
    slug: "columbiana-sites",
    cardTitle: "Most vs. Least Suitable Ecological Sites in Columbiana",
    title: "Most vs. Least Suitable Ecological Sites in Columbiana",
    authors: "Karen Wang",
    thumb: "/images/columbiana-sites-thumb.jpg",
    hero: "/images/columbiana-sites.jpg",
    sectionHeading: "Description",
    paragraphs: [
      "This map compares the most and least suitable ecological sites in Columbiana County, Ohio. I used map algebra to create a model that selected areas based on criteria like proximity to water, distance from roads, low slope, and forest or wetland cover. The final output highlighted areas that met all requirements as suitable sites. I learned how to use ArcGIS Model Builder and apply Boolean logic in the raster calculator. I also liked learning about how spatial tools could be used to guide real-world land use decisions, and how it can be applied to ecological planning and conservation work.",
    ],
    pdf: "/pdfs/columbiana-sites.pdf",
    summary:
      "Map algebra and Model Builder ranking ecological site suitability in Columbiana County, Ohio.",
  },
  {
    slug: "green-river",
    cardTitle: "Green River Channel from 1867 to 2022",
    title: "Green River Channel from 1867 to 2022",
    authors: "Karen Wang",
    thumb: "/images/green-river-thumb.jpg",
    hero: "/images/green-river.jpg",
    sectionHeading: "Description",
    paragraphs: [
      "This map shows how the Green River\u2019s path in Washington state has changed over time, from 1867 to 2022. Using historical topographic maps, aerial images, and modern satellite imagery, I manually digitized the river channel for eight different years as polylines. After creating the line features, I calculated each channel\u2019s length and sinuosity to track how much the river's shape had changed. This highlights how much the river meandered over time, and how that sinuosity changed at different rates. This project taught me how to digitize features, calculate geometry, and interpret how rivers evolve over long time periods.",
    ],
    pdf: "/pdfs/green-river.pdf",
    summary:
      "Digitized river channels from 1867 to 2022 tracking length and sinuosity change on the Green River.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
