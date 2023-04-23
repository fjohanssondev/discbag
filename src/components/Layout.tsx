import { ExitIcon } from '@radix-ui/react-icons'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Layout = ({ children, font }: { children: React.ReactNode, font: string}) => {

  const { data: session } = useSession()

  return (
    <>
      <section className='bg-black py-3 h-10 flex justify-center fixed w-full top-0 left-0 z-50'>
        <p className={`text-white text-xs ${font}`}>🥏 Discbag is currently in <span className='font-bold'>BETA</span> and some functions may not work as expected 🔥</p>
      </section>
      <header className="fixed w-full left-0 top-10 bg-white py-3 border-b border-slate-200">
        <div className="md:container md:mx-auto px-4 flex justify-between items-center">
          <Link href="/" className={`${font} text-2xl font-bold`}>Discbag</Link>
          <nav className={font}>
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="text-sm font-semibold">Home</Link>
              </li>
              {session && (
                <li>
                  <Link href="/bag" className="text-sm font-semibold">My bag</Link>
                </li>
              )}
              <li>
                <Link href="/discs" className="text-sm font-semibold">All Discs</Link>
              </li>
            </ul>
          </nav>
          {session ? (
            <>
              <div className='flex items-center'>
                <Image src={session?.user?.image || ''} width={40} height={40} alt="" className="rounded-full" />
                <span className='ml-2'>{session.user.name}</span>
                <button className="bg-white ml-4" onClick={() => void signOut()}>
                  <ExitIcon />
                </button>
              </div>
            </>
          ) : (
            <button className={`${font} flex justify-center items-center bg-indigo-500 hover:bg-indigo-400 text-sm text-indigo-50 px-4 py-2 rounded`} onClick={() => void signIn()}>Sign in</button>
          )}
        </div>
      </header>
      <main className={`${font} mt-48`}>
        {children}
      </main>
    </>
  )
}

export default Layout