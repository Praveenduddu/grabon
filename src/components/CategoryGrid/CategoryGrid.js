import Link from 'next/link';
import categories from '@/data/categories.json';
import styles from './CategoryGrid.module.css';

export default function CategoryGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <h2 className="section-title" style={{ textAlign: 'center', display: 'block' }}>Popular Categories</h2>
                <div className={styles.grid}>
                    {categories.map((cat) => (
                        <Link key={cat.id} href={`/categories`} className={styles.catTag}>
                            <span className={styles.catIcon}>{cat.icon}</span>
                            {cat.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
