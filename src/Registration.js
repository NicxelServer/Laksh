import React, { useState } from "react";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signUp() {
        let item = { name, password, email };
        console.warn(item);

        let result = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result);
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Registration</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
            <br />
            <button onClick={signUp} className="btn btn-primary">Submit</button>
        </div>
    );
}

export default Registration;
