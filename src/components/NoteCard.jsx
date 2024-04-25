import React from "react";
import { useParams } from "react-router-dom";
// We will extract the dbPost id from here and display accordingly...

function NoteCard({}) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 border-black">
      <div>
        <h1>Book Info will be placed here</h1>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Summary:</h2>
        <p className="text-gray-700 mb-4"></p>

        <h2 className="text-xl font-semibold mb-2">Character Analysis:</h2>
        <p className="text-gray-700 mb-4"></p>

        <h2 className="text-xl font-semibold mb-2">Personal Reflections:</h2>
        <p className="text-gray-700 mb-4"></p>

        <h2 className="text-xl font-semibold mb-2">Recommendation:</h2>
        <p className="text-gray-700 mb-4"></p>
      </div>
    </div>
  );
}

export default NoteCard;
