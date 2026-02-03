
import { useState } from "react";

const FormAct2 = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    return(
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input className="form-in"
                 type="text"
                 name="name"
                 onChange={(e) => setName(e.target.value)}
                 value={name}
                 />
            </div>

            <div>
                <label htmlFor="surname">Surname</label>
                <input className="form-in"
                type="text"
                name="surname"
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
                />
            </div>

            <div>
                <label htmlFor="age">Age</label>
                <input className="form-in"
                type="number"
                name="age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                />
            </div>
            
            <div>
                <label htmlFor="email">Email</label>
                <input className="form-in"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </div>
            <button type="submit">Send</button>

        </form>

    );
};

export default FormAct2;