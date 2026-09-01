import { categories } from "../../data/categories";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <select
      className="category-filter"
      value={selectedCategory}
      onChange={setSelectedCategory}
    >
      <option value="">All categories</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
