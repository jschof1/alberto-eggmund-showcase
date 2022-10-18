import React, { useState, useEffect } from "react";
import airtableJson from "airtable-json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import * as dotenv from 'dotenv'
dotenv.config()

process.env.AIRTABLE_API_KEY
process.env.BASE_NAME
process.env.PRIMARY_NAME

export default function LargeAnimation({ title, embed }) {
  const [animations, setAnimations] = useState([]);

  // console.log(animations);

  useEffect(() => {
    const airtable = async () => {
      const animations = await airtableJson({
        auth_key: process.env.AIRTABLE_API_KEY,
        base_name: process.env.BASE_NAME,
        primary: process.env.PRIMARY_NAME,
        view: "Grid view",
      });

      const removeExcluded = animations.filter(
        (obj) => obj.exclude !== "EXCLUDE"
      );

      console.log(removeExcluded);

      setAnimations(removeExcluded);
    };
    airtable();
  }, []);

  useEffect(() => {
    if (!!animations) {
    }
  }, [animations]);

  return (
    
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {animations.map((a, i) => (
          <SwiperSlide
            className="align-content"
            key={i}
            id={a.Title.replace(" ", "-")}
          >
            <iframe
              src={a.Embed}
              width={900}
              height={800}
              key={i}
            />
            {/* <h3 className="m-1 text-center head">{a.Title}</h3>
            <p className="desc"></p> */}
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
