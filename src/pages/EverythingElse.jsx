import React, { useState, useEffect } from 'react';
import SmallEverythingElse from './SmallEverythingElse';
import airtableJson from 'airtable-json';
import * as dotenv from 'dotenv'
dotenv.config()

process.env.AIRTABLE_API_KEY
process.env.BASE_NAME
process.env.PRIMARY_NAME

function EverythingElse() {
  const [ everythingElse, setEverythingElse ] = useState([]);

  useEffect(() => {
    const airtable = async () => {
      const everythingElse = await airtableJson({
        auth_key: process.env.AIRTABLE_API_KEY,
        base_name: process.env.BASE_NAME,
        primary: process.env.PRIMARY_NAME,
        view: 'Grid view',
      });

      const removeExcluded = everythingElse.filter(
        (obj) => obj.exclude !== 'EXCLUDE'
      );

      setEverythingElse(removeExcluded);
    };
    airtable();
  }, []);

  useEffect(() => {
    if (!!everythingElse) {
    }
  }, [everythingElse]);

  return (
    <>
      <div id="giflist" className="clearfix">
        <div className="flex flex-wrap overflow-hidden sm:-mx-3">
          {everythingElse.map((a, i) => (
            <SmallEverythingElse 
              key={i}
              title={a.Title}
              attachments={a.Attachments[0].url}
              index={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default EverythingElse;
