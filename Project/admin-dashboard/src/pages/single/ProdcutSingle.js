import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import EditModal from "../../components/editModal/EditModal";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";

const productFields = [
  {
    id: "title",
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: "description",
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  { id: "category", label: "Category", type: "text", placeholder: "Computers" },
  { id: "price", label: "Price", type: "text", placeholder: "2000" },
  { id: "stock", label: "Stock", type: "text", placeholder: "in stock" },
];

function ProductSingle() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [productId]);

  const handleSave = async (updatedData) => {
    try {
      await updateDoc(doc(db, "products", productId), updatedData);
      setProduct(updatedData);
      setEditOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton" onClick={() => setEditOpen(true)}>
              Edit
            </div>
            <h1 className="title">Product Information</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{product.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">
                    {product.description || "N/A"}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Category:</span>
                  <span className="itemValue">{product.category || "N/A"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">R{product.price || "N/A"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Stock:</span>
                  <span className="itemValue">{product.stock || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Product Sales (Last 6 Months)" />
          </div>
        </div>
      </div>

      {editOpen && (
        <EditModal
          fields={productFields}
          data={product}
          onSave={handleSave}
          onClose={() => setEditOpen(false)}
        />
      )}
    </div>
  );
}

export default ProductSingle;
