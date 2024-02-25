import axios from 'axios'
import { LoaderFunction } from 'react-router-dom';

export async function loadCategories (){
    // const url = "https://5ffbed0e63ea2f0017bdb67d.mockapi.io/categories"
    const url = "https://5ffbed0e63ea2f0017bdb67d.mockapi.io/categories?sortBy=createdAt&order=desc"

    const res = await axios.get(url)



    return res.data

} 

