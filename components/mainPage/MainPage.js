import CarouselPage from "../ImageCarousel/carouselPage";
import CardPage from "../Card/cardPage";

export default function MainPage() {
  return (
    <section className="min-h-screen shadow-inner ">
      <CarouselPage />

      {/* <div>Hello</div> */}
      <div className="w-full ">
        <h1 className="font-sans ml-5 text-2xl mt-5 font-semibold">
          Products for you!
        </h1>
        <CardPage />
      </div>
    </section>
  );
}
