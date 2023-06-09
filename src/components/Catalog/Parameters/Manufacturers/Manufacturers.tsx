import React, { FC } from "react";
import Search from "../../../Search";
import SortArrowImg from "../../../../assets/images/sort-arrow.svg";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  setSearchValue,
  setManufacturersSelected,
  setSearchedManufacturers,
} from "../../../../store/parametersSlice";
import ManufacturersItem from "./ManufacturersItem";
import productsData from "../../Products/products.json";

const Manufacturers: FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.parameters.searchValue);
  const manufacturersSelected = useAppSelector(
    (state) => state.parameters.manufacturersSelected
  );
  const searchedManufacturers = useAppSelector(
    (state) => state.parameters.searchedManufacturers
  );

  const products: IProduct[] =
    JSON.parse(localStorage.getItem("products")!) || productsData;
  const manufacturers = Array.from(
    new Set(products.map((product) => product.parameters.manufacturer))
  );
  const [isAll, setIsAll] = React.useState<boolean>(false);

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));

    if (e.target.value === "") {
      dispatch(setSearchedManufacturers([]));
    }
  };

  const searchBtnHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (searchValue) {
      const manufacturersFiltered = manufacturers.filter((manufacturer) =>
        manufacturer.toLowerCase().includes(searchValue.toLowerCase())
      );

      return dispatch(setSearchedManufacturers(manufacturersFiltered));
    }
  };

  const showAll = () => {
    setIsAll(!isAll);
  };

  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.checked) {
      dispatch(setManufacturersSelected([...manufacturersSelected, value]));
    } else {
      dispatch(
        setManufacturersSelected(
          manufacturersSelected.filter((item) => item !== value)
        )
      );
    }
  };

  return (
    <div className="flex flex-col pb-5 border-b border-dotted border-gray-001/[0.1]">
      <h5 className="text-base font-medium text-black-001">Производитель</h5>
      <div className="mt-3.5 w-full">
        <Search
          onChange={changeSearchValue}
          value={searchValue}
          onClick={searchBtnHandler}
        />
      </div>
      <div className="mt-3.5 flex flex-col">
        {searchedManufacturers.length > 0
          ? searchedManufacturers.map((manufacturer, index) => {
              return (
                <ManufacturersItem
                  onChange={changeCheckbox}
                  checked={manufacturersSelected.includes(manufacturer)}
                  manufacturer={manufacturer}
                  key={index}
                  value={manufacturer}
                />
              );
            })
          : manufacturers.slice(0, 4).map((manufacturer, index) => {
              return (
                <ManufacturersItem
                  onChange={changeCheckbox}
                  checked={manufacturersSelected.includes(manufacturer)}
                  manufacturer={manufacturer}
                  key={index}
                  value={manufacturer}
                />
              );
            })}

        {isAll &&
          manufacturers.slice(4).map((manufacturer, index) => {
            return (
              <ManufacturersItem
                onChange={changeCheckbox}
                checked={manufacturersSelected.includes(manufacturer)}
                manufacturer={manufacturer}
                key={index}
                value={manufacturer}
              />
            );
          })}

        {searchedManufacturers.length === 0 && manufacturers.length > 4 && (
          <div
            className="mt-3.5 flex items-center gap-2 text-gray-001 text-xs font-medium cursor-pointer"
            onClick={showAll}
          >
            <span>Показать все</span>
            <img
              className={`${isAll && "rotate-180"}`}
              src={SortArrowImg}
              alt="open"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Manufacturers;
