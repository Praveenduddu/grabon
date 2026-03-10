'use client';
import { useRef } from 'react';
import coupons from '@/data/coupons.json';
import styles from './PopularOffers.module.css';

const tagColors = {
    'EXCLUSIVE': '#673DE6',
    '🎉 Unmissable': '#e53935',
    'Epic Sale': '#2874F0',
    'LIVE NOW': '#FF3F6C',
    'MEGA SALE': '#1565c0',
    'HOT DEAL': '#e53935',
    'BEST PRICE': '#00897b',
    'EOFY SALE': '#FF9900',
    'NEW USER': '#10b981',
    '💪 FITNESS': '#E31837',
    'BUY 1 GET 1': '#673DE6',
    '🍕 PIZZA TIME': '#FC8019',
    'BLOCKBUSTER': '#c62828',
    'EOSS': '#000000',
    'MEMBER ONLY': '#111111',
    'EXCHANGE': '#1428A0',
    'APPLIANCE FEST': '#00A550',
    'BEAUTY FEST': '#FC2779',
};

export default function PopularOffers() {
    const scrollRef = useRef(null);
    const featured = coupons.filter(c => c.tag).slice(0, 12);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <h2 className="section-title">Popular Offers of the Day</h2>
                    <div className={styles.arrows}>
                        <button className={styles.arrowBtn} onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
                        <button className={styles.arrowBtn} onClick={() => scroll(1)} aria-label="Scroll right">›</button>
                    </div>
                </div>
                <div className={styles.scrollWrap} ref={scrollRef}>
                    {featured.map((coupon) => (
                        <div key={coupon.id} className={styles.card}>
                            <div className={styles.cardTop}>
                                <div className={styles.cardEmoji}>
                                    {coupon.store.charAt(0)}
                                </div>
                                <div className={styles.cardInfo}>
                                    {coupon.tag && (
                                        <span className={styles.cardTag} style={{ background: tagColors[coupon.tag] || '#673DE6' }}>
                                            {coupon.tag}
                                        </span>
                                    )}
                                    <div className={styles.cardTitle}>{coupon.title}</div>
                                </div>
                            </div>
                            <div className={styles.cardBottom}>
                                <span className={styles.cardStore}>{coupon.store}</span>
                                <span className={styles.cardAction}>See All Offers →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
