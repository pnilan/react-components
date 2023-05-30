const { useState } = React;

const App = () => (
  <>
  <h2>Grocery List</h2>
  <GroceryList items={['Bananas', 'Coffee Beans', 'Apples', 'Lumpia', 'La Croix']}/>
  </>
)

const GroceryList = ({ items }) => {

  return (
    <ul>
      {items.map((item) => (
        <GroceryListItem item={item} />
      ))}
    </ul>
  );
}

const GroceryListItem = ({ item }) => {

  const [isInFocus, setIsInFocus] = useState(false);

  const style = {
    fontWeight: isInFocus? 'bold' : 'normal',
  };

  const handleMouseOver = () => {
    console.log('enter')
    setIsInFocus(true);
  };

  const handleMouseLeave = () => {
    console.log('leave')
    setIsInFocus(false);
  };


  return (
    <li style={style} onMouseOver={() => handleMouseOver() } onMouseLeave={() => handleMouseLeave() }>{item}</li>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));