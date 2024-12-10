"use client";
import { BookProperties } from '../../context/authorContext'
import { Variants } from '@repo/ui/variant'
import { Header } from '@repo/ui/header'
import { useState } from 'react';
export type AuthorCardProps = {
  author_id: string
  author_name: string | null
  author_description: string | null
  book_properties: BookProperties[] | null
}
/*export default function BookCard({ author_name, book_properties }: AuthorCardProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const toggleDetails = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="justify-between p-2 gap-2 flex-wrap rounded-lg">


      <div className="rounded-lg">
        <ul>
          {book_properties?.map(({ book, book_synopsis, book_rating, genre, book_reccomendation }, index) => {
            return (
              <li key={index}>

            <Header className="cursor-pointer text-purple-700 hover:underline"
                onClick={() => toggleDetails(index)}> {book.book_name}</Header>
     {expandedIndex === index && ( // Show details only if the book is expanded
                <div className="mt-2 p-2 bg-purple-100 rounded-lg shadow-md">
                  <h3 className="font-bold text-purple-600">{author_name}</h3>
                  <h3>{book.book_description || 'No description available'}</h3>
                  <h3>{book_synopsis || 'No synopsis available'}</h3>
                  <h3>{book_rating || 'No rating available'}</h3>
                  <h3>{book_reccomendation || 'No recommendations available'}</h3>
                  <h3>{genre || 'No genre specified'}</h3>
                </div>
              )}
             </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}*/

export default function BookCard({ author_name, book_properties }: AuthorCardProps) {
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
