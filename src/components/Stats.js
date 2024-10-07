export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        {" "}
        <em>Start adding item on your packing list</em>
      </p>
    );
  const numItems = items.length;
  //why we need to use .filter?
  //because we want to get the number of items that are packed
  //if we don't use .filter, we will get the number of items that are not packed
  const numPacked = items.filter((item) => item.packed).length;
  //Math.round is used to round the number to the nearest integer
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go`
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
