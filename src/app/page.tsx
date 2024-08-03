import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500 p-4">
      <h1 className="text-4xl font-bold mb-6">Home</h1>

      <div className="mt-4 p-4 bg-white shadow rounded-lg text-black">
        Landing page
      </div>
      <div className="mt-4 p-4 bg-white shadow rounded-lg text-black">
        Hot Reloading
      </div>
      
    </div>
  );
}