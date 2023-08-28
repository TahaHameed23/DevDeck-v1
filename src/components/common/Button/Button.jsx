export default function Button({ title, onClick }) {
    return (
      <button className=" bg-blue-500 text-white m-2 p-3 rounded-full hover:bg-blue-600" onClick={onClick}>
        {title}
      </button>
    );
  }