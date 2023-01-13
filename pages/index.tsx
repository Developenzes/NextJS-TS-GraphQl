import Head from 'next/head'
import PageGrid from '../components/PageGrid';
import { useLaunchesListQuery } from '../generated/graphql';

export default function HomePage() {

  const [result] = useLaunchesListQuery({
    variables: {
      limit: 10
  }});

  const {data, fetching, error} = result;
    
  if(fetching) return <div>Loading...</div>
  if(error) return <div>{error.message}</div>
  if(!data) return <div>No data</div>

  console.log(data)
 
  return (
    <>
      <Head>
        <title>NextJS-TS-Graphql</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >        
        <PageGrid data={data.launchesPast} />
      </div>
    </>
  )
}
