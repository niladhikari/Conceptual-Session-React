import { useState } from "react";

export default function UseState() {
  const arrayOfObjects = [
    { name: "Alice", id: 1 },
    { name: "Bob", id: 2 },
    { name: "Charlie", id: 3 },
    { name: "David", id: 4 },
    { name: "Eva", id: 5 },
    { name: "Frank", id: 6 },
    { name: "Grace", id: 7 },
    { name: "Hannah", id: 8 },
    { name: "Isaac", id: 9 },
    { name: "Jack", id: 10 },
  ];

  const [data, setData] = useState(arrayOfObjects);
  const handleRemoveAll = ()=>{
    setData([]);
  }
 const handleRemove = (id)=>{
      console.log(id);
      const filterData = data.filter((item)=>item.id !== id);
      setData(filterData);
 }
  return (
    <div className="text-center text-3xl my-24">
      {data && data?.map((item,index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <button onClick={()=>handleRemove(item.id)}  className="btn btn-success">Remove</button>
        </div>
      ))}
      <button onClick={handleRemoveAll} className="btn btn-accent mt-4">Remove All</button>
    </div>
  );
}
