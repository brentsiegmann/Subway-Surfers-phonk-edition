import { useEffect, useState } from "react";
export default function App() {
  const tiles = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
  const [aan, setAan] = useState(
    tiles.map((tile) => {
      if (tile === "b2") return { id: tile, status: true };
      return { id: tile, status: false };
    })
  );

  function handleTileUpdate(newPlace) {
    setAan(
      tiles.map((tile) => {
        if (tile === newPlace) return { id: tile, status: true };
        return { id: tile, status: false };
      })
    );
  }

  return (
    <div className="app">
      <Floor aan={aan} tiles={tiles} />
      <Movement aan={aan} onTileUpdate={handleTileUpdate} />
    </div>
  );
}

function Movement({ aan, onTileUpdate }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight"
      ) {
        let previousPlace;
        aan.forEach((tile) => {
          if (tile.status === true) {
            previousPlace = tile.id;
          }
        });
        let newPlace;

        if (event.key === "ArrowUp") {
          if (previousPlace[0] === "c") {
            newPlace = "b" + previousPlace[1];
          }
          if (previousPlace[0] === "b") {
            newPlace = "a" + previousPlace[1];
          }
        }

        if (event.key === "ArrowDown") {
          if (previousPlace[0] === "b") {
            newPlace = "c" + previousPlace[1];
          }
          if (previousPlace[0] === "a") {
            newPlace = "b" + previousPlace[1];
          }
        }

        if (event.key === "ArrowLeft") {
          if (previousPlace[1] === "2") {
            newPlace = previousPlace[0] + "1";
          }
          if (previousPlace[1] === "3") {
            newPlace = previousPlace[0] + "2";
          }
        }

        if (event.key === "ArrowRight") {
          if (previousPlace[1] === "2") {
            newPlace = previousPlace[0] + "3";
          }
          if (previousPlace[1] === "1") {
            newPlace = previousPlace[0] + "2";
          }
        }

        console.log("newplace:", newPlace);
        if (newPlace) {
          onTileUpdate(newPlace);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onTileUpdate]);
}

function Floor({ aan }) {
  return (
    <div className="floor">
      {aan.map((tile) => (
        <div className="tile" key={tile.id} style={tile.status ? { backgroundColor: "red" } : {}}></div>
      ))}
    </div>
  );
}
