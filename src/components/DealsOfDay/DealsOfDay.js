import Link from 'next/link';
import deals from '@/data/deals.json';
import styles from './DealsOfDay.module.css';

export default function DealsOfDay() {
    const topDeals = deals.slice(0, 8);

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <h2 className="section-title">Deals Of The Day</h2>
                    <Link href="/deals" className={styles.viewMore}>View More Deals →</Link>
                </div>
                <div className={styles.grid}>
                    {topDeals.map((deal) => (
                        <div key={deal.id} className={styles.dealCard}>
                            <div className={styles.dealHeader}>
                                <span className={styles.dealStore} style={{ background: deal.storeColor }}>{deal.store}</span>
                                <span className={styles.dealDiscount}>{deal.discount}% OFF</span>
                            </div>
                            <div className={styles.dealImage}>{deal.image}</div>
                            <div className={styles.dealBody}>
                                <div className={styles.dealName}>{deal.product}</div>
                                <div className={styles.dealPricing}>
                                    <span className={styles.dealPrice}>₹{deal.price.toLocaleString()}</span>
                                    <span className={styles.dealOriginal}>₹{deal.originalPrice.toLocaleString()}</span>
                                </div>
                                <button className={`${styles.buyBtn} ${styles.buyBtnPrimary}`}>BUY NOW</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
