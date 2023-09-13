import Layout from '@/components/Layout'

export default function Home({ messages }) {
  return (
    <Layout>
      <h1>{messages.home.title}</h1>
    </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../messages/${context.locale}.json`)).default,
    },
  }
}
