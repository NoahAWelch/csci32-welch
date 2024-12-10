import { Flex } from '@repo/ui/flex'
import { useContext } from 'react'
import { AuthorContext } from '../../../context/authorContext'
import AuthorCard from './authorCard'

export default function AuthorResults() {
  const { authors } = useContext(AuthorContext)
  console.log(authors);
  return (
    <Flex className="gap-2 flex-wrap">
  {Array.isArray(authors) &&
    authors.map(({ author_id, author_name, author_description, book_properties }) => (
      <AuthorCard
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
