import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import blogsJson from '../data/blogs.json';
import { toast } from 'react-toastify';
import { deleteBlog, editBlog } from '../features/blogSlice';

const Blogs = () => {
  const reduxBlogs = useSelector((state) => state.blogs);
  const [allBlogs, setAllBlogs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ title: '', tags: '', description: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    setAllBlogs([...reduxBlogs, ...blogsJson]);
  }, [reduxBlogs]);

const handleDelete = (index) => {
  const updatedBlogs = [];
  for (let i = 0; i < allBlogs.length; i++) {
    if (i !== index) {
      updatedBlogs.push(allBlogs[i]);
    }
  }
  setAllBlogs(updatedBlogs);
  if (index < reduxBlogs.length) {
    dispatch(deleteBlog(index));
  }
  toast.success("Blog deleted successfully!");
};

  const startEdit = (index) => {
    setEditIndex(index);
    setEditData({
      title: allBlogs[index].title,
      tags: allBlogs[index].tags,
      description: allBlogs[index].description,
    });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    const updatedBlog = {
      title: editData.title,
      tags: editData.tags,
      description: editData.description,
    };

    if (editIndex < reduxBlogs.length) {
      dispatch(editBlog({ index: editIndex, updatedBlog }));
    } else {
      const updatedBlogs = [...allBlogs];
      updatedBlogs[editIndex] = { ...updatedBlogs[editIndex], ...updatedBlog };
      setAllBlogs(updatedBlogs);
    }

    toast.success('Blog post edited successfully!');
    setEditIndex(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-emerald-900">All Blog Posts</h2>
      {allBlogs.length === 0 ? (
        <p className="text-gray-500">No blog posts available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBlogs.map((blog, index) => (
            <div key={index} className="border shadow-md rounded overflow-hidden bg-white flex flex-col">
              {blog.image && (
                <img
                  src={blog.image}
                  alt="Blog"
                  className="bg-gray-200 w-full h-48 object-contain p-2"
                />
              )}
              <div className="p-4 flex flex-col justify-between flex-grow">
                {editIndex === index ? (
                  <>
                    <input name="title" value={editData.title} onChange={handleEditChange} className="border rounded p-1 w-full mb-2" />
                    <input name="tags" value={editData.tags} onChange={handleEditChange} className="border rounded p-1 w-full mb-2" />
                    <textarea name="description" value={editData.description} onChange={handleEditChange} className="border rounded p-1 w-full mb-2" />
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-emerald-800">{blog.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">Tags: {blog.tags}</p>
                    <p className="text-gray-700">{blog.description}</p>
                  </>
                )}
                <p className="text-sm text-gray-600 mt-2">Date: {blog.date}</p>
              </div>
              <div className="flex justify-end gap-2 p-3">
                {editIndex === index ? (
                  <button onClick={saveEdit} className="bg-blue-500 text-white text-sm py-1 px-3 rounded hover:bg-blue-600">Save</button>
                ) : (
                  <button onClick={() => startEdit(index)} className="bg-blue-500 text-white text-sm py-1 px-3 rounded hover:bg-blue-600">Edit</button>
                )}
                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white text-sm py-1 px-3 rounded hover:bg-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
