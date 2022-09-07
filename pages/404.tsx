import Head from 'next/head'

import { Layout } from '~/components/templates'
import { Button } from '~/components/atoms'

import notFoundStyles from '~/styles/components/templates/notFound.module.sass'

export default function NotFoundPage() {
  const rerouteToHome = () => {
    window.location.href = '/'
  }

  return (
    <Layout>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <section className={notFoundStyles.container}>
        <div className={notFoundStyles.info}>
          <h1 className={notFoundStyles.title}>Uh oh.</h1>
          <p className={notFoundStyles.description}>
            We ran into an issue, but don’t worry, we’ll take care of it for
            sure.
          </p>
          <Button
            text="Back to safety"
            type="medium"
            onClickCallback={rerouteToHome}
          />
        </div>
        <figure className={notFoundStyles.imageContainer}>
          <img
            src="/assets/images/woman-meditating.png"
            alt="A colorful illustration of a woman meditating"
            className={notFoundStyles.image}
          />
        </figure>
      </section>
    </Layout>
  )
}
