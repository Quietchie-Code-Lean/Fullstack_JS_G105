
import { useState } from "react";

const FormAct2 = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    function validateData(e){
        e.preventDefault()

        if(!name.trim() || !surname.trim() ||!age.trim() || !email.trim()){
            /* alert('All data is required'); */
            setError(true)
            return;
        }
        setError(false);
        setName('');
        setSurname('');
        setAge('');
        setEmail('');
    }

    return(
        <form className="baseForm" onSubmit={validateData}>

            {error? <p className="error">All fields are required!</p> : null }

            <div className="input-container">
                <label htmlFor="name">Name</label>
                <input className="form-in"
                 type="text"
                 name="name"
                 onChange={(e) => setName(e.target.value)}
                 value={name}
                 />
            </div>

            <div className="input-container">
                <label htmlFor="surname">Surname</label>
                <input className="form-in"
                type="text"
                name="surname"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
                />
            </div>

            <div className="input-container">
                <label htmlFor="age">Age</label>
                <input className="form-in"
                type="number"
                name="age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                />
            </div>
            
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input className="form-in"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </div>
            <br />
            <button type="submit">Send</button>
            <br />
            <div className="dataUser">
                <h3>User Data</h3>
                <ul>
                    <li>User Name:{name}</li>
                    <li>User Surname:{surname}</li>
                    <li>User Age:{age}</li>
                    <li>User Email:{email}</li>
                </ul>
            </div>


        </form>

    );
};

export default FormAct2;