export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurCats = "ourcats",
  ContactUs = "contactus"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface CatType {
  name: string;
  description?: string;
  image: string;
}