export default function MyButton({ count, onClick ,name}) {
    return (
      <button onClick={onClick}>{name} {count}</button>
    );
  }
  