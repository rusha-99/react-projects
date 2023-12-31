import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  const filterItems = (category) => {
    const newItems = items.filter((item) => {
      item.category === category
    })
    setMenuItems(newItems)
  }

  return (
    <section className="menu section">
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} />
      <Menu items={ menuItems} />

      {/* {items.map((menuItems) => {
        return (
          < Menu key={menuItems.id } {...menuItems} />
        )
      })} */}
    </section>
  )
}

export default App
