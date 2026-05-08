import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const backendUrl = "https://holly-zolly-cvjd.onrender.com";

export default function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    status: "Active",
    image: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 FETCH CATEGORY BY ID
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/category/${id}`);
        const data = response.data?.data || response.data;

        if (!data) {
          throw new Error("Category not found");
        }

        setForm({
          name: data.name || "",
          status: data.status || "Active",
          image: data.image || null,
        });
      } catch (err) {
        console.error("Error fetching category:", err);
        setError("Failed to load category");
        navigate("/admin/categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id, navigate]);

  // 🔹 INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // 🔹 IMAGE CHANGE
  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  // 🔹 UPDATE CATEGORY
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("status", form.status);
      if (form.image && typeof form.image !== "string") {
        formData.append("image", form.image);
      }

      const response = await axios.put(`${backendUrl}/api/category/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        navigate("/admin/categories");
      } else {
        throw new Error(response.data.message || "Failed to update category");
      }
    } catch (err) {
      console.error("Error updating category:", err);
      setError(err.message || "Failed to update category");
    }
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="bg-white p-6 rounded shadow ">
      <h2 className="text-2xl font-heading font-bold mb-6 text-primary">
        Edit Category
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* IMAGE */}
        <div>
          <label className="font-semibold block mb-1">
            Category Image
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full border px-4 py-2 rounded"
          />
          {form.image && (
            <img
              src={typeof form.image === "string" ? form.image : URL.createObjectURL(form.image)}
              alt="Category"
              className="h-20 mt-2 rounded"
            />
          )}
        </div>

        {/* NAME */}
        <div>
          <label className="font-semibold block mb-1">
            Category Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>


        {/* STATUS */}
        <div>
          <label className="font-semibold block mb-1">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => navigate("/admin/categories")}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 py-2 bg-primary text-white rounded"
          >
            Update Category
          </button>
        </div>
      </form>
    </div>
  );
}
