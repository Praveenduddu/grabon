'use client';
import styles from './Newsletter.module.css';

export default function Newsletter() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.card}>
                    <div className={styles.title}>Get The Latest &amp; Best Coupon Alerts</div>
                    <div className={styles.subtitle}>
                        Subscribe to have new coupon lists delivered directly to your inbox
                    </div>
                    <div className={styles.count}>
                        <span className={styles.countBold}>35,00,000+</span> Subscriptions Across India! &amp; Counting!
                    </div>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Enter your email address"
                            aria-label="Email address"
                        />
                        <button type="submit" className={styles.submitBtn}>Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
