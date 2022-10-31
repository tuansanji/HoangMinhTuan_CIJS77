import ShowSong from "./songs.js";
import emla from "../songs/emla.mp3";
import waiting from "../songs/TaiNhacHay.Biz - Waiting For You.mp3";
import changtrai from "../songs/TaiNhacMienPhi.Net - Chàng Trai Với Nụ Cười Tỏa Nắng.mp3";
import changtraicay from "../songs/TaiNhacMienPhi.Net - Chàng Trai Với Nụ Cười Tỏa Nắng.mp3";
import aichungtinh from "../songs/TaiNhacMienPhi.Net - Ai Chung Tình Được Mãi (Cover).mp3";
import emlatianang from "../songs/emla.mp3";
import cosao from "../songs/TaiNhacMienPhi.Net - Cớ Sao.mp3";
import cuoctinh from "../songs/TaiNhacMienPhi.Net - Cuộc Tình Trong Cơn Mưa (Version 2022).mp3";
import motngannoidau from "../songs/TaiNhacMienPhi.Net - Một Ngàn Nỗi Đau.mp3";

export const Album = [
  {
    name: "With You",
    singer: " Gabry Ponte, JP Cooper",
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/a/6/d/f/a6dfae74cebe671e7469dd027a900d0e.jpg",
    path: emla,
    timeline: "1 ngày trước",
  },
  {
    name: "Nỗi Nhớ Khi Xưa",
    singer: "Kha",
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/d/0/0/4d00828fa8153ec0c4f23cd8aa28b45c.jpg",
    path: waiting,
    timeline: "1 ngày trước",
  },
  {
    name: "Monotonia",
    singer: " Shakira, Ozuna",
    path: changtrai,
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/f/d/f/8fdf91076331c0a1a9c3664d066d2ae1.jpg",
    timeline: "1 ngày trước",
  },
  {
    name: "WDIA (Would Do It Again)",
    singer: " Rosa Linn, Duncan Laurence",
    image:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/4/f/0/c4f04f545e0ddb787233dcff5ec1bac0.jpg",
    path: changtraicay,
    timeline: "1 ngày trước",
  },
  {
    name: "Quên anh đi",
    singer: "Raftaar x Fortnite",
    path: emlatianang,
    timeline: "10 ngày trước",
    image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg",
  },
  {
    name: "Waiting For You",
    singer: "Raftaar x Salim Merchant x Karma",
    path: waiting,
    timeline: "1 ngày trước",
    image:
      "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg",
  },

  {
    name: "Naachne Ka Shaunq",
    singer: "Raftaar x Brobha V",
    path: aichungtinh,
    timeline: "4 ngày trước",
    image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
  },
  {
    name: "Mantoiyat",
    singer: "Raftaar x Nawazuddin Siddiqui",
    path: changtraicay,
    timeline: "1 ngày trước",
    image:
      "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg",
  },

  {
    name: "Aage Chal",
    singer: "Raftaar",
    path: cosao,
    timeline: "1 ngày trước",
    image:
      "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg",
  },

  {
    name: "Damn",
    singer: "Raftaar x kr$na",
    path: motngannoidau,
    timeline: "2 ngày trước",
    image: "https://fandom.vn/wp-content/uploads/2019/04/one-piece-sanji-1.jpg",
  },
  {
    name: "Feeling You",
    singer: "Raftaar x Harjas",
    path: cuoctinh,
    timeline: "1 ngày trước",
    image:
      "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp",
  },
];

function ListSong() {
  return (
    <div>
      <ul className="card">
        {Album.map((item, index) => (
          <ShowSong
            key={index}
            name={item.name}
            singer={item.singer}
            image={item.image}
            timeline={item.timeline}
          ></ShowSong>
        ))}
      </ul>
    </div>
  );
}

export default ListSong;
