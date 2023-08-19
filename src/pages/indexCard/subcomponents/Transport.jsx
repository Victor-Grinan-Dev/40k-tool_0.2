import React from "react";
import { useSelector } from "react-redux";

const Transport = () => {
  const transport = useSelector((state) => state.app.indexCard.transport);
  const { rule, amount } = transport;
  return (
    <div>
      <div className="indexCard__habilities">transport {amount}</div>
      <p className="font-rules">{rule}</p>
    </div>
  );
};

export default Transport;
