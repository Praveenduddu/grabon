'use client';
import { useState } from 'react';
import styles from './submit-coupon.module.css';

export default function SubmitCouponPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className={styles.page}>
            <div className={styles.inner}>
                <div className={styles.hero}>
                    <div className={styles.heroTag}>🎫 COMMUNITY</div>
                    <h1 className={styles.heroTitle}>Submit a Coupon</h1>
                    <p className={styles.heroSub}>
                        Know a coupon or deal that&apos;s not on GrabOn? Share it with millions of shoppers and help everyone save!
                    </p>
                </div>

                <div className={styles.layout}>
                    <div className={styles.formCard}>
                        {submitted ? (
                            <div className={styles.success}>
                                <div className={styles.successIcon}>✅</div>
                                <h2 className={styles.successTitle}>Thank You!</h2>
                                <p className={styles.successDesc}>Your coupon has been submitted for review. We&apos;ll verify and publish it within 24 hours.</p>
                                <button className={styles.submitBtn} onClick={() => setSubmitted(false)}>Submit Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h2 className={styles.formTitle}>Coupon Details</h2>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Store / Brand Name *</label>
                                    <input type="text" className={styles.input} placeholder="e.g. Amazon, Flipkart, Myntra" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Coupon Type *</label>
                                    <div className={styles.radioGroup}>
                                        <label className={styles.radioLabel}>
                                            <input type="radio" name="type" value="code" defaultChecked /> Coupon Code
                                        </label>
                                        <label className={styles.radioLabel}>
                                            <input type="radio" name="type" value="deal" /> Deal / Offer
                                        </label>
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Coupon Code</label>
                                    <input type="text" className={styles.input} placeholder="e.g. SAVE20, FLAT500" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Offer Title *</label>
                                    <input type="text" className={styles.input} placeholder="e.g. Flat 50% OFF on Electronics" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Description</label>
                                    <textarea className={styles.textarea} rows="3" placeholder="Provide details about the offer, terms & conditions, etc."></textarea>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Discount Value</label>
                                        <input type="text" className={styles.input} placeholder="e.g. 50% or ₹500" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Expiry Date</label>
                                        <input type="date" className={styles.input} />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Store URL</label>
                                    <input type="url" className={styles.input} placeholder="https://www.example.com" />
                                </div>

                                <button type="submit" className={styles.submitBtn}>Submit Coupon</button>
                            </form>
                        )}
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.guideCard}>
                            <h3 className={styles.guideTitle}>📋 Submission Guidelines</h3>
                            <ul className={styles.guideList}>
                                <li>Ensure the coupon is currently active</li>
                                <li>Provide accurate store name and details</li>
                                <li>Include the exact coupon code if applicable</li>
                                <li>Add expiry date if known</li>
                                <li>Do not submit duplicate coupons</li>
                            </ul>
                        </div>
                        <div className={styles.statsCard}>
                            <div className={styles.statsItem}>
                                <div className={styles.statsValue}>52,695</div>
                                <div className={styles.statsLabel}>Active Coupons</div>
                            </div>
                            <div className={styles.statsItem}>
                                <div className={styles.statsValue}>3,850</div>
                                <div className={styles.statsLabel}>Stores</div>
                            </div>
                            <div className={styles.statsItem}>
                                <div className={styles.statsValue}>2.5M+</div>
                                <div className={styles.statsLabel}>Users Helped</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
