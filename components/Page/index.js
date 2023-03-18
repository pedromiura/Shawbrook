import { Suspense, useState } from "react";
import UserForm from "../Form";
import Modal from "../Modal"
import ImageLoader from "../ImageLoader";
import Spinner from "../Spinner";
import ErrorBoundary from '../ErrorBoundary'

/* Main component with the form, image and card */

const PageForm = () => {
    const [isImage, setIsImage] = useState(false); //State to manage when form has been submitted
    const [key, setKey] = useState(0); //Key used to refresh component and image
    const [isOpen, setIsOpen] = useState(false); //State to manage modal

    return (
        <div className="container">
            {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>}
            <div className="row">
                <div className="col-6 p-3">
                    <UserForm isComplete={setIsImage} currentKey={key} updateKey={setKey} />
                </div>
                {isImage &&
                    <div className="col-6 p-3">
                        <ErrorBoundary > {/* Built in react feature to deal with exceptions */}
                            <Suspense fallback={<Spinner />}> {/* Built in react feature to manage loading times */}
                                <div className="row">
                                    <div className="col-12 p-3">
                                        <ImageLoader key={key} /> 
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 p-3">
                                        <button type="button" onClick={() => setKey(key + 1)}>Refuse</button> {/* Button to refresh component and image */}
                                    </div>
                                    <div className="col-6 p-3">
                                        <button type="button" onClick={() => setIsOpen(true)}>Accept</button> {/* Built to choose image and open modal */}
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
