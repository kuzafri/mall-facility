import useNavigate from "hooks/useNavigate";
import React from "react";

const ItemList = () => {
  const { goTo } = useNavigate();

  return (
    <>
      {" "}
      {[...Array(4)].map((_, index) => (
        <div
          key={`item-${index}`}
          className="bg-white m-[1rem] rounded-lg p-5 border border-[#ffeeee] shadow-lg shadow-light"
          onClick={() => goTo("/complaindetails", "forward")}
        >
          <div className="grid grid-cols-2 grid-row-1 text-black">
            <div className="grid grid-cols-1 grid-row-2 text-sm">
              <div className="font-bold mt-2">Complaint #7324</div>
              <div>
                <span>Status : Pending</span>
              </div>
              <div>
                <span>12/06/2022</span>
              </div>
            </div>
            <div className="grid items-right my-auto text-sm ">
              <div className="absolute float-right my-auto">
                <i className="fa-solid fa-chevron-right absolute text-black"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
