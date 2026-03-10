import { useEffect } from "react"
import { Faq, Features, Header, Pricing, Testimonals } from "../components/features"


const Home = () => {
  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Your Productivity Starts Here`;
  }, [])
  return (
    <>
      <Header />
      <Pricing />
      <Features />
      <Testimonals />
      <Faq />
    </>
  )
}

export default Home
