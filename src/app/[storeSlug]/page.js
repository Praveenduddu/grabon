import Link from 'next/link';
import stores from '@/data/stores.json';
import coupons from '@/data/coupons.json';
import styles from './store.module.css';

export function generateStaticParams() {
    return stores.map((store) => ({
        storeSlug: store.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { storeSlug } = await params;
    const store = stores.find(s => s.slug === storeSlug);
    if (!store) return { title: 'Store Not Found | GrabOn' };
    return {
        title: `${store.name} Coupons & Promo Codes | GrabOn`,
        description: `Find the latest ${store.name} coupons, promo codes and deals. ${store.coupons} verified offers available today.`,
    };
}

export default async function StoreDetailPage({ params }) {
    const { storeSlug } = await params;
    const store = stores.find(s => s.slug === storeSlug);
    if (!store) {
        return (
            <div className={styles.page}>
                <div className={styles.inner}>
                    <div className={styles.notFound}>
                        <h1>Store Not Found</h1>
                        <p>Sorry, we couldn&apos;t find that store.</p>
                        <Link href="/stores" className="btn btn-primary">Browse All Stores</Link>
                    </div>
                </div>
            </div>
        );
    }

    const storeCoupons = coupons.filter(c => c.storeSlug === store.slug);
    const allCoupons = storeCoupons.length > 0 ? storeCoupons : coupons.slice(0, 8);
    const tabs = ['All', 'Electronics', 'Fashion', 'Deals Of the Day'];

    return (
        <div className={styles.page}>
            <div className={styles.inner}>
                {/* Store Header */}
                <div className={styles.storeHeader} style={{ '--store-color': store.color }}>
                    <div className={styles.storeLogoWrap}>
                        <span className={styles.storeLogo}>{store.logo}</span>
                    </div>
                    <div className={styles.storeInfo}>
                        <h1 className={styles.storeName}>{store.name} Coupons & Promo Codes</h1>
                        <div className={styles.storeMeta}>
                            <span className={styles.storeMetaItem}>
                                <strong>{store.coupons}</strong> Coupons & Offers
                            </span>
                            <span className={styles.storeMetaItem}>
                                <span className={styles.verifiedDot}></span> Verified
                            </span>
                            <span className={styles.storeMetaItem}>⭐ 4/5 (1,766 Votes)</span>
                        </div>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className={styles.breadcrumb}>
                    <Link href="/">Home</Link> / <Link href="/stores">Stores</Link> / <span>{store.name}</span>
                </div>

                {/* Tabs */}
                <div className={styles.tabs}>
                    {tabs.map((tab, i) => (
                        <button key={tab} className={`${styles.tab} ${i === 0 ? styles.tabActive : ''}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Coupon List */}
                <div className={styles.couponList}>
                    {allCoupons.map((coupon) => (
                        <div key={coupon.id} className={styles.couponCard}>
                            <div className={styles.couponLeft}>
                                <div className={styles.couponDiscount}>{coupon.discount}</div>
                            </div>
                            <div className={styles.couponCenter}>
                                {coupon.tag && <span className={styles.couponTag}>{coupon.tag}</span>}
                                <div className={styles.couponTitle}>{coupon.title}</div>
                                <div className={styles.couponDesc}>{coupon.description}</div>
                                <div className={styles.couponMeta}>
                                    {coupon.verified && (
                                        <span className={styles.verified}>
                                            <span className={styles.verifiedIcon}>✓</span> Verified
                                        </span>
                                    )}
                                    <span className={styles.uses}>{coupon.uses} uses today</span>
                                    {coupon.comments > 0 && (
                                        <span className={styles.comments}>💬 {coupon.comments}</span>
                                    )}
                                </div>
                                {coupon.expiry !== 'Ongoing' && (
                                    <div className={styles.expiry}>Valid till {coupon.expiry}</div>
                                )}
                            </div>
                            <div className={styles.couponRight}>
                                <button
                                    className={`${styles.actionBtn} ${coupon.type === 'code' ? styles.actionBtnCode : styles.actionBtnOffer}`}
                                >
                                    {coupon.type === 'code' ? '🎫 SHOW CODE' : '🔓 ACTIVATE OFFER'}
                                </button>
                                {coupon.type === 'code' && (
                                    <div className={styles.codeHint}>Code available</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Similar Stores */}
                <section className={styles.similar}>
                    <h2 className="section-title">Coupons from Similar Stores</h2>
                    <div className={styles.similarGrid}>
                        {stores.filter(s => s.category === store.category && s.id !== store.id).slice(0, 6).map((s) => (
                            <Link key={s.id} href={`/${s.slug}`} className={styles.similarCard}>
                                <span className={styles.similarLogo}>{s.logo}</span>
                                <div className={styles.similarName}>{s.name}</div>
                                <div className={styles.similarCount}>{s.coupons} Coupons</div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
