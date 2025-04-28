import React from "react";
import Commonbttn from "../../app/components/CommonBtn";  // Adjust the import path according to your file structure

const LinkText = ({bold_text,add_cls, para_text_a,para_text_b, btn_name, path, commonbtn, img_cls, f_custome,delete_txt}) => {
  return (
    <>
      <p className={`para_text lh-base ${f_custome}`}>
      <span className={`fw-bold ${add_cls}`}>{bold_text}</span>
        {para_text_a}
        <Commonbttn
          btn_name={btn_name}
          path={path}
          commonbtn={commonbtn}
          img_cls={img_cls}
          add_cls={delete_txt}
          />
          {para_text_b}
      </p>
    </>
  );
};

export default LinkText;
