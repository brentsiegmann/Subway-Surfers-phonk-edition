import { use, useEffect, useState } from "react";
export default function App() {
  const [pos, setPos] = useState({ row: 1, col: 1 });

  function newPos(obj) {
    setPos(obj);
  }

  return (
    <div className="app">
      <Floor pos={pos} />
      <Movement pos={pos} newPos={newPos} />
    </div>
  );
}

function Movement({ pos, newPos }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight"
      ) {
        let { row, col } = pos;
        console.log(event.key);

        if (event.key === "ArrowUp") {
          if (col > 0) col -= 1;
        }
        if (event.key === "ArrowDown") {
          if (col < 2) col += 1;
        }
        if (event.key === "ArrowLeft") {
          if (row > 0) row -= 1;
        }
        if (event.key === "ArrowRight") {
          if (row < 2) row += 1;
        }

        newPos({ row, col });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
}
function Floor({ pos }) {
  return (
    <div className="floor">
      {[0, 1, 2].map((row) => (
        <div className="row" key={row}>
          {[0, 1, 2].map((col) => (
            <div
              className="tile"
              key={`${col}`}
              style={pos.row === row && pos.col === col ? { backgroundColor: "red" } : {}}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
