import Link from "./Link";

const Sidebar = () => {
  const links = [
    {
      label: "DropDown",
      path: "/",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Buttons",
      path: "/buttons",
    },
    {
      label: "Modal",
      path: "/modal",
    },
    {
      label: "Table",
      path: "/table",
    },
  ];

  const renderedLinks = links.map((li) => {
    return (
      <Link
        key={li.label}
        to={li.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2 items-start"
      >
        {li.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
