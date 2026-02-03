import { useState } from "react";

const Form = () => {

    const [name, setName] = useState("");
    const [error, setError] = useState(false);

    const  validateInput = (e) => {

        e.preventDefault();

        if (name === "") {

           setError(true);

           return

        }

        setError(false);

        console.log("Form submitted:", name);
    };

    return(

        <form onSubmit={validateInput}>
            {error? <p className="error">You must type required info</p> : null }

            <h3>{name}</h3>
            <div className="form-elements">
                <input className="form-in" onChange={(event) => setName(event.target.value)} name="Name"/>
                <button type="submit">Send</button>
            </div>
        </form>

    );
};

export default Form;