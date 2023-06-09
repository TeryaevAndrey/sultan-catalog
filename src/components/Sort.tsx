import React, { FC } from "react";
import SortImg from "../assets/images/sort-arrow.svg";
import { setSort } from "../store/catalogSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setProductsList } from "../store/productsSlice";
import sortProductsByTitle from "../utils/sortProductsByTitle";
import sortProductsByPrice from "../utils/sortProductsByPrice";

const Sort: FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const sort = useAppSelector((state) => state.catalog.sort);
  const products = useAppSelector((state) => state.products.productsList);
  const productsList = [...products];

  const sortByTitle = () => {
    let sortedProducts = sortProductsByTitle(productsList, "asc");

    dispatch(setProductsList(sortedProducts));
  };

  const sortByPrice = () => {
    let sortedProducts = productsList.sort((prev, current) => {
      return prev.price! - current.price!;
    });

    dispatch(setProductsList(sortedProducts));
  };

  const sortByDesс = () => {
    if (sort.sortBy === "title") {
      let sortedProducts = sortProductsByTitle(productsList, "desc");

      dispatch(setProductsList(sortedProducts));
    }

    if (sort.sortBy === "price") {
      let sortedProducts = sortProductsByPrice(productsList, "desc");

      dispatch(setProductsList(sortedProducts));
    }
  };

  const sortByAsс = () => {
    if (sort.sortBy === "title") {
      let sortedProducts = sortProductsByTitle(productsList, "asc");

      dispatch(setProductsList(sortedProducts));
    }

    if (sort.sortBy === "price") {
      let sortedProducts = sortProductsByPrice(productsList, "asc");

      dispatch(setProductsList(sortedProducts));
    }
  };

  return (
    <div className="relative w-max">
      <p className="font-medium text-black-001 text-base flex items-center gap-2">
        Сортировка:
        <span
          className="flex items-center gap-1 font-normal text-gray-001 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {sort.title}
          <img className="w-[7px] h-[7px]" src={SortImg} alt="sort" />
        </span>
      </p>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-[100%] right-0 bg-white shadow-sm text-gray-001`}
      >
        <div
          className="cursor-pointer p-1 border-b border-gray-001/[0.3] border-solid hover:bg-gray-001/[0.1]"
          onClick={() => {
            dispatch(setSort({ sortBy: "price", title: "Цена" }));
            sortByPrice();
          }}
        >
          Цена
        </div>
        <div
          className="cursor-pointer p-1 border-b border-gray-001/[0.3] border-solid hover:bg-gray-001/[0.1]"
          onClick={() => {
            dispatch(setSort({ sortBy: "title", title: "Название" }));
            sortByTitle();
          }}
        >
          Название
        </div>
        <div
          className="cursor-pointer p-1 border-b border-gray-001/[0.3] border-solid hover:bg-gray-001/[0.1]"
          onClick={() => {
            dispatch(
              setSort({
                sortBy: sort.sortBy,
                title:
                  (sort.sortBy === "title" ? "Название" : "Цена") +
                  "-(по убыванию)",
              })
            );

            sortByDesс();
            setIsOpen(false);
          }}
        >
          По убыванию
        </div>
        <div
          className="cursor-pointer p-1 hover:bg-gray-001/[0.1]"
          onClick={() => {
            dispatch(
              setSort({
                sortBy: sort.sortBy,
                title:
                  (sort.sortBy === "title" ? "Название" : "Цена") +
                  "-(по возрастанию)",
              })
            );
            sortByAsс();
            setIsOpen(false);
          }}
        >
          По возрастанию
        </div>
      </div>
    </div>
  );
};

export default Sort;
