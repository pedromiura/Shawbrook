import Image from 'next/image'
import { useImageContext } from "../../context/image";

const ImageComponent = (props) => {
    const [image, setImage] = useImageContext(); //Image context to access image without prop drilling

    const myLoader = () => { //logic through props to decide between full image or thumbnail
        if(props.type === "full") {
            return image.urls.full
        } else {
            return image.urls.thumb
        }
      }

    return (
        <div>
            {image && <Image //Native Image component from NextJS 
                loader={myLoader}  //Loader for the image from unsplash
                src="me.png"
                alt={image.alt_description} //Image description for impaired users
                width={props.width}
                height={props.height}
                priority //Priority loading instead of default lazy loading
                //onLoadingComplete={setIsSubmitting(false)}   Issue updating button state after image loads
            />
            }
        </div>
    );
};

export default ImageComponent;
