import { Flex } from '@repo/ui/flex'
import { useContext } from 'react'
import { AuthorContext } from '../../../context/authorContext'
import BookDescription from './bookselect'

export default function BookDescriptionResults() {
  const { authors } = useContext(AuthorContext)
  console.log(authors);
  return (
   /* <Flex className="gap-2 flex-wrap">
      {authors?.map(({ author_id, author_name, author_description, book_properties }) => (
        <AuthorSelect
          key={author_id}
          author_id={author_id}
          author_description={author_description}
          author_name={author_name}
          book_properties={book_properties}
        />
      ))}
    </Flex>*/
    <Flex className="gap-2 flex-wrap">
  {Array.isArray(authors) &&
    authors.map(({ author_id, author_name, author_description, book_properties }) => (
      <BookDescription
        key={author_id}
        author_id={author_id}
        author_name={author_name}
        author_description={author_description}
        book_properties={book_properties}
      />
    ))}
</Flex>

  )
}
