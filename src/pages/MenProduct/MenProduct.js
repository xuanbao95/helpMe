import React from 'react'
import MenComponent from '../../components/MenComponent/MenComponent'
export default function MenProduct() {
    const titleTrending = "Trending";
    const titleMoreNike = "MoreNike";
    const carouselImg = [
      "https://static.nike.com/a/images/f_auto/dpr_2.0/w_1792,c_limit/5d61a8a7-21bd-4850-8ef7-0947c58dfc19/nike-kids.png",
      "https://static.nike.com/a/images/f_auto/dpr_1.0/w_1229,c_limit/e04d1808-9792-46ba-bcbd-3b2302a40b31/nike-by-you-custom-shoes.jpg",
    ];
    const dataTrending = [
      {
        img: "https://static.nike.com/a/images/f_auto/dpr_1.0/h_700,c_limit/3bd36415-c20f-4521-9391-f60fe8beef8c/nike-just-do-it.jpg",
        title: "LeBron 18 'Equation'",
        button: "Shop",
      },
      {
        img: "https://static.nike.com/a/images/f_auto/dpr_1.0/h_700,c_limit/16416ae4-9d79-4614-be7b-c41d8541f56b/nike-just-do-it.png",
        title: "Sisterhood of Sport Collection",
        button: "Shop",
      },
    ];
  
    const dataMoreNike = [
      {
        img: "https://static.nike.com/a/images/f_auto/dpr_2.0/w_587,c_limit/a8c6d7f6-6d2f-46af-b9bd-8be808dda1cf/nike-just-do-it.jpg",
        titleButton: "Men's",
      },
      {
        img: "https://static.nike.com/a/images/f_auto/dpr_2.0/w_587,c_limit/595336c7-94a3-4a5e-ad6d-65a1f6ae82da/nike-just-do-it.jpg",
        titleButton: "Women's",
      },
      {
        img: "https://static.nike.com/a/images/f_auto/dpr_2.0/w_587,c_limit/d0ca9b63-2a15-41eb-8c86-8d121987f715/nike-just-do-it.jpg",
        titleButton: "Kid's",
      },
    ];
  
    return (
        <div>
            <MenComponent
            carouselImg={carouselImg}
            dataTrending={dataTrending}
            dataMoreNike={dataMoreNike}
            />
        </div>
    )
}

