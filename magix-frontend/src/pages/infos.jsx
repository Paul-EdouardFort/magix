import {useEffect,useState,useRef} from "react";
import Button from "../components/button";
import { useNavigate } from "react-router";
export default function Infos() {
    const [key, setKey] = useState(null);
     const navigate = useNavigate();
    const chatRef = useRef(null);
    const [updatingId, setUpdatingId] = useState(null);
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
    if(updatingId != null){
      formData.append("updatingId", updatingId);
      console.log("test")
    }
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
        setUpdatingId(null)
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

    const handleUpdate = (id, sujet, description) => {
      if (updatingId == id){
        setUpdatingId(null);
        setNewNoteForm({
          sujet: "",
          description: ""
        });
      }
      else {
        setUpdatingId(id);
        setNewNoteForm({
          sujet: sujet,
          description: description
        });
      }

    }
    
    return <div className="w-screen min-h-screen h-full bg-black flex ">  
    <div className="flex flex-col w-[10%]">
    <Button text="Retour" onClick={handleBack} className=" h-[20vh] w-full bg-stone-500"></Button>
    </div>
    <div className="flex flex-col w-[90%] h-screen overflow-hidden ">
    
    
             {notes ? (<div className="flex flex-wrap h-[70%] w-full text-yellow-500 gap-x-2 gap-y-5 mx-2 overflow-y-auto overflow-x-none">{notes.map(note => {
                                             return < div className="w-[32%] h-fit bg-stone-900 border flex flex-col ">
                                             <div>
                                              <div className="flex justify-between p-2">
                                              <p>{note[1]}</p>
                                                <p>{note[2]}</p>
                                                </div>
                                                <p className="m-5 text-justify text-wrap wrap-break-word">{note[3]}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <Button text="Update"  onClick={() => handleUpdate(note[0],note[2],note[3])} className=" h-[5vh] w-[20%] bg-stone-500"></Button>
                                                <Button text="Delete"  onClick={() => handleDelete(note[0])} className=" h-[vh] w-[20%] bg-stone-500"></Button>
                                             </div>
                                             </div>})}
                                </div>) : (<div/>)}
        <form className="bg-stone-500 border border-black h-[30%] w-[100%] text-yellow-300 flex flex-col justify-between items-center py-[1%] " onSubmit={handleSubmit}>
              <label className="flex justify-center items-center gap-5">
                <p>Sujet :</p>
                <input className="px-[5px] bg-stone-700" type="text" value={newNoteForm.sujet} onChange={(e) => {setNewNoteForm ({...newNoteForm,sujet : e.target.value})}}/>
              </label>
             
              <label className="flex justify-center items-center gap-5">
                <p>Description :&nbsp; </p>  
                <textarea className="px-[5px] bg-stone-700 resize-none" rows="4" cols="50" type="text" value={newNoteForm.description} onChange={(e) => {setNewNoteForm ({...newNoteForm,description : e.target.value})}} />
              </label>
              {updatingId ? (<button className="border border-black bg-stone-700 p-[10px]" type="submit">Update</button>) : (<button className="border border-black bg-stone-700 p-[10px]" type="submit">Enregistrer</button>)}
              
             
              
            </form>
          </div> 
    </div>
}
