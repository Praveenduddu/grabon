import Link from 'next/link';
import styles from './seasonal-offers.module.css';

export const metadata = {
    title: 'Seasonal Offers & Sales Calendar 2026 | GrabOn',
    description: 'Never miss a sale! Browse upcoming and ongoing seasonal sales, festivals, and shopping events across India with the best coupons.',
};

const seasons = [
    {
        title: 'Summer Sale',
        period: 'April – June 2026',
        icon: '☀️',
        gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
        stores: ['Myntra', 'AJIO', 'Flipkart', 'Amazon'],
        discount: 'Up to 80% OFF',
        status: 'Upcoming',
    },
    {
        title: 'Monsoon Bonanza',
        period: 'July – August 2026',
        icon: '🌧️',
        gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
        stores: ['MakeMyTrip', 'Goibibo', 'Uber', 'Swiggy'],
        discount: 'Up to 60% OFF',
        status: 'Upcoming',
    },
    {
        title: 'Independence Day Sale',
        period: 'August 2026',
        icon: '🇮🇳',
        gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
        stores: ['Amazon', 'Flipkart', 'Croma', 'Samsung'],
        discount: 'Up to 75% OFF',
        status: 'Upcoming',
    },
    {
        title: 'Festive Season Sale',
        period: 'September – October 2026',
        icon: '🪔',
        gradient: 'linear-gradient(135deg, #e53935, #c62828)',
        stores: ['Amazon', 'Flipkart', 'Myntra', 'Nykaa'],
        discount: 'Up to 90% OFF',
        status: 'Upcoming',
    },
    {
        title: 'Diwali Mega Sale',
        period: 'October 2026',
        icon: '✨',
        gradient: 'linear-gradient(135deg, #673DE6, #4a00e0)',
        stores: ['All Major Stores'],
        discount: 'Up to 90% OFF',
        status: 'Upcoming',
    },
    {
        title: 'Black Friday & Cyber Monday',
        period: 'November 2026',
        icon: '🖤',
        gradient: 'linear-gradient(135deg, #111, #333)',
        stores: ['Amazon', 'Flipkart', 'Dell', 'HP'],
        discount: 'Up to 85% OFF',
        status: 'Upcoming',
    },
    {
        title: 'Year End Sale',
        period: 'December 2026',
        icon: '🎄',
        gradient: 'linear-gradient(135deg, #dc2626, #991b1b)',
        stores: ['All Major Stores'],
        discount: 'Up to 80% OFF',
        status: 'Upcoming',
    },
    {
        title: 'March Madness',
        period: 'March 2026',
        icon: '🔥',
        gradient: 'linear-gradient(135deg, #FF3F6C, #d81b60)',
        stores: ['Myntra', 'AJIO', 'Nykaa', 'Amazon'],
        discount: 'Up to 70% OFF',
        status: 'Live Now',
    },
];

export default function SeasonalOffersPage() {
    const live = seasons.filter(s => s.status === 'Live Now');
    const upcoming = seasons.filter(s => s.status === 'Upcoming');

    return (
        <div className={styles.page}>
            <div className={styles.inner}>
                <div className={styles.hero}>
                    <div className={styles.heroTag}>📅 SALES CALENDAR</div>
                    <h1 className={styles.heroTitle}>Seasonal Offers 2026</h1>
                    <p className={styles.heroSub}>
                        Plan your shopping around the biggest sales. Never miss a deal with our complete seasonal sales calendar.
                    </p>
                </div>

                {/* Live Now */}
                {live.length > 0 && (
                    <section className={styles.section}>
                        <h2 className="section-title">🔴 Live Now</h2>
                        <div className={styles.grid}>
                            {live.map((season, i) => (
                                <div key={i} className={styles.card} style={{ background: season.gradient }}>
                                    <div className={styles.liveBadge}>LIVE</div>
                                    <div className={styles.cardIcon}>{season.icon}</div>
                                    <h3 className={styles.cardTitle}>{season.title}</h3>
                                    <div className={styles.cardPeriod}>{season.period}</div>
                                    <div className={styles.cardDiscount}>{season.discount}</div>
                                    <div className={styles.cardStores}>
                                        {season.stores.map((s, j) => (
                                            <span key={j} className={styles.storePill}>{s}</span>
                                        ))}
                                    </div>
                                    <Link href="/march-sales" className={styles.cardBtn}>View Deals →</Link>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Upcoming */}
                <section className={styles.section}>
                    <h2 className="section-title">Upcoming Sales</h2>
                    <div className={styles.grid}>
                        {upcoming.map((season, i) => (
                            <div key={i} className={styles.card} style={{ background: season.gradient }}>
                                <div className={styles.cardIcon}>{season.icon}</div>
                                <h3 className={styles.cardTitle}>{season.title}</h3>
                                <div className={styles.cardPeriod}>{season.period}</div>
                                <div className={styles.cardDiscount}>{season.discount}</div>
                                <div className={styles.cardStores}>
                                    {season.stores.map((s, j) => (
                                        <span key={j} className={styles.storePill}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.tipSection}>
                    <div className={styles.tipCard}>
                        <h2 className={styles.tipTitle}>💡 Shopping Tips</h2>
                        <div className={styles.tipGrid}>
                            <div className={styles.tip}>
                                <strong>Subscribe Early</strong>
                                <p>Sign up for alerts before sales start to get early-bird deals</p>
                            </div>
                            <div className={styles.tip}>
                                <strong>Compare Prices</strong>
                                <p>Check multiple stores for the same product to find the best deal</p>
                            </div>
                            <div className={styles.tip}>
                                <strong>Use Bank Offers</strong>
                                <p>Stack bank card discounts with coupons for extra savings</p>
                            </div>
                            <div className={styles.tip}>
                                <strong>Wishlist Items</strong>
                                <p>Add items to your cart/wishlist before the sale goes live</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
