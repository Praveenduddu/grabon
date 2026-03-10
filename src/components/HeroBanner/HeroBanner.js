'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from './HeroBanner.module.css';

const slides = [
    {
        tag: 'IRCTC PARTNER',
        title: 'Flat ₹100 OFF',
        discount: '₹100*',
        sub: 'on first train booking',
        gradient: 'linear-gradient(135deg, #e53935 0%, #c62828 100%)',
        cta: 'BOOK NOW',
    },
    {
        tag: 'EXCLUSIVE DEAL',
        title: 'Web Hosting',
        discount: '75% OFF',
        sub: 'Premium hosting + free domain + SSL',
        gradient: 'linear-gradient(135deg, #673DE6 0%,#4a00e0 100%)',
        cta: 'GET STARTED',
    },
    {
        tag: 'MEGA SALE',
        title: 'Electronics & Fashion',
        discount: 'Up to 90% OFF',
        sub: 'Deals on smartphones, laptops, clothing & more',
        gradient: 'linear-gradient(135deg, #2874F0 0%, #1565c0 100%)',
        cta: 'SHOP NOW',
    },
    {
        tag: 'FOOD DEALS',
        title: 'Order Delicious Food',
        discount: '60% OFF',
        sub: 'First order discounts on top restaurants',
        gradient: 'linear-gradient(135deg, #FC8019 0%, #e65100 100%)',
        cta: 'ORDER NOW',
    },
    {
        tag: 'TRAVEL SAVINGS',
        title: 'Flight & Hotel Bookings',
        discount: '₹3,000 OFF',
        sub: 'Domestic & international travel deals',
        gradient: 'linear-gradient(135deg, #00897b 0%, #004d40 100%)',
        cta: 'EXPLORE DEALS',
    },
];

const sideCards = [
    { store: '🚗', title: 'Exclusive Offer: Flat 50% OFF On Your First 3 Rides', cta: 'GRAB NOW' },
    { store: '📚', title: 'Save Up to 97% on Best-Selling Online Courses!', cta: 'LEARN NOW' },
];

export default function HeroBanner() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % slides.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((c) => (c - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 4500);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className={styles.hero}>
            <div className={styles.heroInner}>
                {/* Main Carousel */}
                <div className={styles.carousel}>
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
                            style={{ background: slide.gradient }}
                        >
                            <div className={styles.slideContent}>
                                <div className={styles.slideTag}>{slide.tag}</div>
                                <div className={styles.slideTitle}>{slide.title}</div>
                                <div className={styles.slideDiscount}>{slide.discount}</div>
                                <div className={styles.slideSub}>{slide.sub}</div>
                                <button className={styles.slideBtn}>{slide.cta}</button>
                            </div>
                        </div>
                    ))}

                    <button className={`${styles.carouselArrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous slide">
                        ‹
                    </button>
                    <button className={`${styles.carouselArrow} ${styles.arrowRight}`} onClick={next} aria-label="Next slide">
                        ›
                    </button>

                    <div className={styles.dots}>
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Side Panel */}
                <div className={styles.sidePanel}>
                    {sideCards.map((card, i) => (
                        <div key={i} className={styles.sideCard}>
                            <div>
                                <div className={styles.sideCardStore}>{card.store}</div>
                                <div className={styles.sideCardTitle}>{card.title}</div>
                            </div>
                            <button className={styles.sideCardBtn}>
                                {card.cta} <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Marketplace Tag */}
            <div className={styles.marketplaceTag}>
                <div className={styles.marketplaceTagInner}>
                    India&apos;s Leading Coupons &amp; Deals Marketplace
                </div>
            </div>
        </section>
    );
}
