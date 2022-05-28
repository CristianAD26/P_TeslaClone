import React from 'react'
import Button from './button.js'
import './Section.css'
import { MdOutlineExpandMore } from 'react-icons/md';

const Section = ({title, desc, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first}) => {
    return (
        <div className='section' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className='section_container'>
                <div className='section_text'>
                    <p>{title}</p>
                    <div className='section_description'>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className='section_low'>
                    <div className='section_buttons'>
                        <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp='primary' text={rightBtnTxt} link={rightBtnLink} />
                        )}
                    </div>
                    {first && (
                        <div className='icon_expand'><MdOutlineExpandMore /></div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Section