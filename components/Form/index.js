import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/form";
import { useLoadingContext } from "../../context/loading";
import ButtonWithSpinner from "../ButtonWithSpinner";
import FormStyle from '@/styles/Form.module.css'
/* 
Documentation for integration with react form: https://react-hook-form.com/advanced-usage/  
*/

const UserForm = (props) => {
    const { register, watch, handleSubmit } = useForm({ shouldUnregister: true }); //Unregister removes other topic when disabled
    const [form, setForm] = useFormContext(); //Form context to access form data in other components
    const [isSubmitting, setIsSubmitting] = useLoadingContext(); //Loading context to manage loading button once form is submitted
    const selectTopic = watch("topic"); //Watch function from react form, adds a listener to a specific element
    const topics = ["Travel", "Cars", "Wildlife", "Technology", "Other"]; //Selectable topics

    const onSubmit = async (values) => {
        setIsSubmitting(true) //Starts loading button animation
        setForm(values) //Registers form values in context
        props.isComplete(true) //Gives information to main component that form was submitted
        props.updateKey(props.currentKey+1) //Triggers remount of image component when form is submitted
    };

    return (
        <div className={`container ${FormStyle.background}`}>
            <div className={`row justify-content-center ${FormStyle.formRow}`}>
                <div className="col-7 p-3 align-self-center">
                    <form onSubmit={handleSubmit(onSubmit)} id="form" className={FormStyle.form}>
                        <input {...register("name")} placeholder="Name*" id="name" className={`form-control ${FormStyle.input}`} type="text" required />
                        <input {...register("surname")} placeholder="Surname*" id="surname" className={`form-control ${FormStyle.input}`} type="text" required />
                        <select {...register("topic")} defaultValue="" id="topic" className={`form-control ${FormStyle.input}`} required>
                            <option value="" disabled hidden> Select your topic*</option>
                            {topics && topics.map((topic) => (<option value={topic} key={topic}>{topic}</option>))}
                        </select>
                        {selectTopic === 'Other' ? <input {...register("otherTopic")} placeholder="Topic*" id="otherTopic" type="text" className={`form-control ${FormStyle.input}`} required /> : null}
                        <ButtonWithSpinner text="Submit" className={FormStyle.submit}  isSubmitting={isSubmitting} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
