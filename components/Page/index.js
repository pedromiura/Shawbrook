import { Suspense, useState } from "react";
import UserForm from "../Form";
import Modal from "../Modal"
import ImageLoader from "../ImageLoader";
import Spinner from "../Spinner";
import ErrorBoundary from '../ErrorBoundary'
import GridStyle from '@/styles/Grid.module.css'

/* Main component with the form, image and card */

const PageForm = () => {
    const [isImage, setIsImage] = useState(false); //State to manage when form has been submitted
    const [key, setKey] = useState(0); //Key used to refresh component and image
    const [isOpen, setIsOpen] = useState(false); //State to manage modal

    const openModal = () => {
        setIsOpen(true) //Updates modal state to open the modal
    }

    const reloadImage = () => {
        setKey(key + 1) //Updates the Image component key to remount component
    }

    return (
        <div className="container-fluid">
            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>}
            <div className="row align-items-center justify-content-around">
                <div className="col-lg-auto p-3">
                    <UserForm isComplete={setIsImage} currentKey={key} updateKey={setKey} />
                </div>
                {isImage &&
                    <div className={`col-lg-auto p-3 ${GridStyle.background}`}>
                        <ErrorBoundary > {/* Built in react feature to deal with exceptions */}
                            <Suspense fallback={<Spinner />}> {/* Built in react feature to manage loading times */}
                                <div className={`row align-items-center justify-content-center ${GridStyle.row}`}>
                                    <div className={`col-lg-auto p-3 ${GridStyle.image}`}>
                                        <ImageLoader key={key} /> 
                                    </div>
                                </div>
                                <div className="row align-items-center justify-content-around">
                                    <div className="col-auto p-3">
                                        <button type="button" id="refuseButton" className="btn btn-success " onClick={reloadImage}>Refuse</button>
                                    </div>
                                    <div className="col-auto p-3">
                                        <button type="button" id="acceptButton" className="btn btn-success " onClick={openModal}>Accept</button>
                                    </div>
                                </div>
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                }
            </div>
        </div >
    );
};

export default PageForm;
