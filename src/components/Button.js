import React from "react";
import '../static/css/ButtonStyle.css';

const Button = (props) => {

  return (
    <div className={props.type+"-sortList"}>
        {props.contents
          ? props.contents.map((content) => (
              <button className={props.type+"-sort"}>
                {content}
              </button>
            ))
          : null}
    </div>
  );
};

export default Button;
