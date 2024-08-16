'use client'
import React from 'react';
import { fetchItems, Item } from '../inventory/useItems';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();



export default function InventoryManagement() {

    return (
        <QueryClientProvider client = {queryClient}>
        <main className="flex min-h-screen flex-col items-center justify-around p-24">
            <h1 className="text-4xl mb-8">Inventory Management System</h1>

            <div className="flex space-x-4 mb-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Add Item
                </button>
            </div>

            <InventoryTable />

        </main>
        </QueryClientProvider>
    );
}


function InventoryTable() {

    const { data: items, isLoading, isError } = useQuery<Item[]>('items', fetchItems); // load the items data 

    // if the data takes long to load let the user know
    if (isLoading) {
     return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error loading items.</div>
    }

    return (
    <table className="table-auto border-separate border-spacing-1">
        <thead>
            <tr className="bg-blue-500 text-white">
                <th className="p-2">Item_ID</th>
                <th className="p-2">SKU</th>
                <th className="p-2">Prod_Name</th>
                <th className="p-2">Category</th>
                <th className="p-2">Unit</th>
                <th className="p-2">Size</th>
                <th className="p-2">Par_level</th>
                <th className="p-2">Stock_on_hand</th>
                <th className="p-2">Threshold</th>
                <th className="p-2">Re-order</th>
                <th className="p-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            { items?.map((item: Item) => (
                <tr key={item.ID}>
                    <td className="p-2 text-right">{item.ID}</td>
                    <td className="p-2">{item.SKU}</td>
                    <td className="p-2">{item.Description}</td>
                    <td className="p-2">{item.Category}</td>
                    <td className="p-2">{item.Unit}</td>
                    <td className="p-2 text-right">{item.Size}</td>
                    <td className="p-2 text-right">{item.Par_level}</td>
                    <td className="p-2 text-right">{item.Stock_on_hand}</td>
                    <td className="p-2 text-right">{item.Threshold}</td>
                    <td className="p-2">{item.Re_order? 'Yes' : 'No'}</td>
                    <td className="p-2 flex space-x-2">
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">
                            Edit
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                            Remove
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
   
        
