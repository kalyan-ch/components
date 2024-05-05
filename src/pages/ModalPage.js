import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import PageHeading from "../components/PageHeading";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, []);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBtn = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );

  return (
    <div>
      <PageHeading>Modal</PageHeading>
      <Button onClick={handleClick} primary outline>
        Open Modal
      </Button>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBtn}>
          <p>Accept or Perish</p>
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
