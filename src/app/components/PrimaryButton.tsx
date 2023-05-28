import React from "react";

export const PrimaryButton = ({classNames, title, onClick}: {
  classNames?: string,
  title: string,
  onClick: (() => {}) | undefined
}) => {
  return (
    <button onClick={onClick}
            className={`${classNames} text-white font-semibold bg-black px-5 py-2 text-sm border-t-2 border-l-2 border-gray-500`}>
      {title}
    </button>
  )
}
