import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        let item = { email, password };
        console.warn(item);

        let result = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result);

        // Handle login success or failure
        if (result && result.success) {
            // Login successful, perform necessary actions
            alert("Login successful!");
            // Redirect or set user session
        } else {
            // Login failed, display error message
            alert("Invalid credentials. Please try again.");
        }
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Login</h1>
            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
            <br />
            <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
    );
}

export default Login;
