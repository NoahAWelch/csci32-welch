const navbarList = [
  {
    title: 'Home',
    href: '/',
  },

  {
    title: 'All Books',
    href: '/week1-page',
  },
  {
    title: 'Input',
    href: '/Input',
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-center gap-3 m-3">
      {navbarList.map((listItem, index) => (
        <a
          key={index}
          href={listItem.href}
          className="text-pink-800 text-xl font-bold px-4 py-2 bg-yellow-500 shadow-md rounded-xl grow transition-all hover:bg-green-800"
        >
          {listItem.title}
        </a>
      ))}
    </div>
  )
}
