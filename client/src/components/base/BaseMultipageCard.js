import './BaseMultipageCard.scss';
import '../../style/classes.scss';
import { useState } from 'react';
import BaseMultipageCardDots from './BaseMultipageCardDots';


const BaseMultipageCard = (props) => {
    let [currentPage, setCurrentPage] = useState(1);

    function onClickContinueButton(e) {
        e.preventDefault();
        setCurrentPage(currentPage + 1);
    }

    return (
        <article className='base-multipage-card'>
            { props.listPages[currentPage - 1] }

            <div className='base-multipage-card-footer'>
                {currentPage === props.numberOfPages ? (
                    <button className="glb-base-filled-button" onClick={() => props.buttonFinishPressed()}>Enter</button>
                ) : (
                    <button className="glb-base-outlined-button" onClick={onClickContinueButton}>Continue</button>
                )}

                <div className='dots'>
                    <BaseMultipageCardDots no_pages={props.numberOfPages} selected_page={currentPage} />
                </div>   
            </div>
            
        </article>
    );
}

export default BaseMultipageCard;