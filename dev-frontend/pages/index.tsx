import Navbar from '../components/navbar.tsx';
import Carousel from '../components/carousel.tsx';
import Card from '../components/card.tsx';
import Footer from '../components/footer.tsx';
export default function Home() {
  return (
    <>
   <Navbar />
   <Card title="hello this is a test" text="This is some text" imgSrc="https://placehold.jp/150x150.png" />
    </>
  );
}
