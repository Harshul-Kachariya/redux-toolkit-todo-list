import InputBox from "./InputBox";
import List from "./List";

function App() {
  return (
    <>
      <div className="overflow-x-auto w-screen">
        <h1 className="text-black text-3xl font-bold mb-4">Todo List</h1>
        <InputBox />
        <List />
      </div>
    </>
  );
}

export default App;
