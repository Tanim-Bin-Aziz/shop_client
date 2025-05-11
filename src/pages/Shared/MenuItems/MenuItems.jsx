const MenuItems = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default MenuItems;
