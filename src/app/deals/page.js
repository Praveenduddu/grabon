'use client';
import { useState } from 'react';
import deals from '@/data/deals.json';
import styles from './deals.module.css';

const storeFilters = ['All', ...new Set(deals.map(d => d.store))];

export default function DealsPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filtered = activeFilter === 'All' ? deals : deals.filter(d => d.store === activeFilter);

    return (
        <div className={styles.page}>
            <div className={styles.inner}>
                <div className={styles.hero}>
                    <h1 className={styles.heroTitle}>Deals Of The Day</h1>
                    <p className={styles.heroSub}>
                        Handpicked best deals across top stores. Updated daily with the hottest discounts.
                    </p>
                </div>

                <div className={styles.filters}>
                    {storeFilters.map((f) => (
                        <button
                            key={f}
                            className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {filtered.map((deal) => (
                        <div key={deal.id} className={styles.dealCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.storeBadge} style={{ background: deal.storeColor }}>{deal.store}</span>
                                <span className={styles.discountBadge}>{deal.discount}% OFF</span>
                            </div>
                            <div className={styles.cardImage}>{deal.image}</div>
                            <div className={styles.cardBody}>
                                <div className={styles.productName}>{deal.product}</div>
                                <div className={styles.pricing}>
                                    <span className={styles.price}>₹{deal.price.toLocaleString()}</span>
                                    <span className={styles.original}>₹{deal.originalPrice.toLocaleString()}</span>
                                    <span className={styles.saveBadge}>Save ₹{(deal.originalPrice - deal.price).toLocaleString()}</span>
                                </div>
                                <button className={styles.buyBtn}>BUY NOW →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
