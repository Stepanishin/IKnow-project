import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { termsAndConditionsSlice } from '../../../store/reducers/getTermsAndConditionsReducer';
import './TermsAndConditions.css'
import info from './img/info.png'

const TermsAndConditions: FC = () => {

    const {isChecked} = useAppSelector(state => state.termsAndConditionsSlice)
    const {termsAndConditions} = termsAndConditionsSlice.actions
    const dispatch = useAppDispatch()

    const modalWrap = document.querySelector('.TermsAndConditions_modalWrap')!

   const handleCheckBox = () => {
        dispatch(termsAndConditions())
        console.log(isChecked)
    }

    const showModal = () => {
        modalWrap.classList.add('TermsAndConditions_modalWrap_display')
    }

    const closeModal =() => {
        modalWrap.classList.remove('TermsAndConditions_modalWrap_display')
    }


    return (
        <div className='TermsAndConditions'>

            <input type="checkbox" id="TermsAndConditions" name="TermsAndConditions" checked={isChecked} onChange={handleCheckBox} />
            <label htmlFor="TermsAndConditions">I accept Terms & conditions</label>
            <img onClick={showModal} className='TermsAndConditions_info' src={info} alt="" width='20' height='20' />
            <div className='TermsAndConditions_modalWrap'>
                <div className='modalWrap_container'>
                    <h3 className='modalWrap_container_title' >Terms & Conditions</h3>
                    <br />
                    <br />
                    <br />
                    <p>By clicking accept you agree to the following usage terms and conditions listed below. </p>
                    <p>Odds are not fixed, but change with the final bets placed.</p>
                    <p>We source  floor prices from  Magic Eden's API, or other secondaries when ME crashes.</p>
                    <p>When a time after listing on secondary is specified, the timer starts from the beginning of the final mint tranche or when Magic Eden opens the secondary market for the project, whichever comes last.</p>
                    <p>When predicting floor prices, the target price is calculated as the median floor price in a time-window. This window is typically the 30 min before the target time.</p>
                    <p>In the event of an abnormal result from a mint (i.e. failure to sellout, rug, launchpad mistake, Solana crashing) the following decisions can be made:
                        <ul>
                            <li> - Announce  "positive outcome"</li>
                            <li> - Announce  "negative outcome"</li>
                            <li> - Return all money and cancel the game</li>
                        </ul>
                    </p>
                    <p>The decision between these three options is up to the discretion of the Rektville  team. Projects have 7 days from the start of WL/OG (whatever is first) mint to list on secondary before a negative outcome is announced.</p>
                    <p>In the case of disruptions during the mint such as technical failures or slow airdrops. The Rektville team may decide to delay the target time by a small amount to ensure a "fair game".</p>
                    <p>Only bets placed between the OPEN (inclusive) and CLOSE (non-inclusive) times will be considered valid. We use the Blockchain's transactions timestamps as reference.</p>
                    <br />
                    <p>Instance of a voided outcome:
                        <ul>
                            <li> - The launchpad a project uses announces a critical flaw in their setup which causes all mints to be postponed. The game is voided due to no fault on the project's behalf.</li>
                            <li> - Solana breaks down and TPS is too low to attempt to mint. Again, no fault on the project's side so the game is voided.</li>
                        </ul>
                    </p>
                    <br />
                    <p>Instance of a positive outcome:
                        <ul>
                            <li> - A hyped target price sells out instantly and immediately moons. It stays above the target price at the time specified in the game..</li>
                            <li> - A project lowers the price before or during mint, yet on secondary markets, the price goes above the target price.</li>
                        </ul>
                    </p>
                    <br />
                    <p>Instance of a negative outcome:
                        <ul>
                            <li> - A project lowers the supply from what was latest announced at the time when the prediction game opened</li>
                            <li> - A project gets hacked due to admin negligence and indefinitely postpones mint. After 5 days, a negative outcome is announced.</li>
                            <li> - A project fails to sellout and is not listed on secondary, but keeps the mint open for longer than 5 days.</li>
                            <li> - A project fails to sell out within 1h after the start of the final mint tranche, and is listed on secondary.</li>
                            <li> - A project makes a mistake in their CM setup which causes the mint to fail completely. They announce full refunds to all affected.</li>
                        </ul>
                    </p>
                    <br />
                    <br />
                    <br />
                    <button className='modalWrap_container_closeBtn' onClick={closeModal} >Close</button>
                </div>
            </div>

        </div>
    );
};

export default TermsAndConditions;