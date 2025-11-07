import { Link, useNavigate } from "react-router-dom";

export default function Error(){

  const navigate = useNavigate();

  return(
    <main>
        <h1>Error 404 - NotFound</h1>
        <div>
          <Link to="/">Voltar para o início</Link> -
          <Link to="#" onClick={()=> navigate(-1)}>Voltar</Link>
        </div>
    </main>
  )
}