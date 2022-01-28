import { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../../reducers/counterSlice";
import Button from "../Button/Base";

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="flex flex-col w-fit ml-auto mr-auto border border-black rounded-lg p-4">
      <div className="flex justify-center mb-3">
        <Button
          aria-label="Decrement value"
          className="mr-3"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <div className="px-3 flex items-center">{count}</div>
        <Button
          aria-label="Increment value"
          className="ml-3"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className="flex justify-center flex-col">
        <input
          aria-label="Set increment amount"
          className="border border-black rounded-lg mb-3 text-center"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div className="flex flex-row">
          <Button
            className="mr-3"
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </Button>
          <Button
            className="mr-3"
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </Button>
          <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
            Add If Odd
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
