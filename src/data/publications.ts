import type { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: 'pub-scrybe',
    title:
      'Scrybe: Enabling Programmatic Interfaces for Explorations Over Voluminous Spatiotemporal Data Collections',
    authors: ['Kassidy Barram', 'Sangmi Lee Pallickara', 'Shrideep Pallickara'],
    venue:
      'IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT)',
    year: '2024',
    abstract:
      'This study focuses on enabling programmatic interfaces to perform exploratory analyses over voluminous data collections. The data we consider can be encoded in diverse formats and managed using diverse data storage frameworks. Our framework, code named Scrybe, manages the competing pulls of expressive computations and the need to manage resource utilization in shared clusters. The framework includes support for differentiated quality of service allowing preferentially higher resource utilization for certain users. We have validated our methodology with voluminous data collections housed in relational, NoSQL/document, and hybrid storage systems. Our performance benchmarks profile several aspects of our methodology, and demonstrate the effectiveness of our methodology.',
    url: 'https://doi.org/10.1109/BDCAT63179.2024.00047',
  },
  {
    id: 'pub-classification',
    title: 'A Framework for Profiling Spatial Variability in the Performance of Classification Models',
    authors: [
      'Menuka Warushavithana',
      'Kassidy Barram',
      'Saptashwa Mitra',
      'Caleb Carlson',
      'Sudipto Ghosh',
      'Jay Breidt',
      'Sangmi Lee Pallickara',
      'Shrideep Pallickara',
    ],
    venue:
      'IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT)',
    year: '2023',
    abstract:
      'Scientists use models to further their understanding of phenomena and inform decision-making. A confluence of factors has contributed to an exponential increase in spatial data volumes. This study targets classification models that encapsulate spatially evolving phenomena. Given a model, our objective is to identify how well it predicts across diverse geospatial extents at varying spatial resolutions (e.g., states, counties, census tracts). Assessing a model with all available ground-truth data is infeasible due to the data volumes involved. We propose a framework to assess the performance of classification models at scale over diverse spatial data collections. Our methodology orchestrates validation workloads while reducing memory strain, alleviating contention, enabling concurrency, and ensuring high throughput. We introduce a validation budget that represents an upper bound on the observations used to assess model performance across spatial extents, informed by multiple sampling strategies. Our design decouples validation from underlying model-fitting libraries to interoperate with models built in Scikit-learn, PyTorch, and TensorFlow.',
    award: 'Best Paper Award',
    url: 'https://doi.org/10.1145/3632366.3632387',
  },
  {
    id: 'pub-regression',
    title:
      'Resource Efficient Profiling of Spatial Variability in Performance of Regression Models',
    authors: [
      'Caleb Carlson',
      'Menuka Warushavithana',
      'Saptashwa Mitra',
      'Kassidy Barram',
      'Sudipto Ghosh',
      'Jay Breidt',
      'Sangmi Lee Pallickara',
      'Shrideep Pallickara',
    ],
    venue: 'IEEE International Conference on Big Data (IEEE BigData)',
    year: '2022',
    abstract:
      'We design models to understand phenomena, make predictions, and inform decision-making. This study targets models that encapsulate spatially evolving phenomena. Given a model, our objective is to identify how well the model predicts across all geospatial extents. A modeler may expect these validations to occur at varying spatial resolutions (e.g., states, counties, towns, census tracts). Assessing a model with all available ground-truth data is infeasible due to the data volumes involved. We propose a framework to assess the performance of models at scale over diverse spatial data collections. Our methodology ensures orchestration of validation workloads while reducing memory strain, alleviating contention, enabling concurrency, and ensuring high throughput. We introduce the notion of a validation budget that represents an upper bound on the total number of observations used to assess model performance across spatial extents. The validation budget attempts to capture the distribution characteristics of observations and is informed by multiple sampling strategies. Our design allows us to decouple validation from the underlying model-fitting libraries to interoperate with models designed using Scikit-learn, PyTorch, and TensorFlow.',
    url: 'https://doi.org/10.1109/BigData55660.2022.10020752',
  },
  {
    id: 'pub-archimedes',
    title:
      'Archimedes: A Framework to Support Distributional Similarity Analysis over Arbitrary Spatiotemporal Scopes at Scale',
    authors: [
      'Paige Hansen',
      'Nathan Orwick',
      'Kassidy Barram',
      'Pierce Smith',
      'Jay Breidt',
      'Sangmi Lee Pallickara',
      'Shrideep Pallickara',
    ],
    venue: 'IEEE/ACM International Symposium on Cluster, Cloud and Internet Computing (CCGrid)',
    year: '2025',
    abstract:
      'As data volumes have grown, they offer opportunities to extract insights from them. The class of datasets we consider are spatiotemporal — data that have spatial and temporal dimensions associated with them. In this study, we describe our methodology to support distributional similarity analysis at scale. Such distributional analyses are critical in identifying overall trends in spatiotemporally evolving phenomena, and can be used to inform model calibration and decision making. Our methodology leverages a mix of statistical, algorithmic, and systems approaches to facilitate effective analyses over voluminous datasets. We profile several aspects of our methodology, and our benchmarks validate several of our design choices.',
    url: 'https://doi.org/10.1109/CCGRID64434.2025.00057',
  },
];
