import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                {/* Top - Logo & Social */}
                <div className={styles.footerTop}>
                    <div>
                        <div className={styles.footerLogo}>GrabOn</div>
                        <div className={styles.footerTagline}>Striving towards making the world a better place to shop with great savings! ;)</div>
                    </div>
                    <div className={styles.socialLinks}>
                        <span className={styles.socialLink} title="LinkedIn">in</span>
                        <span className={styles.socialLink} title="YouTube">▶</span>
                        <span className={styles.socialLink} title="Instagram">📷</span>
                        <span className={styles.socialLink} title="Twitter">𝕏</span>
                        <span className={styles.socialLink} title="Facebook">f</span>
                        <span className={styles.socialLink} title="Pinterest">P</span>
                        <span className={styles.socialLink} title="Telegram">✈</span>
                    </div>
                </div>

                {/* Columns */}
                <div className={styles.footerColumns}>
                    <div className={styles.footerColumn}>
                        <h4>Company</h4>
                        <Link href="/">About Us</Link>
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms of Use</Link>
                        <Link href="/">Branding</Link>
                        <Link href="/">Careers</Link>
                        <Link href="/">Partner With Us</Link>
                        <Link href="/">Sitemap</Link>
                        <Link href="/">Feedback</Link>
                    </div>
                    <div className={styles.footerColumn}>
                        <h4>Specialty Pages</h4>
                        <Link href="/">AI Tools</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Mobile Apps</Link>
                        <Link href="/deals">Product Deals</Link>
                        <Link href="/">Charities</Link>
                        <Link href="/">Gift Cards</Link>
                    </div>
                    <div className={styles.footerColumn}>
                        <h4>More</h4>
                        <Link href="/">City Offers</Link>
                        <Link href="/">Brand Offers</Link>
                        <Link href="/">Bank Offers</Link>
                        <Link href="/">Festival Offers</Link>
                    </div>
                    <div className={styles.footerColumn}>
                        <h4>Contact Us</h4>
                        <a href="mailto:contact@grabon.in">contact@grabon.in</a>
                        <a href="tel:+917997443334">+91-7997443334</a>
                        <a href="/">GrabOn Inspirelabs Solutions Ltd, Hyderabad, TG</a>
                        <Link href="/">Contact Page</Link>
                    </div>
                </div>

                {/* Bottom */}
                <div className={styles.footerBottom}>
                    <div className={styles.footerDisclosure}>
                        We may earn a commission if you buy through links on GrabOn. Learn More
                    </div>
                    <div className={styles.footerCopyright}>
                        © 2026 GrabOn. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
