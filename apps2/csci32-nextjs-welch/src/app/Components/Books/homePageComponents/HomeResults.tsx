import { Flex } from '@repo/ui/flex';
import { useContext } from 'react';
import { AuthorContext } from '../../../context/authorContext';
import HomeCard from './homecard';

export default function HomeResults() {
  const { authors } = useContext(AuthorContext);
  const TopBooks = Array.isArray(authors)
  ? authors.filter(({ book_properties }) =>
        Array.isArray(book_properties) &&
        book_properties.some((book) => book.book_rating !== null && book.book_rating > 7)
      ).slice(0, 10)
  : [];

  return (
    <Flex className="gap-2 flex-wrap">
      {Array.isArray(authors) &&
        TopBooks.map(({ author_id, author_name, author_description, book_properties }) => (
          <HomeCard
            key={author_id}
            author_id={author_id}
            author_name={author_name}
            author_description={author_description}
            book_properties={book_properties}
          />
        ))}
    </Flex>
  );
}
