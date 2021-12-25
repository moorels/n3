import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <h1>AboutPage</h1>
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
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

export default AboutPage
