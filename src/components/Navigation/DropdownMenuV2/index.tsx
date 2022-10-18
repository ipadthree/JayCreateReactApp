import { useState } from "react";
import "./DropdownMenuV2.css";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "../../../models/RoutesEnum";

const DropdownMenuV2 = (): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  return (
    <div className="menu-container">
      <button className="menu-trigger" onClick={() => setOpen(!open)}>
        <p>Small apps in 2022</p>
      </button>
      <div className={`dropdown-menu ${open ? "menu_open" : "menu_closed"}`}>
        <div className="dropdown-item">
          <button
            className="glow-on-hover"
            onClick={() => history.push(RoutesEnum.calculator)}
          >
            Calculator
          </button>
        </div>
        <div className="dropdown-item">
          <button
            className="glow-on-hover"
            onClick={() => history.push(RoutesEnum.tetris)}
          >
            Tetris
          </button>
        </div>
        <div className="dropdown-item">
          <button
            className="glow-on-hover"
            onClick={() => history.push(RoutesEnum.wordle)}
          >
            Wordle
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenuV2;
