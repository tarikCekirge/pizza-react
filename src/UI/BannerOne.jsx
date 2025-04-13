import React from 'react';
import bannerBgOne from '../assets/images/bannerBgOne.png';
import BannerButton from './BannerButton';

const BannerOne = ({ url, urlText, bg, title, content }) => {
    return (
        <div
            className="  bg-cover bg-bottom bg-no-repeat flex flex-col gap-4 bg-red-700 px-6 pt-12 pb-28 rounded-xl overflow-hidden "
            style={{ backgroundImage: `url(${bg})` }}
        >
            <h4 className='text-white font-quattrocento text-7xl leading-[90%] w-1/2'>{title}</h4>
            <p className='text-xl text-white font-barlow'>{content}</p>
            <BannerButton text={urlText} to={url} />

        </div>
    );
};

export default BannerOne;
