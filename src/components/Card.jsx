import React, { useContext } from "react";
import "./card.css";
import { QRCodeSVG } from "qrcode.react";
import { AppContext } from "../context";

const Card = ({ item }) => {
  const { deleteItem } = useContext(AppContext);

  const newStr = item.searchQ.replace(/ /g, "+");

  return (
    <div className="card">
      <div className="qr">
        <QRCodeSVG
          width={250}
          height={250}
          value={`https://google.com/search?q=${newStr}`}
        />
      </div>
      <div className="text">
        <pre>Scan to search with google</pre>
        <button onClick={() => deleteItem(item.id)}>X</button>
        <p>{item.searchQ}</p>
      </div>
    </div>
  );
};

export default Card;
