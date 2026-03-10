import Link from 'next/link';
import styles from './indulge.module.css';

export const metadata = {
    title: 'Indulge – Premium Lifestyle Coupons & Offers | GrabOn',
    description: 'Explore premium lifestyle deals on travel, dining, wellness, fashion and more. Treat yourself with exclusive Indulge offers.',
};

const collections = [
    {
        title: 'Travel & Vacations',
        subtitle: 'Luxury getaways & flight deals',
        icon: '✈️',
        gradient: 'linear-gradient(135deg, #0077b6, #023e8a)',
        items: ['MakeMyTrip', 'Goibibo', 'Air India', 'Agoda'],
    },
    {
        title: 'Food & Dining',
        subtitle: 'Restaurant deals & food delivery',
        icon: '🍽️',
        gradient: 'linear-gradient(135deg, #FC8019, #e65100)',
        items: ['Swiggy', 'Zomato', 'Dominos', 'Pizza Hut'],
    },
    {
        title: 'Fashion & Beauty',
        subtitle: 'Designer brands & beauty essentials',
        icon: '👗',
        gradient: 'linear-gradient(135deg, #FF3F6C, #d81b60)',
        items: ['Myntra', 'AJIO', 'Nykaa', 'H&M'],
    },
    {
        title: 'Wellness & Fitness',
        subtitle: 'Gym, supplements & self-care',
        icon: '💪',
        gradient: 'linear-gradient(135deg, #10b981, #059669)',
        items: ['HealthKart', 'Cult.fit', 'Pharmeasy'],
    },
    {
        title: 'Entertainment',
        subtitle: 'Streaming, movies & events',
        icon: '🎬',
        gradient: 'linear-gradient(135deg, #673DE6, #4a00e0)',
        items: ['BookMyShow', 'SonyLIV', 'Netflix', 'Spotify'],
    },
    {
        title: 'Electronics & Gadgets',
        subtitle: 'Latest tech at the best prices',
        icon: '📱',
        gradient: 'linear-gradient(135deg, #1a1f71, #2d35a8)',
        items: ['Amazon', 'Flipkart', 'Croma', 'Samsung'],
    },
];

const featured = [
    { title: '5-Star Hotel Deals', desc: 'Up to 60% OFF on luxury stays across India', tag: 'TRENDING', color: '#0077b6' },
    { title: 'Fine Dining at 50% OFF', desc: 'Exclusive discounts at top restaurants', tag: 'EXCLUSIVE', color: '#e53935' },
    { title: 'Spa & Wellness Packages', desc: 'Rejuvenate with premium spa deals', tag: 'NEW', color: '#10b981' },
    { title: 'Premium Fashion Sale', desc: 'Designer brands at unbelievable prices', tag: 'HOT', color: '#FF3F6C' },
];

export default function IndulgePage() {
    return (
        <div className={styles.page}>
            <div className={styles.inner}>
                {/* Hero */}
                <div className={styles.hero}>
                    <div className={styles.heroTag}>✨ PREMIUM LIFESTYLE</div>
                    <h1 className={styles.heroTitle}>Indulge</h1>
                    <p className={styles.heroSub}>
                        Treat yourself to the finer things in life. Curated premium deals on travel, dining, fashion, wellness & more.
                    </p>
                </div>

                {/* Featured Deals */}
                <section className={styles.section}>
                    <h2 className="section-title">Featured Indulgences</h2>
                    <div className={styles.featuredGrid}>
                        {featured.map((item, i) => (
                            <div key={i} className={styles.featuredCard}>
                                <span className={styles.featuredTag} style={{ background: item.color }}>{item.tag}</span>
                                <h3 className={styles.featuredTitle}>{item.title}</h3>
                                <p className={styles.featuredDesc}>{item.desc}</p>
                                <button className={styles.featuredBtn}>Explore →</button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Collections */}
                <section className={styles.section}>
                    <h2 className="section-title">Browse by Lifestyle</h2>
                    <div className={styles.collectionsGrid}>
                        {collections.map((col, i) => (
                            <div key={i} className={styles.collectionCard} style={{ background: col.gradient }}>
                                <div className={styles.collectionIcon}>{col.icon}</div>
                                <h3 className={styles.collectionTitle}>{col.title}</h3>
                                <p className={styles.collectionSub}>{col.subtitle}</p>
                                <div className={styles.collectionStores}>
                                    {col.items.map((store, j) => (
                                        <span key={j} className={styles.collectionStorePill}>{store}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaCard}>
                        <h2 className={styles.ctaTitle}>Never Miss a Premium Deal</h2>
                        <p className={styles.ctaSub}>Subscribe to get exclusive premium lifestyle offers delivered to your inbox</p>
                        <div className={styles.ctaActions}>
                            <Link href="/stores" className={styles.ctaBtn}>Browse All Stores</Link>
                            <Link href="/deals" className={styles.ctaBtnOutline}>View Today&apos;s Deals</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
