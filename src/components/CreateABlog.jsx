import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBlog } from '../features/blogSlice';
import { toast } from 'react-toastify';

const CreateABlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [imageDisplay, setimageDisplay] = useState(null);

  const onSubmit = (data) => {
    const files = data.image[0];
    const blogData = {
      title: data.title,
      tags: data.tags,
      description: data.description,
      date: data.date,
      image: URL.createObjectURL(files),
    };
    dispatch(addBlog(blogData));
    reset();
    setimageDisplay(null);
    toast.success('Blog post added successfully!');
    reset();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setimageDisplay(URL.createObjectURL(file));
  };
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-700 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            {...register('title')}
            type="text"
            placeholder="Blog Title"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
          <input
            {...register('tags')}
            type="text"
            placeholder="joke, happy, sad"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            {...register('description')}
            placeholder="Write your blog..."
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            rows="3"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
          <input
            {...register('image')}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {imageDisplay && (
            <img src={imageDisplay} alt="Preview" className="mt-2 w-full h-40 object-cover rounded" />
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
          <input
            {...register('date')}
            type="date"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Post Blog
          </button>
        </div>
      </form>

      
    </div>
  );
};

export default CreateABlog;
