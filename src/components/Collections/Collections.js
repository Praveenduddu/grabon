import styles from './Collections.module.css';

const collections = [
    { label: 'HOSTING COUPONS', title: 'Hostinger Coupons', gradient: 'linear-gradient(135deg, #673DE6, #4a00e0)' },
    { label: 'TRAVEL COUPONS', title: 'Savaari Coupons', gradient: 'linear-gradient(135deg, #e53935, #c62828)' },
    { label: 'RIDE COUPONS', title: 'Uber Coupons', gradient: 'linear-gradient(135deg, #111, #333)' },
    { label: 'TRAIN COUPONS', title: 'Redrail Coupons', gradient: 'linear-gradient(135deg, #0277bd, #01579b)' },
    { label: 'FOOD COUPONS', title: 'Swiggy Coupons', gradient: 'linear-gradient(135deg, #FC8019, #e65100)' },
    { label: 'FASHION COUPONS', title: 'Myntra Coupons', gradient: 'linear-gradient(135deg, #FF3F6C, #d81b60)' },
];

export default function Collections() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <h2 className="section-title">GrabOn Collections</h2>
                <div className={styles.scrollWrap}>
                    {collections.map((c, i) => (
                        <div key={i} className={styles.card} style={{ background: c.gradient }}>
                            <div className={styles.cardLabel}>{c.label}</div>
                            <div className={styles.cardTitle}>{c.title}</div>
                            <div className={styles.cardArrow}>→</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
