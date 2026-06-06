import { useParams } from 'react-router-dom';

export function User(){
  const { id } = useParams();
  return (
    <h1>user ID : {id}</h1>
  );
}