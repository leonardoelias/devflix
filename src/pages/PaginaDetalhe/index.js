import { useParams } from 'react-router-dom';

export function PaginaDetalhe() {
  const params = useParams()

 return (
   <div style={{ textAlign: 'center'}}>
     <h1>Pagina de detalhe do filme {params.id}</h1>

   </div>
 ) 
}