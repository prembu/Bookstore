import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

function Freebook() {
    const filterData = list.filter( (data) => data.category==="Free");
    console.log(filterData);

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
  <>
    <div className=" 300 h-96 pt-0">
      <h1 className="pt-10 pl-5 font-bold  text-2xl ">Free offered Courses</h1>
    <p className=" pt-2 pl-5 text-xl">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been s 
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item) =>(
          <Cards item={item} key={item.id}/>
        ))

        }
      </Slider>
    </div>
  </>
  )
}

export default Freebook