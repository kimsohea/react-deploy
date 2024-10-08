import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

import { Category, CategoryContextData } from "@/types/category";

// Context 생성
const CategoryContext = createContext<CategoryContextData>({
  state: {
    category: [],
  },
  actions: {
    setCategory: () => {},
  },
});

// Provider 생성
const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await axios.get(
        `https://raw.githubusercontent.com/kimsohea/aladin-images/main/categories.json`
      );
      setCategory(response.data);
    };

    fetchCategory();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        state: { category },
        actions: { setCategory },
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };
