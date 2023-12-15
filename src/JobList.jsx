export default function JobList() {
    return (
      <div className="app">
        <h1>GitHub Jobs</h1>
        <form className="add-form">
          <div>
            <h3>Job Description</h3>
              <input type="text" placeholder="Filter by title, benefits, companies, expertise" />
          </div>
          <div>
            <h3>Location</h3>
              <input type="text" placeholder="Filter by city, state, zip code, or country" />
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {' '}
              <h4>Full time only</h4>
            </label>
            <input type="text" placeholder="Search..." />
            {/* <button>Search</button> */}
          </div>
        </form>
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
  
  function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
  
  function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  
  function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  
  
  function FilterableProductTable({ products }) {
    return (
      <div>
        <ProductTable products={products} />
      </div>
    );
  }
  
  const PRODUCTS = [
    {category: "Job List", price: "Berlin", stocked: true, name: "Data Engineer"},
    {category: "Job List", price: "1 day ago", stocked: true, name: "Trade Public - Full Time"},
    {category: "Job List", price: "Wroclaw", stocked: true, name: "Software Engineer SFDC"},
    {category: "Job List", price: "1 day ago", stocked: true, name: "Align Technology Poland - Full Time"},
    {category: "Job List", price: "London", stocked: true, name: "Software Developer"},
    {category: "Job List", price: "1 day ago", stocked: true, name: "DNEG - Full Time"}
  ];
  