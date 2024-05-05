import Accordion from "../components/Accordion";
import PageHeading from "../components/PageHeading";

const AccordionPage = () => {
  const items = [
    {
      id: "232322",
      label: "Pellentesque habitant morbi tristique",
      content:
        "senectus et netus et malesuada fames ac turpis egestas. Suspendisse a sollicitudin libero, vitae faucibus odio. Nam porttitor ligula sed tellus molestie, ut mattis tortor faucibus.",
    },
    {
      id: "232332",
      label: "Lorem ipsum dolor sit amet",
      content:
        "Sed pellentesque eget risus at pulvinar. Aliquam ullamcorper, ex et semper pellentesque, lorem purus gravida ex, eu tempus justo arcu at purus",
    },
    {
      id: "232324",
      label: "Aliquam maximus, magna in ultrices rutrum",
      content:
        "Cras mollis tellus bibendum enim volutpat, vitae lacinia felis elementum. Phasellus sed placerat orci. Sed placerat mattis mauris, at eleifend ex rhoncus sed. Cras vitae accumsan diam. Maecenas vitae purus non elit laoreet vulputate efficitur non tellus.",
    },
    {
      id: "232522",
      label: " Quisque eget semper nisi",
      content:
        "Morbi accumsan elementum pharetra. Quisque eget semper nisi, a sollicitudin orci. Aliquam pellentesque vehicula quam, elementum suscipit mi porta sit amet. Sed a sem ac eros euismod ultrices. Integer quis turpis ut erat sagittis eleifend. Proin nec tempor ante.",
    },
  ];

  return (
    <div>
      <PageHeading>Accordion</PageHeading>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
