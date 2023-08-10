import React from 'react';
import CategoryCard from './CategoryCard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
        {/* add link to each of these */}
        {/* <CategoryCard id="potions" categoryData={categories[0]} />
        <CategoryCard id="charms" categoryData={categories[1]} /> */}

      {categories.map(category => {
        return (
          <Link key={category.id} to={`/wiki/${category.name.toLowerCase()}`}>
            <CategoryCard categoryData={category} />
          </Link>
        )
        })}
    </div>
  );
}

export default CategoryList;
