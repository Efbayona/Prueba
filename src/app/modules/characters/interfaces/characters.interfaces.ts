export interface DataObjet {
  info: Info;
  results: Characters[];
}

export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: null;
}

export interface Characters {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: Locations;
  name: string;
  origin: Origin;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Locations {
  name: string;
  url: string;
}
