import { useForm } from "react-hook-form";

const UserForm = () => {
    const { register, watch, handleSubmit } = useForm({shouldUnregister: true});
    const selectTopic = watch("topic");
    const topics = ["Travel", "Cars", "Wildlife", "Technology", "Other"];
    const onSubmit = data => {return data};

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 p-3">
                    <h1>Form</h1> 
                </div>
            </div>
            <div className="row">
                <div className="col-12 p-3">
                    <form onSubmit={handleSubmit(onSubmit)} id="form">
                        <input {...register("name")} placeholder="Name*" id="name" className="form-control" type="text" required/>
                        <input {...register("surname")} placeholder="Surname*" id="surname" className="form-control" type="text" required/>
                        <select {...register("topic")} defaultValue="" id="topic" className="form-select" required>
                            <option value="" disabled hidden> Select your topic*</option>
                            {topics && topics.map((topic) => (<option value={topic} key={topic}>{topic}</option>))}
                        </select>
                        {selectTopic === 'Other' ? <input {...register("otherTopic")} placeholder="Topic*" id="otherTopic" className="form-control" type="text" required/>:null}
                        <input type="submit" id="submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserForm;
