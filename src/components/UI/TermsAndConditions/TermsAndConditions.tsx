import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { termsAndConditionsSlice } from '../../../store/reducers/getTermsAndConditionsReducer';
import './TermsAndConditions.css'
import info from './img/info2.png'

const TermsAndConditions: FC = () => {

    const {isChecked} = useAppSelector(state => state.termsAndConditionsSlice)
    const {termsAndConditions} = termsAndConditionsSlice.actions
    const dispatch = useAppDispatch()

   const handleCheckBox = () => {
        dispatch(termsAndConditions())
        console.log(isChecked)
    }


    return (
        <div className='TermsAndConditions'>

            <input type="checkbox" id="TermsAndConditions" name="TermsAndConditions" checked={isChecked} onChange={handleCheckBox} />
            <label htmlFor="TermsAndConditions">I accept Terms & conditions</label>
            <img src={info} alt="" width='20' height='20' />

        </div>
    );
};

export default TermsAndConditions;