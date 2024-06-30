import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  //creating a new variable
  const loggedIn = { firstname: 'Michael' }
  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
        <HeaderBox
        //passing props
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstname || 'Guest'}
        subtext='Access and manage your account and transaction efficiently.'
        />

        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={2350.60}
        />
      </header>
      </div>
    </section>
  )
}

export default Home
