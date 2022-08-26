export interface IBusinessData {
  title: string;
  descr: string;
  button: string;
  features: IFeature[];
}

export interface IFeature {
  id: string;
  icon: string;
  title: string;
  content: string;
}
