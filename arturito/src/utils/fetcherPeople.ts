import axios from "axios";

const people = 'https://swapi.dev/api/people/'

export const swGet1 = ( ) =>
 axios.get( 'https://swapi.dev/api/people/' ).then((res) => res.data);