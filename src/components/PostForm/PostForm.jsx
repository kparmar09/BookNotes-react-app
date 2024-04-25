import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import dataService from "../../appwrite/config";
import { apiKey } from "../../conf/conf";

function PostForm({ bookInfo, note }) {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const { bookId } = useParams();

  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`).then((res) =>
      console.log(res)
    );
    // .then((res) => setBookData(res))
    // .finally(console.log(bookData));
  }, []);

  const [formData, setFormData] = useState({
    summary: note?.summary || "",
    characterAnalysis: note?.characterAnalysis || "",
    personalReflections: note?.personalReflections || "",
    recommendation: note?.recommendation || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (note) {
      const dbNote = await dataService.updateNote(note.$id, {
        Book_Id: bookInfo.Book_Id,
        Book_Name: bookInfo.Book_Name,
        Author_Name: bookInfo.Author_Name,
        summary: formData.summary,
        characterAnalysis: formData.characterAnalysis,
        personalReflections: formData.personalReflections,
        recommendation: formData.recommendation,
      });

      if (dbPost) {
        navigate(`/post/${dbNote.$id}`);
      }
    } else {
      const dbNote = await dataService.createNote({
        Book_Id: bookInfo.Book_Id,
        Book_Name: bookInfo.Book_Name,
        Author_Name: bookInfo.Author_Name,
        summary: formData.summary,
        characterAnalysis: formData.characterAnalysis,
        personalReflections: formData.personalReflections,
        recommendation: formData.recommendation,
        User_Id: userData.$id,
      });

      if (dbNote) {
        navigate(`/post/${dbNote.$id}`);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg overflow-hidden mb-4"
      >
        <div className="p-4">
          <label
            htmlFor="summary"
            className="block text-gray-700 font-semibold mb-2"
          >
            Summary:
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="p-4">
          <label
            htmlFor="characterAnalysis"
            className="block text-gray-700 font-semibold mb-2"
          >
            Character Analysis:
          </label>
          <textarea
            id="characterAnalysis"
            name="characterAnalysis"
            value={formData.characterAnalysis}
            onChange={handleChange}
            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="p-4">
          <label
            htmlFor="personalReflections"
            className="block text-gray-700 font-semibold mb-2"
          >
            Personal Reflections:
          </label>
          <textarea
            id="personalReflections"
            name="personalReflections"
            value={formData.personalReflections}
            onChange={handleChange}
            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="p-4">
          <label
            htmlFor="recommendation"
            className="block text-gray-700 font-semibold mb-2"
          >
            Recommendation:
          </label>
          <textarea
            id="recommendation"
            name="recommendation"
            value={formData.recommendation}
            onChange={handleChange}
            className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="p-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {note ? "Update" : "Create"}
          </button>
        </div>
      </form>
      {/* <div className="flex-column align-middle">
        <img
          src={
            bookData[0].volumeInfo.readingModes.image
              ? item.volumeInfo.imageLinks.smallThumbnail
              : "http://lgimages.s3.amazonaws.com/nc-sm.gif"
          }
          alt="Book Thumbnail"
          className="h-90 object-cover"
        />
        <div>
          <p>Book Name: {bookData[0].volumeInfo.title}</p>
          <p>Author Name: {bookData[0].volumeInfo.authors[0]}</p>
          <p>Published in {bookData[0].volumeInfo.publishedDate}</p>
          <p>Book Description: {bookData[0].volumeInfo.description}</p>
        </div>
      </div> */}
    </div>
  );
}

export default PostForm;
