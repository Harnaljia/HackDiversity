import DeleteButton from "./components/DeleteButton";
import EditButton from "./components/EditButton";
import { Link,useNavigate,useOutletContext} from "react-router-dom";
export default function ItemAndInfo({ nameCop, imageCop, ageCop, sexCop,id,examUser }) {
  const {user} = useOutletContext()
  const navigate = useNavigate()
  const handleClick=()=>navigate(`/exams/${id}`)

  return (
    <div className="infoplace">
      {/* <Link to={`/exams/${id}`} style={{none}}> */}
      <div className="contain" onClick={handleClick} style={{cursor:"pointer"}}>
        <img src={imageCop} alt={nameCop} id="pics" />
      </div>
      
      <div style={{display:"inline-block",cursor:"pointer"}}  onClick={handleClick}>
        <p className="specifInfo">{nameCop}</p>
        <p className="specifInfo1">{"Age: " + ageCop}</p>
        <p className="specifInfo2">{"Sex: " +sexCop}</p>

      </div>
      {/* </Link> */}
      <div style={{display:"flex", flexDirection:"row",alignSelf:"flex-start",justifyContent:"space-between "}}>
        {user?._id==examUser&&<EditButton fromExamsPage={true} examId={id}/>}
        {user?._id==examUser&&<DeleteButton fromExamsPage={true} examId={id} />}
      </div>
    </div>
  );
}
