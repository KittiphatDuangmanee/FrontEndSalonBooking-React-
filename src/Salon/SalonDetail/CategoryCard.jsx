const CategoryCard = ({handleCategoryClick, selectedCategory, item}) => {
  return (
    <div 
    onClick={() => handleCategoryClick(item)}
    className={`px-3 py-2 cursor-pointer flex gap-2 items-center rounded-md
     ${selectedCategory === item ?  "bg-green-500 text-white rounded-md" : ""}`}>
        <img 
            className="w-14 h-14 object-cover rounded-full"
            src="https://i.pinimg.com/736x/4f/dc/e2/4fdce25e5a9f3c2125bdedde4ae6fa45.jpg"
        />
        <h1>
            Bridal makup
        </h1>
    </div>
  )
}

export default CategoryCard