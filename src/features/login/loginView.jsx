import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "./firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './loginView.css';
import { Footer } from "../../core/components/footer/footer";

const LoginView = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const clearError = () => {
        setError("");
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/inicio');
        } catch (error) {
            console.error("Submit Login.jsx " + error);
            setError(true);
            setTimeout(clearError, 3000);
        }
    };

    return (
        <div className="login-body">
            <div className="container-login">
                <div className="form-container sign-in-container">
                    <form className="form-login" onSubmit={submit}>
                        <h1 className="h1-login">Iniciar Sesión</h1>
                        <div className="email">
                            <input
                                className="input-login"
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                placeholder="Email"
                                autoComplete="current-email"
                            />
                        </div>
                        <div className="password">
                            <input
                                className="input-login"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password"
                                autoComplete="current-password"
                            />
                            <button
                                className="eye-password"
                                onClick={togglePasswordVisibility}
                                tabIndex="-1"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {
                            error && (
                                <span className="error">Informacion de Sesion Incorrecta.</span>
                            )
                        }
                        <button className="button-login" type="submit">
                            Ingresar
                        </button>
                    </form>
                </div>
               
            </div>
        
        </div>
    );
};

export default LoginView;
