interface ICategories {
  categories: string[];
}

interface IProduct {
  id: number | string;
  img: string;
  title: string;
  typeWeight: string;
  weightValue: number | undefined;
  description: string;
  price: number | undefined;
  parameters: {
    hatch: number;
    manufacturer: string;
    brand: string;
    typeCare: string[];
  };
}

interface ICartProduct extends IProduct {
  deleteProduct?: React.MouseEventHandler;
  amount: number;
}
