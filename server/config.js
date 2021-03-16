/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  // {
  //   type: 1,
  //   count: 2,
  //   text: "特等奖",
  //   title: "神秘大礼",
  //   img: "../img/secrit.jpg"
  // },
  {
    type: 1,
    count: 2,
    text: "First Prize: ",
    title: "MI Projector",
    img: "../img/01.png"
  },
  {
    type: 2,
    count: 4,
    text: "Second Prize: ",
    title: "Multi-function Electric Pot",
    img: "../img/02.png"
  },
  {
    type: 3,
    count: 6,
    text: "Third Prize: ",
    title: "Food Processor",
    img: "../img/03.png"
  },
  {
    type: 4,
    count: 1,
    text: "Fourth Prize: ",
    title: "Dior Perfume & Lipstick",
    img: "../img/05.png"
  },
  {
    type: 5,
    count: 20,
    text: "Fourth Prize: ",
    title: "Oral Irrigator",
    img: "../img/04.png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 2, 3, 1, 5];
// const EACH_COUNT = [1, 2, 4, 6, 1, 20];

/**
 * 卡片公司名称标识
 */
const COMPANY = "Alliance";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
