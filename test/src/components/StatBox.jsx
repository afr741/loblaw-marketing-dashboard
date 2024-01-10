import React from "react";

const StatBox = ({ isTotal, icon, title, value, currentColor }) => {
  return isTotal ? (
    <div
      className="bg-white darg:text-gray-500 dark:bg-secondary-dark-bg shadow-2xl h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center"
      key={title}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-gray-400">{title}</p>
          <p className="text-2xl">{value ? `${value}` : "-"}</p>
        </div>
        <button
          type="button"
          style={{ background: currentColor }}
          className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
        >
          {icon}
        </button>
      </div>
    </div>
  ) : (
    <div
      className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg shadow-2xl md:w-56 p-4 pt-9 rounded-xl"
      key={title}
    >
      <button
        type="button"
        style={{ backgroundColor: currentColor, color: "#ffffff" }}
        className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
      >
        {icon}
      </button>
      <p className="mt-3">
        <span className="text-lg font-semibold">
          {value ? `${value}` : "-"}
        </span>
      </p>
      <p className="text-sm text-gray-400 mt-1">{title}</p>
    </div>
  );
};

export default StatBox;
