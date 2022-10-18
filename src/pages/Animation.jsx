import React, { useState, useEffect } from 'react';
import SmallAnimation from './SmallAnimation';
import airtableJson from 'airtable-json';
import * as dotenv from 'dotenv'
dotenv.config()

process.env.AIRTABLE_API_KEY
process.env.BASE_NAME
process.env.PRIMARY_NAME

import seeAll from '../static/see-all.gif';

function Animation() {
  const [animations, setAnimations] = useState([]);

  useEffect(() => {
    const airtable = async () => {
      const animations = await airtableJson({
        auth_key: 'keyCDhBnEvApVz4Z6',
        base_name: 'app6L8ES4FTPA0CWc',
        primary: 'tblFrCMA252fNNgpv',
        view: 'Grid view'
      });

      const removeExcluded = animations.filter(
        (obj) => obj.exclude !== 'EXCLUDE'
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
    <>
      <div class="flex flex-col">
        <div class="item w-auto h-auto text-center text-lg">SOME EDITABLE TEXT SOME EDITABLE TEXT SOME EDITABLE TEXT SOME EDITABLE TEXT SOME EDITABLE TEXT SOME EDITABLE TEXT SOME EDITABLE TEXT SOME EDITABLE TEXT </div>
        <div class="item"><img class="mx-auto h-20" src={seeAll} alt="see-all" /></div>
      </div>
      <div id="giflist" className="clearfix">
        <div className="flex flex-wrap overflow-hidden sm:-mx-3">
          {animations.map((a, i) => (
            <SmallAnimation
              title={a.Title}
              animations={animations}
              still={a.Still[0].url}
              gifs={a.Gifs[0].url}
              index={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Animation;
