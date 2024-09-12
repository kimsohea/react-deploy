interface Category {
  label: string;
  categoryName?: string;
  children: Category[];
}

export type CategoryContextData = {
  state: {
    category: Category[];
  };
  actions: {
    setCategory: (categories: Category[]) => void;
  };
};

export type Category = Category;
