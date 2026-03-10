'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.headerTop}>
        <div className={styles.headerTopInner}>
          {/* Logo */}
          <Link href="/" className={styles.headerLogo}>
            <div>
              <div className={styles.headerLogoText}>GrabOn</div>
              <div className={styles.headerLogoTagline}>Save On Everything</div>
            </div>
          </Link>

          {/* Search */}
          <div className={styles.headerSearch}>
            <span className={styles.headerSearchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Search for brands, categories"
              aria-label="Search for brands and categories"
            />
          </div>

          {/* Right Actions */}
          <div className={styles.headerActions}>
            <div className={styles.regionSelector}>
              <span className={styles.regionFlag}>🇮🇳</span>
              <span>IN</span>
              <span>▾</span>
            </div>

            <button className={styles.notificationBell} aria-label="Notifications">
              🔔
              <span className={styles.notificationDot}></span>
            </button>

            <button className={styles.loginBtn}>Log In / Sign Up</button>

            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className={styles.headerNav}>
        <div className={styles.headerNavInner}>
          <div className={styles.navLinks}>
            <Link href="/stores" className={styles.navLink}>Stores</Link>
            <Link href="/categories" className={styles.navLink}>Categories</Link>
            <Link href="/march-sales" className={`${styles.navLink} ${styles.navLinkBadge}`}>
              March Sales
              <span className={styles.navBadge}>New</span>
            </Link>
            <Link href="/indulge" className={styles.navLink}>Indulge</Link>
          </div>

          <div className={styles.navRight}>
            <Link href="/" className={styles.navLink}>Submit Coupon</Link>
            <Link href="/deals" className={styles.navLink}>Deals Of The Day</Link>
            <Link href="/" className={styles.navSeasonalBtn}>Seasonal Offers</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${mobileOpen ? styles.open : ''}`}>
        <Link href="/stores" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Stores</Link>
        <Link href="/categories" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Categories</Link>
        <Link href="/march-sales" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>March Sales</Link>
        <Link href="/indulge" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Indulge</Link>
        <Link href="/deals" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Deals Of The Day</Link>
        <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>Submit Coupon</Link>
      </div>
    </header>
  );
}
