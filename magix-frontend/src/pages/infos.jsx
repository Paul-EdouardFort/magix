import {useEffect,useState,useRef} from "react";
import Button from "../components/button";
import { useNavigate } from "react-router";
export default function Infos() {
    const [key, setKey] = useState(null);
     const navigate = useNavigate();
    const chatRef = useRef(null);
    const [newNoteForm,setNewNoteForm] = useState({
    sujet : "",
    description : ""
  })
    const [notes,setNotes] = useState(null);
    useEffect(() => {
        fetchNotes();
    }, [])
    const fetchNotes = () => {
        fetch("/api/infos.php", {
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (!data["authorized"])
                navigate("/");
            setKey(data["key"]);
            console.log(data);
             setNotes(data["data"]["notes"])
        })
    }
    
    const handleBack = () => {
        navigate("/lobby")
    }
   const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("sujet",newNoteForm.sujet);
    formData.append("description",newNoteForm.description);
    fetch("/api/infosInsert.php", {
      method : "POST",
      body : formData
    })
    .then(response => response.json())
    .then(data => {
       fetchNotes();
        setNewNoteForm({
            sujet: "",
            description: ""
         });
    })

  }
   const handleDelete = (id) => {
    console.log(id)
    let formData = new FormData();
    formData.append("id",id);
    fetch("/api/infosDelete.php", {
      method : "POST",
      body : formData
    })
    .then(response => response.json())
    .then(data => {
       fetchNotes();
    })
    }
    
    return <div className="w-screen min-h-screen h-full bg-black flex ">  
    <div className="flex flex-col w-[10%]">
    <Button text="Retour" onClick={handleBack} className=" h-[20vh] w-full bg-stone-500"></Button>
    </div>
    <div className="flex flex-col w-[90%] h-screen ">
    
    
             {notes ? (<div className="flex flex-col flex-wrap h-[70%] w-full text-yellow-500 gap-2">{notes.map(note => {
                                             return < div className="w-[33%] h-fit bg-stone-900 border">
                                             <div>{note[1]}
                                                <input type="text" value={note[2]}></input>
                                                <input type="text" value={note[3]}></input>
                                            </div>
                                            <div className="flex justify-between">
                                                <Button text="Update"  onClick={() => handleDelete(note[0])} className=" h-[5vh] w-[20%] bg-stone-500"></Button>
                                                <Button text="Delete"  onClick={() => handleDelete(note[0])} className=" h-[vh] w-[20%] bg-stone-500"></Button>
                                             </div>
                                             </div>})}
                                </div>) : (<div/>)}
        <form className="bg-stone-500 border border-black h-[30%] w-[100%] text-yellow-300 flex flex-col justify-between items-center py-[1%] " onSubmit={handleSubmit}>
              <label>
                Sujet :&nbsp;
                <input className="px-[5px] bg-stone-700" type="text" value={newNoteForm.sujet} onChange={(e) => {setNewNoteForm ({...newNoteForm,sujet : e.target.value})}}/>
              </label>
             
              <label>
                Description :&nbsp;   
                <input className="px-[5px] bg-stone-700" type="text" value={newNoteForm.description} onChange={(e) => {setNewNoteForm ({...newNoteForm,description : e.target.value})}} />
              </label>

              <button className="border border-black bg-stone-700 p-[10px]" type="submit">Enregistrer</button>
             
              
            </form>
          </div> 
    </div>
}
