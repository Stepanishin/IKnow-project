import React, { FC } from 'react';
import { IShareTwitterBtnProps } from '../../../types/IShareTwitterBtnProps';
import { RetweetOutlined } from '@ant-design/icons';




const ShareTwitterBtn:FC<IShareTwitterBtnProps> = ({name} ) => {

    let text = `What do you think about ${name}?` 
    let text2 = 'Judge it here: https://rektville.city/CourtList'
    let text3 = 'Bet and win SOL!'   
    let text4 = '100%25 fees for @RektvilleNFT holders! Buy it on MagicEden: https://magiceden.io/marketplace/rektville'

    let linkTwitter = `https://twitter.com/intent/tweet?text=${text}%0a%0a${text2}%0a%0a${text3}%0a%0a${text4}`

    return (
        <a className="ShareTwitterBtn twitter-share-button"
            href={linkTwitter}
            target="_blank"
        >
        Share on Twitter  <RetweetOutlined style={{ color: '#00FFFF', marginLeft: '5px' }} /></a>
    );
};

export default ShareTwitterBtn;
