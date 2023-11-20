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
    <div className="task">
      
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: <span style={{backgroundColor: differenceDays <=3 ? "#ffd9d4" : "white" }}>{formatDate}</span> <span>{differenceDays} </span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
