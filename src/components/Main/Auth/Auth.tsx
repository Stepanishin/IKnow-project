import React from 'react';
import './Auth.css'

const Auth = () => {

  const showStats = (e: any) => {
    const statsContainer1: any = document.querySelector(".active_bets")
  const statsContainer2: any = document.querySelector(".paste_bets")
  const statsContainer3: any = document.querySelector(".your_stats")
    console.log(e.target.id)
    if (e.target.id === '1btn') {
      statsContainer1.setAttribute('style', 'display:block;')
      statsContainer2.setAttribute('style', 'display:none;')
      statsContainer3.setAttribute('style', 'display:none;')
    } else if (e.target.id === '2btn') {
      statsContainer1.setAttribute('style', 'display:none;')
      statsContainer2.setAttribute('style', 'display:block;')
      statsContainer3.setAttribute('style', 'display:none;')
    } else if (e.target.id === '3btn') {
      statsContainer1.setAttribute('style', 'display:none;')
      statsContainer2.setAttribute('style', 'display:none;')
      statsContainer3.setAttribute('style', 'display:block;')
    }
  }


    return (
        <div className='auth'> 
          <div className='aith_container' >
            <h1 className='auth_title'>USER PROFILE</h1>
            <p>Your Nickname: 2131434134123</p>
            <p>Your Wallet: dafdf3241324gafgafa44r234afd</p>
            <nav>
              <ul className='stats_list'>
                <li className='stats_list_item' >
                  <button id='1btn' onClick={showStats} >Active bets</button>
                </li>
                <li className='stats_list_item' >
                  <button id='2btn' onClick={showStats} >Paste bets</button>
                </li>
                <li className='stats_list_item' >
                  <button id='3btn' onClick={showStats} >Your stats</button>
                </li>
              </ul>
            </nav>
            <div className='stats_wrap'>


              <div className='stats_container active_bets'>
                <ol>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Shiba inu</p>
                      <p>Date of mint: 12.12.2024</p>
                      <p>Your bet: price will be 1 sol - 2 sol</p>
                    </div>
                  </li>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Shiba inu</p>
                      <p>Date of mint: 12.12.2024</p>
                      <p>Your bet: price will be 1 sol - 2 sol</p>
                    </div>
                  </li>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Shiba inu</p>
                      <p>Date of mint: 12.12.2024</p>
                      <p>Your bet: price will be 1 sol - 2 sol</p>
                    </div>
                  </li>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Shiba inu</p>
                      <p>Date of mint: 12.12.2024</p>
                      <p>Your bet: price will be 1 sol - 2 sol</p>
                    </div>
                  </li>
                </ol>
              </div>

              

              <div className='stats_container paste_bets'>
                <ol>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Choko lab</p>
                      <p>Date of mint: 1.3.2022</p>
                      <p>Your bet: price will be 4 sol or higher</p>
                      <p className='win' >Win</p>
                    </div>
                  </li>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Choko lab</p>
                      <p>Date of mint: 1.3.2022</p>
                      <p>Your bet: price will be 4 sol or higher</p>
                      <p className='win' >Win</p>
                    </div>
                  </li>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Choko lab</p>
                      <p>Date of mint: 1.3.2022</p>
                      <p>Your bet: price will be 4 sol or higher</p>
                      <p className='lose' >Lose</p>
                    </div>
                  </li>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Choko lab</p>
                      <p>Date of mint: 1.3.2022</p>
                      <p>Your bet: price will be 4 sol or higher</p>
                      <p className='win' >Win</p>
                    </div>
                  </li>
                </ol>
              </div>

              

              <div className='stats_container your_stats'>
                <ol>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Pank collection</p>
                      <p>Date of mint: 24.11.2023</p>
                      <p>Your bet: price will be 1 sol - 2 sol</p>
                    </div>
                  </li>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Pank collection</p>
                      <p>Date of mint: 24.11.2023</p>
                      <p>Your bet: price will be 1 sol - 2 sol</p>
                    </div>
                  </li>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Pank collection</p>
                      <p>Date of mint: 24.11.2023</p>
                      <p>Your bet: price will be 1 sol - 2 sol</p>
                    </div>
                  </li>
                  <li>
                    <div className='stats_item'>
                      <p>Name: Pank collection</p>
                      <p>Date of mint: 24.11.2023</p>
                      <p>Your bet: price will be 1 sol - 2 sol</p>
                    </div>
                  </li>
                </ol>
              </div>

              
            </div>
          </div>
        </div>
    );
};

export default Auth;