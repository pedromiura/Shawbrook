import { Suspense } from "react";
import { useFormContext } from "../../context/form";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ImageComponent from "../ImageComponent"
import Spinner from "../Spinner";

/* 
Documentation for integration with reactstrap: https://reactstrap.github.io/?path=/docs/components-modal--modal  
*/

export default function MyModal(props) {
  const [form, setForm] = useFormContext(); //Form context to access data without prop drilling

  function closeModal() {
    props.setIsOpen(false)
  }

  return (
    <Modal size="lg" isOpen={props.isOpen} toggle={closeModal}>
      <ModalHeader toggle={closeModal}>Card</ModalHeader>
      <ModalBody>
        <Suspense fallback={<Spinner/>}> {/* Built in react feature to manage loading times */}
          <ImageComponent type="thumb" width="500" height="500"/>
        </Suspense>
      </ModalBody>
    </Modal>
  )
}