import Myhooks from './hooks/Myhooks';

const categoryName = "men's clothing";

function App() {
  const categoryData = Myhooks(categoryName);
  
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Data fetch from Api</h1>
      
      {categoryData.map((product) => (
        <div key={product.id} className="border p-4 mb-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="font-bold mt-2">Price: ${product.price}</p>
        </div>
      ))}
      
    </>
  );
}
export default App;