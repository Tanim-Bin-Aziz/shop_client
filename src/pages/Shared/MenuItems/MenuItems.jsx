const MenuItems = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-2xl flex mb-6">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p>{recipe}</p>
        <p className="text-xl font-bold">${price}</p>
      </div>
    </div>
  );
};

export default MenuItems;
