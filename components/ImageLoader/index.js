import { useEffect, useState } from "react";
import { getPhotos } from "../../services/unsplash";
import { useImageContext } from "../../context/image";
import { useFormContext } from "../../context/form";
import { useLoadingContext } from "../../context/loading";
import ImageComponent from "../ImageComponent"

/* 
Component to save new image from unsplash to context
*/

const ImageLoader = () => {
    const [image, setImage] = useImageContext(); //Image context to access image through different components
    const [form, setForm] = useFormContext(); //Form context to access topic chosen
    const [isSubmitting, setIsSubmitting] = useLoadingContext(); //Loading context to manage loading button while data loads
    const [error, setError] = useState(false); //State to throw error in case of API failure

    useEffect(() => {
        const chooseTopic = () => {
            return form.topic === "Other" ? form.otherTopic : form.topic //Logic for topic when "other" option is selected
        }

        setImage() //remove current image for visual clarity
        const topic = chooseTopic() //topic chosen by the user
        getPhotos().getPhoto(topic).then((data) => { //New picture from unsplash library
            setImage(data)
            setIsSubmitting(false)
        }).catch(error => {
            setIsSubmitting(false)
            setError(true)
        });
    }, [setImage, setIsSubmitting, form]);

    const createError = () => { throw new Error(`error`) } //Throw error when API request fails

    return (
        error ? createError() : <ImageComponent type="full"/>
    );
};

export default ImageLoader;
