import Link from 'next/link';
import stores from '@/data/stores.json';
import styles from './PopularStores.module.css';

export default function PopularStores() {
    const featured = stores.find(s => s.featured);
    const regulars = stores.filter(s => !s.featured && s.trending).slice(0, 18);

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <h2 className="section-title">Popular Stores</h2>
                <div className={styles.grid}>
                    {featured && (
                        <Link href={`/${featured.slug}`} className={styles.featured}>
                            <div>
                                <div className={styles.featuredLabel}>Featured Store Of The Month</div>
                                <div className={styles.featuredName}>{featured.logo} {featured.name}</div>
                                <div className={styles.featuredCount}>{featured.coupons} Coupons Available</div>
                            </div>
                            <div className={styles.featuredBtn}>View Coupons →</div>
                        </Link>
                    )}
                    {regulars.map((store) => (
                        <Link key={store.id} href={`/${store.slug}`} className={styles.storeCard}>
                            <div className={styles.storeLogo}>{store.logo}</div>
                            <div className={styles.storeName}>{store.name}</div>
                            <div className={styles.storeCoupons}>{store.coupons} Coupons</div>
                        </Link>
                    ))}
                </div>
                <div className={styles.viewAll}>
                    <Link href="/stores" className={styles.viewAllLink}>View All Stores →</Link>
                </div>
            </div>
        </section>
    );
}
