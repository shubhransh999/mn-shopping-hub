export default function MNShoppingHub() { const categories = ['Mobiles', 'Fashion', 'Electronics', 'Home', 'Beauty', 'Grocery', 'Appliances', 'Toys']; const products = [ { id: 1, name: 'iPhone 13', price: '₹49,999', oldPrice: '₹59,999', offer: '17% off', img: 'https://via.placeholder.com/300' }, { id: 2, name: 'Nike Shoes', price: '₹2,999', oldPrice: '₹4,999', offer: '40% off', img: 'https://via.placeholder.com/300' }, { id: 3, name: 'Smart TV 43 inch', price: '₹24,999', oldPrice: '₹31,999', offer: '22% off', img: 'https://via.placeholder.com/300' }, { id: 4, name: 'Bluetooth Earbuds', price: '₹1,499', oldPrice: '₹2,999', offer: '50% off', img: 'https://via.placeholder.com/300' }, ];

const paymentMethods = ['UPI', 'Credit Card', 'Debit Card', 'Net Banking', 'Cash on Delivery', 'Wallet', 'EMI'];

return ( <div className="min-h-screen bg-gray-100"> <header className="bg-blue-600 text-white p-4 shadow-lg"> <h1 className="text-3xl font-bold text-center">MN Shopping Hub</h1> <div className="mt-3 max-w-2xl mx-auto"> <input className="w-full p-3 rounded-xl text-black" placeholder="Search for products, brands and more" /> </div> <div className="flex justify-center gap-3 mt-3"> <button className="bg-white text-blue-600 px-4 py-2 rounded-xl">Login</button> <button className="bg-white text-blue-600 px-4 py-2 rounded-xl">Signup</button> <button className="bg-white text-blue-600 px-4 py-2 rounded-xl">Wishlist ❤️</button> <button className="bg-white text-blue-600 px-4 py-2 rounded-xl">Cart 🛒</button> </div> </header>

<div className=\"bg-white p-4 flex flex-wrap gap-3 justify-center shadow\">
    {categories.map((cat) => (
      <button key={cat} className=\"px-4 py-2 rounded-xl bg-gray-100\">{cat}</button>
    ))}
  </div>

  <section className=\"p-6\">
    <div className=\"bg-yellow-200 rounded-2xl p-6 mb-6 text-center text-2xl font-bold\">Mega Sale - Up to 70% OFF</div>
    <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6\">
      {products.map((product) => (
        <div key={product.id} className=\"bg-white rounded-2xl shadow-md p-4\">
          <img src={product.img} alt={product.name} className=\"w-full rounded-xl mb-3\" />
          <h3 className=\"text-lg font-medium\">{product.name}</h3>
          <p><span className=\"font-bold\">{product.price}</span> <span className=\"line-through text-gray-500\">{product.oldPrice}</span></p>
          <p className=\"text-sm text-green-600\">{product.offer}</p>
          <button className=\"mt-3 w-full bg-blue-600 text-white py-2 rounded-xl\">Add to Cart</button>
          <button className=\"mt-2 w-full bg-orange-500 text-white py-2 rounded-xl\">Buy Now</button>
        </div>
      ))}
    </div>
  </section>

  <section className=\"p-6\">
    <h2 className=\"text-2xl font-semibold mb-3\">Checkout & Payment</h2>
    <div className=\"bg-white rounded-2xl shadow p-4\">
      <input className=\"w-full p-3 border rounded-xl mb-3\" placeholder=\"Enter delivery address\" />
      <input className=\"w-full p-3 border rounded-xl mb-3\" placeholder=\"Enter phone number\" />
      <div className=\"flex flex-wrap gap-3\">
        {paymentMethods.map((method) => (
          <span key={method} className=\"bg-gray-100 px-4 py-2 rounded-xl shadow\">{method}</span>
        ))}
      </div>
      <button className=\"mt-4 w-full bg-green-600 text-white py-3 rounded-xl\">Place Order</button>
    </div>
  </section>

  <section className=\"p-6\">
    <h2 className=\"text-2xl font-semibold mb-3\">Order Tracking</h2>
    <div className=\"bg-white rounded-2xl shadow p-4\">
      <p>Order ID: #MN12345</p>
      <p>Status: Shipped 🚚</p>
      <p>Expected Delivery: 2 Days</p>
    </div>
  </section>

  <section className=\"p-6\">
    <h2 className=\"text-2xl font-semibold mb-3\">Founder Dashboard</h2>
    <div className=\"grid grid-cols-1 md:grid-cols-3 gap-4\">
      <div className=\"bg-white rounded-2xl shadow p-4\"><h3 className=\"font-bold\">Today's Orders</h3><p className=\"text-2xl\">128</p></div>
      <div className=\"bg-white rounded-2xl shadow p-4\"><h3 className=\"font-bold\">Revenue</h3><p className=\"text-2xl\">₹1,24,500</p></div>
      <div className=\"bg-white rounded-2xl shadow p-4\"><h3 className=\"font-bold\">Profit</h3><p className=\"text-2xl\">₹28,900</p></div>
    </div>
  </section>

  <section className=\"p-6\">
    <h2 className=\"text-2xl font-semibold mb-3\">Seller Panel</h2>
    <div className=\"bg-white rounded-2xl shadow p-4\">
      <input className=\"w-full p-3 border rounded-xl mb-3\" placeholder=\"Add new product name\" />
      <input className=\"w-full p-3 border rounded-xl mb-3\" placeholder=\"Enter price\" />
      <button className=\"w-full bg-purple-600 text-white py-3 rounded-xl\">Upload Product</button>
    </div>
  </section>

  <section className=\"p-6\">
    <div className=\"bg-red-100 rounded-2xl p-4 text-center font-bold\">🔥 Live Order: Someone from Delhi just bought iPhone 13</div>
  </section>
</div>

); }
