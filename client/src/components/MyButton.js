export default function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>click me {count}</button>
    );
  }
  