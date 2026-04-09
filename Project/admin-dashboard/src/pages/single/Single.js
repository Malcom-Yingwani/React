import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import EditModal from "../../components/editModal/EditModal";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { getColorFromId } from "../../utils/avatar";

const userFields = [
  { id: "username", label: "Username", type: "text", placeholder: "john_doe" },
  {
    id: "displayName",
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
  },
  { id: "email", label: "Email", type: "email", placeholder: "john@gmail.com" },
  { id: "phone", label: "Phone", type: "text", placeholder: "+1 234 567 89" },
  { id: "address", label: "Address", type: "text", placeholder: "123 Main St" },
  { id: "country", label: "Country", type: "text", placeholder: "USA" },
];

function Single() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser(docSnap.data());
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchUser();
  }, [userId]);

  const handleSave = async (updatedData) => {
    try {
      await updateDoc(doc(db, "users", userId), updatedData);
      setUser(updatedData);
      setEditOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found.</div>;

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
            <h1 className="title">Information</h1>
            <div className="item">
              <div
                className="itemImg"
                style={{
                  backgroundColor: getColorFromId(userId),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "#fff",
                  borderRadius: "50%",
                  textTransform: "uppercase",
                }}
              >
                {(user.username || user.displayName || "?")[0]}
              </div>
              <div className="details">
                <h1 className="itemTitle">
                  {user.displayName || user.username}
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.phone || "N/A"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{user.address || "N/A"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{user.country || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>

      {editOpen && (
        <EditModal
          fields={userFields}
          data={user}
          onSave={handleSave}
          onClose={() => setEditOpen(false)}
        />
      )}
    </div>
  );
}

export default Single;
