import {useEffect,useState,useRef} from "react";
import { useNavigate } from "react-router";
export default function Index() {
  const navigate = useNavigate();
  const [userName,setUserName] = useState(null);
  const [error, setError] = useState(null);
 
  useEffect(()=> {
     let savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        setUserName(savedUsername);
      }
      console.log(userName)
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
      if (!data["error"]){
        localStorage.setItem("username",loginForm.username);
        navigate("/lobby");
      }
      else setError("Invalid username or password")
    })

  }
  return <div className=" h-screen w-screen bg-contain bg-black bg-no-repeat bg-center bg-[url(/img/Login_background.png)] flex justify-center items-center">
            <form className="bg-stone-500 border border-black h-[30%] w-[30%] text-yellow-300 flex flex-col justify-between items-center py-[1%] " onSubmit={handleSubmit}>
              <label className="flex justify-center items-center gap-5">
                <p>Username :</p>
                <input className="px-[5px] bg-stone-700" type="text" value={loginForm.username} onChange={(e) => {setLoginForm ({...loginForm,username : e.target.value})}}/>
              </label>
             
              <label className="flex justify-center items-center gap-5">
                <p>Password :</p>  
                <input className="px-[5px] bg-stone-700" type="password" value={loginForm.password} onChange={(e) => {setLoginForm ({...loginForm,password : e.target.value})}} />
              </label>
               {error ? (<div>
                  <p className="text-red-500 text-40 bg-white p-[10px]">{error}</p>
              </div> ): (<div className="absolute w-0 h-0"></div>)}
              <button className="border border-black bg-stone-700 p-[10px]" type="submit">Login</button>
            </form>
          </div> 
}
