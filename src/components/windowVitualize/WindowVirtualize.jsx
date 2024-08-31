import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./windowvirtualize.scss";


let bibleBooks = [
  "#1 - Genesis",

  " #2 - Exodus",

  " #3 - Leviticus",

  "#4 - Numbers",

  " #5 - Deuteronomy",

  "  #6 - Joshua",

  " #7 - Judges.",

  " #8 - Ruth",

  " #9 - 1 Samuel",

  "  #10 - 2 Samuel",

  "#11 - 1 Kings",

  "#12 - 2 Kings",

  " #13 - 1 Chronicles",

  "#14 - 2 Chronicles",

  " #15 - Ezra",

  " #16 - Nehemiah",

  "#17 - Esther",

  " #18 - Job",

  " #19 - Psalms",

  "   #20 - Proverbs",

  "#21 - Ecclesiastes",

  "#22 - Song of Solomon",

  "   #23 - Isaiah",

  " #24 - Jeremiah",

  "#25 - Lamentations",

  "   #26 - Ezekiel",

  "#27 - Daniel",

  "   #28 - Hosea",
  "    #29 - Joel",

  "#30 - Amos",

  "#31 - Obadiah",

  "#32 - Jonah",
  "#33 - Micah",

  "#34 - Nahum",
  "#35 - Habakkuk",
  "#36 - Zephaniah",

  "#37 - Haggai",

  "#38 - Zechariah",
  "#39 - Malachi",
];

const Row = ({ index, style }) => {
  return(
<div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    {/* Row {index} */}
    {bibleBooks[index] }
  </div>
  )

}



const WindowVirtualize = () => {
 console.count('WindowVisualize render: ');

  return (<AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        height={250}
        itemCount={bibleBooks.length}
        itemSize={35  }
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
)};

export default React.memo(WindowVirtualize);
