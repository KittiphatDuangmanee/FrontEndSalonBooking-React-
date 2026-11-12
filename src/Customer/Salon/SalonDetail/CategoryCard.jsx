const CategoryCard = ({handleCategoryClick, selectedCategory, item}) => {
  return (
    <div 
    onClick={() => handleCategoryClick(item.id)}
    className={`px-3 py-2 cursor-pointer flex gap-2 items-center rounded-md
     ${selectedCategory === item.id ?  "bg-green-500 text-white rounded-md" : ""}`}>
        <img 
            className="w-14 h-14 object-cover rounded-full"
            src={item.image}
        />
        <h1>
            {item.name}
        </h1>
    </div>
  )
}

export default CategoryCard