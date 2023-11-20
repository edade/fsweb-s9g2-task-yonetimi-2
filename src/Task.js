import { formatDistanceToNow, differenceInDays   } from "date-fns";
import { tr } from "date-fns/locale";
import React from "react";

const Task = ({ taskObj, onComplete }) => {
var formatDate = formatDistanceToNow(
  new Date(taskObj.deadline),
  {locale: tr ,addSuffix: true}
)

var differenceDays = differenceInDays(
  new Date(taskObj.deadline),
  new Date()
)

  return (
    <div className=" task p-6 bg-[#fff] rounded-[5px] leading-normal  mt-4 shadow-[0_4px_5px_0px_rgb(0,0,0,0.1)]">
      
      <h3 className="text-[18px] text-[#c8781a]">{taskObj.title}</h3>
      <div className="deadline text-[12px] pt-1 ">son teslim: <span className="py-1 px-2 inline-block" style={{backgroundColor: differenceDays <=3 ? "#ffd9d4" : "white" }}>{formatDate}</span> <span>{differenceDays} </span></div>
      <p className="pt-2 px-0 pb-3 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill inline-block px-3 py-1 text-sm border-solid border rounded-full border-gray-300 mr-1 mb-1.5  " key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0px_rgb(0,0,0,0.05)] rounded-sm border-0 cursor-pointer " onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
