import Link from 'next/link';
import styles from './march-sales.module.css';

export const metadata = {
    title: 'March Sales 2026 – Best Deals & Discounts | GrabOn',
    description: 'Discover the biggest March 2026 sales across top stores. Grab exclusive discounts on electronics, fashion, travel, food and more.',
};

const marchDeals = [
    { store: 'Amazon', discount: 'Up to 80% OFF', desc: 'Great Republic Day Sale extended – electronics, fashion, home & more', gradient: 'linear-gradient(135deg, #FF9900, #e65100)' },
    { store: 'Flipkart', discount: 'Up to 85% OFF', desc: 'Big Saving Days – smartphones, laptops, appliances at lowest prices', gradient: 'linear-gradient(135deg, #2874F0, #1565c0)' },
    { store: 'Myntra', discount: 'Flat 50-90% OFF', desc: 'March Mania Sale – top brands in fashion, beauty & accessories', gradient: 'linear-gradient(135deg, #FF3F6C, #d81b60)' },
    { store: 'MakeMyTrip', discount: 'Up to ₹5000 OFF', desc: 'Travel the World Sale – flights, hotels, and holiday packages', gradient: 'linear-gradient(135deg, #0077b6, #023e8a)' },
    { store: 'Swiggy', discount: 'Flat 60% OFF', desc: 'March food festival – order from top restaurants at huge discounts', gradient: 'linear-gradient(135deg, #FC8019, #e65100)' },
    { store: 'Nykaa', discount: 'Up to 50% OFF', desc: 'Spring Beauty Sale – skincare, makeup & wellness products', gradient: 'linear-gradient(135deg, #FC2779, #c2185b)' },
    { store: 'AJIO', discount: 'Min 40% OFF', desc: 'All Stars Sale – premium brands at never-before prices', gradient: 'linear-gradient(135deg, #111, #333)' },
    { store: 'Croma', discount: 'Up to 70% OFF', desc: 'Electronics Carnival – TVs, laptops, headphones, smartwatches', gradient: 'linear-gradient(135deg, #00A550, #007e3a)' },
    { store: 'Udemy', discount: 'Courses from ₹399', desc: 'Spring Learning Festival – upskill with top-rated courses', gradient: 'linear-gradient(135deg, #A435F0, #7c1ed6)' },
];

const saleCategories = [
    '🛍️ Fashion', '📱 Electronics', '✈️ Travel', '🍕 Food', '💄 Beauty',
    '🏠 Home & Kitchen', '📚 Education', '🎬 Entertainment', '💪 Fitness', '🎮 Gaming',
];

export default function MarchSalesPage() {
    return (
        <div className={styles.page}>
            <div className={styles.inner}>
                {/* Hero */}
                <div className={styles.hero}>
                    <div className={styles.heroTag}>🔥 LIMITED TIME</div>
                    <h1 className={styles.heroTitle}>March Sales 2026</h1>
                    <p className={styles.heroSub}>
                        The biggest sales of March are here! Save up to 90% across 3,500+ stores with verified coupons & exclusive deals.
                    </p>
                    <div className={styles.countdownGrid}>
                        <div className={styles.countdownItem}>
                            <div className={styles.countdownValue}>21</div>
                            <div className={styles.countdownLabel}>Days</div>
                        </div>
                        <div className={styles.countdownItem}>
                            <div className={styles.countdownValue}>14</div>
                            <div className={styles.countdownLabel}>Hours</div>
                        </div>
                        <div className={styles.countdownItem}>
                            <div className={styles.countdownValue}>32</div>
                            <div className={styles.countdownLabel}>Minutes</div>
                        </div>
                        <div className={styles.countdownItem}>
                            <div className={styles.countdownValue}>08</div>
                            <div className={styles.countdownLabel}>Seconds</div>
                        </div>
                    </div>
                </div>

                {/* Sale Categories */}
                <section className={styles.section}>
                    <h2 className="section-title" style={{ textAlign: 'center', display: 'block' }}>Shop by Category</h2>
                    <div className={styles.catTags}>
                        {saleCategories.map((cat, i) => (
                            <Link key={i} href="/categories" className={styles.catTag}>{cat}</Link>
                        ))}
                    </div>
                </section>

                {/* Top March Deals */}
                <section className={styles.section}>
                    <h2 className="section-title">Top March Deals</h2>
                    <div className={styles.dealsGrid}>
                        {marchDeals.map((deal, i) => (
                            <div key={i} className={styles.dealCard}>
                                <div className={styles.dealBanner} style={{ background: deal.gradient }}>
                                    <div className={styles.dealDiscount}>{deal.discount}</div>
                                    <div className={styles.dealLabel}>March Sale</div>
                                </div>
                                <div className={styles.dealBody}>
                                    <div className={styles.dealStore}>{deal.store}</div>
                                    <div className={styles.dealDesc}>{deal.desc}</div>
                                    <button className={styles.dealBtn}>🔓 GRAB DEAL</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
