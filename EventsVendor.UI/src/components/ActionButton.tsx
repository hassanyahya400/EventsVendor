

import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

interface Props {
  buttonText: string;
  textColor?: string;
  textSize?: string;
  outlineGrey?: boolean;
  outlineRed?: boolean;
  link?: string;
  width?: string;
  attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  loading?: boolean;
}

const ActionButton = ({
  buttonText,
  link,
  textColor,
  textSize,
  outlineGrey,
  outlineRed,
  width,
  attributes,
  loading = false,
}: Props) => {
  return (
    <>
      {link ? (
        <Link
          to={link || ""}
          className={`action-button text-center w-${
            width ? width : "full"
          } inline-block`}
        >
          <div
            className={`w-full px-7 mona-sans-semibold ${
              textSize ? "py-3 text-" + textSize : "py-3 text-base"
            } flex items-center rounded-full 
                     ${textColor ? "text-[" + textColor + "] " : "text-white"}
            ${
              outlineGrey
                ? "bg-[#F6F6F6] text-[#A1A1A1] border border-[#A1A1A1]"
                : outlineRed
                ? "bg-[#FEECEB] text-[#F44336] border border-[#F44336]"
                : `bg-admin_theme border border-[#939393] ${
                    textColor ? "text-[" + textColor + "] " : "text-white"
                  }`
            }   
              `}
          >
            {buttonText}
          </div>
        </Link>
      ) : (
        <button
          {...attributes}
          className={`w-full px-7 mona-sans-semibold ${
            textSize ? "py-3 text-" + textSize : "py-3 text-base"
          } flex items-center rounded-full
              ${
                outlineGrey
                  ? "bg-[#F6F6F6] text-[#A1A1A1] border border-[#A1A1A1]"
                  : outlineRed
                  ? "bg-[#FEECEB] text-[#F44336] border border-[#F44336]"
                  : `bg-admin_theme border border-[#939393] ${
                      textColor ? "text-[" + textColor + "] " : "text-white"
                    }`
              }              
            `}
        >
          <div className="w-fit mx-auto flex items-center">
            {loading ? (
              <>
                <ClipLoader
                  size={15}
                  color={
                    outlineGrey ? "#A1A1A1" : outlineRed ? "#F44336" : "white"
                  }
                />{" "}
                <span className="ml-2">{buttonText}</span>
              </>
            ) : (
              buttonText
            )}
          </div>
        </button>
      )}
    </>
  );
};

export default ActionButton;