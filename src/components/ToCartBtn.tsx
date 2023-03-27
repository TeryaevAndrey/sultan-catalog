import React, { FC } from "react";

interface IToCartBtn {
  onClick: React.MouseEventHandler;
  inCart: boolean;
}

const ToCartBtn: FC<IToCartBtn> = ({ onClick, inCart }) => {
  const productsCart = JSON.parse(localStorage.getItem("productsCart") || "[]");

  return (
    <button
      onClick={onClick}
      className={`${
        inCart ? "bg-green-400" : "bg-orange-001"
      } rounded-[80px] py-4 px-6 flex justify-center items-center gap-1 uppercase text-[10px] font-bold max-h-[45px]`}
    >
      {inCart ? "В корзине" : "В корзину"}
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6368 7.49241C22.4956 7.29518 22.3062 7.19656 22.0684 7.19656H6.93274L6.52195 6.12711C6.41793 5.77648 6.27675 5.47698 6.09842 5.22862C5.92009 4.98025 5.73062 4.80494 5.53 4.70267C5.32938 4.6004 5.15476 4.53101 5.00616 4.49448C4.85755 4.45796 4.70894 4.4397 4.56033 4.4397H1.50645C1.31326 4.4397 1.1498 4.50544 1.01605 4.63693C0.882303 4.76841 0.81543 4.93642 0.81543 5.14096C0.81543 5.25784 0.845151 5.37106 0.904594 5.48063C0.964037 5.59021 1.04949 5.67421 1.16094 5.73265C1.2724 5.79109 1.38757 5.82031 1.50645 5.82031H4.56033C4.61978 5.82031 4.6755 5.82761 4.72752 5.84222C4.77953 5.85683 4.85012 5.91892 4.93928 6.02849C5.02845 6.13807 5.10275 6.30242 5.16219 6.52157L8.35937 15.3005C8.3891 15.3882 8.43739 15.4722 8.50427 15.5525C8.57114 15.6329 8.64916 15.695 8.73832 15.7388C8.82749 15.7826 8.92408 15.8045 9.02811 15.8045H18.6579C18.8065 15.8045 18.9439 15.7607 19.0702 15.673C19.1966 15.5854 19.282 15.4758 19.3266 15.3443L22.7371 8.13888C22.8114 7.90513 22.778 7.68964 22.6368 7.49241ZM18.1675 14.402H9.58538L7.31169 8.59908H21.043L18.1675 14.402ZM16.882 16.565C16.3916 16.565 15.9718 16.7367 15.6226 17.08C15.2733 17.4234 15.0987 17.8361 15.0987 18.3182C15.0987 18.8003 15.2733 19.2131 15.6226 19.5564C15.9718 19.8997 16.3916 20.0714 16.882 20.0714C17.3724 20.0714 17.7922 19.8997 18.1415 19.5564C18.4907 19.2131 18.6653 18.8003 18.6653 18.3182C18.6653 17.8361 18.4907 17.4234 18.1415 17.08C17.7922 16.7367 17.3724 16.565 16.882 16.565ZM10.4622 16.565C10.1352 16.565 9.8343 16.6454 9.55938 16.8061C9.28445 16.9668 9.06897 17.1787 8.91294 17.4416C8.7569 17.7046 8.67888 17.9968 8.67888 18.3182C8.67888 18.8003 8.85349 19.2131 9.20272 19.5564C9.55195 19.8997 9.97176 20.0714 10.4622 20.0714C10.9526 20.0714 11.3724 19.8997 11.7216 19.5564C12.0708 19.2131 12.2455 18.8003 12.2455 18.3182C12.2455 18.2013 12.2343 18.0845 12.212 17.9676C12.1897 17.8507 12.1563 17.7411 12.1117 17.6389C12.0671 17.5366 12.0114 17.438 11.9445 17.343C11.8777 17.2481 11.8033 17.1604 11.7216 17.08C11.6399 16.9997 11.5507 16.9266 11.4541 16.8609C11.3575 16.7951 11.2572 16.7404 11.1532 16.6965C11.0492 16.6527 10.9377 16.6198 10.8188 16.5979C10.6999 16.576 10.5811 16.565 10.4622 16.565Z"
          fill="#fff"
        />
      </svg>
    </button>
  );
};

export default ToCartBtn;
