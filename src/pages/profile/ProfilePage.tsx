import type { FC } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const ProfilePage: FC = function ProfilePage() {
    return <section className='page'>
      <Header isAuth />
      <Footer />
  </section>
};