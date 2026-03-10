'use client';
import { useState } from 'react';
import coupons from '@/data/coupons.json';
import styles from './TopCoupons.module.css';

const tabs = ['Most Used', 'Travel', 'Fashion', 'Food', 'Electronics', 'Entertainment'];
const categoryMap = {
    'Most Used': 'Most Used',
    'Travel': 'Travel',
    'Fashion': 'Fashion',
    'Food': 'Food',
    'Electronics': 'Electronics',
    'Entertainment': 'Entertainment',
};

export default function TopCoupons() {
    const [activeTab, setActiveTab] = useState('Most Used');

    const filtered = coupons.filter(c => c.category === categoryMap[activeTab]).slice(0, 8);

    return (
        <section className={styles.section} id="top-coupons">
            <div className={styles.inner}>
                <h2 className="section-title">Today&apos;s Top Coupons &amp; Offers</h2>

                <div className={styles.tabs}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className={styles.list}>
                    {filtered.map((coupon) => (
                        <div key={coupon.id} className={styles.couponCard}>
                            <div className={styles.couponMain}>
                                <div className={styles.couponInfo}>
                                    {coupon.tag && <span className={styles.couponTag}>{coupon.tag}</span>}
                                    <div className={styles.couponTitle}>{coupon.title}</div>
                                    <div className={styles.couponMeta}>
                                        {coupon.verified && (
                                            <span className={styles.verified}>
                                                <span className={styles.verifiedIcon}>✓</span> Verified
                                            </span>
                                        )}
                                        <span className={styles.uses}>{coupon.uses} uses today</span>
                                        {coupon.comments > 0 && (
                                            <span className={styles.comments}>({coupon.comments}) comments</span>
                                        )}
                                    </div>
                                    {coupon.expiry !== 'Ongoing' && (
                                        <div className={styles.couponExpiry}>Valid till {coupon.expiry}</div>
                                    )}
                                </div>
                                <div className={styles.couponAction}>
                                    <button className={`${styles.activateBtn} ${coupon.type === 'code' ? styles.activateBtnCode : styles.activateBtnOffer}`}>
                                        {coupon.type === 'code' ? '🎫 SHOW CODE' : '🔓 ACTIVATE OFFER'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
