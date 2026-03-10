import Link from 'next/link';
import stores from '@/data/stores.json';
import styles from './stores.module.css';

export const metadata = {
    title: 'All Stores Coupons, Offers & Promo Codes | GrabOn',
    description: 'Browse all stores with the latest coupons and offers. Find deals from Amazon, Flipkart, Myntra and 3000+ stores.',
};

export default function StoresPage() {
    const trending = stores.filter(s => s.trending);
    const sorted = [...stores].sort((a, b) => a.name.localeCompare(b.name));
    const letters = [...new Set(sorted.map(s => s.name[0].toUpperCase()))];

    return (
        <div className={styles.page}>
            <div className={styles.inner}>
                {/* Stats Banner */}
                <div className={styles.statsBanner}>
                    <h1 className={styles.pageTitle}>All Stores</h1>
                    <p className={styles.pageDesc}>
                        Browse thousands of stores with verified coupons and exclusive deals. Find discounts from all your favourite brands.
                    </p>
                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>3,850</div>
                            <div className={styles.statLabel}>Total Merchants</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>52,695</div>
                            <div className={styles.statLabel}>Total Coupons & Offers</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>Today</div>
                            <div className={styles.statLabel}>Verified On</div>
                        </div>
                    </div>
                    <div className={styles.quickNav}>
                        <Link href="/categories" className={styles.quickLink}>See All Categories</Link>
                        <Link href="/stores" className={styles.quickLinkActive}>See All Stores</Link>
                        <Link href="/deals" className={styles.quickLink}>See All Deals</Link>
                    </div>
                </div>

                {/* Trending Merchants */}
                <section className={styles.section}>
                    <h2 className="section-title">Trending Merchants</h2>
                    <div className={styles.trendingGrid}>
                        {trending.map((store) => (
                            <Link key={store.id} href={`/${store.slug}`} className={styles.trendingCard}>
                                <span className={styles.trendingLogo}>{store.logo}</span>
                                <div>
                                    <div className={styles.trendingName}>{store.name}</div>
                                    <div className={styles.trendingCount}>{store.coupons} Coupons</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Browse All */}
                <section className={styles.section}>
                    <h2 className="section-title">Browse All Merchants</h2>
                    <div className={styles.letterNav}>
                        {letters.map((letter) => (
                            <a key={letter} href={`#letter-${letter}`} className={styles.letterLink}>{letter}</a>
                        ))}
                    </div>
                    {letters.map((letter) => (
                        <div key={letter} id={`letter-${letter}`} className={styles.letterSection}>
                            <h3 className={styles.letterHeading}>{letter}</h3>
                            <div className={styles.storeList}>
                                {sorted.filter(s => s.name[0].toUpperCase() === letter).map((store) => (
                                    <Link key={store.id} href={`/${store.slug}`} className={styles.storeLink}>
                                        <span className={styles.storeLinkIcon}>{store.logo}</span>
                                        <span className={styles.storeLinkName}>{store.name}</span>
                                        <span className={styles.storeLinkCount}>{store.coupons}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
