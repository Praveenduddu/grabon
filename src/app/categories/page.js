import Link from 'next/link';
import categories from '@/data/categories.json';
import stores from '@/data/stores.json';
import styles from './categories.module.css';

export const metadata = {
    title: 'All Categories Coupons, Offers & Promo Codes | GrabOn',
    description: 'Browse all categories with the latest coupons and offers. Find deals across flights, fashion, electronics, beauty and more.',
};

export default function CategoriesPage() {
    const popular = categories.slice(0, 4);
    const popularMerchants = stores.filter(s => s.trending).slice(0, 12);

    return (
        <div className={styles.page}>
            <div className={styles.inner}>
                {/* Stats Banner */}
                <div className={styles.statsBanner}>
                    <h1 className={styles.pageTitle}>All Categories</h1>
                    <p className={styles.pageDesc}>
                        Incredible offers and thousands of coupons are available across a wide range of categories. Check these deals before you shop online.
                    </p>
                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>172</div>
                            <div className={styles.statLabel}>Total Categories</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>95,821</div>
                            <div className={styles.statLabel}>Total Coupons & Offers</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>Today</div>
                            <div className={styles.statLabel}>Verified On</div>
                        </div>
                    </div>
                    <div className={styles.quickNav}>
                        <Link href="/categories" className={styles.quickLinkActive}>See All Categories</Link>
                        <Link href="/stores" className={styles.quickLink}>See All Stores</Link>
                        <Link href="/deals" className={styles.quickLink}>See All Deals</Link>
                    </div>
                </div>

                {/* Popular Merchants */}
                <section className={styles.section}>
                    <h2 className="section-title">Popular Merchants</h2>
                    <div className={styles.merchantTags}>
                        {popularMerchants.map((store) => (
                            <Link key={store.id} href={`/${store.slug}`} className={styles.merchantTag}>
                                {store.logo} {store.name} Coupons
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Popular Categories */}
                <section className={styles.section}>
                    <h2 className="section-title">Popular Categories</h2>
                    <div className={styles.popularGrid}>
                        {popular.map((cat) => (
                            <div key={cat.id} className={styles.popularCard}>
                                <div className={styles.popularIcon}>{cat.icon}</div>
                                <div className={styles.popularName}>{cat.name}</div>
                                <div className={styles.popularStats}>
                                    <span>{cat.coupons.toLocaleString()} Coupons</span>
                                    <span>{cat.offers.toLocaleString()} Offers</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Browse All */}
                <section className={styles.section}>
                    <h2 className="section-title">Browse All Categories</h2>
                    <div className={styles.catGrid}>
                        {categories.map((cat) => (
                            <div key={cat.id} className={styles.catCard}>
                                <span className={styles.catCardIcon}>{cat.icon}</span>
                                <div className={styles.catCardInfo}>
                                    <div className={styles.catCardName}>{cat.name}</div>
                                    <div className={styles.catCardCount}>{cat.coupons.toLocaleString()} Coupons · {cat.offers.toLocaleString()} Offers</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
