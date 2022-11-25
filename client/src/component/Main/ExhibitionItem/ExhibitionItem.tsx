import React from 'react';
import './ExhibitionItem.css'

export const ExhibitionItem = () => {
    return (
        <div>
                <div className={'card-wrapper'}>
                    <img src={require('./AntonAdministator.jpg')} alt={'Broken'} style={{width: '300px', height:'300px', border: '1px solid whitesmoke', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}/>
                    <div className={'description-block'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur culpa cumque, dignissimos dolor ea eligendi excepturi exercitationem iure laboriosam laborum minima, nisi numquam quas, quo sed similique ut vitae.
                    </div>
                </div>
        </div>
    );
};