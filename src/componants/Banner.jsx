import image from "../assets/image.png";
function banner() {
  return (
    <>
      {/* <div className=" max-w-screen-2xl gap-20 container max-auto md:px-20 pl-12 px-4 flex flex-col md:flex-row">
        <div className=" w- bg-slate-400">
          <div className="space-y-12 ">
            <h1 className="font-bold text-4xl">  
              {" "}
              Hello, welcome here to learn something{" "}
              <span className="text-pink-400">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              quos molestiae necessitatibus quae! Nihil soluta assumenda
              consequuntur.{" "}
            </p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-error w-full max-w-2xl"
            />
            <div className="">
              <button className="btn btn-outline  btn-secondary">
                Secondary
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-black">
         {/* <img src={image} alt="" className=" sm:w-[100px] :h-[120px] md:pt-16 w-[680px] h-[600px] "/> */}
      {/* </div>
       
      </div> */}

      <div className=" w-full h-[1200px] md:h-[600px]  flex flex-col md:flex-row  ">
        <div className="w-full pt-12 md:pt-32 bg-slate-400 md:pl-24 pl-12 pr-10 order-2 md:order-1 md:w-1/2 h-[600px]   ">
          <div className="space-y-12 ">
            <h1 className="font-bold text-4xl">
              {" "}
              Hello, welcome here to learn something{" "}
              <span className="text-pink-400">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              quos molestiae necessitatibus quae! Nihil soluta assumenda
              consequuntur.{" "}
            </p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-error w-full max-w-2xl"
            />
            <div className=" pt-0">
              <button className="btn btn-outline pt-2 btn-secondary">
                Secondary
              </button>
            </div>
          </div>
        </div>
        <div className="w-full order-1 pt-16 bg-black  md:pt-12 md:pl-12 md:w-1/2 h-[600px]">
        <img src={image} alt="" className=" w-[600px] h-[480px] md:w-[600px] md:h-[600px] md:pl-20 md:pt-12 "/></div>
      </div>
    </>
  );
}

export default banner;
