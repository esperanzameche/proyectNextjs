"use client"
import Image from 'next/image';
import classNames from 'classnames/bind';
import {useState} from 'react';
import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE="data:image/jpeg;base64,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"
export const Description=()=>{
    const [hasBorder, setBorder]= useState(false);
    const handleClick= ()=> setBorder(!hasBorder);
    const cx= classNames.bind(styles);
    const buttonStyles= cx('Description__button',
        {
            'Description__button--border': hasBorder,
        }
    );
    console.log(buttonStyles)
    return (
        <section>
            <button onClick={handleClick} className={buttonStyles}>
                <div className={styles.Description__imageContainer}>
                    <Image src="/images/description.jpeg" 
                        alt="products marketplace" 
                        fill
                        placeholder='blur'
                        blurDataURL={PLACEHOLDER_IMAGE}
                    />
                </div>
            </button>
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    );
}
