export interface Film {
  id: number;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: People[];
  species: Species[];
  locations: Location[];
  vehicles: Vehicle[];
  url: string;
}

export interface Species {
  id: string;
  name: string;
  classification: string;
  eye_color: string;
  hair_color: string;
  people: string[];
  films: string[];
  url: string;
}

export interface People {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films: string[];
  species: string[];
  url: string;
}

export interface Location {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
}

export interface Vehicle {
  id: string;
  name: string;
  description: string;
  vehicle_class: string;
  length: string;
  pilot: string[];
  films: string[];
  url: string;
}
