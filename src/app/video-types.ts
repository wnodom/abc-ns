interface ViewDetail {
  age: number;
  region: string;
  date: string;
}

export interface Video {
  id: string;
  author: string;
  title: string;
  viewDetails: ViewDetail[];
}
