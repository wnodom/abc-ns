interface ViewDetail {
  age: number;
  region: string;
  date: string;
}

export interface Video {
  id: string;
  author: string;
  name: string;
  viewDetails: ViewDetail[];
}
