import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  
  // protected route
  // const { data: session } = useSession({required: true})

  if (session) {    
    return (
      <>
      <Head>
        <title>Next Auth Test</title>
      </Head>

      Signed in as {session.user.name} 
      <br />        
      <button onClick={() => signOut()}>Sign out</button>
      </>
      )  
    }  
    return (
      <>
      <Head>
        <title>Next Auth Test</title>
      </Head>
        Not signed in 
        <br />      
        <button onClick={() => signIn()}>Sign in</button>    
        </>  
    )
}
