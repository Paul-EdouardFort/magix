import {useEffect,useState,useRef} from "react";
import { useNavigate } from "react-router";
export default function Index() {
  const navigate = useNavigate();
  useEffect(()=> {
    
  }, []); 
  const [loginForm,setLoginForm] = useState({
    username : "",
    password : ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("username",loginForm.username);
    formData.append("password",loginForm.password);
    fetch("/api/index.php", {
      method : "POST",
      body : formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (!data["error"])
        navigate("/lobby");
    })

  }
  return <div>
            <h1>Accueil</h1>
            <p>Hello!</p>
            <form onSubmit={handleSubmit}>
              <label>
                Username:
                <input type="text" value={loginForm.username} onChange={(e) => {setLoginForm ({...loginForm,username : e.target.value})}}/>
              </label>
              <label>
                Password:
                <input type="password" value={loginForm.password} onChange={(e) => {setLoginForm ({...loginForm,password : e.target.value})}} />
              </label>
              <button type="submit">Login</button>
            </form>
          </div> 
}
