import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        <Link to={routes.home()}>Home</Link>
      </p>
      <p>
        <Link to={routes.about()}>About</Link>
      </p>
    </>
  )
}

export default HomePage
