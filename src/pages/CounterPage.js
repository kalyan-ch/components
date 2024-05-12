import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const CHANGE_INPUT_VALUE = "changeInputValue";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = 'addValueToCount';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    default:
      return state;
  }
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const { count, valueToAdd } = state;

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({type: DECREMENT_COUNT})
  };

  const handleChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    dispatch({
      type: CHANGE_INPUT_VALUE,
      payload: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
  };

  return (
    <Panel>
      <h2 className="text-2xl bold">Count is {count}</h2>
      <div className="flex flex-row">
        <Button success outline onClick={increment}>
          Increase
        </Button>
        <Button danger outline onClick={decrement}>
          Decrease
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot:</label>
        <input
          value={valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border"
        />
        <Button primary>Add</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
