import React from "react";
import { ProblemKey } from "../types/Car";
import { ShiftUpdateInfo } from "../types/Shift";

type Context = {
  isModalOil: boolean;
  handleCloseModalOil: () => void;
  handlePlusOil: (value: number) => void;
  voronaMinus: (payload: number) => void;
  serviceCar: (
    numder: string,
    problems: string[],
    isWashed?: boolean
  ) => void;
  voronaPlus: (payload: number) => void;
  shiftId: string;
  shiftUpdate: (info: ShiftUpdateInfo) => {};
};

const RouterContext = React.createContext<Partial<Context>>({});

export default RouterContext;
