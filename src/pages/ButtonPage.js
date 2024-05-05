import Button from "../components/Button";
import {
  FaCheckCircle,
  FaDharmachakra,
  FaCrown,
  FaExclamation,
  FaRegTimesCircle,
} from "react-icons/fa";
import PageHeading from "../components/PageHeading";
const ButtonPage = () => {
  return (
    <div className="App ml-10">
      <PageHeading>Buttons</PageHeading>
      <div>
        <Button success rounded outline>
          <FaCheckCircle /> Success
        </Button>
      </div>
      <div>
        <Button secondary>
          <FaDharmachakra /> Secondary
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
          <FaCrown /> Primary
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <FaExclamation /> Warning
        </Button>
      </div>
      <div>
        <Button danger>
          <FaRegTimesCircle /> Danger
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
