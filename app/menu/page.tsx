export default function Menu() {
  return (
    <div className="container">
      <header>
        <h1>Our Menu</h1>
        <p>Explore our delicious dishes, crafted with fresh ingredients!</p>
      </header>

      <section className="menu-category">
        <h2>Starters</h2>
        <div className="menu-item">
          <div className="item-name">
            <h3>Spring Rolls</h3>
            <span className="item-price">$5.99</span>
          </div>
          <p className="item-description">Crispy rolls stuffed with mixed vegetables and served with sweet chili sauce.</p>
        </div>
        
        <div className="menu-item">
          <div className="item-name">
            <h3>Garlic Bread</h3>
            <span className="item-price">$3.99</span>
          </div>
          <p className="item-description">Toasted bread with garlic butter and a sprinkle of herbs.</p>
        </div>

        <div className="menu-item">
          <div className="item-name">
            <h3>Bruschetta</h3>
            <span className="item-price">$4.49</span>
          </div>
          <p className="item-description">Grilled bread topped with diced tomatoes, basil, and balsamic glaze.</p>
        </div>
      </section>

      <section className="menu-category">
        <h2>Main Courses</h2>
        <div className="menu-item">
          <div className="item-name">
            <h3>Grilled Chicken</h3>
            <span className="item-price">$12.99</span>
          </div>
          <p className="item-description">Juicy grilled chicken breast served with a side of mashed potatoes and seasonal veggies.</p>
        </div>

        <div className="menu-item">
          <div className="item-name">
            <h3>Vegetarian Pizza</h3>
            <span className="item-price">$10.99</span>
          </div>
          <p className="item-description">Fresh veggies, mozzarella, and a zesty tomato sauce on a crisp thin crust.</p>
        </div>

        <div className="menu-item">
          <div className="item-name">
            <h3>Pasta Primavera</h3>
            <span className="item-price">$11.49</span>
          </div>
          <p className="item-description">Pasta with a medley of fresh vegetables and a light garlic cream sauce.</p>
        </div>
      </section>

      <section className="menu-category">
        <h2>Desserts</h2>
        <div className="menu-item">
          <div className="item-name">
            <h3>Chocolate Cake</h3>
            <span className="item-price">$4.99</span>
          </div>
          <p className="item-description">Rich and moist chocolate cake topped with a smooth chocolate ganache.</p>
        </div>

        <div className="menu-item">
          <div className="item-name">
            <h3>Tiramisu</h3>
            <span className="item-price">$5.49</span>
          </div>
          <p className="item-description">Classic Italian dessert made with coffee-soaked ladyfingers and mascarpone cream.</p>
        </div>

        <div className="menu-item">
          <div className="item-name">
            <h3>Cheesecake</h3>
            <span className="item-price">$5.99</span>
          </div>
          <p className="item-description">Creamy cheesecake with a buttery graham cracker crust, topped with berry compote.</p>
        </div>
      </section>
    </div>
  );
}