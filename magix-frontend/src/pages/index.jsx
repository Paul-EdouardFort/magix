import {useEffect,useState,useRef} from "react";
export default function Index() {
  useEffect(()=> {
    fetch("/api/index.php", {})
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }, []); 
  return  <>
            Hello!
          </>
}
