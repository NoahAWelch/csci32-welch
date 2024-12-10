import { BookProperties } from '../../context/authorContext'
import { Variants } from '@repo/ui/variant'
import { Sizes } from '@repo/ui/size'
import { Button } from '@repo/ui/button'
import { Flex } from '@repo/ui/flex'
import { Header } from '@repo/ui/header'
export type AuthorCardProps = {
  author_id: string
  author_name: string | null
  author_description: string | null
  book_properties: BookProperties[] | null
}
export default function HomeDescription({ author_name, book_properties }: AuthorCardProps) {
  return (
    <div className="border-2 border-solid border-purple-600 rounded-xl shadow-lg basis-1/4 min-w-48 bg-blue-300 flex-grow">
      <Flex className="justify-between p-2 gap-2 flex-wrap rounded-lg">
        <Flex className="gap-2 ">
          <Button size={Sizes.Medium} variant={Variants.Primary} onClick={() => alert('UPDATE NOT IMPLEMENTED')}>
            Update
          </Button>
          <Button size={Sizes.Medium} variant={Variants.Primary} onClick={() => alert('DELETE NOT IMPLEMENTED')}>
            Delete
          </Button>
        </Flex>
      </Flex>
      <div className="rounded-lg">
        <ul>
          {book_properties?.map(({ book, book_synopsis, book_rating, genre, book_reccomendation }, index) => {
            return (
              <li key={index}>
                <Header > {book.book_name}</Header>
                {author_name}
<h3>{book.book_description}</h3>
<h3>{book_synopsis}</h3>
<h3>{book_rating}</h3>
<h3>{book_reccomendation}</h3>
<h3>{genre}</h3>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
