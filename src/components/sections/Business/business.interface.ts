export interface IBusinessData {
  items: IItem[];
  features: IFeature[];
}

export interface IItem {
  title: string;
  descr: string;
  button: string;
}

export interface IFeature {
  id: string;
  icon: string;
  title: string;
  content: string;
}
