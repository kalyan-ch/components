import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  const renderedRows = data.map((row) => {
    const renderedCells = config.map((col) => {
      return (
        <td className="p-2 border-l" key={col.label}>
          {col.render(row)}
        </td>
      );
    });

    return (
      <tr className="border-b border-r" key={keyFn(row)}>
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaderCols = config.map((col, id) => {
    if (col.header) {
      return <Fragment key={id}>{col.header()}</Fragment>;
    } else {
      return <th key={col.label}>{col.label}</th>;
    }
  });

  return (
    <table className="table auto border-spacing-2">
      <thead>
        <tr className="border-b-4">{renderedHeaderCols}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
