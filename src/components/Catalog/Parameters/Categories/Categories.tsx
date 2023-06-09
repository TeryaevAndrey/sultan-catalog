import React, { FC } from "react";
import { setSort } from "../../../../store/catalogSlice";
import { setCategoriesSelected } from "../../../../store/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setProductsList } from "../../../../store/productsSlice";
import productsData from "../../Products/products.json";

const Categories: FC<ICategories> = ({ categories }) => {
  const dispatch = useAppDispatch();
  const categoriesSelected = useAppSelector(
    (state) => state.categories.categoriesSelected
  );

  return (
    <ul className="text-gray-001 mt-3.5">
      {categories.map((el, index) => {
        return (
          <li
            className={`hover:text-black-001 ${
              categoriesSelected.includes(el)
                ? "text-black-001"
                : "text-gray-001"
            } ease-linear duration-75 cursor-pointer`}
            key={index}
            onClick={() => {
              if (categoriesSelected.includes(el)) {
                dispatch(
                  setCategoriesSelected(
                    categoriesSelected.filter((category) => category !== el)
                  )
                );
              } else {
                dispatch(
                  setCategoriesSelected(
                    Array.from(new Set([...categoriesSelected, el]))
                  )
                );
              }

              dispatch(setSort({ sortBy: "title", title: "Название" }));
            }}
          >
            {el}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
