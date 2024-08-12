import { useQuery } from "react-query";

// data fetching function
const fetchItems = async () => {
    const response = await fetch('/items.json'); // fetch data from json file 'items'
    if (!response.ok) {
        throw new Error('There was an error loading the data.'); // handle error when fetching data
    }
    return response.json(); 
};

export const useItems = () => {
    return useQuery('items', fetchItems);
}