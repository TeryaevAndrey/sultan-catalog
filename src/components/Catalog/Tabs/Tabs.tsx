import React, { FC } from "react";

const Tabs: FC = () => {
  return (
    <div className="lg:hidden flex items-center border-b border-t border-gray-001/[0.1] text-xs font-semibold w-full relative before:content-[''] before:absolute before:left-[50%] before:top-[50%] before:h-[80%] before:border-r before:border-gray-001/[0.1] before:border-dotted before:translate-y-[-50%]">
      <button className="flex justify-center items-center gap-2 h-[40px] text-gray-001 w-1/2">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2C0.5 1.17157 1.17157 0.5 2 0.5Z"
            stroke="#3F4E65"
          />
          <path
            d="M9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1C8.5 0.723858 8.72386 0.5 9 0.5Z"
            stroke="#3F4E65"
          />
          <path
            d="M9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9C8.5 8.72386 8.72386 8.5 9 8.5Z"
            stroke="#3F4E65"
          />
          <path
            d="M1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9C0.5 8.72386 0.723858 8.5 1 8.5Z"
            stroke="#3F4E65"
          />
        </svg>
        Каталог
      </button>
      <button className="flex justify-center items-center gap-2 h-[40px] text-gray-001 w-1/2">
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z"
            stroke="#3F4E65"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        Поиск
      </button>
    </div>
  );
};

export default Tabs;
