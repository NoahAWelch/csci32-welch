"use client"
import { useState } from 'react';
import { BookProperties } from '../../context/authorContext'

export type AuthorCardProps = {
  author_id: string
  author_name: string | null
  author_description: string | null
  book_properties: BookProperties[] | null
}

export default function HomeCard({ author_name, book_properties }: AuthorCardProps) {
  const [expansionIndex, setExpansionIndex] = useState<number | null>(null);
  const toggleDetails = (index: number) => {
    setExpansionIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="justify-between p-2 gap-2 flex-wrap rounded-lg">
      <div className="rounded-lg">
        <ul>
          {book_properties?.map(({ book, book_synopsis, book_rating, genre, book_reccomendation }, index) => (
            <li key={index}>
              <h2
                className="cursor-pointer text-purple-700 hover:underline"
                onClick={() => toggleDetails(index)}
              >
                {book?.book_name || 'Untitled Book'}
              </h2>
              {expansionIndex === index && (
                <div className="mt-2 p-2 bg-orange-500 rounded-lg shadow-md hover:scale-110 hover:bg-red-400 bg-gradient-to-r from-yellow-600 to-red-600' grow">
                  <h3 className="font-bold text-purple-700">By: {author_name}</h3>
                  <p>Description: {book?.book_description || 'No description available'}</p>
                  <p>Synopsis: {book_synopsis || 'No synopsis available'}</p>
                  <p> Rating: {book_rating ? `Rating: ${book_rating}` : 'No rating available'}</p>
                  <p>
                    {book_reccomendation
                      ? `Recommended: ${book_reccomendation}`
                      : 'No recommendations available'}
                  </p>
                  <p>Genre: {genre || 'No genre specified'}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

