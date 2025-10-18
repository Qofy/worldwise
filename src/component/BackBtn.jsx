import Buttons from "./Buttons"
import { useNavigate } from "react-router-dom";


export default function BackBtn(){
  const navigate = useNavigate()

  return  <Buttons type="back" onclick={(e)=>{
          e.preventDefault()
          navigate(-1)
        }}>&larr; Back</Buttons>
}