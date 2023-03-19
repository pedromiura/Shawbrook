import { Suspense } from "react";
import { useFormContext } from "../../context/form";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ImageComponent from "../ImageComponent"
import Spinner from "../Spinner";
import ModalStyle from '@/styles/Modal.module.css'

/* 
Documentation for integration with reactstrap: https://reactstrap.github.io/?path=/docs/components-modal--modal  
*/

export default function MyModal(props) {
  const [form, setForm] = useFormContext(); //Form context to access data without prop drilling

  function closeModal() {
    props.setIsOpen(false)
  }

  return (
    <Modal size="lg" centered isOpen={props.isOpen} toggle={closeModal}>
      <ModalHeader toggle={closeModal}>Card</ModalHeader>
      <ModalBody>
        <Suspense fallback={<Spinner />}> {/* Built in react feature to manage loading times */}
          <div className={`container`}>
            <div className={`row justify-content-around`}>
              <div className={`col-xs-auto p-3 ${ModalStyle.image}`}>
                <ImageComponent type="thumb" />
              </div>
              <div className="col-md-auto p-3">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value={form.name} className={ModalStyle.input} readOnly/>
                <p/>
                <label for="surname">Surname:</label>
                <input type="text" id="surname" name="surname" value={form.surname} className={ModalStyle.input} readOnly/>
              </div>
            </div>
          </div>
        </Suspense>
      </ModalBody>
    </Modal>
  )
}