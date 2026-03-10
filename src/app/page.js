import HeroBanner from '@/components/HeroBanner/HeroBanner';
import PopularOffers from '@/components/PopularOffers/PopularOffers';
import PopularStores from '@/components/PopularStores/PopularStores';
import TopCoupons from '@/components/TopCoupons/TopCoupons';
import DealsOfDay from '@/components/DealsOfDay/DealsOfDay';
import Collections from '@/components/Collections/Collections';
import Newsletter from '@/components/Newsletter/Newsletter';
import CategoryGrid from '@/components/CategoryGrid/CategoryGrid';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <PopularOffers />
      <PopularStores />
      <TopCoupons />
      <DealsOfDay />
      <Collections />
      <Newsletter />
      <CategoryGrid />
    </>
  );
}
