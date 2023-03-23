interface ICategory {
  title: string;
  to: string;
}

interface ICategories {
  categories: ICategory[];
}

interface IProduct {
  id: number;
  img: string;
  title: string;
  typeWeight: string;
  weightValue: number;
  description: string;
  price: number;
  parameters: {
    hatch: number;
    manufacturer: string;
    brand: string;
    typeCare: string[];
  };
}